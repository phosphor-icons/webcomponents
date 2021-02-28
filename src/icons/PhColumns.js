/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhColumns = {
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
      svg`<rect x="-10" y="98" width="176" height="60" rx="8" transform="translate(206 50) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="90" y="98" width="176" height="60" rx="8" transform="translate(306 -50) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="-8" y="96" width="176" height="64" rx="8" transform="translate(208 48) rotate(90)" opacity="0.2"/>
  <rect x="88" y="96" width="176" height="64" rx="8" transform="translate(304 -48) rotate(90)" opacity="0.2"/>
  <rect x="-8" y="96" width="176" height="64" rx="8" transform="translate(208 48) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="88" y="96" width="176" height="64" rx="8" transform="translate(304 -48) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<g>
    <rect x="40" y="32" width="80" height="192" rx="16"/>
    <rect x="136" y="32" width="80" height="192" rx="16"/>
  </g>`}
      ${weight === "light" &&
      svg`<rect x="-8" y="96" width="176" height="64" rx="8" transform="translate(208 48) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="88" y="96" width="176" height="64" rx="8" transform="translate(304 -48) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<rect x="-8" y="96" width="176" height="64" rx="8" transform="translate(208 48) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="88" y="96" width="176" height="64" rx="8" transform="translate(304 -48) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<rect x="-8" y="96" width="176" height="64" rx="8" transform="translate(208 48) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="88" y="96" width="176" height="64" rx="8" transform="translate(304 -48) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-columns", PhColumns);
export default PhColumns;
