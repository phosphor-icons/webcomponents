/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberZero = {
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
      svg`<ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,240c-25.75977,0-46.99219-12.57129-61.40039-36.35474C54.60547,183.848,48,156.98334,48,128c0-28.98566,6.60547-55.8512,18.59961-75.64771C81.00781,28.57043,102.24023,16,128,16s46.99219,12.57043,61.40039,36.35229C201.39453,72.1488,208,99.01434,208,128c0,28.98334-6.60547,55.848-18.59961,75.64526C174.99219,227.42871,153.75977,240,128,240Zm0-208c-44.21094,0-64,48.2157-64,96s19.78906,96,64,96,64-48.2157,64-96S172.21094,32,128,32Z"/>`}
      ${weight === "light" &&
      svg`<ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-zero", PhNumberZero);
export default PhNumberZero;
