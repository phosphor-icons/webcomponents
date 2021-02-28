/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSquaresFour = {
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
      svg`<rect x="48" y="48" width="60" height="60" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="148" y="48" width="60" height="60" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="148" width="60" height="60" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="148" y="148" width="60" height="60" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="48" y="48" width="64" height="64" opacity="0.2"/>
  <rect x="144" y="48" width="64" height="64" opacity="0.2"/>
  <rect x="48" y="144" width="64" height="64" opacity="0.2"/>
  <rect x="144" y="144" width="64" height="64" opacity="0.2"/>
  <rect x="144" y="144" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="48" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="48" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="144" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<g>
    <rect x="40" y="40" width="80" height="80" rx="8"/>
    <rect x="136" y="40" width="80" height="80" rx="8"/>
    <rect x="40" y="136" width="80" height="80" rx="8"/>
    <rect x="136" y="136" width="80" height="80" rx="8"/>
  </g>`}
      ${weight === "light" &&
      svg`<rect x="48" y="48" width="64" height="64" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="48" width="64" height="64" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="144" width="64" height="64" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="144" width="64" height="64" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<rect x="48" y="48" width="64" height="64" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="48" width="64" height="64" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="144" width="64" height="64" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="144" width="64" height="64" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<rect x="48" y="48" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="48" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="144" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144" y="144" width="64" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-squares-four", PhSquaresFour);
export default PhSquaresFour;
