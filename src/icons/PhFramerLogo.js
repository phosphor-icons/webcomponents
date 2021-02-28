/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFramerLogo = {
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
      svg`<polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" opacity="0.2"/>
  <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M208,100V32a8.00008,8.00008,0,0,0-8-8H56a8,8,0,0,0-5.49316,13.81592L107.87793,92H56a8.00008,8.00008,0,0,0-8,8v68a7.99941,7.99941,0,0,0,2.50684,5.81592l72,68A7.99984,7.99984,0,0,0,136,236V176h64a8,8,0,0,0,5.49316-13.81592L148.12207,108H200A8.00008,8.00008,0,0,0,208,100Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-framer-logo", PhFramerLogo);
export default PhFramerLogo;
