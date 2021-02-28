/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretDown = {
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
      svg`<polyline points="208 96 128 176 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="208 96 128 176 48 96 208 96" opacity="0.2"/>
  <polygon points="208 96 128 176 48 96 208 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M215.39111,92.93848A8.00015,8.00015,0,0,0,208,88H48a8,8,0,0,0-5.65674,13.657l80,79.99976a7.99945,7.99945,0,0,0,11.31348,0l80-79.99976A8.00011,8.00011,0,0,0,215.39111,92.93848Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="208 96 128 176 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="208 96 128 176 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="208 96 128 176 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-down", PhCaretDown);
export default PhCaretDown;
