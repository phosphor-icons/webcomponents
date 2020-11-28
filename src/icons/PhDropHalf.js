/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDropHalf = {
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
      svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="232" x2="128" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99999" y1="87.99999" x2="206.65864" y2="166.65864" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99999" y1="147.99999" x2="186.53165" y2="206.53165" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,232a80,80,0,0,0,80-80c0-72-80-128-80-128Z" opacity="0.2"/>
  <path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="232" x2="128" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,232a80,80,0,0,0,80-80c0-72-80-128-80-128Z"/>
  <line x1="128" y1="232" x2="128" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "light" &&
      svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="232" x2="128" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99999" y1="71.99999" x2="208" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99999" y1="119.99999" x2="198.26945" y2="190.26945" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <g>
    <line x1="127.99999" y1="167.99999" x2="176.00281" y2="216.00281" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
    <line x1="127.99999" y1="167.99999" x2="176.00281" y2="216.00281" fill="#231f20"/>
  </g>`}
      ${weight === "thin" &&
      svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="232" x2="128" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99999" y1="71.99999" x2="208" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99999" y1="119.99999" x2="198.26945" y2="190.26945" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <g>
    <line x1="127.99999" y1="167.99999" x2="176.00281" y2="216.00281" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
    <line x1="127.99999" y1="167.99999" x2="176.00281" y2="216.00281" fill="#231f20"/>
  </g>`}
      ${weight === "regular" &&
      svg`<path d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="232" x2="128" y2="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99999" y1="71.99999" x2="208" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99999" y1="119.99999" x2="198.26945" y2="190.26945" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <g>
    <line x1="127.99999" y1="167.99999" x2="176.00281" y2="216.00281" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <line x1="127.99999" y1="167.99999" x2="176.00281" y2="216.00281" fill="#231f20"/>
  </g>`}
    </svg>
  `,
};

define("ph-drop-half", PhDropHalf);
export default PhDropHalf;
