/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMouse = {
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
      svg`<rect x="52" y="24" width="152" height="208" rx="56" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="52" y1="104" x2="204" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="104" x2="128.00007" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,104l.00007-80H108A56,56,0,0,0,52,80v24Z" opacity="0.2"/>
  <rect x="52" y="24" width="152" height="208" rx="56" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="52" y1="104" x2="204" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="104" x2="128.00007" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M148,16H108A64.07239,64.07239,0,0,0,44,80v96a64.07239,64.07239,0,0,0,64,64h40a64.07239,64.07239,0,0,0,64-64V80A64.07239,64.07239,0,0,0,148,16Zm48,64V96H136V32h12A48.05468,48.05468,0,0,1,196,80ZM108,32h12V96H60V80A48.05468,48.05468,0,0,1,108,32Z"/>`}
      ${weight === "light" &&
      svg`<rect x="52" y="24" width="152" height="208" rx="56" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="52" y1="104" x2="204" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="104" x2="128.00007" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="52" y="24" width="152" height="208" rx="56" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="52" y1="104" x2="204" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="104" x2="128.00007" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="52" y="24" width="152" height="208" rx="56" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="52" y1="104" x2="204" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="104" x2="128.00007" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-mouse", PhMouse);
export default PhMouse;
