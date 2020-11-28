/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNotePencil = {
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
      ${weight === "bold" && svg`<polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="164" y1="60" x2="196" y2="92" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M216,128.56836V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h79.43163" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polygon points="128 160 96 160 96 128 168 56 200 88 128 160" opacity="0.2"/>
  <polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M229.65723,58.34326l-32-32a8.00034,8.00034,0,0,0-11.31446,0l-96,96A8.00035,8.00035,0,0,0,88,128v32a8.00008,8.00008,0,0,0,8,8h32a8.00076,8.00076,0,0,0,5.65723-2.34326l96-96A8,8,0,0,0,229.65723,58.34326Zm-29.657,18.343L179.314,56,192,43.31372,212.68652,64Z"/>
    <path d="M217.61133,104.33008l-72.63867,72.63769a23.84434,23.84434,0,0,1-16.97071,7.03028h-32a24.02687,24.02687,0,0,1-24-24v-32a23.84117,23.84117,0,0,1,7.0293-16.96973l72.6582-72.6582a7.88176,7.88176,0,0,0-7.67187-6.37207H48.002a16.01582,16.01582,0,0,0-16,16v160a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16V112.00586A7.88084,7.88084,0,0,0,217.61133,104.33008Z"/>
  </g>`}
      ${weight === "light" && svg`<polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-note-pencil", PhNotePencil);
export default PhNotePencil;
