/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhRadical = {
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
      ${weight === "bold" && svg`<polyline points="232 96 232 72 120 72 72 200 24 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="232 96 232 72 120 72 72 200 24 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M72,208a7.99963,7.99963,0,0,1-7.49072-5.19092l-48-128a8.00011,8.00011,0,0,1,14.98144-5.61816L72,177.21582l40.50928-108.0249A7.99963,7.99963,0,0,1,120,64H232a7.99977,7.99977,0,0,1,8,8V96a8,8,0,0,1-16,0V80H125.544L79.49072,202.80908A7.99963,7.99963,0,0,1,72,208Z"/>`}
      ${weight === "light" && svg`<polyline points="232 96 232 72 120 72 72 200 24 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="232 96 232 72 120 72 72 200 24 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="232 96 232 72 120 72 72 200 24 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-radical", PhRadical);
export default PhRadical;
