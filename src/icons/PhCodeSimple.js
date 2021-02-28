/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCodeSimple = {
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
      svg`<polyline points="88 64 16 128 88 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="168 64 240 128 168 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="88 64 16 128 88 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="168 64 240 128 168 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M93.97949,58.68555a7.99976,7.99976,0,0,0-11.29443-.665l-72,64a8.00054,8.00054,0,0,0,0,11.959l72,64a8.00018,8.00018,0,0,0,10.62988-11.959L28.0415,128,93.31494,69.97949A8,8,0,0,0,93.97949,58.68555Z"/>
    <path d="M245.31494,122.02051l-72-64a8.00018,8.00018,0,0,0-10.62988,11.959L227.9585,128l-65.27344,58.02051a8.00018,8.00018,0,0,0,10.62988,11.959l72-64a8.00054,8.00054,0,0,0,0-11.959Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="88 64 16 128 88 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="168 64 240 128 168 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="88 64 16 128 88 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="168 64 240 128 168 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="88 64 16 128 88 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="168 64 240 128 168 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-code-simple", PhCodeSimple);
export default PhCodeSimple;
