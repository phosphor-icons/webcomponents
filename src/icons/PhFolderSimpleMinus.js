/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFolderSimpleMinus = {
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
      svg`<line x1="104" y1="144" x2="152" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" opacity="0.2"/>
  <line x1="103.99414" y1="144" x2="151.99414" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M215.99512,71.99805H130.667l-27.75-20.80469a16.07363,16.07363,0,0,0-9.57812-3.19531H39.99512a16.01581,16.01581,0,0,0-16,16v136a16.01582,16.01582,0,0,0,16,16H216.88574a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805ZM151.99414,152h-48a8,8,0,0,1,0-16h48a8,8,0,1,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<line x1="104" y1="144" x2="152" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="104" y1="144" x2="152" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="104" y1="144" x2="152" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-folder-simple-minus", PhFolderSimpleMinus);
export default PhFolderSimpleMinus;
