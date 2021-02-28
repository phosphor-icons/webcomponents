/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChartBar = {
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
      svg`<line x1="228" y1="208" x2="28" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="100 208 100 88 156 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="44 208 44 136 100 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="156" y="40" width="56" height="168" opacity="0.2"/>
  <line x1="228" y1="208" x2="28" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="100 208 100 88 156 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="44 208 44 136 100 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M228,200h-8V40a8.00008,8.00008,0,0,0-8-8H156a8.00008,8.00008,0,0,0-8,8V80H100a8.00008,8.00008,0,0,0-8,8v40H44a8.00008,8.00008,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Z"/>`}
      ${weight === "light" &&
      svg`<line x1="228" y1="208" x2="28" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="100 208 100 88 156 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="44 208 44 136 100 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="228" y1="208" x2="28" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="100 208 100 88 156 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="44 208 44 136 100 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="44 208 44 136 100 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="228" y1="208" x2="28" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="100 208 100 88 156 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="156" y="40" width="56" height="168" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-chart-bar", PhChartBar);
export default PhChartBar;
