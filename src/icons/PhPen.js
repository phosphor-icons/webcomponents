/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPen = {
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
      svg`<path d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="164 200 204 160 192 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="43.99996" y1="155.99997" x2="99.99999" y2="212.00001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M192,120,136,64l26.34315-26.34315a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137Z" opacity="0.2"/>
  <path d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 192 200 152 192 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.5088" y1="160.5088" x2="95.49114" y2="215.49114" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M228.68652,88A15.89427,15.89427,0,0,0,224,76.68652L179.31348,31.999A16.02162,16.02162,0,0,0,156.68555,32l-120,120.00049a15.953,15.953,0,0,0-3.56836,5.4458,7.95719,7.95719,0,0,0-.27149.75976A16.00722,16.00722,0,0,0,32,163.31348V208a16.01833,16.01833,0,0,0,16,16H92.68652a16.00666,16.00666,0,0,0,5.15869-.86377c.23829-.07324.47388-.15674.70582-.25244A15.94661,15.94661,0,0,0,104,219.31348l83.666-83.666,3.4746,13.89844-36.79785,36.79736a8.00018,8.00018,0,0,0,11.31446,11.31348l40-40a8.00081,8.00081,0,0,0,2.10351-7.59717l-6.90136-27.60547L223.999,99.31445A15.895,15.895,0,0,0,228.68652,88ZM192,108.68555,147.314,64,168,43.31348,212.68555,88Z"/>`}
      ${weight === "light" &&
      svg`<path d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 192 200 152 192 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40.50833" y1="160.50833" x2="95.49164" y2="215.49164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 192 200 152 192 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40.50826" y1="160.50826" x2="95.49177" y2="215.49177" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 192 200 152 192 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40.50826" y1="160.50826" x2="95.49177" y2="215.49177" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-pen", PhPen);
export default PhPen;
