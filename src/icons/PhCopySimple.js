/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCopySimple = {
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
      svg`<polyline points="219.993 175.995 219.993 35.994 79.986 35.994" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="39.98633" y="75.99512" width="140.00586" height="140" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="39.98633" y="71.99512" width="144.00586" height="144" opacity="0.2"/>
  <polyline points="215.993 183.995 215.993 39.994 71.986 39.994" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.98633" y="71.99512" width="144.00586" height="144" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M215.99365,31.99414H71.98682a8,8,0,1,0,0,16H207.99365v136.001a8,8,0,0,0,16,0V39.99414A8.00008,8.00008,0,0,0,215.99365,31.99414Z"/>
    <rect x="31.98682" y="63.99512" width="160.00586" height="160" rx="8"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="215.993 183.995 215.993 39.994 71.986 39.994" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="39.98633" y="71.99512" width="144.00586" height="144" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<polyline points="215.993 183.995 215.993 39.994 71.986 39.994" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="39.98633" y="71.99512" width="144.00586" height="144" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<polyline points="215.993 183.995 215.993 39.994 71.986 39.994" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.98633" y="71.99512" width="144.00586" height="144" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-copy-simple", PhCopySimple);
export default PhCopySimple;
