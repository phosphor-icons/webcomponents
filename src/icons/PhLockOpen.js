/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhLockOpen = {
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
      ${weight === "bold" && svg`<rect x="40" y="88" width="176" height="128" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M92,88V52a36.00169,36.00169,0,0,1,71.78028-4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="152" r="16"/>`}
      ${weight === "duotone" && svg`<rect x="40" y="88" width="176" height="128" rx="8" opacity="0.2"/>
  <rect x="40" y="88" width="176" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M92,88V52a36,36,0,0,1,72,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="152" r="12"/>`}
      ${weight === "fill" && svg`<path d="M208,80H100V52a28,28,0,0,1,56,0,8,8,0,0,0,16,0,44,44,0,0,0-88,0V80H48A16.01833,16.01833,0,0,0,32,96V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,208,80Zm-80.00586,84a12,12,0,1,1,12-12A12,12,0,0,1,127.99414,164Z"/>`}
      ${weight === "light" && svg`<rect x="40" y="88" width="176" height="128" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M92,88V52a36,36,0,0,1,72,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="152" r="10"/>`}
      ${weight === "thin" && svg`<rect x="40" y="88" width="176" height="128" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M92,88V52a36,36,0,0,1,72,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="152" r="8"/>`}
      ${weight === "regular" && svg`<rect x="40" y="88" width="176" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M92,88V52a36,36,0,0,1,72,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="152" r="12"/>`}
    </svg>
  `,
};

define("ph-lock-open", PhLockOpen);
export default PhLockOpen;
