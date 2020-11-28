/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMonitor = {
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
      ${weight === "bold" && svg`<rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="228" x2="96" y2="228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <rect x="24" y="40.0002" width="208" height="160" rx="24"/>
    <path d="M160,216.0002H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" && svg`<rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-monitor", PhMonitor);
export default PhMonitor;
