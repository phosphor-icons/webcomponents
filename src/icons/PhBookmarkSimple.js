/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBookmarkSimple = {
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
      svg`<path d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" opacity="0.2"/>
  <path d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M192,24H64A16.01583,16.01583,0,0,0,48,40V224a7.99583,7.99583,0,0,0,11.89063,6.99219L128,193.14844l68.10938,37.84375A7.99583,7.99583,0,0,0,208,224V40A16.01582,16.01582,0,0,0,192,24Z"/>`}
      ${weight === "light" &&
      svg`<path d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bookmark-simple", PhBookmarkSimple);
export default PhBookmarkSimple;
