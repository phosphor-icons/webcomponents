/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFastForwardCircle = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="88 156 124 128 88 100 88 156" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="144 156 180 128 144 100 144 156" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="88 156 124 128 88 100 88 156"/>
  <polygon points="144 156 180 128 144 100 144 156"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32ZM80,160V96l48,32Zm64,0V96l48,32Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="80 160 128 128 80 96 80 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="144 160 192 128 144 96 144 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm68.4375,110.65625-48,32A8.00016,8.00016,0,0,1,136,160V128a7.99943,7.99943,0,0,1-3.5625,6.65625l-48,32A8.00016,8.00016,0,0,1,72,160V96a8.00016,8.00016,0,0,1,12.4375-6.65625l48,32A7.99943,7.99943,0,0,1,136,128V96a8.00016,8.00016,0,0,1,12.4375-6.65625l48,32a7.99959,7.99959,0,0,1,0,13.3125Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="84 160 132 128 84 96 84 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="140 160 188 128 140 96 140 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="84 160 132 128 84 96 84 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="140 160 188 128 140 96 140 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="80 160 128 128 80 96 80 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="144 160 192 128 144 96 144 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-fast-forward-circle", PhFastForwardCircle);
export default PhFastForwardCircle;
