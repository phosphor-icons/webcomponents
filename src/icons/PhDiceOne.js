/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDiceOne = {
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
      <slot />
      ${weight === "bold" && svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="16"/>`}
      ${weight === "duotone" && svg`<rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="12"/>`}
      ${weight === "fill" && svg`<path d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/>`}
      ${weight === "light" && svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="10"/>`}
      ${weight === "thin" && svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="8"/>`}
      ${weight === "regular" && svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="12"/>`}
    </svg>
  `,
};

define("ph-dice-one", PhDiceOne);
export default PhDiceOne;
