/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhRainbow = {
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
      ${weight === "bold" && svg`<path d="M12,180v-8a116,116,0,0,1,232,0v8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152,180v-4a24,24,0,0,0-48,0v4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M200,180v-4a72,72,0,0,0-144,0v4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M176,184V168a48,48,0,0,0-96,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,184V168a80,80,0,0,0-160,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M240,184V168a112,112,0,0,0-224,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M184,168v16a8,8,0,0,1-16,0V168a40,40,0,0,0-80,0v16a8,8,0,0,1-16,0V168a56,56,0,0,1,112,0ZM128,80a88.09957,88.09957,0,0,0-88,88v16a8,8,0,0,0,16,0V168a72,72,0,0,1,144,0v16a8,8,0,0,0,16,0V168A88.09957,88.09957,0,0,0,128,80Zm0-32A120.13623,120.13623,0,0,0,8,168v16a8,8,0,0,0,16,0V168a104,104,0,0,1,208,0v16a8,8,0,0,0,16,0V168A120.13623,120.13623,0,0,0,128,48Z"/>`}
      ${weight === "light" && svg`<path d="M176,184V168a48,48,0,0,0-96,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,184V168a80,80,0,0,0-160,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M240,184V168a112,112,0,0,0-224,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M176,184V168a48,48,0,0,0-96,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,184V168a80,80,0,0,0-160,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M240,184V168a112,112,0,0,0-224,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M176,184V168a48,48,0,0,0-96,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,184V168a80,80,0,0,0-160,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M240,184V168a112,112,0,0,0-224,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-rainbow", PhRainbow);
export default PhRainbow;
