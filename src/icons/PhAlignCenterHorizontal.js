/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAlignCenterHorizontal = {
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
      svg`<line x1="128" y1="31.99512" x2="128" y2="51.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="203.99512" x2="128" y2="223.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="107.99512" x2="128" y2="147.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="64" y="52" width="128" height="56" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="148" width="176" height="56" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="64" y="56" width="128" height="56" rx="8" opacity="0.2"/>
  <rect x="40" y="144" width="176" height="56" rx="8" opacity="0.2"/>
  <line x1="128" y1="31.99512" x2="128" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="199.99512" x2="128" y2="223.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="111.99512" x2="128" y2="143.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="64" y="56" width="128" height="56" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="144" width="176" height="56" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,152v40a16.01833,16.01833,0,0,1-16,16H136v15.99512a8,8,0,0,1-16,0V208H48a16.01833,16.01833,0,0,1-16-16V152a16.01833,16.01833,0,0,1,16-16h72V120H72a16.01833,16.01833,0,0,1-16-16V64A16.01833,16.01833,0,0,1,72,48h48V31.99512a8,8,0,1,1,16,0V48h48a16.01833,16.01833,0,0,1,16,16v40a16.01833,16.01833,0,0,1-16,16H136v16h72A16.01833,16.01833,0,0,1,224,152Z"/>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="31.99512" x2="128" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="199.99512" x2="128" y2="223.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="111.99512" x2="128" y2="143.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="64" y="56" width="128" height="56" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="144" width="176" height="56" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="31.99512" x2="128" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="199.99512" x2="128" y2="223.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="111.99512" x2="128" y2="143.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="64" y="56" width="128" height="56" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="144" width="176" height="56" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="31.99512" x2="128" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="199.99512" x2="128" y2="223.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="111.99512" x2="128" y2="143.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="64" y="56" width="128" height="56" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="144" width="176" height="56" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-align-center-horizontal", PhAlignCenterHorizontal);
export default PhAlignCenterHorizontal;
