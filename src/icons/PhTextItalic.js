/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTextItalic = {
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
      svg`<line x1="151.99414" y1="59.99512" x2="103.99414" y2="195.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="63.99414" y1="195.99512" x2="143.99414" y2="195.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="111.99414" y1="59.99512" x2="191.99414" y2="59.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="151.99414" y1="55.99512" x2="103.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="199.99512" x2="143.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="111.99414" y1="55.99512" x2="191.99414" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M199.99414,55.99512a8.00008,8.00008,0,0,1-8,8H157.76l-42.6665,128h28.90063a8,8,0,0,1,0,16H104.02307l-.028.002-.02735-.002H63.99414a8,8,0,0,1,0-16H98.22827l42.66651-128H111.99414a8,8,0,0,1,0-16h80A8.00008,8.00008,0,0,1,199.99414,55.99512Z"/>`}
      ${weight === "light" &&
      svg`<line x1="151.99414" y1="55.99512" x2="103.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="63.99414" y1="199.99512" x2="143.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="111.99414" y1="55.99512" x2="191.99414" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="151.99414" y1="55.99512" x2="103.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="63.99414" y1="199.99512" x2="143.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="111.99414" y1="55.99512" x2="191.99414" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="151.99414" y1="55.99512" x2="103.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="199.99512" x2="143.99414" y2="199.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="111.99414" y1="55.99512" x2="191.99414" y2="55.99512" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-text-italic", PhTextItalic);
export default PhTextItalic;
