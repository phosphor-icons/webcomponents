/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-u-down-left": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-u-down-left": IconAttrs;
    }
  }
}

@customElement("ph-arrow-u-down-left")
class PhArrowUDownLeft extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228,112a60.07,60.07,0,0,1-60,60H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,164H168a52,52,0,0,0,0-104H80a4,4,0,0,1,0-8h88A60.07,60.07,0,0,1,228,112Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230,112a62.07,62.07,0,0,1-62,62H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,162H168a50,50,0,0,0,0-100H80a6,6,0,0,1,0-12h88A62.07,62.07,0,0,1,230,112Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,112a64.07,64.07,0,0,1-64,64H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,11.32L51.31,160H168a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h88A64.07,64.07,0,0,1,232,112Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M236,112a68.07,68.07,0,0,1-68,68H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L61,156H168a44,44,0,0,0,0-88H80a12,12,0,0,1,0-24h88A68.07,68.07,0,0,1,236,112Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,112a64.07,64.07,0,0,1-64,64H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,120v40h80a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h88A64.07,64.07,0,0,1,232,112Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M80,120v96L32,168Z" opacity="0.2"/><path d="M168,48H80a8,8,0,0,0,0,16h88a48,48,0,0,1,0,96H88V120a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,216V176h80a64,64,0,0,0,0-128ZM72,196.69,43.31,168,72,139.31Z"/>`,
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
      ${PhArrowUDownLeft.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhArrowUDownLeft };
