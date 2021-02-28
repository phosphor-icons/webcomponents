/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFinnTheHuman = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<rect x="56" y="100.00002" width="144" height="80" rx="32" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M20,64a24,24,0,1,1,48,0H188a24,24,0,0,1,48,0v88a64,64,0,0,1-64,64H84a64,64,0,0,1-64-64Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="96" cy="140" r="16"/>
  <circle cx="160" cy="140" r="16"/>`}
      ${weight === "duotone" &&
      svg`<path d="M208,40a23.99994,23.99994,0,0,0-24,24H72a24,24,0,0,0-48,0v80a64,64,0,0,0,64,64h80a64,64,0,0,0,64-64V64A23.99994,23.99994,0,0,0,208,40Zm-8,104a32,32,0,0,1-32,32H88a32.00034,32.00034,0,0,1-32-32v-8a32,32,0,0,1,32-32h80a31.99971,31.99971,0,0,1,32,32Z" opacity="0.2"/>
  <rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M176,140a12,12,0,1,1-12-12A12.01343,12.01343,0,0,1,176,140ZM92,128a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,92,128ZM240,64v80a72.08124,72.08124,0,0,1-72,72H88a72.08124,72.08124,0,0,1-72-72V64a32.00221,32.00221,0,0,1,62.98779-8h98.02442A32.00221,32.00221,0,0,1,240,64Zm-40,72a31.99971,31.99971,0,0,0-32-32H88a32,32,0,0,0-32,32v8a32.00034,32.00034,0,0,0,32,32h80a32,32,0,0,0,32-32Z"/>`}
      ${weight === "light" &&
      svg`<rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="140" r="10"/>
  <circle cx="164" cy="140" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="140" r="8"/>
  <circle cx="164" cy="140" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>`}
    </svg>
  `,
};

define("ph-finn-the-human", PhFinnTheHuman);
export default PhFinnTheHuman;
