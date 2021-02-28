/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChatCentered = {
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
      svg`<path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" opacity="0.2"/>
  <path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V183.999a16.01833,16.01833,0,0,0,16,16L99.46973,200l14.81054,24.68262a16.00024,16.00024,0,0,0,27.43946,0L156.5293,200H215.999A16.01853,16.01853,0,0,0,232,184V56A16.01833,16.01833,0,0,0,216,40Z"/>`}
      ${weight === "light" &&
      svg`<path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-chat-centered", PhChatCentered);
export default PhChatCentered;
