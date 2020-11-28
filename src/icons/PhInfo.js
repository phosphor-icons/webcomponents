/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhInfo = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<circle cx="128.00146" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="120.001 120 128.001 120 128.001 176 136.001 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="80" r="16"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="120 120 128 120 128 176 136 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="84" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M128.00146,24a104,104,0,1,0,104,104A104.12041,104.12041,0,0,0,128.00146,24Zm-.001,48a12,12,0,1,1-12,12A12,12,0,0,1,128.00049,72Zm8.001,112h-8a7.99541,7.99541,0,0,1-8-8V128a8,8,0,0,1,0-16h8a7.99539,7.99539,0,0,1,8,8v48a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128.00098" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="120 120 128.001 120 128 176 136 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="84" r="10"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="120 120 128 120 128 176 136 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="84" r="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="120 120 128 120 128 176 136 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="84" r="12"/>`}
    </svg>
  `,
};

define("ph-info", PhInfo);
export default PhInfo;
