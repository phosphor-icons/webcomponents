/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChatTeardropText = {
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
      ${weight === "bold" && svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="99.99902" y1="107.99219" x2="159.99902" y2="107.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="99.99902" y1="147.99219" x2="159.99902" y2="147.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" opacity="0.2"/>
  <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="99.99805" y1="111.99219" x2="159.99805" y2="111.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="99.99805" y1="143.99219" x2="159.99805" y2="143.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M132,23.99219a100.113,100.113,0,0,0-100,100v84.33349a15.68449,15.68449,0,0,0,15.667,15.66651H132a100,100,0,0,0,0-200Zm27.99805,128h-60a8,8,0,0,1,0-16h60a8,8,0,0,1,0,16Zm0-32h-60a8,8,0,0,1,0-16h60a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" && svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="99.99951" y1="111.99219" x2="159.99951" y2="111.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="99.99951" y1="143.99219" x2="159.99951" y2="143.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="100" y1="111.99219" x2="160" y2="111.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="100" y1="143.99219" x2="160" y2="143.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="100.00049" y1="111.99219" x2="160.00049" y2="111.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="100.00049" y1="143.99219" x2="160.00049" y2="143.99219" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-chat-teardrop-text", PhChatTeardropText);
export default PhChatTeardropText;
