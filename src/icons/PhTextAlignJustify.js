/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTextAlignJustify = {
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
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="108" x2="216" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40.00614" y1="188" x2="216" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="108" x2="216" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="188" x2="216" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"/>
    <path d="M216,100H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    <path d="M216,140H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"/>
    <path d="M216,180H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="108" x2="216" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40.00614" y1="188" x2="216" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="108" x2="216" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40.00614" y1="188" x2="216" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="108" x2="216" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="188" x2="216" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-text-align-justify", PhTextAlignJustify);
export default PhTextAlignJustify;
