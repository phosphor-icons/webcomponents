/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHeadset = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<path d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M225.45581,184v24a32,32,0,0,1-32,32H136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16Z" opacity="0.2"/>
  <path d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z" opacity="0.2"/>
  <path d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M225.45581,184v24a32,32,0,0,1-32,32H136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M233.45605,128v80a40.04551,40.04551,0,0,1-40,40H136a8,8,0,0,1,0-16h57.45605a24.0275,24.0275,0,0,0,24-24v-1.376a23.89418,23.89418,0,0,1-8,1.376h-16a24.0275,24.0275,0,0,1-24-24V144a24.0275,24.0275,0,0,1,24-24h23.64454a88.01738,88.01738,0,0,0-88.31348-79.99756c-.041.00049-.07813.00049-.11914,0A88.01928,88.01928,0,0,0,40.35547,120H64a24.0275,24.0275,0,0,1,24,24v40a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24V128A104.00025,104.00025,0,0,1,128.72754,24.00244c.24414-.00146.49121-.00244.73535-.00244A104.00007,104.00007,0,0,1,233.45605,128Z"/>`}
      ${weight === "light" &&
      svg`<path d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M225.45581,184v24a32,32,0,0,1-32,32H136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M225.45581,184v24a32,32,0,0,1-32,32H136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M225.45581,184v24a32,32,0,0,1-32,32H136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-headset", PhHeadset);
export default PhHeadset;
