/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberThree = {
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
      svg`<path d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M184,168.00488a63.99178,63.99178,0,0,1-109.24219,45.251,8,8,0,0,1,11.31446-11.313,47.994,47.994,0,1,0,33.93554-81.93408,7.99947,7.99947,0,0,1-6.55469-12.58594L160.626,40H80a8,8,0,0,1,0-16h95.9873A7.99946,7.99946,0,0,1,182.542,36.58594l-48.28125,69.00683A64.055,64.055,0,0,1,184,168.00488Z"/>`}
      ${weight === "light" &&
      svg`<path d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-three", PhNumberThree);
export default PhNumberThree;
