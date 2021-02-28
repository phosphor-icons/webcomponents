/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBatteryEmpty = {
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
      svg`<rect x="46" y="38" width="144" height="180" rx="16" transform="translate(246 10) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="244" y1="96" x2="244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" opacity="0.2"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M240,88a8.00008,8.00008,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8.00008,8.00008,0,0,0,240,88Z"/>
    <path d="M192,48H40A24.0275,24.0275,0,0,0,16,72V184a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V72A24.0275,24.0275,0,0,0,192,48Zm8,136a8.00917,8.00917,0,0,1-8,8H40a8.00917,8.00917,0,0,1-8-8V72a8.00917,8.00917,0,0,1,8-8H192a8.00917,8.00917,0,0,1,8,8Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-battery-empty", PhBatteryEmpty);
export default PhBatteryEmpty;
