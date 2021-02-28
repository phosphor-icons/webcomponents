/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSuitcase = {
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
      svg`<rect x="32.00781" y="68.00005" width="192" height="144" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,212V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M88,72V216l-47.99219,0a8,8,0,0,1-8-8v-128a8,8,0,0,1,8-8Z" opacity="0.2"/>
  <path d="M168.00781,72V216l47.99219,0a8,8,0,0,0,8-8v-128a8,8,0,0,0-8-8Z" opacity="0.2"/>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216.00781,64H176V56a24.0275,24.0275,0,0,0-24-24H104A24.0275,24.0275,0,0,0,80,56v8H40.00781a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216.00781,64ZM96,80h64V208H96Zm0-24a8.00917,8.00917,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8H96Z"/>`}
      ${weight === "light" &&
      svg`<rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="32.00781" y="72.00005" width="192" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-suitcase", PhSuitcase);
export default PhSuitcase;
