/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhRectangle = {
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
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" opacity="0.2"/>
  <rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<rect x="24.00781" y="40" width="208" height="176" rx="16"/>`}
      ${weight === "light" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-rectangle", PhRectangle);
export default PhRectangle;
