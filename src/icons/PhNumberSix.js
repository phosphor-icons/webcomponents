/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberSix = {
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
      svg`<line x1="79.51067" y1="140.00467" x2="144" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="168" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="79.51067" y1="140.00467" x2="144" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="168" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,104a63.75508,63.75508,0,0,0-19.49121,3.04492l42.36035-70.9436a8.00043,8.00043,0,0,0-13.73828-8.20288L72.6416,135.90332c-.10449.17529-.19385.355-.28369.53442A63.97854,63.97854,0,1,0,128,104Zm0,112a47.97612,47.97612,0,0,1-41.15674-72.67017l.17749-.29736A47.99419,47.99419,0,1,1,128,216Z"/>`}
      ${weight === "light" &&
      svg`<line x1="79.51067" y1="140.00467" x2="144" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="168" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="79.51067" y1="140.00467" x2="144" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="168" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="79.51067" y1="140.00467" x2="144" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="168" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-six", PhNumberSix);
export default PhNumberSix;
