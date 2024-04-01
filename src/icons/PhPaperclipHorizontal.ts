/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-paperclip-horizontal": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-paperclip-horizontal": IconAttrs;
    }
  }
}

@customElement("ph-paperclip-horizontal")
class PhPaperclipHorizontal extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M244,128a52.06,52.06,0,0,1-52,52H48a36,36,0,0,1,0-72H192a20,20,0,0,1,0,40H80a4,4,0,0,1,0-8H192a12,12,0,0,0,0-24H48a28,28,0,0,0,0,56H192a44,44,0,0,0,0-88H80a4,4,0,0,1,0-8H192A52.06,52.06,0,0,1,244,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M246,128a54.06,54.06,0,0,1-54,54H48a38,38,0,0,1,0-76H192a22,22,0,0,1,0,44H80a6,6,0,0,1,0-12H192a10,10,0,0,0,0-20H48a26,26,0,0,0,0,52H192a42,42,0,0,0,0-84H80a6,6,0,0,1,0-12H192A54.06,54.06,0,0,1,246,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M248,128a56.06,56.06,0,0,1-56,56H48a40,40,0,0,1,0-80H192a24,24,0,0,1,0,48H80a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H48a24,24,0,0,0,0,48H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192A56.06,56.06,0,0,1,248,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M252,128a60.07,60.07,0,0,1-60,60H44a40,40,0,0,1,0-80H184a12,12,0,0,1,0,24H44a16,16,0,0,0,0,32H192a36,36,0,0,0,0-72H80a12,12,0,0,1,0-24H192A60.07,60.07,0,0,1,252,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144H72a24,24,0,0,1,0-48h96a8,8,0,0,1,0,16H72a8,8,0,0,0,0,16h96a24,24,0,0,0,0-48H96a8,8,0,0,1,0-16h72a40,40,0,0,1,0,80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,128a48,48,0,0,1-48,48H48a32,32,0,0,1,0-64H80V80H192A48,48,0,0,1,240,128Z" opacity="0.2"/><path d="M248,128a56.06,56.06,0,0,1-56,56H48a40,40,0,0,1,0-80H192a24,24,0,0,1,0,48H80a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H48a24,24,0,0,0,0,48H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192A56.06,56.06,0,0,1,248,128Z"/>`,
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
      ${PhPaperclipHorizontal.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhPaperclipHorizontal };
