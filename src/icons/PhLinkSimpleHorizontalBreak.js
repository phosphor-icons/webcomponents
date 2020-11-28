/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhLinkSimpleHorizontalBreak = {
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
      ${weight === "bold" && svg`<path d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152,175.99609h40a48,48,0,0,0,0-96H152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,175.99609h40a48,48,0,0,0,0-96H152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M103.99316,167.99609h-40a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16h-40a56,56,0,0,0,0,112h40a8,8,0,1,0,0-16Z"/>
    <path d="M192,71.99609H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z"/>
  </g>`}
      ${weight === "light" && svg`<path d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M152,175.99609h40a48,48,0,0,0,0-96H152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M152,175.99609h40a48,48,0,0,0,0-96H152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,175.99609h40a48,48,0,0,0,0-96H152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-link-simple-horizontal-break", PhLinkSimpleHorizontalBreak);
export default PhLinkSimpleHorizontalBreak;
