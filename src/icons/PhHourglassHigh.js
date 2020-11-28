/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHourglassHigh = {
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
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="64" y1="71.99548" x2="192" y2="71.99548" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V63.99548H192V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" opacity="0.2"/>
  <line x1="64" y1="63.99548" x2="192" y2="63.99548" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M200,75.64111V40a16.01833,16.01833,0,0,0-16-16H72A16.01833,16.01833,0,0,0,56,40V76a16.07553,16.07553,0,0,0,6.3999,12.7998L114.667,128l-52.2666,39.2002A16.07459,16.07459,0,0,0,56,180v36a16.01833,16.01833,0,0,0,16,16H184a16.01833,16.01833,0,0,0,16-16V180.35889a16.08452,16.08452,0,0,0-6.352-12.76416L141.2666,128l52.38184-39.59473A16.08547,16.08547,0,0,0,200,75.64111ZM184,40V63.99561H72V40Zm0,176H72V180l55.98145-41.98584L184,180.35889Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="63.99548" x2="192" y2="63.99548" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="63.99548" x2="192" y2="63.99548" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="63.99548" x2="192" y2="63.99548" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-hourglass-high", PhHourglassHigh);
export default PhHourglassHigh;
