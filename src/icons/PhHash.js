/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHash = {
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
      svg`<line x1="43.63636" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="40" x2="144" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="112" y1="40" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="160" x2="212.36376" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="43.63636" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="40" x2="144" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="40" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="160" x2="212.36376" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,88H175.40381l8.46728-46.56934a8.00005,8.00005,0,1,0-15.74218-2.86132L159.1416,88H111.40381l8.46728-46.56934a8.00005,8.00005,0,1,0-15.74218-2.86132L95.1416,88H43.63672a8,8,0,0,0,0,16h48.5957l-8.72754,48H32a8,8,0,0,0,0,16H80.59619l-8.46728,46.56934a8.00005,8.00005,0,1,0,15.74218,2.86132L96.8584,168h47.73779l-8.46728,46.56934a8.00005,8.00005,0,1,0,15.74218,2.86132L160.8584,168h51.50488a8,8,0,1,0,0-16h-48.5957l8.72754-48H224a8,8,0,0,0,0-16Zm-76.49512,64H99.76758l8.72754-48h47.7373Z"/>`}
      ${weight === "light" &&
      svg`<line x1="43.63636" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="40" x2="144" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="112" y1="40" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="160" x2="212.36376" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="43.63636" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="40" x2="144" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="112" y1="40" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="160" x2="212.36376" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="43.63636" y1="96" x2="224" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="40" x2="144" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="40" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="160" x2="212.36376" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-hash", PhHash);
export default PhHash;
