/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhX = {
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
      svg`<line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200" y1="200" x2="56" y2="56" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M139.31348,128l66.34326-66.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L128,116.68652,61.65674,50.34326A7.99984,7.99984,0,0,0,50.34326,61.65674L116.68652,128,50.34326,194.34326a7.99984,7.99984,0,1,0,11.31348,11.31348L128,139.31348l66.34326,66.34326a7.99984,7.99984,0,0,0,11.31348-11.31348Z"/>`}
      ${weight === "light" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200" y1="200" x2="56" y2="56" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-x", PhX);
export default PhX;
