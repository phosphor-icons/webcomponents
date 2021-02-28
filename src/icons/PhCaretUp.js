/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretUp = {
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
      svg`<polyline points="48 160 128 80 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="48 160 128 80 208 160 48 160" opacity="0.2"/>
  <polygon points="48 160 128 80 208 160 48 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M213.65674,154.34326l-80-80a8,8,0,0,0-11.31348,0l-80,80A7.99981,7.99981,0,0,0,48,168H208a7.99981,7.99981,0,0,0,5.65674-13.65674Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="48 160 128 80 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="48 160 128 80 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="48 160 128 80 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-up", PhCaretUp);
export default PhCaretUp;
