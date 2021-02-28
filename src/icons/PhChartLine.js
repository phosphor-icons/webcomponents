/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChartLine = {
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
      svg`<polyline points="224 208 32 208 32 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="224.002 96 160.002 152 96.002 104 32.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="224 208 32 208 32 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="224.002 96 160.002 152 96.002 104 32.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M223.99951,200h-184V163.63232L96.39014,114.291l58.8125,44.10888a7.99913,7.99913,0,0,0,10.06738-.37939l64-56a7.99962,7.99962,0,1,0-10.53516-12.041L159.61475,141.709,100.80225,97.6001a7.99909,7.99909,0,0,0-10.06739.37939L39.99951,142.37305V48a8,8,0,0,0-16,0V208a8.00039,8.00039,0,0,0,8,8h192a8,8,0,0,0,0-16Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="224 208 32 208 32 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="224.002 96 160.002 152 96.002 104 32.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="224 208 32 208 32 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="224.002 96 160.002 152 96.002 104 32.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="224 208 32 208 32 48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="224.002 96 160.002 152 96.002 104 32.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-chart-line", PhChartLine);
export default PhChartLine;
