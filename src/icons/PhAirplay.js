/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAirplay = {
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
      ${weight === "bold" && svg`<polygon points="128.002 160 176 216 80 216 128.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48,192a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M208,48H48A16.00016,16.00016,0,0,0,32,64V176a16.00016,16.00016,0,0,0,16,16h52.57227l27.43017-32,27.42725,32H208a16.00016,16.00016,0,0,0,16-16V64A16.00016,16.00016,0,0,0,208,48Z" opacity="0.2"/>
  <polygon points="128.002 160 176 216 80 216 128.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M64,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M134.07666,154.794a8.0003,8.0003,0,0,0-12.14844-.00049l-48.00293,56A8,8,0,0,0,79.99951,224h96a8.00032,8.00032,0,0,0,6.07422-13.20605Z"/>
    <path d="M208.00244,40H47.99951a24.0275,24.0275,0,0,0-24,24V176a24.0275,24.0275,0,0,0,24,24h14.104l47.67919-55.62231a24.00045,24.00045,0,0,1,36.44239.0039L193.895,200h14.10742a24.0275,24.0275,0,0,0,24-24V64A24.0275,24.0275,0,0,0,208.00244,40Z"/>
  </g>`}
      ${weight === "light" && svg`<polygon points="128.002 160 176 216 80 216 128.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M64,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polygon points="128.002 160 176 216 80 216 128.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M64,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polygon points="128.002 160 176 216 80 216 128.002 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M64,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-airplay", PhAirplay);
export default PhAirplay;
