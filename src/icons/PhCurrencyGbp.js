/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCurrencyGbp = {
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
      svg`<g>
    <line x1="56" y1="132" x2="136" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </g>`}
      ${weight === "duotone" &&
      svg`<g>
    <line x1="56" y1="132" x2="136" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <path d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </g>`}
      ${weight === "fill" &&
      svg`<path d="M192,208a8.00008,8.00008,0,0,1-8,8H56a8,8,0,0,1,0-16,28.03146,28.03146,0,0,0,28-28V140H56a8,8,0,0,1,0-16H84V84a52,52,0,0,1,88.76953-36.76953A8.00018,8.00018,0,0,1,161.45508,58.544,35.99961,35.99961,0,0,0,100,84v40h36a8,8,0,0,1,0,16H100v32a43.79772,43.79772,0,0,1-10.083,28H184A8.00008,8.00008,0,0,1,192,208Z"/>`}
      ${weight === "light" &&
      svg`<g>
    <line x1="56" y1="132" x2="136" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
    <path d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  </g>`}
      ${weight === "thin" &&
      svg`<g>
    <line x1="56" y1="132" x2="136" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
    <path d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  </g>`}
      ${weight === "regular" &&
      svg`<g>
    <line x1="56" y1="132" x2="136" y2="132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <path d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </g>`}
    </svg>
  `,
};

define("ph-currency-gbp", PhCurrencyGbp);
export default PhCurrencyGbp;
