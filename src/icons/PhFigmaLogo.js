/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFigmaLogo = {
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
      ${weight === "bold" && svg`<circle cx="162" cy="128" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="162" cy="128" r="34" opacity="0.2"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" opacity="0.2"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" opacity="0.2"/>
  <circle cx="162" cy="128" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M186.61523,94.00049A41.97934,41.97934,0,0,0,162,18.001H94A41.97934,41.97934,0,0,0,69.38477,94.00049a41.93894,41.93894,0,0,0,.00048,67.99939A41.9892,41.9892,0,1,0,136,195.99951V160.948a41.97356,41.97356,0,1,0,50.61523-66.94751ZM188,60.001a26.02916,26.02916,0,0,1-25.98047,25.99951L162,86l-.03857.001L136,86V34.001h26A26.02947,26.02947,0,0,1,188,60.001ZM162,154a25.99952,25.99952,0,0,1-.03857-51.999H162l.019-.00049A25.99976,25.99976,0,0,1,162,154Z"/>`}
      ${weight === "light" && svg`<circle cx="162" cy="128" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="162" cy="128" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="162" cy="128" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-figma-logo", PhFigmaLogo);
export default PhFigmaLogo;
