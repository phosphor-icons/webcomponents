/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMoon = {
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
      svg`<path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" opacity="0.2"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M229.36426,151.35791A104.00619,104.00619,0,1,1,104.64111,26.63574a7.99975,7.99975,0,0,1,9.58741,9.58545A88.0856,88.0856,0,0,0,219.77734,141.77051a8.00049,8.00049,0,0,1,9.58692,9.5874Z"/>`}
      ${weight === "light" &&
      svg`<path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-moon", PhMoon);
export default PhMoon;
