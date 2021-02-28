/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowFatLinesUp = {
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
      svg`<polygon points="32 120 128 24 224 120 176 120 176 140 80 140 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="212" x2="80" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="176" x2="80" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" opacity="0.2"/>
  <polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="184" x2="80" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M231.39111,123.06152A8.00015,8.00015,0,0,1,224,128H184v24a8.00008,8.00008,0,0,1-8,8H80a8.00008,8.00008,0,0,1-8-8V128H32a8.0001,8.0001,0,0,1-5.65674-13.65723l96-96a8.00182,8.00182,0,0,1,11.31348,0l96,96A8.00061,8.00061,0,0,1,231.39111,123.06152ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-32H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="184" x2="80" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="184" x2="80" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="184" x2="80" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-fat-lines-up", PhArrowFatLinesUp);
export default PhArrowFatLinesUp;
