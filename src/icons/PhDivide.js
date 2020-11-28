/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDivide = {
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
      ${weight === "bold" && svg`<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="64" r="20"/>
  <circle cx="128" cy="192" r="20"/>`}
      ${weight === "duotone" && svg`<line x1="40" y1="128" x2="216" y2="128" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="64" r="16"/>
  <circle cx="128" cy="192" r="16"/>`}
      ${weight === "fill" && svg`<path d="M224,128a8.00008,8.00008,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8.00008,8.00008,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,176Z"/>`}
      ${weight === "light" && svg`<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="64" r="14"/>
  <circle cx="128" cy="192" r="14"/>`}
      ${weight === "thin" && svg`<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="64" r="12"/>
  <circle cx="128" cy="192" r="12"/>`}
      ${weight === "regular" && svg`<line x1="40" y1="128" x2="216" y2="128" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="64" r="16"/>
  <circle cx="128" cy="192" r="16"/>`}
    </svg>
  `,
};

define("ph-divide", PhDivide);
export default PhDivide;
