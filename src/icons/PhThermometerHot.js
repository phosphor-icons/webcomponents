/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhThermometerHot = {
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
      ${weight === "bold" && svg`<circle cx="108" cy="188" r="12" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="108" y1="176" x2="108" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M68,154.77579V56a40,40,0,0,1,80,0v98.77485l.0017-.0014a52,52,0,1,1-80.00385.00054Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="120" cy="188" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="168" x2="120" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152.00787,147.01562,152,147.02539V48a32,32,0,0,0-64,0v99.02539l-.00787-.00977a52,52,0,1,0,64.01574,0ZM120,208a20,20,0,1,1,20-20A19.9999,19.9999,0,0,1,120,208Z" opacity="0.2"/>`}
      ${weight === "fill" && svg`<path d="M160,143.27441V48a40,40,0,0,0-80,0v95.27441a60,60,0,1,0,80,0ZM120,24a24.02718,24.02718,0,0,1,24,24v8H96V48A24.02718,24.02718,0,0,1,120,24Zm58.05908,61.65723a8.00034,8.00034,0,0,1,0-11.31446,27.99923,27.99923,0,0,1,39.59766,0,12.01214,12.01214,0,0,0,16.9707,0,8.00018,8.00018,0,0,1,11.31348,11.31446,27.99923,27.99923,0,0,1-39.59766,0,12.01214,12.01214,0,0,0-16.9707,0A8.00182,8.00182,0,0,1,178.05908,85.65723Zm67.88184,28.68554a8.00034,8.00034,0,0,1,0,11.31446,27.99923,27.99923,0,0,1-39.59766,0,12.01214,12.01214,0,0,0-16.9707,0,8.00018,8.00018,0,0,1-11.31348-11.31446,27.99923,27.99923,0,0,1,39.59766,0,12.01214,12.01214,0,0,0,16.9707,0A8.00182,8.00182,0,0,1,245.94092,114.34277Z"/>`}
      ${weight === "light" && svg`<circle cx="120" cy="188" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="120" y1="168" x2="120" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="120" cy="188" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="120" y1="168" x2="120" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="120" cy="188" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="168" x2="120" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-thermometer-hot", PhThermometerHot);
export default PhThermometerHot;
