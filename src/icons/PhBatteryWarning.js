/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBatteryWarning = {
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
      ${weight === "bold" && svg`<rect x="46" y="38.00452" width="144" height="180" rx="16" transform="translate(246.00452 10.00452) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="244" y1="96.00452" x2="244" y2="160.00452" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="116" y1="92" x2="116" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="116" cy="160" r="16"/>`}
      ${weight === "duotone" && svg`<rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" opacity="0.2"/>
  <line x1="116" y1="88" x2="116" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="116" cy="164" r="12"/>`}
      ${weight === "fill" && svg`<path d="M248,96.00012v64a8,8,0,1,1-16,0v-64a8,8,0,1,1,16,0Zm-32-24v112a24.0275,24.0275,0,0,1-24,24H40a24.0275,24.0275,0,0,1-24-24v-112a24.0275,24.0275,0,0,1,24-24H192A24.0275,24.0275,0,0,1,216,72.00012Zm-108,56a8,8,0,0,0,16,0v-40a8,8,0,1,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,128,164.00012Z"/>`}
      ${weight === "light" && svg`<line x1="116" y1="88" x2="116" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="116" cy="164" r="10"/>`}
      ${weight === "thin" && svg`<line x1="116" y1="88" x2="116" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="116" cy="164" r="8"/>`}
      ${weight === "regular" && svg`<line x1="116" y1="88" x2="116" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="116" cy="164" r="12"/>`}
    </svg>
  `,
};

define("ph-battery-warning", PhBatteryWarning);
export default PhBatteryWarning;
