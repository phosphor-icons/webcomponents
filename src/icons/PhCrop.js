/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCrop = {
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
      <slot />
      ${weight === "bold" && svg`<line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="200.002 160.001 200.002 56 95.994 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M240.00244,192.001h-176V16a8,8,0,0,0-16,0V48h-32a8,8,0,0,0,0,16h32V200.001a8.00039,8.00039,0,0,0,8,8h136v32a8,8,0,0,0,16,0v-32h32a8,8,0,0,0,0-16Z"/>
    <path d="M87.99365,64H192.00244V168.001a8,8,0,0,0,16,0V56a8.00008,8.00008,0,0,0-8-8H87.99365a8,8,0,0,0,0,16Z"/>
  </g>`}
      ${weight === "light" && svg`<line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="55.99414" y1="56" x2="16.00244" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56.002 16 56.002 200.001 240.002 200.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="200.002 168.001 200.002 56 87.994 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="200.00244" y1="240.00098" x2="200.00244" y2="200.00098" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-crop", PhCrop);
export default PhCrop;
