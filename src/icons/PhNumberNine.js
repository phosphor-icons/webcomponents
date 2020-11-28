/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberNine = {
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
      svg`<line x1="176.48933" y1="115.99533" x2="111.75" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="88" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="176.48933" y1="115.99533" x2="111.75" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="88" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24a64,64,0,1,0,19.38452,124.99121l-42.49585,70.896a7.99956,7.99956,0,1,0,13.72266,8.22558L182.68848,121.2124c.02881-.04736.05664-.095.08545-.14233l.57666-.96216c.10473-.17456.19409-.354.28393-.533A63.95216,63.95216,0,0,0,128,24Zm41.18115,88.62769-.22778.37988a48.6994,48.6994,0,1,1,.22778-.37988Z"/>`}
      ${weight === "light" &&
      svg`<line x1="176.48933" y1="115.99533" x2="111.75" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="88" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="176.48933" y1="115.99533" x2="111.75" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="88" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="176.48933" y1="115.99533" x2="111.75" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="88" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-nine", PhNumberNine);
export default PhNumberNine;
