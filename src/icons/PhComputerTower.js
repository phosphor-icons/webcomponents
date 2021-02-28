/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhComputerTower = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<line x1="160" y1="76" x2="96" y2="76" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="116" x2="96" y2="116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="184" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" opacity="0.2"/>
  <line x1="160" y1="72" x2="96" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="104" x2="96" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="180" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M192,24H64A16.01833,16.01833,0,0,0,48,40V216a16.01833,16.01833,0,0,0,16,16H192a16.01833,16.01833,0,0,0,16-16V40A16.01833,16.01833,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12.01343,12.01343,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<line x1="160" y1="72" x2="96" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="104" x2="96" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="180" r="10"/>`}
      ${weight === "thin" &&
      svg`<line x1="160" y1="72" x2="96" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="104" x2="96" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="180" r="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="160" y1="72" x2="96" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="104" x2="96" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="180" r="12"/>`}
    </svg>
  `,
};

define("ph-computer-tower", PhComputerTower);
export default PhComputerTower;
