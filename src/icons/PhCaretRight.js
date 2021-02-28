/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretRight = {
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
      svg`<polyline points="96 48 176 128 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="96 48 176 128 96 208 96 48" opacity="0.2"/>
  <polygon points="96 48 176 128 96 208 96 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M181.65674,122.34277l-80-80A8.0001,8.0001,0,0,0,88,48V208a8.00018,8.00018,0,0,0,13.65674,5.65723l80-80A8.00034,8.00034,0,0,0,181.65674,122.34277Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="96 48 176 128 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="96 48 176 128 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="96 48 176 128 96 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-right", PhCaretRight);
export default PhCaretRight;
