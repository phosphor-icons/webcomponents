/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPlay = {
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
      svg`<path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" opacity="0.2"/>
  <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z"/>`}
      ${weight === "light" &&
      svg`<path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-play", PhPlay);
export default PhPlay;
