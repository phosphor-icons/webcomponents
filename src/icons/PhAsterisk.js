/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAsterisk = {
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
  render: ({ color, size, weight, mirrored }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      fill="${color}"
      viewBox="0 0 256 256"
      transform=${mirrored ? "scale(-1, 1)" : undefined}
    >
      <slot></slot>
      ${weight === "bold" &&
      svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="51.78976" y1="84" x2="204.21024" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="51.78976" y1="172" x2="204.21024" y2="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="51.78976" y1="84" x2="204.21024" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="51.78976" y1="172" x2="204.21024" y2="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M208.21045,165.07178,144,128l64.21045-37.07178a8,8,0,1,0-8-13.85644L136,114.14355V40a8,8,0,0,0-16,0v74.14355L55.78955,77.07178a8,8,0,0,0-8,13.85644L112,128,47.78955,165.07178a8,8,0,1,0,8,13.85644L120,141.85645V216a8,8,0,0,0,16,0V141.85645l64.21045,37.07177a8,8,0,0,0,8-13.85644Z"/>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="51.78976" y1="84" x2="204.21024" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="51.78976" y1="172" x2="204.21024" y2="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="51.78976" y1="84" x2="204.21024" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="51.78976" y1="172" x2="204.21024" y2="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="51.78976" y1="84" x2="204.21024" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="51.78976" y1="172" x2="204.21024" y2="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-asterisk", PhAsterisk);
export default PhAsterisk;
