/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-letter-circle-p": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-letter-circle-p": IconAttrs;
    }
  }
}

@customElement("ph-letter-circle-p")
class PhLetterCircleP extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-136H104a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V148h28a32,32,0,0,0,0-64Zm0,56H108V92h28a24,24,0,0,1,0,48Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm8-136H104a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V150h26a34,34,0,0,0,0-68Zm0,56H110V94h26a22,22,0,0,1,0,44Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm8-136H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24a36,36,0,0,0,0-72Zm0,56H112V96h24a20,20,0,0,1,0,40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm8-136H104A12,12,0,0,0,92,88v80a12,12,0,0,0,24,0V156h20a40,40,0,0,0,0-80Zm0,56H116V100h20a16,16,0,0,1,0,32Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M156,116a20,20,0,0,1-20,20H112V96h24A20,20,0,0,1,156,116Zm76,12A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-60-12a36,36,0,0,0-36-36H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24A36,36,0,0,0,172,116Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm8-136H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24a36,36,0,0,0,0-72Zm0,56H112V96h24a20,20,0,0,1,0,40Z"/>`,
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
      ${PhLetterCircleP.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhLetterCircleP };
