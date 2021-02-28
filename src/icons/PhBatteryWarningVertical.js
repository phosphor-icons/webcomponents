/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBatteryWarningVertical = {
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
      svg`<rect x="56" y="48" width="144" height="180" rx="16" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="12" x2="160" y2="12" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="96" x2="128" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="176" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="56" y="48" width="144" height="184" rx="16" opacity="0.2"/>
  <line x1="128" y1="100" x2="128" y2="140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="176" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M88,16a7.99977,7.99977,0,0,1,8-8h64a8,8,0,0,1,0,16H96A7.99977,7.99977,0,0,1,88,16ZM208,64V216a24.0275,24.0275,0,0,1-24,24H72a24.0275,24.0275,0,0,1-24-24V64A24.0275,24.0275,0,0,1,72,40H184A24.0275,24.0275,0,0,1,208,64Zm-88,76a8,8,0,0,0,16,0V100a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,140,176Z"/>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="100" x2="128" y2="140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="176" r="10"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="100" x2="128" y2="140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="176" r="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="100" x2="128" y2="140" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="56" y="48" width="144" height="184" rx="16" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="176" r="12"/>`}
    </svg>
  `,
};

define("ph-battery-warning-vertical", PhBatteryWarningVertical);
export default PhBatteryWarningVertical;
