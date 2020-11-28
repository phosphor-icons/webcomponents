/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberCircleThree = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm21.458,153.45605a35.99982,35.99982,0,0,1-50.91113,0,8.00052,8.00052,0,0,1,11.31445-11.31445A19.99959,19.99959,0,1,0,124.00293,132a8,8,0,0,1-6.55469-12.58691l19.1875-27.4209H103.99707a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55469,12.58691L137.5332,118.61816A36.019,36.019,0,0,1,149.458,177.45605Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-circle-three", PhNumberCircleThree);
export default PhNumberCircleThree;
