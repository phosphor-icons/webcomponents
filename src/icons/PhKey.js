/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhKey = {
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
      svg`<path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="180" cy="76" r="4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" opacity="0.5"/>
  <circle cx="180" cy="76" r="16"/>`}
      ${weight === "duotone" &&
      svg`<g opacity="0.2">
    <path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"/>
  </g>
  <path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="180" cy="76" r="4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" opacity="0.5"/>
  <circle cx="180" cy="76" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M160.00244,16A80.05817,80.05817,0,0,0,83.91357,120.77539L26.34521,178.34277A8.00235,8.00235,0,0,0,24.00244,184v40a8.00039,8.00039,0,0,0,8,8h40a8.00039,8.00039,0,0,0,8-8V208h16a8.00039,8.00039,0,0,0,8-8V184h16a8.00235,8.00235,0,0,0,5.65723-2.34277l9.56738-9.56836A80.00922,80.00922,0,1,0,160.00244,16ZM180,92a16,16,0,1,1,16-16A16.00016,16.00016,0,0,1,180,92Z"/>`}
      ${weight === "light" &&
      svg`<path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="180" cy="76" r="4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" opacity="0.5"/>
  <circle cx="180" cy="76" r="10"/>`}
      ${weight === "thin" &&
      svg`<path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="180" cy="76" r="4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" opacity="0.5"/>
  <circle cx="180" cy="76" r="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="180" cy="76" r="4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" opacity="0.5"/>
  <circle cx="180" cy="76" r="12"/>`}
    </svg>
  `,
};

define("ph-key", PhKey);
export default PhKey;
