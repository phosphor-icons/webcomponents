/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCloud = {
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
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" opacity="0.2"/>
  <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M160,40A88.102,88.102,0,0,0,81.28711,88.6709l-.00537-.00049A87.464,87.464,0,0,0,71.98828,128a8,8,0,0,1-16,0,103.43561,103.43561,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72,216h88a88,88,0,0,0,0-176Z"/>`}
      ${weight === "light" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-cloud", PhCloud);
export default PhCloud;
