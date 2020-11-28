/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSpeakerSimpleX = {
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
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" opacity="0.2"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M155.50977,24.80957a7.993,7.993,0,0,0-8.42188.875L77.24414,79.99707h-45.25a16.01583,16.01583,0,0,0-16,16v64a16.01583,16.01583,0,0,0,16,16h45.25l69.84375,54.3125a7.99451,7.99451,0,0,0,12.90625-6.3125v-192A7.99374,7.99374,0,0,0,155.50977,24.80957Z"/>
    <path d="M227.30664,127.99707l18.34375-18.34375a7.99915,7.99915,0,0,0-11.3125-11.3125l-18.34375,18.34375L197.65039,98.34082a7.99915,7.99915,0,0,0-11.3125,11.3125l18.34375,18.34375-18.34375,18.34375a7.99915,7.99915,0,1,0,11.3125,11.3125l18.34375-18.34375,18.34375,18.34375a7.99915,7.99915,0,0,0,11.3125-11.3125Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-speaker-simple-x", PhSpeakerSimpleX);
export default PhSpeakerSimpleX;
