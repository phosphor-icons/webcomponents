/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHandGrabbing = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<g opacity="0.2">
    <path d="M88,116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0V92a20,20,0,0,0-40,0,20,20,0,0,0-40,0Z"/>
  </g>
  <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M188,80a27.82885,27.82885,0,0,0-13.35791,3.39716A27.97426,27.97426,0,0,0,128,72.43066,27.9817,27.9817,0,0,0,80,92v16H68a28.03146,28.03146,0,0,0-28,28v16a88,88,0,0,0,176,0V108A28.03146,28.03146,0,0,0,188,80Zm12,72a72,72,0,0,1-144,0V136a12.01343,12.01343,0,0,1,12-12H80v24a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V108a12,12,0,0,1,24,0Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-hand-grabbing", PhHandGrabbing);
export default PhHandGrabbing;
