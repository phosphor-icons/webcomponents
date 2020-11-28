/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCellSignalNone = {
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
      ${weight === "bold" && svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M192,224H27.31348A15.9994,15.9994,0,0,1,16.001,196.686L180.68555,32A16.00046,16.00046,0,0,1,208,43.31372V208A16.01825,16.01825,0,0,1,192,224ZM27.31934,207.99512,192,208V43.32031L27.31445,208Z"/>`}
      ${weight === "light" && svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-cell-signal-none", PhCellSignalNone);
export default PhCellSignalNone;
