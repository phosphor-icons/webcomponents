/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMoney = {
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
      svg`<rect x="16" y="64" width="224" height="128" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="172" y1="64" x2="240" y2="124" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="172" y1="192" x2="240" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="84" y1="64" x2="16" y2="124" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="84" y1="192" x2="16" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<g opacity="0.2">
    <circle cx="128" cy="128" r="32"/>
    <path d="M232,64H176l64,56V72A7.99993,7.99993,0,0,0,232,64Z"/>
    <path d="M232,192a7.99993,7.99993,0,0,0,8-8V136l-64,56Z"/>
    <path d="M16,72v48L80,64H24A7.99993,7.99993,0,0,0,16,72Z"/>
    <path d="M16,184a7.99993,7.99993,0,0,0,8,8H80L16,136Z"/>
  </g>
  <rect x="16" y="64" width="224" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="64" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="192" x2="240" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="64" x2="16" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="192" x2="16" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M232,56H24A16.01833,16.01833,0,0,0,8,72V184a16.01833,16.01833,0,0,0,16,16H232a16.01833,16.01833,0,0,0,16-16V72A16.01833,16.01833,0,0,0,232,56ZM74.95947,184,24,140.32056V115.67944L74.95947,72H181.04053l50.96338,43.68262.002,24.63281L181.04053,184ZM168,128a40,40,0,1,1-40-40A40.04584,40.04584,0,0,1,168,128Z"/>`}
      ${weight === "light" &&
      svg`<rect x="16" y="64" width="224" height="128" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="64" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="192" x2="240" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="80" y1="64" x2="16" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="80" y1="192" x2="16" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="16" y="64" width="224" height="128" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="64" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="192" x2="240" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="80" y1="64" x2="16" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="80" y1="192" x2="16" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="16" y="64" width="224" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="64" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="192" x2="240" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="64" x2="16" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="192" x2="16" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-money", PhMoney);
export default PhMoney;
