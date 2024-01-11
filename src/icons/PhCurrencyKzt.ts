/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-currency-kzt")
export default class PhCurrencyKzt extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,96a4,4,0,0,1-4,4H132V216a4,4,0,0,1-8,0V100H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM56,60H200a4,4,0,0,0,0-8H56a4,4,0,0,0,0,8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,96a6,6,0,0,1-6,6H134V216a6,6,0,0,1-12,0V102H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM56,62H200a6,6,0,0,0,0-12H56a6,6,0,0,0,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,100a12,12,0,0,1-12,12H140V212a12,12,0,0,1-24,0V112H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,100ZM56,64H200a12,12,0,0,0,0-24H56a12,12,0,0,0,0,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm48,96H136v72a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,56V96H56V56Z" opacity="0.2"/><path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z"/>`,
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
      ${PhCurrencyKzt.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-currency-kzt": PhCurrencyKzt;
  }
}
