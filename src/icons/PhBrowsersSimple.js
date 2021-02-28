/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBrowsersSimple = {
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
      ${weight === "bold" &&
      svg`<rect x="28.00781" y="84.00005" width="160" height="128" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,44.00005h156a8,8,0,0,1,8,8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" opacity="0.2"/>
  <rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <rect x="24.00781" y="72" width="176" height="144" rx="16"/>
    <path d="M216.00781,40h-152a8,8,0,0,0,0,16h152V176a8,8,0,0,0,16,0V56A16.01833,16.01833,0,0,0,216.00781,40Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-browsers-simple", PhBrowsersSimple);
export default PhBrowsersSimple;
