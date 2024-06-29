/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-file-html": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-file-html": IconAttrs;
    }
  }
}

@customElement("ph-file-html")
class PhFileHtml extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212,88a4,4,0,0,0-1.17-2.83l-2-2h0l-54-54A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v80a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v28a4,4,0,0,0,8,0ZM156,41.65,198.34,84H156ZM64,160v48a4,4,0,0,1-8,0V188H28v20a4,4,0,0,1-8,0V160a4,4,0,0,1,8,0v20H56V160a4,4,0,0,1,8,0Zm56,0a4,4,0,0,1-4,4H104v44a4,4,0,0,1-8,0V164H84a4,4,0,0,1,0-8h32A4,4,0,0,1,120,160Zm72,0v48a4,4,0,0,1-8,0V172l-16.8,22.4a4,4,0,0,1-6.4,0L144,172v36a4,4,0,0,1-8,0V160a4,4,0,0,1,7.2-2.4L164,185.33l20.8-27.73A4,4,0,0,1,192,160Zm56,48a4,4,0,0,1-4,4H216a4,4,0,0,1-4-4V160a4,4,0,0,1,8,0v44h24A4,4,0,0,1,248,208Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214,120V88a6,6,0,0,0-1.76-4.24l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v80a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v26a6,6,0,0,0,12,0ZM158,46.48,193.52,82H158ZM66,160v48a6,6,0,0,1-12,0V190H30v18a6,6,0,0,1-12,0V160a6,6,0,0,1,12,0v18H54V160a6,6,0,0,1,12,0Zm56,0a6,6,0,0,1-6,6H106v42a6,6,0,0,1-12,0V166H84a6,6,0,0,1,0-12h32A6,6,0,0,1,122,160Zm72,0v48a6,6,0,0,1-12,0V178l-13.2,17.6a6,6,0,0,1-9.6,0L146,178v30a6,6,0,0,1-12,0V160a6,6,0,0,1,10.8-3.6L164,182l19.2-25.6A6,6,0,0,1,194,160Zm56,48a6,6,0,0,1-6,6H216a6,6,0,0,1-6-6V160a6,6,0,0,1,12,0v42h22A6,6,0,0,1,250,208Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,120V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v80a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v24a8,8,0,0,0,16,0ZM160,51.31,188.69,80H160ZM68,160v48a8,8,0,0,1-16,0V192H32v16a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0v16H52V160a8,8,0,0,1,16,0Zm56,0a8,8,0,0,1-8,8h-8v40a8,8,0,0,1-16,0V168H84a8,8,0,0,1,0-16h32A8,8,0,0,1,124,160Zm72,0v48a8,8,0,0,1-16,0V184l-9.6,12.8a8,8,0,0,1-12.8,0L148,184v24a8,8,0,0,1-16,0V160a8,8,0,0,1,14.4-4.8L164,178.67l17.6-23.47A8,8,0,0,1,196,160Zm56,48a8,8,0,0,1-8,8H216a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v40h20A8,8,0,0,1,252,208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M48,128a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v12a12,12,0,0,0,24,0V88a12,12,0,0,0-3.51-8.49l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v76A12,12,0,0,0,48,128ZM183,80H160V57ZM68,160v48a12,12,0,0,1-24,0V196H32v12a12,12,0,0,1-24,0V160a12,12,0,0,1,24,0v12H44V160a12,12,0,0,1,24,0Zm60,0a12,12,0,0,1-12,12h-4v36a12,12,0,0,1-24,0V172H84a12,12,0,0,1,0-24h32A12,12,0,0,1,128,160Zm72,0v48a12,12,0,0,1-24,0v-9.36l-.11.16a12,12,0,0,1-19.78,0l-.11-.16V208a12,12,0,0,1-24,0V160a12,12,0,0,1,21.89-6.8L166,170.82l12.11-17.62A12,12,0,0,1,200,160Zm56,48a12,12,0,0,1-12,12H220a12,12,0,0,1-12-12V160a12,12,0,0,1,24,0v36h12A12,12,0,0,1,256,208Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M44,128H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v84A4,4,0,0,0,44,128ZM152,44l44,44H152ZM68,160v48a8,8,0,0,1-16,0V192H32v16a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0v16H52V160a8,8,0,0,1,16,0Zm56,0a8,8,0,0,1-8,8h-8v40a8,8,0,0,1-16,0V168H84a8,8,0,0,1,0-16h32A8,8,0,0,1,124,160Zm72,0v48a8,8,0,0,1-16,0V184l-9.6,12.8a8,8,0,0,1-12.8,0L148,184v24a8,8,0,0,1-16,0V160a8,8,0,0,1,14.4-4.8L164,178.67l17.6-23.47A8,8,0,0,1,196,160Zm56,48a8,8,0,0,1-8,8H216a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v40h20A8,8,0,0,1,252,208Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,88H152V32Z" opacity="0.2"/><path d="M216,120V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v80a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v24a8,8,0,0,0,16,0ZM160,51.31,188.69,80H160ZM68,160v48a8,8,0,0,1-16,0V192H32v16a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0v16H52V160a8,8,0,0,1,16,0Zm56,0a8,8,0,0,1-8,8h-8v40a8,8,0,0,1-16,0V168H84a8,8,0,0,1,0-16h32A8,8,0,0,1,124,160Zm72,0v48a8,8,0,0,1-16,0V184l-9.6,12.8a8,8,0,0,1-12.8,0L148,184v24a8,8,0,0,1-16,0V160a8,8,0,0,1,14.4-4.8L164,178.67l17.6-23.47A8,8,0,0,1,196,160Zm56,48a8,8,0,0,1-8,8H216a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v40h20A8,8,0,0,1,252,208Z"/>`,
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
      ${PhFileHtml.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhFileHtml };
