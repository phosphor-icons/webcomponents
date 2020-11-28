/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowFatLinesLeft = {
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
      ${weight === "bold" && svg`<polygon points="120 32 24 128 120 224 120 176 140 176 140 80 120 80 120 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="212" y1="176" x2="212" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="176" x2="176" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" opacity="0.2"/>
  <polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="176" x2="184" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M114.34277,229.65674l-96-96a8.00182,8.00182,0,0,1,0-11.31348l96-96A8.0001,8.0001,0,0,1,128,32V72h24a8.00008,8.00008,0,0,1,8,8v96a8.00008,8.00008,0,0,1-8,8H128v40a8.0001,8.0001,0,0,1-13.65723,5.65674ZM216,184a8.00008,8.00008,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8.00008,8.00008,0,0,0,216,184Zm-32,0a8.00008,8.00008,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8.00008,8.00008,0,0,0,184,184Z"/>`}
      ${weight === "light" && svg`<polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="176" x2="184" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="176" x2="184" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="176" x2="184" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-fat-lines-left", PhArrowFatLinesLeft);
export default PhArrowFatLinesLeft;
