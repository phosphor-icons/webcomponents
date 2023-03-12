/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-shopping-cart")
export default class PhShoppingCart extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M219.07,61.44A4,4,0,0,0,216,60H51.34L45.86,29.85A12,12,0,0,0,34.05,20H16a4,4,0,0,0,0,8h18A4,4,0,0,1,38,31.28l25.5,140.3A20,20,0,0,0,71,183.85,24,24,0,1,0,101.87,188h60.26A24,24,0,1,0,180,180H83.17a12,12,0,0,1-11.8-9.85l-4-22.15H188.1a20,20,0,0,0,19.68-16.42l12.16-66.86A4,4,0,0,0,219.07,61.44ZM100,204a16,16,0,1,1-16-16A16,16,0,0,1,100,204Zm96,0a16,16,0,1,1-16-16A16,16,0,0,1,196,204Zm3.91-73.85A12,12,0,0,1,188.1,140H65.88L52.79,68H211.21Z"/>`,
    ],
    [
      "light",
      svg`<path d="M220.61,60.16A6,6,0,0,0,216,58H53L47.83,29.5A14,14,0,0,0,34.05,18H16a6,6,0,0,0,0,12h18a2,2,0,0,1,2,1.64l25.51,140.3a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,105.89,190h52.22A26,26,0,1,0,180,178H83.17a10,10,0,0,1-9.84-8.21L69.73,150H188.1a22,22,0,0,0,21.65-18.06L221.9,65.07A6,6,0,0,0,220.61,60.16ZM98,204a14,14,0,1,1-14-14A14,14,0,0,1,98,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,194,204Zm3.94-74.21A10,10,0,0,1,188.1,138H67.55L55.19,70H208.81Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M225.21,56.31A12,12,0,0,0,216,52H58L53.73,28.42A20,20,0,0,0,34.05,12H16a12,12,0,0,0,0,24H30.71L55.62,173a28,28,0,0,0,4.07,10.21A32,32,0,1,0,115,196h34a32,32,0,1,0,31-24H83.17a4,4,0,0,1-3.93-3.28L76.92,156H188.1a28,28,0,0,0,27.55-23l12.16-66.86A12,12,0,0,0,225.21,56.31ZM92,204a8,8,0,1,1-8-8A8,8,0,0,1,92,204Zm88,8a8,8,0,1,1,8-8A8,8,0,0,1,180,212Zm12-83.28A4,4,0,0,1,188.1,132H72.56L62.38,76H201.62Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM180,192a12,12,0,1,1-12,12A12,12,0,0,1,180,192Zm-96,0a12,12,0,1,1-12,12A12,12,0,0,1,84,192Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,64l-12.16,66.86A16,16,0,0,1,188.1,144H62.55L48,64Z" opacity="0.2"/><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

  @property({ type: Boolean })
  mirrored: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${PhShoppingCart.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-shopping-cart": PhShoppingCart;
  }
}