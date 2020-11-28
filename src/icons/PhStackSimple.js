/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhStackSimple = {
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
      svg`<polygon points="16 100 128 164 240 100 128 36 16 100" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="16 148 128 212 240 148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="16 104 128 168 240 104 128 40 16 104" opacity="0.2"/>
  <polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M12.03125,110.94629l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00024,8.00024,0,0,0,0-13.89258l-112-64a8.00411,8.00411,0,0,0-7.9375,0l-112,64a8.00024,8.00024,0,0,0,0,13.89258Z"/>
    <path d="M236.03125,137.05371,128,198.78613,19.96875,137.05371a8.00012,8.00012,0,0,0-7.9375,13.89258l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00012,8.00012,0,0,0-7.9375-13.89258Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-stack-simple", PhStackSimple);
export default PhStackSimple;
