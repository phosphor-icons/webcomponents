/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBookmarks = {
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
      svg`<path d="M164,228l-56.0074-40L52,228V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M92,28H196a8,8,0,0,1,8,8V188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" opacity="0.2"/>
  <path d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,32H192a8,8,0,0,1,8,8V192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M160,56H64A16.01833,16.01833,0,0,0,48,72V224a8.00026,8.00026,0,0,0,12.65039,6.50977l51.34277-36.67872,51.35743,36.67872A7.99952,7.99952,0,0,0,176,224V72A16.01833,16.01833,0,0,0,160,56Z"/>
    <path d="M192,24H88a8,8,0,0,0,0,16H192V192a8,8,0,0,0,16,0V40A16.01833,16.01833,0,0,0,192,24Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<path d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,32H192a8,8,0,0,1,8,8V192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,32H192a8,8,0,0,1,8,8V192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,32H192a8,8,0,0,1,8,8V192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bookmarks", PhBookmarks);
export default PhBookmarks;
