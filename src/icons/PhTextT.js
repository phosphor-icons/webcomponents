/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTextT = {
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
      svg`<line x1="127.99414" y1="55.99512" x2="127.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="95.99414" y1="199.99512" x2="159.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="127.99414" y1="55.99512" x2="127.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="95.99414" y1="199.99512" x2="159.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M207.99414,47.99512h-160a8.00008,8.00008,0,0,0-8,8v32a8,8,0,0,0,16,0v-24h64v128h-24a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16h-24v-128h64v24a8,8,0,1,0,16,0v-32A8.00008,8.00008,0,0,0,207.99414,47.99512Z"/>`}
      ${weight === "light" &&
      svg`<line x1="127.99414" y1="55.99512" x2="127.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="95.99414" y1="199.99512" x2="159.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="127.99414" y1="55.99512" x2="127.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="95.99414" y1="199.99512" x2="159.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="127.99414" y1="55.99512" x2="127.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="95.99414" y1="199.99512" x2="159.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-text-t", PhTextT);
export default PhTextT;
