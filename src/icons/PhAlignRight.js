/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAlignRight = {
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
      svg`<line x1="216.00586" y1="39.99512" x2="216.00586" y2="215.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="72" y="56" width="104" height="52" rx="8" transform="translate(248 164) rotate(180)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="148" width="144" height="52" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" opacity="0.2"/>
  <rect x="32" y="144" width="152" height="56" rx="8" opacity="0.2"/>
  <line x1="216.00586" y1="39.99512" x2="216.00586" y2="215.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="144" width="152" height="56" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<path d="M224.00586,39.99512v176a8,8,0,0,1-16,0v-176a8,8,0,0,1,16,0ZM176,48H80A16.01833,16.01833,0,0,0,64,64v40a16.01833,16.01833,0,0,0,16,16h96a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,176,48Zm0,88H40a16.01833,16.01833,0,0,0-16,16v40a16.01833,16.01833,0,0,0,16,16H176a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,176,136Z"/>`}
      ${weight === "light" &&
      svg`<line x1="216.00586" y1="39.99512" x2="216.00586" y2="215.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="144" width="152" height="56" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<line x1="216.00586" y1="39.99512" x2="216.00586" y2="215.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="144" width="152" height="56" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<line x1="216.00586" y1="39.99512" x2="216.00586" y2="215.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="32" y="144" width="152" height="56" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-align-right", PhAlignRight);
export default PhAlignRight;
