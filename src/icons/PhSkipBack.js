/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSkipBack = {
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
      svg`<path d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="56" y1="40" x2="56" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z" opacity="0.2"/>
  <path d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="40" x2="56" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M56,32a8.00008,8.00008,0,0,1,8,8v73.73535l119.65723-73.124A16.0002,16.0002,0,0,1,208,54.26465v147.4707a16.004,16.004,0,0,1-24.34375,13.65283L64,142.26416V216a8,8,0,0,1-16,0V40A8.00008,8.00008,0,0,1,56,32Z"/>`}
      ${weight === "light" &&
      svg`<path d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="40" x2="56" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="40" x2="56" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="40" x2="56" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-skip-back", PhSkipBack);
export default PhSkipBack;
