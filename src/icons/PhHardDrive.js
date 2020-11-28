/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHardDrive = {
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
      svg`<rect x="24" y="72" width="208" height="112" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="128" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="24" y="72" width="208" height="112" rx="8" opacity="0.2"/>
  <rect x="24" y="72" width="208" height="112" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,64H32A16.01833,16.01833,0,0,0,16,80v96a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,224,64Zm-35.99951,76a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,140Z"/>`}
      ${weight === "light" &&
      svg`<rect x="24" y="72" width="208" height="112" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="24" y="72" width="208" height="112" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="24" y="72" width="208" height="112" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="12"/>`}
    </svg>
  `,
};

define("ph-hard-drive", PhHardDrive);
export default PhHardDrive;
