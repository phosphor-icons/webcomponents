/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-first-aid-kit": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-first-aid-kit": IconAttrs;
    }
  }
}

@customElement("ph-first-aid-kit")
class PhFirstAidKit extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,60H172V48a20,20,0,0,0-20-20H104A20,20,0,0,0,84,48V60H40A12,12,0,0,0,28,72V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V72A12,12,0,0,0,216,60ZM92,48a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V60H92ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Zm-64-64a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V140H104a4,4,0,0,1,0-8h20V112a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,136Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94ZM218,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-60-64a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V142H104a6,6,0,0,1,0-12h18V112a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,136Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,52H180V44a28,28,0,0,0-28-28H104A28,28,0,0,0,76,44v8H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM100,44a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,196H44V76H212Zm-48-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V148H104a12,12,0,0,1,0-24h12V112a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,136Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56Zm-64,88H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm8-88H96V48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,72V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H216A8,8,0,0,1,224,72Z" opacity="0.2"/><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"/>`,
    ],
  ]);

  @property({ type: String, reflect: true })
  size?: string | number = "1em";

  @property({ type: String, reflect: true })
  weight?: IconWeight = "regular";

  @property({ type: String, reflect: true })
  color?: string = "currentColor";

  @property({ type: Boolean, reflect: true })
  mirrored?: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      ${PhFirstAidKit.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhFirstAidKit };
