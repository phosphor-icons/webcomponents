/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDiceSix = {
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
      transform=${mirrored ? "scale(-1, 1)" : null}
    >
      ${weight === "bold" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="96" cy="84" r="16"/>
  <circle cx="160" cy="84" r="16"/>
  <circle cx="96" cy="128" r="16"/>
  <circle cx="160" cy="128" r="16"/>
  <circle cx="96" cy="172" r="16"/>
  <circle cx="160" cy="172" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="12"/>
  <circle cx="164" cy="84" r="12"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <circle cx="92" cy="172" r="12"/>
  <circle cx="164" cy="172" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z"/>`}
      ${weight === "light" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="10"/>
  <circle cx="164" cy="84" r="10"/>
  <circle cx="92" cy="128" r="10"/>
  <circle cx="164" cy="128" r="10"/>
  <circle cx="92" cy="172" r="10"/>
  <circle cx="164" cy="172" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="8"/>
  <circle cx="164" cy="84" r="8"/>
  <circle cx="92" cy="128" r="8"/>
  <circle cx="164" cy="128" r="8"/>
  <circle cx="92" cy="172" r="8"/>
  <circle cx="164" cy="172" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="12"/>
  <circle cx="164" cy="84" r="12"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <circle cx="92" cy="172" r="12"/>
  <circle cx="164" cy="172" r="12"/>`}
    </svg>
  `,
};

define("ph-dice-six", PhDiceSix);
export default PhDiceSix;
