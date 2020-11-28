/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSignOut = {
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
      svg`<polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M221.68652,122.34277l-42-42a8.00018,8.00018,0,0,0-11.31347,11.31446L196.71582,120H104a8,8,0,0,0,0,16h92.71582l-28.34277,28.34277a8.00018,8.00018,0,0,0,11.31347,11.31446l42-42A8.0012,8.0012,0,0,0,221.68652,122.34277Z"/>
    <path d="M120,208H48V48h72a8,8,0,0,0,0-16H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16h72a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-sign-out", PhSignOut);
export default PhSignOut;
