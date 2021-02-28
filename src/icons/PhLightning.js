/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhLightning = {
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
      svg`<polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" opacity="0.2"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M215.78857,118.16406a8.00125,8.00125,0,0,0-4.97949-5.6626L153.17871,90.89014l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-112,120a7.99995,7.99995,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02734l112-120A8.00057,8.00057,0,0,0,215.78857,118.16406Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-lightning", PhLightning);
export default PhLightning;
