/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhStop = {
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
      svg`<rect x="52" y="52" width="152" height="152" rx="6.90909" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="52" y="52" width="152" height="152" rx="6.90909" opacity="0.2"/>
  <rect x="52" y="52" width="152" height="152" rx="6.90909" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<rect x="44" y="44" width="168" height="168" rx="14.90918"/>`}
      ${weight === "light" &&
      svg`<rect x="52" y="52" width="152" height="152" rx="6.90909" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<rect x="52" y="52" width="152" height="152" rx="6.90909" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<rect x="52" y="52" width="152" height="152" rx="6.90909" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-stop", PhStop);
export default PhStop;
