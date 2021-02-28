/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAlignTop = {
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
      svg`<line x1="216.00488" y1="39.99414" x2="40.00488" y2="39.99414" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="122" y="106" width="104" height="52" rx="8" transform="translate(306 -42) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="80" width="52" height="144" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" opacity="0.2"/>
  <rect x="56" y="72" width="56" height="152" rx="8" opacity="0.2"/>
  <line x1="216.00488" y1="39.99414" x2="40.00488" y2="39.99414" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="72" width="56" height="152" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<path d="M224.00488,39.99414a7.99977,7.99977,0,0,1-8,8h-176a8,8,0,0,1,0-16h176A7.99977,7.99977,0,0,1,224.00488,39.99414ZM192,64H152a16.01833,16.01833,0,0,0-16,16v96a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,192,64Zm-88,0H64A16.01833,16.01833,0,0,0,48,80V216a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,104,64Z"/>`}
      ${weight === "light" &&
      svg`<line x1="216.00488" y1="39.99414" x2="40.00488" y2="39.99414" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="72" width="56" height="152" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<line x1="216.00488" y1="39.99414" x2="40.00488" y2="39.99414" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="72" width="56" height="152" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<line x1="216.00488" y1="39.99414" x2="40.00488" y2="39.99414" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="72" width="56" height="152" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-align-top", PhAlignTop);
export default PhAlignTop;
