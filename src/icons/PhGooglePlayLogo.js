/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGooglePlayLogo = {
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
      svg`<path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M42.23345,26.2334a7.65514,7.65514,0,0,0-2.42,5.62274V224.14386a7.65467,7.65467,0,0,0,2.40789,5.61122l.01369.00994L144,128,42.23444,26.23444Z" opacity="0.2"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M223.63476,114.18213l-167.7832-96.04a15.98949,15.98949,0,0,0-16.123.0459,15.66312,15.66312,0,0,0-7.915,13.66846v192.2871a15.66312,15.66312,0,0,0,7.915,13.66846,15.98874,15.98874,0,0,0,16.12305.0459l167.7832-96.04a15.76194,15.76194,0,0,0,0-27.63574ZM144,139.31348l18.85644,18.85644L74.666,208.64746ZM74.65478,47.34082,162.85742,97.8291,144,116.68652ZM177.24707,149.93359,155.31348,128l21.93457-21.93408L215.56738,128Z"/>`}
      ${weight === "light" &&
      svg`<path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-google-play-logo", PhGooglePlayLogo);
export default PhGooglePlayLogo;
