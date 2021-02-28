/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGoogleLogo = {
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
      svg`<path d="M128,128h88a88,88,0,1,1-25.77461-62.2254" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,128h88a88,88,0,1,1-25.77461-62.2254" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,184A80,80,0,1,1,184.56836,71.43164a7.99984,7.99984,0,1,1-11.31348,11.31348A63.99718,63.99718,0,1,0,191.50244,136H128a8,8,0,0,1,0-16h72a8.00008,8.00008,0,0,1,8,8A80.09041,80.09041,0,0,1,128,208Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,128h88a88,88,0,1,1-25.77461-62.2254" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,128h88a88,88,0,1,1-25.77461-62.2254" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,128h88a88,88,0,1,1-25.77461-62.2254" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-google-logo", PhGoogleLogo);
export default PhGoogleLogo;
