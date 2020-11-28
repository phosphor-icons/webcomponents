/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCurrencyDollar = {
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
      ${weight === "bold" && svg`<line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M152,120H136V56h8a32.03635,32.03635,0,0,1,32,32,8,8,0,0,0,16,0,48.054,48.054,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40H108a48,48,0,0,0,0,96h12v64H104a32.03635,32.03635,0,0,1-32-32,8,8,0,0,0-16,0,48.054,48.054,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-32,0H108a32,32,0,0,1,0-64h12Zm32,80H136V136h16a32,32,0,0,1,0,64Z"/>`}
      ${weight === "light" && svg`<line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-currency-dollar", PhCurrencyDollar);
export default PhCurrencyDollar;
