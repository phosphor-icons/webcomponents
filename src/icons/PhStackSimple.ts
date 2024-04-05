/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-stack-simple": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-stack-simple": IconAttrs;
    }
  }
}

@customElement("ph-stack-simple")
class PhStackSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M14,107.47l112,64a4,4,0,0,0,4,0l112-64a4,4,0,0,0,0-6.94l-112-64a4,4,0,0,0-4,0l-112,64a4,4,0,0,0,0,6.94ZM128,44.61,231.94,104,128,163.39,24.06,104ZM243.47,142a4,4,0,0,1-1.49,5.45l-112,64a4,4,0,0,1-4,0l-112-64a4,4,0,0,1,4-6.94l110,62.86,110-62.86A4,4,0,0,1,243.47,142Z"/>`,
    ],
    [
      "light",
      svg`<path d="M13,109.21l112,64a6,6,0,0,0,6,0l112-64a6,6,0,0,0,0-10.42l-112-64a6,6,0,0,0-6,0l-112,64a6,6,0,0,0,0,10.42Zm115-62.3L227.91,104,128,161.09,28.09,104ZM245.21,141a6,6,0,0,1-2.23,8.19l-112,64a6,6,0,0,1-6,0l-112-64a6,6,0,0,1,6-10.42l109,62.3,109-62.3A6,6,0,0,1,245.21,141Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM246.94,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,0,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,246.94,140Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M10.05,110.42l112,64a12,12,0,0,0,11.9,0l112-64a12,12,0,0,0,0-20.84l-112-64a12,12,0,0,0-11.9,0l-112,64a12,12,0,0,0,0,20.84Zm118-60.6L215.81,100,128,150.18,40.19,100Zm122.42,92.23A12,12,0,0,1,246,158.42l-112,64a12,12,0,0,1-11.9,0l-112-64A12,12,0,1,1,22,137.58l106,60.6,106-60.6A12,12,0,0,1,250.42,142.05Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111Z"/><path d="M236,137.05,128,198.79,20,137.05A8,8,0,1,0,12,151l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,1,0-7.94-13.9Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,104,128,168,16,104,128,40Z" opacity="0.2"/><path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM247,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,1,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,247,140Z"/>`,
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
      <slot></slot>
      ${PhStackSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhStackSimple };
