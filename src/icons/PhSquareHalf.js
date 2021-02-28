/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSquareHalf = {
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
      svg`<rect x="44" y="44" width="168" height="168" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="128" y1="44" x2="128" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="139.99414" y1="44" x2="212" y2="116.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99998" y1="88.00584" x2="212" y2="172.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99998" y1="144.00584" x2="195.99414" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,44h76a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H128Z" opacity="0.2"/>
  <rect x="44" y="44" width="168" height="168" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="128" y1="44" x2="128" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M204,36H52A16.01833,16.01833,0,0,0,36,52V204a16.01833,16.01833,0,0,0,16,16H204a16.01833,16.01833,0,0,0,16-16V52A16.01833,16.01833,0,0,0,204,36ZM52,52h76V204H52Z"/>`}
      ${weight === "light" &&
      svg`<rect x="44" y="44" width="168" height="168" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="128" y1="44" x2="128" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="139.99414" y1="44" x2="212" y2="116.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99998" y1="88.00584" x2="212" y2="172.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99998" y1="144.00584" x2="195.99414" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="44" y="44" width="168" height="168" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="128" y1="44" x2="128" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="139.99414" y1="44" x2="212" y2="116.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99998" y1="88.00584" x2="212" y2="172.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99998" y1="144.00584" x2="195.99414" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="44" y="44" width="168" height="168" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="128" y1="44" x2="128" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="139.99414" y1="44" x2="212" y2="116.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99998" y1="88.00584" x2="212" y2="172.00586" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99998" y1="144.00584" x2="195.99414" y2="212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-square-half", PhSquareHalf);
export default PhSquareHalf;
