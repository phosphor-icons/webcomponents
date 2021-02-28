/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCellSignalFull = {
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
      svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="120" y1="104" x2="120" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="80" y1="144" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" opacity="0.2"/>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M198.12305,28.53186a15.95339,15.95339,0,0,0-17.4375,3.46826L16.001,196.68616a15.99933,15.99933,0,0,0,11.3125,27.314H192a16.018,16.018,0,0,0,16-16V43.3136A15.95222,15.95222,0,0,0,198.12305,28.53186Z"/>`}
      ${weight === "light" &&
      svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="120" y1="104" x2="120" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="80" y1="144" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="120" y1="104" x2="120" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="80" y1="144" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="160" y1="64" x2="160" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="104" x2="120" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="144" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-cell-signal-full", PhCellSignalFull);
export default PhCellSignalFull;
