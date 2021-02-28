/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMusicNote = {
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
      svg`<circle cx="88" cy="184" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="128 184 128 40 208 64 208 112 128 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="88" cy="184" r="40" opacity="0.2"/>
  <circle cx="88" cy="184" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="128 184 128 40 208 64 208 112 128 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M210.29883,56.3374l-80-24A7.99991,7.99991,0,0,0,120,40V87.82031q-.0044.1831,0,.36573v60.07519A47.97353,47.97353,0,1,0,136,184V98.75195l69.70117,20.91065A7.99991,7.99991,0,0,0,216,112V64A7.99972,7.99972,0,0,0,210.29883,56.3374Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="88" cy="184" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="128 184 128 40 208 64 208 112 128 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="88" cy="184" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="128 184 128 40 208 64 208 112 128 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="88" cy="184" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="128 184 128 40 208 64 208 112 128 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-music-note", PhMusicNote);
export default PhMusicNote;
