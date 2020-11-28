/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhChecks = {
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
      ${weight === "bold" && svg`<polyline points="144 84 56 172 12 128.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="244 84 156 172 139.941 155.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="148 84 60 172 16 128.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="240 84 152 172 128.627 148.628" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M153.65674,89.65686l-87.999,88a8.00062,8.00062,0,0,1-11.31347,0l-44.001-43.99805a7.99983,7.99983,0,0,1,11.3125-11.31445l38.34473,38.3418,82.3418-82.34375a8.00052,8.00052,0,0,1,11.31445,11.31445Zm92-11.31445a8.003,8.003,0,0,0-11.31445,0l-82.3418,82.34375-17.71778-17.71582a7.99983,7.99983,0,0,0-11.3125,11.31445l23.374,23.37207a8.00062,8.00062,0,0,0,11.31347,0l87.999-88A8.00121,8.00121,0,0,0,245.65674,78.34241Z"/>`}
      ${weight === "light" && svg`<polyline points="148 84 60 172 16 128.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="240 84 152 172 128.627 148.628" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="148 84 60 172 16 128.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="240 84 152 172 128.627 148.628" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="148 84 60 172 16 128.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="240 84 152 172 128.627 148.628" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-checks", PhChecks);
export default PhChecks;
