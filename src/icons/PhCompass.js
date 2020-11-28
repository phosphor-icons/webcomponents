/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCompass = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="144.965 144.971 167.402 88.485 111.024 111.029 88.396 167.598 144.965 144.971" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32Zm16.9646,112.9707-59.397,25.45557,25.45606-59.397,62.0354-28.20069Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <polygon points="144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M127.99975,24a104,104,0,1,0,104,104A104.11791,104.11791,0,0,0,127.99975,24Zm52.34961,62.124-28.09472,62.14209a7.99954,7.99954,0,0,1-4.13868,4.05713L88.71948,177.7793A7.99971,7.99971,0,0,1,78.2146,167.27539l25.45507-59.39746a8.00275,8.00275,0,0,1,4.043-4.13086L169.74878,75.5459A8,8,0,0,1,180.34936,86.124Z"/>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <polygon points="144.965 144.971 173.059 82.828 111.024 111.029 85.568 170.426 144.965 144.971" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-compass", PhCompass);
export default PhCompass;
