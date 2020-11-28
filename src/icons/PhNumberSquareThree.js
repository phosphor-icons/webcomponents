/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberSquareThree = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<path d="M104,84h47.99366l-27.99,40.00455a27.99773,27.99773,0,1,1-19.79638,47.79511" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <path d="M104,84h47.99366l-27.99,40.00455a27.99773,27.99773,0,1,1-19.79638,47.79511" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM149.457,177.45654a35.9963,35.9963,0,0,1-50.90723,0,8.00018,8.00018,0,0,1,11.31446-11.31347,19.99683,19.99683,0,1,0,14.13965-34.13868,7.99971,7.99971,0,0,1-6.55469-12.58642L136.63281,92H104a8,8,0,0,1,0-16h47.99414a7.99973,7.99973,0,0,1,6.55469,12.58643L137.5332,118.62305A36.01783,36.01783,0,0,1,149.457,177.45654Z"/>`}
      ${weight === "light" &&
      svg`<path d="M104,84h47.99366l-27.99,40.00455a27.99773,27.99773,0,1,1-19.79638,47.79511" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<path d="M104,84h47.99366l-27.99,40.00455a27.99773,27.99773,0,1,1-19.79638,47.79511" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<path d="M104,84h47.99366l-27.99,40.00455a27.99773,27.99773,0,1,1-19.79638,47.79511" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-number-square-three", PhNumberSquareThree);
export default PhNumberSquareThree;
