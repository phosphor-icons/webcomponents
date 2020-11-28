/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhProhibitInset = {
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
      ${weight === "bold" && svg`<circle cx="128.00049" cy="128.00452" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="99.71622" y1="99.72024" x2="156.28476" y2="156.28879" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="128.00049" cy="128.00452" r="96" opacity="0.2"/>
  <circle cx="128.00049" cy="128.00452" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="99.71622" y1="99.72024" x2="156.28476" y2="156.28879" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M128.00049,24.00452a104,104,0,1,0,104,104A104.12041,104.12041,0,0,0,128.00049,24.00452Zm22.62742,137.94112L94.05936,105.3771a8,8,0,0,1,11.31371-11.31371l56.56854,56.56854a8,8,0,1,1-11.3137,11.31371Z"/>`}
      ${weight === "light" && svg`<circle cx="128.00049" cy="128.00452" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="99.71622" y1="99.72024" x2="156.28476" y2="156.28879" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128.00049" cy="128.00452" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="99.71622" y1="99.72024" x2="156.28476" y2="156.28879" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128.00049" cy="128.00452" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="99.71622" y1="99.72024" x2="156.28476" y2="156.28879" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-prohibit-inset", PhProhibitInset);
export default PhProhibitInset;
