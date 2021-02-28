/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberSquareFive = {
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
      svg`<path d="M152,80H111.83477L104,128.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <path d="M152,80H111.83477L104,128.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM123.88184,112.002A35.99912,35.99912,0,1,1,98.35449,173.4668a7.99985,7.99985,0,1,1,11.291-11.33594,20.20173,20.20173,0,0,0,28.47461-.001,19.91646,19.91646,0,0,0-.001-28.25976,20.20412,20.20412,0,0,0-28.47461.001,7.99971,7.99971,0,0,1-13.541-6.95214l7.835-48.20215A8.00076,8.00076,0,0,1,111.835,72H152a8,8,0,0,1,0,16H118.63965L114.542,113.21094A36.413,36.413,0,0,1,123.88184,112.002Z"/>`}
      ${weight === "light" &&
      svg`<path d="M152,80H111.83477L104,128.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<path d="M152,80H111.83477L104,128.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<path d="M152,80H111.83477L104,128.20232a27.99935,27.99935,0,1,1,0,39.5969" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-number-square-five", PhNumberSquareFive);
export default PhNumberSquareFive;
