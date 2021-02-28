/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDotsThree = {
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
      svg`<circle cx="128" cy="128" r="16"/>
  <circle cx="64" cy="128" r="16"/>
  <circle cx="192" cy="128" r="16"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="12"/>
  <circle cx="192" cy="128" r="12"/>
  <circle cx="64" cy="128" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="10"/>
  <circle cx="64" cy="128" r="10"/>
  <circle cx="192" cy="128" r="10"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="8"/>
  <circle cx="64" cy="128" r="8"/>
  <circle cx="192" cy="128" r="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="12"/>
  <circle cx="192" cy="128" r="12"/>
  <circle cx="64" cy="128" r="12"/>`}
    </svg>
  `,
};

define("ph-dots-three", PhDotsThree);
export default PhDotsThree;
