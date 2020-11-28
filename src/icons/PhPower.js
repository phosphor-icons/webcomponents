/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPower = {
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
      svg`<line x1="127.99219" y1="48.00288" x2="127.99219" y2="124.00288" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="127.99219" y1="48.00288" x2="127.99219" y2="124.00288" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,23.99988a104,104,0,1,0,104,104A104.11786,104.11786,0,0,0,128,23.99988Zm-8.00781,32.00293a8,8,0,0,1,16,0v60a8,8,0,1,1-16,0ZM128,207.99988A79.98292,79.98292,0,0,1,83.53516,61.52136a8,8,0,1,1,8.91357,13.28711,63.99978,63.99978,0,1,0,71.08838-.00976,8,8,0,0,1,8.91016-13.28955A79.98322,79.98322,0,0,1,128,207.99988Z"/>`}
      ${weight === "light" &&
      svg`<line x1="127.99219" y1="48.00288" x2="127.99219" y2="124.00288" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="127.99219" y1="48.00288" x2="127.99219" y2="124.00288" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="127.99219" y1="48.00288" x2="127.99219" y2="124.00288" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-power", PhPower);
export default PhPower;
