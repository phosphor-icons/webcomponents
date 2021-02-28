/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberOne = {
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
      svg`<polyline points="84 63.986 132 32 132 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="84 63.986 132 32 132 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M131.99574,232a8.00252,8.00252,0,0,1-8.00427-8.00045V46.95129l-35.54531,23.691A8.00167,8.00167,0,1,1,79.56448,57.3298L127.55489,25.344A8.0046,8.0046,0,0,1,140,32.00038V223.99955A8.00252,8.00252,0,0,1,131.99574,232Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="84 63.986 132 32 132 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="84 63.986 132 32 132 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="84 63.986 132 32 132 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-one", PhNumberOne);
export default PhNumberOne;
