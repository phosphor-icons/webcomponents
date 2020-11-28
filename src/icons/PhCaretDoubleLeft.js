/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretDoubleLeft = {
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
      svg`<polyline points="200 208 120 128 200 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="120 208 40 128 120 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="200 208 120 128 200 48 200 208" opacity="0.2"/>
  <polygon points="200 208 120 128 200 48 200 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="120 208 40 128 120 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M203.06152,40.60889a7.99927,7.99927,0,0,0-8.71826,1.73437L128,108.68652V48a7.99981,7.99981,0,0,0-13.65674-5.65674l-80,80a7.99915,7.99915,0,0,0,0,11.31348l80,80A7.99981,7.99981,0,0,0,128,208V147.31348l66.34326,66.34326A7.99981,7.99981,0,0,0,208,208V48A8.00015,8.00015,0,0,0,203.06152,40.60889Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="200 208 120 128 200 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="120 208 40 128 120 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="200 208 120 128 200 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="120 208 40 128 120 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="200 208 120 128 200 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="120 208 40 128 120 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-double-left", PhCaretDoubleLeft);
export default PhCaretDoubleLeft;
