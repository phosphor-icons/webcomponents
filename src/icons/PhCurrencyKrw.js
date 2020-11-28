/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCurrencyKrw = {
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
      ${weight === "bold" && svg`<polyline points="24 72 76 200 128 72 180 200 232 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="16" y1="136" x2="240" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="24 72 76 200 128 72 180 200 232 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="152" x2="240" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M240,144H211.38525l6.5-16H240a8,8,0,0,0,0-16H224.38525l15.02686-36.98926a8.00025,8.00025,0,0,0-14.82422-6.02148L207.11475,112h-54.2295L135.41211,68.98926a8.00039,8.00039,0,0,0-14.82422,0L103.11475,112H48.88525L31.41211,68.98926a8.00025,8.00025,0,0,0-14.82422,6.02148L31.61475,112H16a8,8,0,0,0,0,16H38.11475l6.5,16H16a8,8,0,0,0,0,16H51.11475l17.47314,43.01074a8.00039,8.00039,0,0,0,14.82422,0L100.88525,160h54.2295l17.47314,43.01074a8.00039,8.00039,0,0,0,14.82422,0L204.88525,160H240a8,8,0,0,0,0-16Zm-39.38477-16-6.5,16H165.88477l-6.5-16ZM128,93.25488,135.61523,112H120.38477ZM55.38477,128H96.61523l-6.5,16H61.88477ZM76,178.74512,68.38477,160H83.61523ZM107.38477,144l6.5-16h28.23046l6.5,16ZM180,178.74512,172.38477,160h15.23046Z"/>`}
      ${weight === "light" && svg`<polyline points="24 72 76 200 128 72 180 200 232 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="16" y1="152" x2="240" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="24 72 76 200 128 72 180 200 232 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="16" y1="152" x2="240" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="24 72 76 200 128 72 180 200 232 72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="152" x2="240" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-currency-krw", PhCurrencyKrw);
export default PhCurrencyKrw;
