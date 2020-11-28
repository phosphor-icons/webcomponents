/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDotsThreeCircle = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="128" r="16"/>
  <circle cx="80" cy="128" r="16"/>
  <circle cx="176" cy="128" r="16"/>`}
      ${weight === "duotone" && svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="176" cy="128" r="12"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>`}
      ${weight === "fill" && svg`<path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24ZM80,140a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,80,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,128,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,176,140Z"/>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="128" r="10"/>
  <circle cx="80" cy="128" r="10"/>
  <circle cx="176" cy="128" r="10"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="128" r="8"/>
  <circle cx="80" cy="128" r="8"/>
  <circle cx="176" cy="128" r="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>`}
    </svg>
  `,
};

define("ph-dots-three-circle", PhDotsThreeCircle);
export default PhDotsThreeCircle;
