/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretLeft = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<polyline points="160 208 80 128 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="160 208 80 128 160 48 160 208" opacity="0.2"/>
  <polygon points="160 208 80 128 160 48 160 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M163.06152,40.60889a8.00159,8.00159,0,0,0-8.71826,1.73388l-80,80a8.00034,8.00034,0,0,0,0,11.31446l80,80A8.0001,8.0001,0,0,0,168,208V48A8.00065,8.00065,0,0,0,163.06152,40.60889Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="160 208 80 128 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="160 208 80 128 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="160 208 80 128 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-left", PhCaretLeft);
export default PhCaretLeft;
