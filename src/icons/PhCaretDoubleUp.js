/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretDoubleUp = {
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
      svg`<polyline points="48 208 128 128 208 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="48 128 128 48 208 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="48 208 128 128 208 208 48 208" opacity="0.2"/>
  <polygon points="48 208 128 128 208 208 48 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 128 128 48 208 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M147.314,136H208a8.0001,8.0001,0,0,0,5.65674-13.65723l-80-80a8.00182,8.00182,0,0,0-11.31348,0l-80,80A8.0001,8.0001,0,0,0,48,136h60.686L42.34326,202.34277A8.0001,8.0001,0,0,0,48,216H208a8.0001,8.0001,0,0,0,5.65674-13.65723Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="48 208 128 128 208 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="48 128 128 48 208 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="48 208 128 128 208 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="48 128 128 48 208 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="48 208 128 128 208 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 128 128 48 208 128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-double-up", PhCaretDoubleUp);
export default PhCaretDoubleUp;
