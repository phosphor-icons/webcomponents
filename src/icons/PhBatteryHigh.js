/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBatteryHigh = {
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
      svg`<rect x="46" y="38" width="144" height="180" rx="16" transform="translate(246 10) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="164" x2="64" y2="92" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="100" y1="164" x2="100" y2="92" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="136" y1="164" x2="136" y2="92" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="244" y1="96" x2="244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" opacity="0.2"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="134.4" y1="168.00043" x2="134.4" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="97.6" y1="168.00043" x2="97.6" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="60.8" y1="168.00043" x2="60.8" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M240,88.00781a7.9954,7.9954,0,0,0-8,8v64a8,8,0,0,0,16,0v-64A7.99541,7.99541,0,0,0,240,88.00781Z"/>
    <path d="M192,48.00781H40a24.02624,24.02624,0,0,0-24,24v112a24.02624,24.02624,0,0,0,24,24H192a24.02624,24.02624,0,0,0,24-24v-112A24.02625,24.02625,0,0,0,192,48.00781Zm8,136a8.01042,8.01042,0,0,1-8,8H40a8.01042,8.01042,0,0,1-8-8v-112a8.01042,8.01042,0,0,1,8-8H192a8.01042,8.01042,0,0,1,8,8Z"/>
    <rect x="48" y="80.00781" width="96" height="96" rx="8"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="134.4" y1="168.00043" x2="134.4" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="97.6" y1="168.00043" x2="97.6" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="60.8" y1="168.00043" x2="60.8" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="134.4" y1="168.00043" x2="134.4" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="97.6" y1="168.00043" x2="97.6" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="60.8" y1="168.00043" x2="60.8" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="134.4" y1="168.00043" x2="134.4" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="97.6" y1="168.00043" x2="97.6" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="60.8" y1="168.00043" x2="60.8" y2="88.00043" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-battery-high", PhBatteryHigh);
export default PhBatteryHigh;
