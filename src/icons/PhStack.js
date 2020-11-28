/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhStack = {
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
      ${weight === "bold" && svg`<polyline points="32 176 128 232 224 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="32 128 128 184 224 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polygon points="32 80 128 136 224 80 128 24 32 80" opacity="0.2"/>
  <polyline points="32 176 128 232 224 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="32 128 128 184 224 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M219.96875,169.08984,128,222.73828,36.03125,169.08984a8.00008,8.00008,0,0,0-8.0625,13.82032l96,56a8.00059,8.00059,0,0,0,8.0625,0l96-56a8.00008,8.00008,0,0,0-8.0625-13.82032Z"/>
    <path d="M219.96875,121.08984,128,174.73828,36.03125,121.08984a8.00008,8.00008,0,0,0-8.0625,13.82032l96,56a8.00059,8.00059,0,0,0,8.0625,0l96-56a8.00008,8.00008,0,0,0-8.0625-13.82032Z"/>
    <path d="M27.96875,86.91016l96,56a8.00059,8.00059,0,0,0,8.0625,0l96-56a8.00016,8.00016,0,0,0,0-13.82032l-96-56a8.00059,8.00059,0,0,0-8.0625,0l-96,56a8.00016,8.00016,0,0,0,0,13.82032Z"/>
  </g>`}
      ${weight === "light" && svg`<polyline points="32 176 128 232 224 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="32 128 128 184 224 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="32 176 128 232 224 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="32 128 128 184 224 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="32 176 128 232 224 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="32 128 128 184 224 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-stack", PhStack);
export default PhStack;
