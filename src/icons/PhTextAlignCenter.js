/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTextAlignCenter = {
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
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40.00307" y1="148" x2="215.99693" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="64.00307" y1="188" x2="191.99693" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00307" y1="148" x2="215.99693" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64.00307" y1="188" x2="191.99693" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"/>
    <path d="M64,100a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"/>
    <path d="M215.99707,140H40.00293a8,8,0,1,0,0,16H215.99707a8,8,0,0,0,0-16Z"/>
    <path d="M191.99707,180H64.00293a8,8,0,0,0,0,16H191.99707a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40.00307" y1="148" x2="215.99693" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64.00307" y1="188" x2="191.99693" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40.00307" y1="148" x2="215.99693" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64.00307" y1="188" x2="191.99693" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00307" y1="148" x2="215.99693" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64.00307" y1="188" x2="191.99693" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-text-align-center", PhTextAlignCenter);
export default PhTextAlignCenter;
