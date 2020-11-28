/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTote = {
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
      ${weight === "bold" && svg`<path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" opacity="0.2"/>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M234.9834,69.3291A16.01892,16.01892,0,0,0,223.06152,64H175.3208a47.99073,47.99073,0,0,0-94.6416,0H32.93848A16.00031,16.00031,0,0,0,17.03613,81.7666L31.25781,209.76709A15.98372,15.98372,0,0,0,47.16016,224H208.83984a15.98375,15.98375,0,0,0,15.90235-14.2334l14.22168-128A16.01871,16.01871,0,0,0,234.9834,69.3291ZM128,40a32.05773,32.05773,0,0,1,30.9873,24H97.0127A32.05773,32.05773,0,0,1,128,40Z"/>`}
      ${weight === "light" && svg`<path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-tote", PhTote);
export default PhTote;
