/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberCircleFive = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152,84H111.83477L104,132.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M152,84H111.83477L104,132.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24ZM123.88184,116.002A35.99912,35.99912,0,1,1,98.35449,177.4668a7.99985,7.99985,0,1,1,11.291-11.33594,20.20173,20.20173,0,0,0,28.47461-.001,19.91646,19.91646,0,0,0-.001-28.25976,20.20412,20.20412,0,0,0-28.47461.001,7.99971,7.99971,0,0,1-13.541-6.95214l7.835-48.20215A8.00076,8.00076,0,0,1,111.835,76H152a8,8,0,0,1,0,16H118.63965L114.542,117.21094A36.413,36.413,0,0,1,123.88184,116.002Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M152,84H111.83477L104,132.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M152,84H111.83477L104,132.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M152,84H111.83477L104,132.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-circle-five", PhNumberCircleFive);
export default PhNumberCircleFive;
