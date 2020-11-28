/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChatCircleDots = {
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
      ${weight === "bold" && svg`<path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="128" r="16"/>
  <circle cx="176" cy="128" r="16"/>
  <circle cx="80" cy="128" r="16"/>`}
      ${weight === "duotone" && svg`<path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" opacity="0.2"/>
  <path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>`}
      ${weight === "fill" && svg`<path d="M128.00146,24.00781A104.01819,104.01819,0,0,0,36.814,178.03906l-8.55468,29.90625a15.995,15.995,0,0,0,19.78125,19.78125l29.91406-8.53125a104.00785,104.00785,0,1,0,50.04687-195.1875ZM80.00049,140a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,140Z"/>`}
      ${weight === "light" && svg`<path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="128" r="10"/>
  <circle cx="176" cy="128" r="10"/>
  <circle cx="80" cy="128" r="10"/>`}
      ${weight === "thin" && svg`<path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="128" r="8"/>
  <circle cx="80" cy="128" r="8"/>
  <circle cx="176" cy="128" r="8"/>`}
      ${weight === "regular" && svg`<path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>`}
    </svg>
  `,
};

define("ph-chat-circle-dots", PhChatCircleDots);
export default PhChatCircleDots;
