/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPause = {
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
      svg`<rect x="156" y="40" width="52" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="40" width="52" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" &&
      svg`<rect x="156" y="40" width="52" height="176" rx="8" opacity="0.2"/>
  <rect x="48" y="40" width="52" height="176" rx="8" opacity="0.2"/>
  <rect x="156" y="40" width="52" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="40" width="52" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" &&
      svg`<path d="M216,48V208a16.01833,16.01833,0,0,1-16,16H164a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h36A16.01833,16.01833,0,0,1,216,48ZM92,32H56A16.01833,16.01833,0,0,0,40,48V208a16.01833,16.01833,0,0,0,16,16H92a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,92,32Z"/>`}
      ${weight === "light" &&
      svg`<rect x="156" y="40" width="52" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="40" width="52" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" &&
      svg`<rect x="156" y="40" width="52" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="40" width="52" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" &&
      svg`<rect x="156" y="40" width="52" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48" y="40" width="52" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-pause", PhPause);
export default PhPause;
