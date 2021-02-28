/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhLinkBreak = {
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
      svg`<path d="M122.34266,71.43146l19.799-19.799A44,44,0,0,1,204.367,113.85786l-19.799,19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M133.65637,184.56854l-19.799,19.799A44,44,0,1,1,51.632,142.14214l19.799-19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="86.05839" y1="59.43146" x2="86.05839" y2="36.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="59.43097" y1="86.05887" x2="36.80355" y2="86.05887" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="196.56805" y1="169.94113" x2="219.19547" y2="169.94113" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="169.94064" y1="196.56854" x2="169.94064" y2="219.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M122.34266,71.43146l19.799-19.799A44,44,0,0,1,204.367,113.85786l-19.799,19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M133.65637,184.56854l-19.799,19.799A44,44,0,1,1,51.632,142.14214l19.799-19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="94.05839" y1="71.43146" x2="94.05839" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="71.43097" y1="94.05887" x2="48.80355" y2="94.05887" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184.56805" y1="161.94113" x2="207.19547" y2="161.94113" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="161.94064" y1="184.56854" x2="161.94064" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M178.91064,128.001a7.99984,7.99984,0,1,0,11.31446,11.3125L210.023,119.51465a51.99928,51.99928,0,1,0-73.53711-73.53906L116.686,65.77441a7.99984,7.99984,0,0,0,11.3125,11.31446l19.80078-19.79981a35.99961,35.99961,0,1,1,50.91015,50.91211Z"/>
    <path d="M128.00049,178.91113l-19.80078,19.79981a35.99961,35.99961,0,1,1-50.91016-50.91211L77.08838,127.999a7.99983,7.99983,0,0,0-11.31445-11.3125L45.97607,136.48535a51.99928,51.99928,0,1,0,73.53711,73.53906L139.313,190.22559a7.99984,7.99984,0,0,0-11.3125-11.31446Z"/>
    <path d="M94.05811,79.43164a8.0004,8.0004,0,0,0,8-8V48.80371a8,8,0,1,0-16,0V71.43164A8.00039,8.00039,0,0,0,94.05811,79.43164Z"/>
    <path d="M48.80322,102.05859H71.43115a8,8,0,0,0,0-16H48.80322a8,8,0,1,0,0,16Z"/>
    <path d="M207.1958,153.94141H184.56787a8,8,0,0,0,0,16H207.1958a8,8,0,0,0,0-16Z"/>
    <path d="M161.94092,176.56836a8.00039,8.00039,0,0,0-8,8v22.62793a8,8,0,0,0,16,0V184.56836A8.00039,8.00039,0,0,0,161.94092,176.56836Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<path d="M122.34266,71.43146l19.799-19.799A44,44,0,0,1,204.367,113.85786l-19.799,19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M133.65637,184.56854l-19.799,19.799A44,44,0,1,1,51.632,142.14214l19.799-19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="94.05839" y1="71.43146" x2="94.05839" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="71.43097" y1="94.05887" x2="48.80355" y2="94.05887" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184.56805" y1="161.94113" x2="207.19547" y2="161.94113" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="161.94064" y1="184.56854" x2="161.94064" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M122.34266,71.43146l19.799-19.799A44,44,0,0,1,204.367,113.85786l-19.799,19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M133.65637,184.56854l-19.799,19.799A44,44,0,1,1,51.632,142.14214l19.799-19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="94.05839" y1="71.43146" x2="94.05839" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="71.43097" y1="94.05887" x2="48.80355" y2="94.05887" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184.56805" y1="161.94113" x2="207.19547" y2="161.94113" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="161.94064" y1="184.56854" x2="161.94064" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M122.34266,71.43146l19.799-19.799A44,44,0,0,1,204.367,113.85786l-19.799,19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M133.65637,184.56854l-19.799,19.799A44,44,0,1,1,51.632,142.14214l19.799-19.799" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="94.05839" y1="71.43146" x2="94.05839" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="71.43097" y1="94.05887" x2="48.80355" y2="94.05887" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184.56805" y1="161.94113" x2="207.19547" y2="161.94113" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="161.94064" y1="184.56854" x2="161.94064" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-link-break", PhLinkBreak);
export default PhLinkBreak;
