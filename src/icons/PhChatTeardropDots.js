/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChatTeardropDots = {
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
      svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="132" cy="128" r="16"/>
  <circle cx="180" cy="128" r="16"/>
  <circle cx="84" cy="128" r="16"/>`}
      ${weight === "duotone" &&
      svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" opacity="0.2"/>
  <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="132" cy="128" r="12"/>
  <circle cx="84" cy="128" r="12"/>
  <circle cx="180" cy="128" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M132,23.99219a100.113,100.113,0,0,0-100,100v84.33349a15.68449,15.68449,0,0,0,15.667,15.66651H132a100,100,0,0,0,0-200Zm-48.00195,116.001a12,12,0,1,1,12-12A12,12,0,0,1,83.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,131.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,179.99805,139.99316Z"/>`}
      ${weight === "light" &&
      svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="132" cy="128" r="10"/>
  <circle cx="180" cy="128" r="10"/>
  <circle cx="84" cy="128" r="10"/>`}
      ${weight === "thin" &&
      svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="132" cy="128" r="8"/>
  <circle cx="84" cy="128" r="8"/>
  <circle cx="180" cy="128" r="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="132" cy="128" r="12"/>
  <circle cx="84" cy="128" r="12"/>
  <circle cx="180" cy="128" r="12"/>`}
    </svg>
  `,
};

define("ph-chat-teardrop-dots", PhChatTeardropDots);
export default PhChatTeardropDots;
