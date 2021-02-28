/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowCircleLeft = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="121.941 161.941 88 128 121.941 94.059" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="121.941 161.941 88 128 121.941 94.059" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm40,112H107.3125l20.28125,20.28125a7.99915,7.99915,0,1,1-11.3125,11.3125L82.35352,133.666a8.02367,8.02367,0,0,1,0-11.332l33.92773-33.92773a7.99915,7.99915,0,0,1,11.3125,11.3125L107.3125,120H168a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="121.941 161.941 88 128 121.941 94.059" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="121.941 161.941 88 128 121.941 94.059" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="121.941 161.941 88 128 121.941 94.059" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-circle-left", PhArrowCircleLeft);
export default PhArrowCircleLeft;
