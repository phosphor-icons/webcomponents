/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMagnifyingGlassMinus = {
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
      ${weight === "bold" &&
      svg`<line x1="83.99707" y1="116" x2="147.99707" y2="116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="115.99707" cy="115.99707" r="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="175.39063" y1="175.39747" x2="223.99121" y2="223.99805" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="115.99512" cy="115.99707" r="84" opacity="0.2"/>
  <line x1="83.99512" y1="116" x2="147.99512" y2="116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="115.99512" cy="115.99707" r="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="175.38868" y1="175.39747" x2="223.98926" y2="223.99805" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M229.64746,218.34131l-43.2229-43.22284a92.11145,92.11145,0,1,0-11.31445,11.31341l43.2229,43.22291a8.00018,8.00018,0,0,0,11.31445-11.31348ZM147.99609,124h-64a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<line x1="83.99805" y1="116" x2="147.99805" y2="116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="115.99805" cy="115.99707" r="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="175.39161" y1="175.39747" x2="223.99219" y2="223.99805" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="83.99902" y1="116" x2="147.99902" y2="116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="115.99902" cy="115.99707" r="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="175.39258" y1="175.39747" x2="223.99316" y2="223.99805" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="84" y1="116" x2="148" y2="116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="116" cy="115.99707" r="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="175.39356" y1="175.39747" x2="223.99414" y2="223.99805" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-magnifying-glass-minus", PhMagnifyingGlassMinus);
export default PhMagnifyingGlassMinus;
