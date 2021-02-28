/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBrowsers = {
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
      svg`<rect x="28.00781" y="84.00005" width="160" height="128" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M68.00781,84.00005v-32a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V164a8,8,0,0,1-8,8h-32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="28" y1="124" x2="188" y2="124" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M216.00781,48h-144a7.99993,7.99993,0,0,0-8,8V80h120a7.99993,7.99993,0,0,1,8,8v88h24a7.99977,7.99977,0,0,0,8-8V56A7.99993,7.99993,0,0,0,216.00781,48Z" opacity="0.2"/>
  <rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216.00781,40h-144a16.01818,16.01818,0,0,0-16,16V72h-16a16.01818,16.01818,0,0,0-16,16v23.84521c-.001.052-.00781.10254-.00781.15479s.00684.10278.00781.15479V200a16.01833,16.01833,0,0,0,16,16h144a16.01833,16.01833,0,0,0,16-16V184h16a16.01833,16.01833,0,0,0,16-16V56A16.01817,16.01817,0,0,0,216.00781,40Zm-32,48,.00147,16H40.00781V88Zm32,80h-16V88a16.01817,16.01817,0,0,0-16-16h-112V56h144Z"/>`}
      ${weight === "light" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="32.00781" y="80.00005" width="160" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-browsers", PhBrowsers);
export default PhBrowsers;
