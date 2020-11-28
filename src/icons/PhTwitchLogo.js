/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTwitchLogo = {
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
      ${weight === "bold" && svg`<path d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="88.00002" x2="168" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="120" y1="88.00002" x2="120" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z" opacity="0.2"/>
  <path d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="88.00002" x2="168" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="88.00002" x2="120" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V192a16.01833,16.01833,0,0,0,16,16H64v32a7.99949,7.99949,0,0,0,13.12109,6.14551L122.89648,208h42.207a16.03033,16.03033,0,0,0,10.24316-3.709l42.896-35.7461A15.958,15.958,0,0,0,224,156.253V48A16.01833,16.01833,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>`}
      ${weight === "light" && svg`<path d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="168" y1="88.00002" x2="168" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="120" y1="88.00002" x2="120" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="168" y1="88.00002" x2="168" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="120" y1="88.00002" x2="120" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="88.00002" x2="168" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="88.00002" x2="120" y2="136.00002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-twitch-logo", PhTwitchLogo);
export default PhTwitchLogo;
