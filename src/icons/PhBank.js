/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBank = {
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
      ${weight === "bold" && svg`<polygon points="32.002 96 224.002 96 128.002 32 32.002 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="56.00244" y1="96" x2="56.00244" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="104.00244" y1="96" x2="104.00244" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="152.00244" y1="96" x2="152.00244" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="200.00244" y1="96" x2="200.00244" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32.00244" y1="168" x2="224.00244" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="16.00244" y1="208" x2="240.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polygon points="32.002 96 224.002 96 128.002 32 32.002 96" opacity="0.2"/>
  <polygon points="32.002 96 224.002 96 128.002 32 32.002 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56.00244" y1="96" x2="56.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104.00244" y1="96" x2="104.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="152.00244" y1="96" x2="152.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200.00244" y1="96" x2="200.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32.00244" y1="176" x2="224.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16.00244" y1="208" x2="240.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M240.00244,200h-224a8,8,0,0,0,0,16h224a8,8,0,0,0,0-16Z"/>
    <path d="M32.00244,168a8,8,0,0,0,0,16h192a8,8,0,0,0,0-16h-16V104h16a8.00005,8.00005,0,0,0,4.4375-14.65625l-96-64a8.00131,8.00131,0,0,0-8.875,0l-96,64A8.00005,8.00005,0,0,0,32.00244,104h16v64Zm112-56a8,8,0,1,1,16,0v48a8,8,0,0,1-16,0Zm-48,0a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Z"/>
  </g>`}
      ${weight === "light" && svg`<polygon points="32.002 96 224.002 96 128.002 32 32.002 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56.00244" y1="96" x2="56.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="104.00244" y1="96" x2="104.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="152.00244" y1="96" x2="152.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="200.00244" y1="96" x2="200.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32.00244" y1="176" x2="224.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="16.00244" y1="208" x2="240.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polygon points="32.002 96 224.002 96 128.002 32 32.002 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56.00244" y1="96" x2="56.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="104.00244" y1="96" x2="104.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="152.00244" y1="96" x2="152.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="200.00244" y1="96" x2="200.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32.00244" y1="176" x2="224.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="16.00244" y1="208" x2="240.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polygon points="32.002 96 224.002 96 128.002 32 32.002 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56.00244" y1="96" x2="56.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104.00244" y1="96" x2="104.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="152.00244" y1="96" x2="152.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200.00244" y1="96" x2="200.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32.00244" y1="176" x2="224.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16.00244" y1="208" x2="240.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bank", PhBank);
export default PhBank;
