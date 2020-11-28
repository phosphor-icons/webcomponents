/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowSquareLeft = {
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
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="121.941 94.059 88 128 121.941 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="121.941 94.059 88 128 121.941 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,207.99414v-160a16.01583,16.01583,0,0,0-16-16H48a16.01583,16.01583,0,0,0-16,16v160a16.01582,16.01582,0,0,0,16,16H208A16.01582,16.01582,0,0,0,224,207.99414ZM116.28125,167.60352,82.35352,133.66016a8.02367,8.02367,0,0,1,0-11.332l33.92773-33.92773a7.99915,7.99915,0,0,1,11.3125,11.3125L107.3125,119.99414H168a8,8,0,1,1,0,16H107.30762L127.59375,156.291a7.99915,7.99915,0,0,1-11.3125,11.3125Z"/>`}
      ${weight === "light" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="121.941 94.059 88 128 121.941 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="121.941 94.059 88 128 121.941 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="121.941 94.059 88 128 121.941 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-square-left", PhArrowSquareLeft);
export default PhArrowSquareLeft;
