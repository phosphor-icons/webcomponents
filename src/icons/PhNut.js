/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNut = {
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
      svg`<path d="M219.999,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87291,0l-84,47.47826a8,8,0,0,0-4.06355,6.9645v94.66456a8,8,0,0,0,4.06355,6.96451l84,47.47826a8,8,0,0,0,7.87291,0l84-47.47826A8,8,0,0,0,219.999,175.33228Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="127.99902" cy="128" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M215.93555,73.70325l-84-47.47815a7.99926,7.99926,0,0,0-7.87305,0l-84,47.47815A8.00029,8.00029,0,0,0,35.999,80.66772v94.66456a8.00065,8.00065,0,0,0,4.06348,6.9646l84,47.47814a7.99987,7.99987,0,0,0,7.87305,0l84-47.47814a8.00064,8.00064,0,0,0,4.06347-6.9646V80.66772A8.00028,8.00028,0,0,0,215.93555,73.70325ZM127.999,164a36,36,0,1,1,36-36A35.99991,35.99991,0,0,1,127.999,164Z" opacity="0.2"/>
  <path d="M219.999,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87291,0l-84,47.47826a8,8,0,0,0-4.06355,6.9645v94.66456a8,8,0,0,0,4.06355,6.96451l84,47.47826a8,8,0,0,0,7.87291,0l84-47.47826A8,8,0,0,0,219.999,175.33228Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="127.99902" cy="128" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M219.87207,66.73877l-84-47.478a16.08529,16.08529,0,0,0-15.74609,0l-84,47.478a16.0253,16.0253,0,0,0-8.127,13.92871v94.665a16.0253,16.0253,0,0,0,8.127,13.92871l84,47.478a16.08113,16.08113,0,0,0,15.74609,0l84-47.478a16.02529,16.02529,0,0,0,8.12695-13.92871v-94.665A16.02529,16.02529,0,0,0,219.87207,66.73877ZM127.999,164a36,36,0,1,1,36-36A36.04074,36.04074,0,0,1,127.999,164Z"/>`}
      ${weight === "light" &&
      svg`<path d="M219.999,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87291,0l-84,47.47826a8,8,0,0,0-4.06355,6.9645v94.66456a8,8,0,0,0,4.06355,6.96451l84,47.47826a8,8,0,0,0,7.87291,0l84-47.47826A8,8,0,0,0,219.999,175.33228Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="127.99902" cy="128" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M219.999,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87291,0l-84,47.47826a8,8,0,0,0-4.06355,6.9645v94.66456a8,8,0,0,0,4.06355,6.96451l84,47.47826a8,8,0,0,0,7.87291,0l84-47.47826A8,8,0,0,0,219.999,175.33228Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="127.99902" cy="128" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-nut", PhNut);
export default PhNut;
