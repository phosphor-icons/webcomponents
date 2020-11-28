/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCornersIn = {
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
      ${weight === "bold" && svg`<polyline points="208 96 160 96 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="48 160 96 160 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="160 208 160 160 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="96 48 96 96 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="208 96 160 96 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 160 96 160 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 208 160 160 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="96 48 96 96 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M160,104h48a8,8,0,0,0,0-16H168V48a8,8,0,0,0-16,0V96A8.00008,8.00008,0,0,0,160,104Z"/>
    <path d="M96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8.00008,8.00008,0,0,0,96,152Z"/>
    <path d="M208,152H160a8.00008,8.00008,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16Z"/>
    <path d="M96,40a8.00008,8.00008,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8.00008,8.00008,0,0,0,8-8V48A8.00008,8.00008,0,0,0,96,40Z"/>
  </g>`}
      ${weight === "light" && svg`<polyline points="208 96 160 96 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="48 160 96 160 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 208 160 160 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="96 48 96 96 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="208 96 160 96 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="48 160 96 160 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 208 160 160 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="96 48 96 96 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="208 96 160 96 160 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 160 96 160 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 208 160 160 208 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="96 48 96 96 48 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-corners-in", PhCornersIn);
export default PhCornersIn;
