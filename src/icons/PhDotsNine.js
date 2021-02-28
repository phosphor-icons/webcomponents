/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDotsNine = {
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
      svg`<circle cx="60" cy="60" r="16"/>
  <circle cx="128" cy="60" r="16"/>
  <circle cx="196" cy="60" r="16"/>
  <circle cx="60" cy="128" r="16"/>
  <circle cx="128" cy="128" r="16"/>
  <circle cx="196" cy="128" r="16"/>
  <circle cx="60" cy="196" r="16"/>
  <circle cx="128" cy="196" r="16"/>
  <circle cx="196" cy="196" r="16"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="60" cy="60" r="12"/>
  <circle cx="128" cy="60" r="12"/>
  <circle cx="196" cy="60" r="12"/>
  <circle cx="60" cy="128" r="12"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="196" cy="128" r="12"/>
  <circle cx="60" cy="196" r="12"/>
  <circle cx="128" cy="196" r="12"/>
  <circle cx="196" cy="196" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M60,48A12,12,0,1,0,72,60,12.01375,12.01375,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12.01375,12.01375,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,196,116Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="60" cy="60" r="10"/>
  <circle cx="128" cy="60" r="10"/>
  <circle cx="196" cy="60" r="10"/>
  <circle cx="60" cy="128" r="10"/>
  <circle cx="128" cy="128" r="10"/>
  <circle cx="196" cy="128" r="10"/>
  <circle cx="60" cy="196" r="10"/>
  <circle cx="128" cy="196" r="10"/>
  <circle cx="196" cy="196" r="10"/>`}
      ${weight === "thin" &&
      svg`<circle cx="60" cy="60" r="8"/>
  <circle cx="128" cy="60" r="8"/>
  <circle cx="196" cy="60" r="8"/>
  <circle cx="60" cy="128" r="8"/>
  <circle cx="128" cy="128" r="8"/>
  <circle cx="196" cy="128" r="8"/>
  <circle cx="60" cy="196" r="8"/>
  <circle cx="128" cy="196" r="8"/>
  <circle cx="196" cy="196" r="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="60" cy="60" r="12"/>
  <circle cx="128" cy="60" r="12"/>
  <circle cx="196" cy="60" r="12"/>
  <circle cx="60" cy="128" r="12"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="196" cy="128" r="12"/>
  <circle cx="60" cy="196" r="12"/>
  <circle cx="128" cy="196" r="12"/>
  <circle cx="196" cy="196" r="12"/>`}
    </svg>
  `,
};

define("ph-dots-nine", PhDotsNine);
export default PhDotsNine;
