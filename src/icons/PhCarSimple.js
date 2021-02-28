/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCarSimple = {
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
      svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M32,120,61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120Z" opacity="0.2"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M240,112H229.199L201.42188,49.501A16.01649,16.01649,0,0,0,186.80078,40H69.19922a16.0158,16.0158,0,0,0-14.6211,9.502L26.801,112H16a8,8,0,0,0,0,16h8v80a16.01833,16.01833,0,0,0,16,16H64a16.01833,16.01833,0,0,0,16-16V192h96v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V128h8a8,8,0,0,0,0-16Z"/>`}
      ${weight === "light" &&
      svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-car-simple", PhCarSimple);
export default PhCarSimple;
