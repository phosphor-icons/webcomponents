/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCheck = {
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
      svg`<polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M103.99951,192.00012a7.97346,7.97346,0,0,1-5.65625-2.34277l-56-55.99561a7.99983,7.99983,0,1,1,11.3125-11.31445l50.34375,50.33935L210.34229,66.34778a8.00018,8.00018,0,0,1,11.31445,11.31347l-112,111.9961A7.97937,7.97937,0,0,1,103.99951,192.00012Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-check", PhCheck);
export default PhCheck;
