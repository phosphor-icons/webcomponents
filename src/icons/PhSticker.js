/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSticker = {
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
      ${weight === "bold" && svg`<path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M136,216V184a48,48,0,0,1,48-48h32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M136,216V184a48,48,0,0,1,48-48h32C208,160,160,208,136,216Z" opacity="0.2"/>
  <g>
    <path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <path d="M136,216V184a48,48,0,0,1,48-48h32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </g>`}
      ${weight === "fill" && svg`<path d="M168,32H88A56.0629,56.0629,0,0,0,32,88v80a56.0629,56.0629,0,0,0,56,56h48a8.0151,8.0151,0,0,0,2.53027-.41016c26.23243-8.74511,76.31446-58.82714,85.05957-85.05957A8.0151,8.0151,0,0,0,224,136V88A56.0629,56.0629,0,0,0,168,32ZM136,207.42236V176a40.04584,40.04584,0,0,1,40-40h31.42236C198.15991,157.55176,157.55176,198.16016,136,207.42236Z"/>`}
      ${weight === "light" && svg`<path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M136,216V184a48,48,0,0,1,48-48h32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M136,216V184a48,48,0,0,1,48-48h32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M136,216V184a48,48,0,0,1,48-48h32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-sticker", PhSticker);
export default PhSticker;
