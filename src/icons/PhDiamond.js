/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDiamond = {
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
      ${weight === "bold" && svg`<rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" && svg`<rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" opacity="0.2"/>
  <rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" && svg`<path d="M240,116.68652,139.31348,16a16.01779,16.01779,0,0,0-22.627,0L16,116.68652a16.01779,16.01779,0,0,0,0,22.627L116.68652,240a16.01779,16.01779,0,0,0,22.627,0L240,139.31348A16.01779,16.01779,0,0,0,240,116.68652Z"/>`}
      ${weight === "light" && svg`<rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" && svg`<rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" && svg`<rect x="48.80404" y="48.80404" width="158.39192" height="158.39192" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-diamond", PhDiamond);
export default PhDiamond;
