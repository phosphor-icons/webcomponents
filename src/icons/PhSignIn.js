/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSignIn = {
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
      <slot />
      ${weight === "bold" && svg`<polyline points="94 170 136 128 94 86" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="94 170 136 128 94 86" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M141.65674,122.34277l-42-42A8.00018,8.00018,0,0,0,88.34326,91.65723L116.686,120H23.9707a8,8,0,1,0,0,16H116.686L88.34326,164.34277a8.00018,8.00018,0,0,0,11.31348,11.31446l42-42A8.00034,8.00034,0,0,0,141.65674,122.34277Z"/>
    <path d="M192,32H120a8,8,0,0,0,0,16h72V208H120a8,8,0,0,0,0,16h72a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z"/>
  </g>`}
      ${weight === "light" && svg`<polyline points="94 170 136 128 94 86" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="94 170 136 128 94 86" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="94 170 136 128 94 86" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-sign-in", PhSignIn);
export default PhSignIn;
