/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTextUnderline = {
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
      svg`<line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M64,56v60a64,64,0,0,0,128,0V56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M64,56v64a64,64,0,0,0,128,0V56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,216a7.99977,7.99977,0,0,1-8,8H40a8,8,0,0,1,0-16H216A7.99977,7.99977,0,0,1,224,216Zm-96-24a72.0814,72.0814,0,0,0,72-72V56a8,8,0,0,0-16,0v64a56,56,0,0,1-112,0V56a8,8,0,0,0-16,0v64A72.0814,72.0814,0,0,0,128,192Z"/>`}
      ${weight === "light" &&
      svg`<line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M64,56v64a64,64,0,0,0,128,0V56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M64,56v64a64,64,0,0,0,128,0V56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M64,56v64a64,64,0,0,0,128,0V56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-text-underline", PhTextUnderline);
export default PhTextUnderline;
