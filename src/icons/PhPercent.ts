/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-percent": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-percent": IconAttrs;
    }
  }
}

@customElement("ph-percent")
class PhPercent extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M202.83,58.81l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.65ZM53.37,98.62A32,32,0,1,1,76,108,31.82,31.82,0,0,1,53.37,98.62ZM52,76a24,24,0,1,0,7-17A23.85,23.85,0,0,0,52,76ZM212,180a32,32,0,1,1-9.37-22.63A31.82,31.82,0,0,1,212,180Zm-8,0a24,24,0,1,0-7,17A23.89,23.89,0,0,0,204,180Z"/>`,
    ],
    [
      "light",
      svg`<path d="M204.24,60.23l-144,144a6,6,0,0,1-8.48-8.48l144-144a6,6,0,1,1,8.48,8.49ZM52,100A34,34,0,1,1,76,110,33.78,33.78,0,0,1,52,100Zm2-24a22,22,0,1,0,6.44-15.56A21.86,21.86,0,0,0,54,76ZM214,180A34,34,0,1,1,204,156,33.78,33.78,0,0,1,214,180Zm-12,0a21.87,21.87,0,0,0-6.44-15.56h0A22,22,0,1,0,202,180Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M205.66,61.64l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.31ZM50.54,101.44a36,36,0,0,1,50.92-50.91h0a36,36,0,0,1-50.92,50.91ZM56,76A20,20,0,1,0,90.14,61.84h0A20,20,0,0,0,56,76ZM216,180a36,36,0,1,1-10.54-25.46h0A35.76,35.76,0,0,1,216,180Zm-16,0a20,20,0,1,0-5.86,14.14A19.87,19.87,0,0,0,200,180Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208.49,64.47l-144,144a12,12,0,1,1-17-17l144-144a12,12,0,0,1,17,17ZM47.72,104.27A40,40,0,1,1,76,116,39.72,39.72,0,0,1,47.72,104.27ZM60,76a16,16,0,1,0,4.69-11.31A15.87,15.87,0,0,0,60,76ZM220,180a40,40,0,1,1-11.72-28.29A39.71,39.71,0,0,1,220,180Zm-24,0a15.87,15.87,0,0,0-4.69-11.32h0A16,16,0,1,0,196,180Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M176,172a12,12,0,1,1-12-12A12,12,0,0,1,176,172ZM92,96A12,12,0,1,0,80,84,12,12,0,0,0,92,96ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM64,84A28,28,0,1,0,92,56,28,28,0,0,0,64,84Zm128,88a28,28,0,1,0-28,28A28,28,0,0,0,192,172ZM189.66,66.34a8,8,0,0,0-11.32,0l-112,112a8,8,0,0,0,11.32,11.32l112-112A8,8,0,0,0,189.66,66.34Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M95.8,56.2a28,28,0,1,1-39.6,0A28,28,0,0,1,95.8,56.2Zm104,104a28,28,0,1,0,0,39.6A28,28,0,0,0,199.8,160.2Z" opacity="0.2"/><path d="M205.66,61.64l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.31ZM50.54,101.44a36,36,0,0,1,50.92-50.91h0a36,36,0,0,1-50.92,50.91ZM56,76A20,20,0,1,0,90.14,61.84h0A20,20,0,0,0,56,76ZM216,180a36,36,0,1,1-10.54-25.46h0A35.76,35.76,0,0,1,216,180Zm-16,0a20,20,0,1,0-5.86,14.14A19.87,19.87,0,0,0,200,180Z"/>`,
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
      ${PhPercent.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPercent };
