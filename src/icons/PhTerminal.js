/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTerminal = {
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
      svg`<polyline points="40 64 112 128 40 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="119.99414" y1="192" x2="215.99414" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="40 64 112 128 40 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="119.99414" y1="192" x2="215.99414" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M120,128a8.00063,8.00063,0,0,0-2.68506-5.97949l-72-64a8.00018,8.00018,0,0,0-10.62988,11.959L99.9585,128,34.68506,186.02051a8.00018,8.00018,0,0,0,10.62988,11.959l72-64A8.00063,8.00063,0,0,0,120,128Z"/>
    <path d="M215.99414,184h-96a8,8,0,0,0,0,16h96a8,8,0,1,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="40 64 112 128 40 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="119.99414" y1="192" x2="215.99414" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="40 64 112 128 40 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="119.99414" y1="192" x2="215.99414" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="40 64 112 128 40 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="119.99414" y1="192" x2="215.99414" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-terminal", PhTerminal);
export default PhTerminal;
