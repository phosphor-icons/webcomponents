/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretDoubleDown = {
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
      svg`<polyline points="208 128 128 208 48 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="208 48 128 128 48 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="208 48 128 128 48 48 208 48" opacity="0.2"/>
  <polyline points="208 128 128 208 48 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="208 48 128 128 48 48 208 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M208,120H147.31348l66.34326-66.34326A7.99981,7.99981,0,0,0,208,40H48a7.99981,7.99981,0,0,0-5.65674,13.65674L108.68652,120H48a7.99981,7.99981,0,0,0-5.65674,13.65674l80,80.00049a8.00063,8.00063,0,0,0,11.31348,0l80-80.00049A7.99981,7.99981,0,0,0,208,120Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="208 128 128 208 48 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="208 48 128 128 48 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="208 128 128 208 48 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="208 48 128 128 48 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="208 128 128 208 48 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 48 128 128 48 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-double-down", PhCaretDoubleDown);
export default PhCaretDoubleDown;
