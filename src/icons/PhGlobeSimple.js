/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGlobeSimple = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M232,128.00037A104.11767,104.11767,0,0,0,128.042,24.00086L128,23.96423l-.042.03663a103.99952,103.99952,0,0,0-.001,207.999l.043.0376.043-.0376A104.11763,104.11763,0,0,0,232,128.00037Zm-16.36768-8h-39.853c-1.5918-29.637-12.01123-57.01758-29.5044-78.08643A88.1919,88.1919,0,0,1,215.63232,120.00037Zm-119.37353,16h63.48242C157.93164,164.75623,146.44678,191.703,128,210.44177,109.55322,191.703,98.06836,164.75623,96.25879,136.00037Zm0-16C98.06836,91.24353,109.55322,64.29675,128,45.559c18.44678,18.73779,29.93164,45.68457,31.74121,74.44141Zm50.01562,94.08642c17.49317-21.06933,27.9126-48.45044,29.50489-78.08642h39.853A88.19181,88.19181,0,0,1,146.27441,214.08679Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <ellipse cx="128" cy="128" rx="40" ry="93.42294" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-globe-simple", PhGlobeSimple);
export default PhGlobeSimple;
