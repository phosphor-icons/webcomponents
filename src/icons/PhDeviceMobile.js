/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDeviceMobile = {
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
      svg`<rect x="64" y="24" width="128" height="208" rx="16" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="64" x2="192" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="64" y1="192" x2="192" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="64" y="56" width="128" height="144" opacity="0.2"/>
  <rect x="64" y="24" width="128" height="208" rx="16" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M176,16H80A24.0275,24.0275,0,0,0,56,40V216a24.0275,24.0275,0,0,0,24,24h96a24.0275,24.0275,0,0,0,24-24V40A24.0275,24.0275,0,0,0,176,16ZM80,32h96a8.00917,8.00917,0,0,1,8,8v8H72V40A8.00917,8.00917,0,0,1,80,32Zm96,192H80a8.00917,8.00917,0,0,1-8-8v-8H184v8A8.00917,8.00917,0,0,1,176,224Z"/>`}
      ${weight === "light" &&
      svg`<rect x="64" y="24" width="128" height="208" rx="16" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="64" y="24" width="128" height="208" rx="16" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="64" y="24" width="128" height="208" rx="16" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-device-mobile", PhDeviceMobile);
export default PhDeviceMobile;
