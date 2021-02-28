/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPaperclipHorizontal = {
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
      svg`<path d="M183.99414,120H48a28,28,0,0,0,0,56H187.99414a48,48,0,1,0,0-96h-112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M191.99414,184H46c-21.62207,0-39.21289-17.94434-39.21289-40S24.37793,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.7998,0-23.21289,10.7666-23.21289,24S33.2002,168,46,168H191.99414a40,40,0,1,0,0-80h-112a8,8,0,0,1,0-16h112a56,56,0,1,1,0,112Z"/>`}
      ${weight === "light" &&
      svg`<path d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-paperclip-horizontal", PhPaperclipHorizontal);
export default PhPaperclipHorizontal;
