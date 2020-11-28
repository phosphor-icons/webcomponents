/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTextAlignLeft = {
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
      ${weight === "bold" && svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40.00614" y1="188" x2="168" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="188" x2="168" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M40.02344,76h176a8,8,0,0,0,0-16h-176a8,8,0,1,0,0,16Z"/>
    <path d="M40.02344,116h128a8,8,0,0,0,0-16h-128a8,8,0,1,0,0,16Z"/>
    <path d="M216.02344,140H40.0293a8,8,0,0,0,0,16H216.02344a8,8,0,0,0,0-16Z"/>
    <path d="M168.02344,180H40.0293a8,8,0,0,0,0,16H168.02344a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" && svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40.00614" y1="188" x2="168" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40.00614" y1="188" x2="168" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.00614" y1="188" x2="168" y2="188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-text-align-left", PhTextAlignLeft);
export default PhTextAlignLeft;
