/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDeviceMobileCamera = {
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
      svg`<rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="68" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" opacity="0.2"/>
  <rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="60" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M176,16H80A24.0275,24.0275,0,0,0,56,40V216a24.0275,24.0275,0,0,0,24,24h96a24.0275,24.0275,0,0,0,24-24V40A24.0275,24.0275,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"/>`}
      ${weight === "light" &&
      svg`<rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="60" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="60" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="60" r="12"/>`}
    </svg>
  `,
};

define("ph-device-mobile-camera", PhDeviceMobileCamera);
export default PhDeviceMobileCamera;
