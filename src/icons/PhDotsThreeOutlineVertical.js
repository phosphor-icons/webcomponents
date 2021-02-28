/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDotsThreeOutlineVertical = {
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
      svg`<circle cx="128" cy="128" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="48" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="208" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="24" opacity="0.1"/>
  <circle cx="128" cy="48" r="24" opacity="0.1"/>
  <circle cx="128" cy="208" r="24" opacity="0.1"/>
  <circle cx="128" cy="128" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="128" cy="48" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="128" cy="208" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<circle cx="128" cy="128" r="32"/>
  <circle cx="128" cy="48" r="32"/>
  <circle cx="128" cy="208" r="32"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="48" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="208" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="48" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="208" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="128" cy="48" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="128" cy="208" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-dots-three-outline-vertical", PhDotsThreeOutlineVertical);
export default PhDotsThreeOutlineVertical;
