/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPath = {
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
      ${weight === "bold" && svg`<circle cx="200" cy="200" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="200" cy="200" r="24" opacity="0.2"/>
  <circle cx="200" cy="200" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M200,168a32.05794,32.05794,0,0,0-30.9873,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97.0127A32.0015,32.0015,0,1,0,200,168Z"/>`}
      ${weight === "light" && svg`<circle cx="200" cy="200" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="200" cy="200" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="200" cy="200" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-path", PhPath);
export default PhPath;
