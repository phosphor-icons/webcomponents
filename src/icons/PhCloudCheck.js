/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCloudCheck = {
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
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="192 116 144 164 120 140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M80.00586,128a80,80,0,1,1,80,80h-88A56,56,0,1,1,85.9251,97.74352" opacity="0.2"/>
  <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 116 144 164 120 140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M160.001,40A88.102,88.102,0,0,0,81.28809,88.6709l-.00538-.00049A87.46336,87.46336,0,0,0,71.98926,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72.001,216h88a88,88,0,0,0,0-176Zm37.65576,81.65674-48,48a7.99945,7.99945,0,0,1-11.31348,0l-24-24a7.99984,7.99984,0,0,1,11.31348-11.31348L144,152.68652l42.34326-42.34326a7.99984,7.99984,0,0,1,11.31348,11.31348Z"/>`}
      ${weight === "light" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="192 116 144 164 120 140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="192 116 144 164 120 140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 116 144 164 120 140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-cloud-check", PhCloudCheck);
export default PhCloudCheck;
