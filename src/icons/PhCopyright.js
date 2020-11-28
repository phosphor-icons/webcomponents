/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCopyright = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M128,20A108,108,0,1,0,236,128,108.12249,108.12249,0,0,0,128,20Zm0,196a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Zm0-160a72,72,0,1,0,72,72A72.08124,72.08124,0,0,0,128,56Zm.00293,103.99512a31.76384,31.76384,0,0,0,25.60254-12.79981,8,8,0,0,1,12.791,9.61182,47.99976,47.99976,0,1,1,0-57.62451,8,8,0,0,1-12.791,9.61181,32.001,32.001,0,1,0-25.60254,51.20069Z"/>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-copyright", PhCopyright);
export default PhCopyright;
