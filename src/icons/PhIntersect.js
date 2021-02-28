/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhIntersect = {
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
      svg`<circle cx="96" cy="96" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="109.08829" y1="109.08829" x2="146.9117" y2="146.9117" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M88,160a70.51259,70.51259,0,0,0,.73242,7.26758A70.51259,70.51259,0,0,0,96,168a71.99981,71.99981,0,0,0,72-72,70.51259,70.51259,0,0,0-.73242-7.26758A70.51259,70.51259,0,0,0,160,88,71.99981,71.99981,0,0,0,88,160Z" opacity="0.2"/>
  <circle cx="96" cy="96" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M174.63477,81.36523a79.99168,79.99168,0,1,0-93.26954,93.26954,79.99168,79.99168,0,1,0,93.26954-93.26954ZM32,96A64.00385,64.00385,0,0,1,157.98779,80.05127,80.06522,80.06522,0,0,0,80.051,157.98779,64.1144,64.1144,0,0,1,32,96ZM160,224a64.11421,64.11421,0,0,1-61.98779-48.05127A80.06522,80.06522,0,0,0,175.949,98.01221,64.00389,64.00389,0,0,1,160,224Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="96" cy="96" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="96" cy="96" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="96" cy="96" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-intersect", PhIntersect);
export default PhIntersect;
