/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGitCommit = {
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
      ${weight === "bold" && svg`<circle cx="128.00244" cy="128" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="12.00244" y1="128" x2="76.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="180.00244" y1="128" x2="244.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="128.00244" cy="128" r="52" opacity="0.2"/>
  <circle cx="128.00244" cy="128" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="8.00244" y1="128" x2="76.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="180.00244" y1="128" x2="248.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M248.00244,120H187.45312a59.98446,59.98446,0,0,0-118.90136,0H8.00244a8,8,0,0,0,0,16H68.55176a59.98446,59.98446,0,0,0,118.90136,0h60.54932a8,8,0,0,0,0-16Z"/>`}
      ${weight === "light" && svg`<circle cx="128.00244" cy="128" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="8.00244" y1="128" x2="76.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="180.00244" y1="128" x2="248.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128.00244" cy="128" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="8.00244" y1="128" x2="76.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="180.00244" y1="128" x2="248.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128.00244" cy="128" r="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="8.00244" y1="128" x2="76.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="180.00244" y1="128" x2="248.00244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-git-commit", PhGitCommit);
export default PhGitCommit;
