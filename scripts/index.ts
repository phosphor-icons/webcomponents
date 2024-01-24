import path from "node:path";
import fs from "node:fs";
import chalk from "chalk";
import { IconStyle, icons } from "../core/src";

export const EXAMPLE_PATH = path.join(__dirname, "../index.html");
export const ASSETS_PATH = path.join(__dirname, "../core/assets");
export const COMPONENTS_PATH = path.join(__dirname, "../src/icons");
export const INDEX_PATH = path.join(__dirname, "../src/index.ts");
export const WEIGHTS = Object.values(IconStyle);

export const ALIASES = icons.reduce<Record<string, string>>((acc, curr) => {
  if ((curr as any).alias) {
    acc[curr.name] = (curr as any).alias.name;
  }
  return acc;
}, {});

export type AssetMap = Record<string, Record<IconStyle, string>>;

export function readAssetsFromDisk(): AssetMap {
  const assetsFolder = fs.readdirSync(ASSETS_PATH, "utf-8");

  const icons: AssetMap = {};

  assetsFolder.forEach((weight) => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, weight)).isDirectory()) return;

    if (!WEIGHTS.includes(weight as IconStyle)) {
      console.error(`${chalk.inverse.red(" ERR ")} Bad folder name ${weight}`);
      process.exit(1);
    }

    const files = fs.readdirSync(path.join(ASSETS_PATH, weight));
    files.forEach((filename) => {
      let name: string;
      const nameParts = filename.split(".svg")[0].split("-");
      if (nameParts[nameParts.length - 1] === weight) {
        name = nameParts.slice(0, -1).join("-");
      } else {
        name = nameParts.join("-");
      }

      if (!icons[name]) {
        // @ts-ignore
        icons[name] = {};
      }
      const filepath = path.join(ASSETS_PATH, weight, filename);
      const file = fs.readFileSync(filepath);
      icons[name][weight] = extractPaths(file.toString("utf-8"));
    });
  });

  return icons;
}

function extractPaths(content: string) {
  return content
    .replace(/^.*<\?xml.*?\>/g, "")
    .replace(/<svg.*?>/g, "")
    .replace(/<\/svg>/g, "")
    .replace(
      /<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g,
      ""
    )
    .replace(/"#0+"/g, '"${color}"')
    .replace(/"currentColor"/g, '"${color}"')
    .replace(/<title.*/, "");
}

export function verifyIcons(icons: AssetMap) {
  let fails = 0;

  Object.entries(icons).forEach(([name, icon]) => {
    const weightsPresent = Object.keys(icon);

    if (
      !(
        weightsPresent.length === 6 &&
        weightsPresent.every(
          (w) => WEIGHTS.includes(w as IconStyle) && !!icon[w]
        )
      )
    ) {
      fails++;

      console.error(
        `${chalk.inverse.red(" FAIL ")} ${name} is missing weights`
      );
      console.group();
      console.error(WEIGHTS.filter((w) => !Object.keys(icon).includes(w)));
      console.groupEnd();
    }
  });

  return fails === 0;
}
