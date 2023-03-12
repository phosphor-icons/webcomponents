#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { exec } = require("child_process");

const {
  ASSETS_PATH,
  COMPONENTS_PATH,
  INDEX_PATH,
  EXAMPLE_PATH,
} = require("./index.cjs");
const { ALIASES } = require("../core/bin/index.js");

const icons = {};
const weights = ["thin", "light", "regular", "bold", "fill", "duotone"];

(function main() {
  exec(
    "git submodule update --remote --init --force --recursive",
    (err, stdout, stderr) => {
      if (err) {
        console.error(`${chalk.inverse.red(" ERR ")} ${err.message}`);
        process.exit(1);
      }

      if (stderr) {
        console.error(`${chalk.inverse.red(" ERR ")} ${stderr}`);
        process.exit(1);
      }

      console.log(
        `${chalk.inverse.green(" OK ")} Updated submodule @phosphor-icons/core`
      );

      loadWeights();
      generateComponents();
      generateExports();
      generateExample();
    }
  );
})();

function readFile(pathname, name, weight) {
  const file = fs.readFileSync(pathname);
  icons[name][weight] = file
    .toString("utf-8")
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

function loadWeights() {
  const weightFolder = fs.readdirSync(ASSETS_PATH, "utf-8");

  weightFolder.forEach((weightFolder) => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, weightFolder)).isDirectory())
      return;

    if (!weights.includes(weightFolder)) {
      console.error(
        `${chalk.inverse.red(" ERR ")} Bad folder name ${weightFolder}`
      );
      process.exit(1);
    }

    const files = fs.readdirSync(path.join(ASSETS_PATH, weightFolder));
    files.forEach((filename) => {
      let name;
      const nameParts = filename.split(".svg")[0].split("-");
      if (nameParts[nameParts.length - 1] === weightFolder) {
        name = nameParts.slice(0, -1).join("-");
      } else {
        name = nameParts.join("-");
      }

      if (!icons[name]) {
        icons[name] = {};
      }
      const filepath = path.join(ASSETS_PATH, weightFolder, filename);
      readFile(filepath, name, weightFolder);
    });
  });
}

function checkFiles(icon) {
  const weightsPresent = Object.keys(icon);
  return (
    weightsPresent.length === 6 &&
    weightsPresent.every((w) => weights.includes(w))
  );
}

function generateComponents() {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmdirSync(COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(COMPONENTS_PATH);

  for (let key in icons) {
    const icon = icons[key];

    if (!checkFiles(icon)) {
      fails += 1;
      console.error(
        `${chalk.inverse.red(" FAIL ")} ${name} is missing weights`
      );
      console.group();
      console.error(weights.filter((w) => !Object.keys(icon).includes(w)));
      console.groupEnd();
      continue;
    }

    const name = pascalize(key);

    const componentString = `\
/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { IconWeight } from '../types';

@customElement('ph-${key}')
export default class Ph${name} extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg\`${icon.thin}\`],
    ["light", svg\`${icon.light}\`],
    ["regular", svg\`${icon.regular}\`],
    ["bold", svg\`${icon.bold}\`],
    ["fill", svg\`${icon.fill}\`],
    ["duotone", svg\`${icon.duotone}\`],
  ]);
  
  @property({ type: String })
  size: string | number = "1em";
  
  @property({ type: String })
  weight: IconWeight = "regular";
  
  @property({ type: String })
  color: string = "regular";
  
  @property({ type: Boolean })
  mirrored: boolean = false;
  
  render() {
    return html\`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="\${this.size}"
      height="\${this.size}"
      fill="\${this.color}"
      viewBox="0 0 256 256"
      transform=\${this.mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      \${Ph${name}.weightsMap.get(this.weight)}
    </svg>\`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-${key}": Ph${name};
  }
}
`;
    try {
      fs.writeFileSync(
        path.join(COMPONENTS_PATH, `Ph${name}.ts`),
        componentString,
        {
          flag: "w",
        }
      );
      console.log(`${chalk.inverse.green(" DONE ")} ${name}`);
      passes += 1;
    } catch (err) {
      console.error(
        `${chalk.inverse.red(" FAIL ")} ${name} could not be saved`
      );
      console.group();
      console.error(err);
      console.groupEnd();
      fails += 1;
    }
  }
  // TODO: implement logging with async writeFile()
  if (passes > 0)
    console.log(
      chalk.green(`${passes} component${passes > 1 ? "s" : ""} generated`)
    );
  if (fails > 0)
    console.log(chalk.red(`${fails} component${fails > 1 ? "s" : ""} failed`));
}

function generateExports() {
  let indexString = `\
/* GENERATED FILE */
`;
  for (let key in icons) {
    const name = pascalize(key);

    indexString += `\
export { default as Ph${name}${
      !!ALIASES[key] ? `, default as Ph${pascalize(ALIASES[key])}` : ""
    } } from "./icons/Ph${name}";
`;
  }
  try {
    fs.writeFileSync(INDEX_PATH, indexString, {
      flag: "w",
    });
    console.log(chalk.green("Export success"));
  } catch (err) {
    console.error(chalk.red("Export failed"));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

function generateExample() {
  const template = `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Phosphor Webcomponents</title>
    <script type="module" src="/src/index.ts"></script>
    <style>
      body {
        margin: 0;
        padding: 0 16px;
        font-family: monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: gainsboro;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: max-content;
      }

      .row {
        position: relative;
        display: grid;
        grid-template-columns: 1fr repeat(8, 32px);
        gap: 16px;
        align-items: center;
        font-size: 32px;
        padding: 8px 0;
      }

      .row span {
        font-size: 16px;
        justify-self: flex-end;
      }
    </style>
  </head>
  <body>
    <h1>Phosphor Webcomponents</h1>
    ${Object.keys(icons)
      .map(
        (key) => `<div class="row">
      ${[
        `<span>Ph${pascalize(key)}</span>`,
        `<ph-${key}></ph-${key}>`,
        `<ph-${key} color="crimson"></ph-${key}>`,
        `<ph-${key} color="cadetblue"></ph-${key}>`,
        `<ph-${key} weight="thin"></ph-${key}>`,
        `<ph-${key} weight="light"></ph-${key}>`,
        `<ph-${key} weight="bold"></ph-${key}>`,
        `<ph-${key} weight="fill"></ph-${key}>`,
        `<ph-${key} weight="duotone"></ph-${key}>`,
      ].join("\n")}
      </div>`
      )
      .join("\n")}
  </body>
</html>
  `;
  try {
    fs.writeFileSync(EXAMPLE_PATH, template);
    console.log(chalk.green("Example generated"));
  } catch (err) {
    console.error(chalk.red("Example failed"));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

function pascalize(str) {
  return str
    .split("-")
    .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
    .join("");
}
