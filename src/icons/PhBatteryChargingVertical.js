/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBatteryChargingVertical = {
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
      ${weight === "bold" && svg`<rect x="56" y="48" width="144" height="180" rx="16" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="12" x2="160" y2="12" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="128 178 144 138 112 138 128 98" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<rect x="56" y="48" width="144" height="184" rx="16" opacity="0.2"/>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M96,24h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Z"/>
    <path d="M184,40.00781H72a24.02625,24.02625,0,0,0-24,24v152a24.02624,24.02624,0,0,0,24,24H184a24.02624,24.02624,0,0,0,24-24v-152A24.02624,24.02624,0,0,0,184,40.00781ZM151.42969,142.97656l-16,40a8.00086,8.00086,0,0,1-14.85938-5.9375l11.61719-29.03125L112,147.99219a8.001,8.001,0,0,1-7.42969-10.96875l16-39.98438a8.00086,8.00086,0,0,1,14.85938,5.9375L123.8125,131.99219,144,132.00781a8.001,8.001,0,0,1,7.42969,10.96875Z"/>
  </g>`}
      ${weight === "light" && svg`<line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-battery-charging-vertical", PhBatteryChargingVertical);
export default PhBatteryChargingVertical;
