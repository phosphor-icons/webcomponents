/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-circle-up-left": PhArrowCircleUpLeft;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-circle-up-left": PhArrowCircleUpLeft;
    }
  }
}

@customElement("ph-arrow-circle-up-left")
class PhArrowCircleUpLeft extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-62.83a4,4,0,0,1-5.66,5.66L100,105.66V144a4,4,0,0,1-8,0V96a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H105.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm36.24-62.24a6,6,0,1,1-8.48,8.48L102,110.49V144a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H110.49Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-61.66a8,8,0,0,1-11.32,11.32L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm40.49-60.49a12,12,0,0,1-17,17L108,125v19a12,12,0,0,1-24,0V96A12,12,0,0,1,96,84h48a12,12,0,0,1,0,24H125Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,141.66a8,8,0,0,1-11.32,0L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34A8,8,0,0,1,165.66,165.66Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-61.66a8,8,0,0,1-11.32,11.32L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31Z"/>`,
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
      ${PhArrowCircleUpLeft.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhArrowCircleUpLeft };
