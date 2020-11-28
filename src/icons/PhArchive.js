/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArchive = {
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
      svg`<rect x="32" y="48" width="192" height="48" rx="7.99999" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96Z" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="48" rx="7.99999" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V88a16.01833,16.01833,0,0,0,16,16v96a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V104a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM152,144H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-56H40V56H216l.00977,32Z"/>`}
      ${weight === "light" &&
      svg`<rect x="32" y="48" width="192" height="48" rx="7.99999" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="32" y="48" width="192" height="48" rx="7.99999" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="32" y="48" width="192" height="48" rx="7.99999" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-archive", PhArchive);
export default PhArchive;
