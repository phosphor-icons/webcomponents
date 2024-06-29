/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-greater-than": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-greater-than": IconAttrs;
    }
  }
}

@customElement("ph-greater-than")
class PhGreaterThan extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M220,128a4,4,0,0,1-2.29,3.62l-152,72A3.85,3.85,0,0,1,64,204a4,4,0,0,1-1.71-7.62L206.66,128,62.29,59.62a4,4,0,0,1,3.42-7.23l152,72A4,4,0,0,1,220,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M222,128a6,6,0,0,1-3.43,5.42l-152,72a6,6,0,1,1-5.14-10.84L202,128,61.43,61.42a6,6,0,1,1,5.14-10.84l152,72A6,6,0,0,1,222,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,128a8,8,0,0,1-4.58,7.23l-152,72a8,8,0,1,1-6.85-14.46L197.31,128,60.58,63.23a8,8,0,1,1,6.85-14.46l152,72A8,8,0,0,1,224,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M228,128a12,12,0,0,1-6.86,10.84l-152,72a12,12,0,0,1-10.27-21.69L188,128,58.87,66.85A12,12,0,0,1,69.14,45.16l152,72A12,12,0,0,1,228,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM187.35,135.26l-104,48a8,8,0,0,1-6.7-14.52L164.91,128,76.65,87.26a8,8,0,1,1,6.7-14.52l104,48a8,8,0,0,1,0,14.52Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,128,64,200V56Z" opacity="0.2"/><path d="M224,128a8,8,0,0,1-4.58,7.23l-152,72a8,8,0,1,1-6.85-14.46L197.31,128,60.58,63.23a8,8,0,1,1,6.85-14.46l152,72A8,8,0,0,1,224,128Z"/>`,
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
      ${PhGreaterThan.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhGreaterThan };
