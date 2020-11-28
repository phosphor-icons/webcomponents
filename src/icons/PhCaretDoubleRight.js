/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretDoubleRight = {
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
      svg`<polyline points="56 48 136 128 56 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="136 48 216 128 136 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="56 48 136 128 56 208 56 48" opacity="0.2"/>
  <polygon points="56 48 136 128 56 208 56 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="136 48 216 128 136 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M221.65674,122.34326l-80-80A7.99981,7.99981,0,0,0,128,48v60.68652L61.65674,42.34326A7.99981,7.99981,0,0,0,48,48V208a7.99984,7.99984,0,0,0,13.65674,5.65674L128,147.31348V208a7.99984,7.99984,0,0,0,13.65674,5.65674l80-80A7.99915,7.99915,0,0,0,221.65674,122.34326Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="56 48 136 128 56 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="136 48 216 128 136 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="56 48 136 128 56 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="136 48 216 128 136 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="56 48 136 128 56 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="136 48 216 128 136 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-double-right", PhCaretDoubleRight);
export default PhCaretDoubleRight;
