/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBag = {
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
      svg`<rect x="40" y="64" width="176" height="144" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M88,64a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="64" width="176" height="144" rx="8" opacity="0.2"/>
  <rect x="40" y="64" width="176" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M88,64a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M208,56H175.3208a47.99073,47.99073,0,0,0-94.6416,0H48A16.01833,16.01833,0,0,0,32,72V200a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V72A16.01833,16.01833,0,0,0,208,56ZM128,32a32.05773,32.05773,0,0,1,30.9873,24H97.0127A32.05773,32.05773,0,0,1,128,32Z"/>`}
      ${weight === "light" &&
      svg`<rect x="40" y="64" width="176" height="144" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M88,64a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="40" y="64" width="176" height="144" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M88,64a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="40" y="64" width="176" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M88,64a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bag", PhBag);
export default PhBag;
