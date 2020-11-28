/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhRewindCircle = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="168 156 132 128 168 100 168 156" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="112 156 76 128 112 100 112 156" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="168 156 132 128 168 100 168 156"/>
  <polygon points="112 156 76 128 112 100 112 156"/>`}
      ${weight === "duotone" && svg`<path d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32ZM112,160,64,128l48-32Zm64,0-48-32,48-32Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M24,128A104,104,0,1,0,128,24,104.11791,104.11791,0,0,0,24,128Zm32,0a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,120,96v32a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,184,96v64a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,120,128v32a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,56,128Z"/>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="172 160 124 128 172 96 172 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="116 160 68 128 116 96 116 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="172 160 124 128 172 96 172 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="116 160 68 128 116 96 116 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-rewind-circle", PhRewindCircle);
export default PhRewindCircle;
