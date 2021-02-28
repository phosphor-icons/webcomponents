/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBrowser = {
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
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M32,96H224l.00781-39.99995a8,8,0,0,0-8-8h-176a8,8,0,0,0-8,8Z" opacity="0.2"/>
  <rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216.00781,40h-176a16.01833,16.01833,0,0,0-16,16V95.84521C24.00684,95.89746,24,95.94775,24,96s.00684.10254.00781.15479V200a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216.00781,40Zm0,16,.002,32H40.00781V56Z"/>`}
      ${weight === "light" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="32.00781" y="48.00005" width="192" height="160" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-browser", PhBrowser);
export default PhBrowser;
