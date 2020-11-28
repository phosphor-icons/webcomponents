/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGif = {
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
      ${weight === "bold" && svg`<line x1="136" y1="72" x2="136" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="228 72 180 72 180 184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="216" y1="128" x2="180" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M72,132H96v20a32,32,0,0,1-64,0V104a32.0045,32.0045,0,0,1,62.99185-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<line x1="136" y1="72" x2="136" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="228 72 180 72 180 184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="128" x2="180" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,128H96v24a32,32,0,0,1-64,0V104a32.0045,32.0045,0,0,1,62.99185-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M136,64a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,136,64Z"/>
    <path d="M228,64H180a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V136h28a8,8,0,0,0,0-16H188V80h40a8,8,0,0,0,0-16Z"/>
    <path d="M96,120H72a8,8,0,0,0,0,16H88v16a24,24,0,0,1-48,0V104a24.00492,24.00492,0,0,1,47.24512-6.00586,7.99961,7.99961,0,1,0,15.49414-3.98828A40.00446,40.00446,0,0,0,24,104v48a40,40,0,0,0,80,0V128A8.00039,8.00039,0,0,0,96,120Z"/>
  </g>`}
      ${weight === "light" && svg`<line x1="136" y1="72" x2="136" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="228 72 180 72 180 184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="216" y1="128" x2="180" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M72,128H96v24a32,32,0,0,1-64,0V104a32.0045,32.0045,0,0,1,62.99185-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="136" y1="72" x2="136" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="228 72 180 72 180 184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="216" y1="128" x2="180" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M72,128H96v24a32,32,0,0,1-64,0V104a32.0045,32.0045,0,0,1,62.99185-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="136" y1="72" x2="136" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="228 72 180 72 180 184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="128" x2="180" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,128H96v24a32,32,0,0,1-64,0V104a32.0045,32.0045,0,0,1,62.99185-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-gif", PhGif);
export default PhGif;
