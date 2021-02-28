/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCreditCard = {
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
      svg`<rect x="24" y="56" width="208" height="144" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="163.99414" y1="164" x2="195.99414" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="107.99414" y1="164" x2="123.99414" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="23.99414" y1="96.85228" x2="231.99412" y2="96.85228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<g opacity="0.2">
    <path d="M23.99414,96.85228h208L232,192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"/>
  </g>
  <rect x="24" y="56" width="208" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="167.99414" y1="168" x2="199.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="119.99414" y1="168" x2="135.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="23.99414" y1="96.85228" x2="231.99412" y2="96.85228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,48H32A16.01833,16.01833,0,0,0,16,64V96.73633c-.00049.03906-.00586.07715-.00586.11621s.00537.07715.00586.11621V192a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,224,48ZM135.99414,176h-16a8,8,0,0,1,0-16h16a8,8,0,1,1,0,16Zm64,0h-32a8,8,0,0,1,0-16h32a8,8,0,1,1,0,16ZM32,88.85254V64H224l.002,24.85254Z"/>`}
      ${weight === "light" &&
      svg`<rect x="24" y="56" width="208" height="144" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="167.99414" y1="168" x2="199.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="119.99414" y1="168" x2="135.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="23.99414" y1="96.85228" x2="231.99412" y2="96.85228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="24" y="56" width="208" height="144" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="167.99414" y1="168" x2="199.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="119.99414" y1="168" x2="135.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="23.99414" y1="96.85228" x2="231.99412" y2="96.85228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="24" y="56" width="208" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="167.99414" y1="168" x2="199.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="119.99414" y1="168" x2="135.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="23.99414" y1="96.85228" x2="231.99412" y2="96.85228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-credit-card", PhCreditCard);
export default PhCreditCard;
