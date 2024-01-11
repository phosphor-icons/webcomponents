#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { exec } from "child_process";

import {
  COMPONENTS_PATH,
  INDEX_PATH,
  EXAMPLE_PATH,
  ALIASES,
  readAssetsFromDisk,
  verifyIcons,
  type AssetMap,
} from ".";

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

      const icons = readAssetsFromDisk();
      if (!verifyIcons(icons)) {
        process.exit(1);
      }

      generateComponents(icons);
      generateExports(icons);
      generateExample(icons);
    }
  );
})();

function generateComponents(icons: AssetMap) {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmdirSync(COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(COMPONENTS_PATH);

  for (let key in icons) {
    const icon = icons[key];
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

function generateExports(icons: AssetMap) {
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

function generateExample(icons: AssetMap) {
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
