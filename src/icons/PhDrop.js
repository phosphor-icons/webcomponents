/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDrop = {
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
      ${weight === "bold" && svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M168,152a40,40,0,0,1-40,40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" opacity="0.2"/>
  <path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,152a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M174.03662,55.75049a254.574,254.574,0,0,0-41.44873-38.3042,7.99885,7.99885,0,0,0-9.17578,0,254.574,254.574,0,0,0-41.44873,38.3042C54.51074,87.3208,40,120.60352,40,152a88,88,0,0,0,176,0C216,120.60352,201.48926,87.3208,174.03662,55.75049ZM128,208a8,8,0,0,1,0-16,40.04521,40.04521,0,0,0,40-40,8,8,0,0,1,16,0A56.06353,56.06353,0,0,1,128,208Z"/>`}
      ${weight === "light" && svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M176,152a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M176,152a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,152a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-drop", PhDrop);
export default PhDrop;
