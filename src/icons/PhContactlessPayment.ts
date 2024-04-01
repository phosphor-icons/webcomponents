/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-contactless-payment": PhContactlessPayment;
  }
}

@customElement("ph-contactless-payment")
class PhContactlessPayment extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M93.54,102.13a55.39,55.39,0,0,1,0,51.74A4,4,0,0,1,90,156a4.07,4.07,0,0,1-1.87-.46,4,4,0,0,1-1.67-5.41,46.73,46.73,0,0,0,0-44.26,4,4,0,1,1,7.08-3.74Zm50.58-33.66a4,4,0,0,0-1.65,5.41,114.67,114.67,0,0,1,0,108.24,4,4,0,1,0,7.06,3.76,122.65,122.65,0,0,0,0-115.76A4,4,0,0,0,144.12,68.47Zm-28,16a4,4,0,0,0-1.65,5.41,81,81,0,0,1,0,76.24,4,4,0,1,0,7.06,3.76,89,89,0,0,0,0-83.76A4,4,0,0,0,116.12,84.47ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M95.31,101.2a57.37,57.37,0,0,1,0,53.6,6,6,0,0,1-10.62-5.6,44.75,44.75,0,0,0,0-42.4,6,6,0,1,1,10.62-5.6Zm47.86-34.49a6,6,0,0,0-2.46,8.12,112.67,112.67,0,0,1,0,106.34,6,6,0,1,0,10.58,5.66,124.65,124.65,0,0,0,0-117.66A6,6,0,0,0,143.17,66.71Zm-28,16a6,6,0,0,0-2.48,8.12,79,79,0,0,1,0,74.36,6,6,0,0,0,10.6,5.64,91,91,0,0,0,0-85.64A6,6,0,0,0,115.18,82.7ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM97.07,100.26a59.33,59.33,0,0,1,0,55.48,8,8,0,1,1-14.14-7.48,42.79,42.79,0,0,0,0-40.52,8,8,0,0,1,14.14-7.48Zm56-32a126.67,126.67,0,0,1,0,119.54A8,8,0,0,1,139,180.23a110.62,110.62,0,0,0,0-104.46,8,8,0,0,1,14.12-7.54Zm-28,16a93,93,0,0,1,0,87.52,8,8,0,1,1-14.12-7.52,77,77,0,0,0,0-72.48,8,8,0,1,1,14.12-7.52Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M152.58,66.35a130.61,130.61,0,0,1,0,123.3,12,12,0,1,1-21.17-11.3,106.7,106.7,0,0,0,0-100.7,12,12,0,1,1,21.16-11.3ZM100.36,77.41a12,12,0,0,0-5,16.23,73,73,0,0,1,0,68.72,12,12,0,1,0,21.18,11.28,97,97,0,0,0,0-91.28A12,12,0,0,0,100.36,77.41ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM97.07,155.74a8,8,0,1,1-14.14-7.48,42.79,42.79,0,0,0,0-40.52,8,8,0,0,1,14.14-7.48A59.33,59.33,0,0,1,97.07,155.74Zm28,16a8,8,0,1,1-14.12-7.52,77.07,77.07,0,0,0,0-72.48,8,8,0,1,1,14.12-7.52A93,93,0,0,1,125.06,171.76Zm28,16A8,8,0,0,1,139,180.23a110.62,110.62,0,0,0,0-104.46,8,8,0,0,1,14.12-7.54A126.67,126.67,0,0,1,153.07,187.77Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM97.07,100.26a59.33,59.33,0,0,1,0,55.48,8,8,0,1,1-14.14-7.48,42.79,42.79,0,0,0,0-40.52,8,8,0,0,1,14.14-7.48Zm56-32a126.67,126.67,0,0,1,0,119.54A8,8,0,0,1,139,180.23a110.62,110.62,0,0,0,0-104.46,8,8,0,0,1,14.12-7.54Zm-28,16a93,93,0,0,1,0,87.52,8,8,0,1,1-14.12-7.52,77,77,0,0,0,0-72.48,8,8,0,1,1,14.12-7.52Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "currentColor";

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
      ${PhContactlessPayment.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhContactlessPayment };
