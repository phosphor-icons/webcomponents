/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhShoppingCart = {
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
      ${weight === "bold" && svg`<path d="M192,180H68.49479a8,8,0,0,1-7.871-6.56892L33.92162,26.56892A8,8,0,0,0,26.05066,20H12" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="72" cy="200" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="192" cy="200" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M40,60H214.4143a8,8,0,0,1,7.871,9.43108L209.45455,140H54.54545" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M40,64H214.4143a8,8,0,0,1,7.871,9.43108l-13.09091,72A8,8,0,0,1,201.32339,152H56Z" opacity="0.2"/>
  <path d="M192,184H68.49479a8,8,0,0,1-7.871-6.56892L33.92162,30.56892A8,8,0,0,0,26.05066,24H8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="72" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="192" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,64H214.4143a8,8,0,0,1,7.871,9.43108l-13.09091,72A8,8,0,0,1,201.32339,152H56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M217.06543,146.8623l13.09082-72.00048A16.00086,16.00086,0,0,0,214.41406,56H46.67676L41.793,29.13818A15.9918,15.9918,0,0,0,26.05078,16H8A8,8,0,0,0,8,32H26.05078L52.75293,178.86182a16.0028,16.0028,0,0,0,1.187,3.76489A27.99341,27.99341,0,1,0,97.293,192H166.707A27.99678,27.99678,0,1,0,192,176H68.49512l-2.90918-16h135.7373A15.99184,15.99184,0,0,0,217.06543,146.8623Z"/>`}
      ${weight === "light" && svg`<path d="M192,184H68.49479a8,8,0,0,1-7.871-6.56892L33.92162,30.56892A8,8,0,0,0,26.05066,24H8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="72" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="192" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M40,64H214.4143a8,8,0,0,1,7.871,9.43108l-13.09091,72A8,8,0,0,1,201.32339,152H56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M192,184H68.49479a8,8,0,0,1-7.871-6.56892L33.92162,30.56892A8,8,0,0,0,26.05066,24H8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="72" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="192" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M40,64H214.4143a8,8,0,0,1,7.871,9.43108l-13.09091,72A8,8,0,0,1,201.32339,152H56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M192,184H68.49479a8,8,0,0,1-7.871-6.56892L33.92162,30.56892A8,8,0,0,0,26.05066,24H8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="72" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="192" cy="204" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,64H214.4143a8,8,0,0,1,7.871,9.43108l-13.09091,72A8,8,0,0,1,201.32339,152H56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-shopping-cart", PhShoppingCart);
export default PhShoppingCart;
