/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowFatLineRight = {
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
      svg`<polygon points="136 32 232 128 136 224 136 176 80 176 80 80 136 80 136 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" opacity="0.2"/>
  <polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M132.93848,231.39062A8,8,0,0,1,128,224V184H72a8.00039,8.00039,0,0,1-8-8V80a8.00039,8.00039,0,0,1,8-8h56V32a8.00065,8.00065,0,0,1,13.65723-5.65723l96,96a8.003,8.003,0,0,1,0,11.31446l-96,96A8.002,8.002,0,0,1,132.93848,231.39062ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-fat-line-right", PhArrowFatLineRight);
export default PhArrowFatLineRight;
