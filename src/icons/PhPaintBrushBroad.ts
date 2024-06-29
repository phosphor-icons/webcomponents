/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-paint-brush-broad": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-paint-brush-broad": IconAttrs;
    }
  }
}

@customElement("ph-paint-brush-broad")
class PhPaintBrushBroad extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,28H72A36,36,0,0,0,36,64v72a20,20,0,0,0,20,20h48a4,4,0,0,1,4,4.52l-7.9,46.81a3.79,3.79,0,0,0-.06.67,28,28,0,0,0,56,0,3.79,3.79,0,0,0-.06-.67L148,160.52a4,4,0,0,1,4-4.52h48a20,20,0,0,0,20-20V32A4,4,0,0,0,216,28ZM72,36H180V80a4,4,0,0,0,8,0V36h24v72H44V64A28,28,0,0,1,72,36ZM200,148H152a12,12,0,0,0-11.88,13.7s0,.06,0,.1L148,208.32a20,20,0,0,1-40,0l7.86-46.52s0-.07,0-.1A12,12,0,0,0,104,148H56a12,12,0,0,1-12-12V116H212v20A12,12,0,0,1,200,148Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,26H72A38,38,0,0,0,34,64v72a22,22,0,0,0,22,22h48a2,2,0,0,1,2,2.23L98.08,207a6.74,6.74,0,0,0-.08,1,30,30,0,0,0,60,0,6.74,6.74,0,0,0-.08-1L150,160.23a2,2,0,0,1,2-2.23h48a22,22,0,0,0,22-22V32A6,6,0,0,0,216,26ZM72,38H178V80a6,6,0,0,0,12,0V38h20v68H46V64A26,26,0,0,1,72,38ZM200,146H152a14,14,0,0,0-13.86,16l0,.15L146,208.47a18,18,0,0,1-36,0l7.82-46.34,0-.15A14,14,0,0,0,104,146H56a10,10,0,0,1-10-10V118H210v18A10,10,0,0,1,200,146Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24,24,0,0,1,72,40ZM200,144H152a16,16,0,0,0-15.84,18.26l0,.2L144,208.6a16,16,0,0,1-32,0l7.8-46.14,0-.2A16,16,0,0,0,104,144H56a8,8,0,0,1-8-8V120H208v16A8,8,0,0,1,200,144Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,20H72A44.05,44.05,0,0,0,28,64v72a28,28,0,0,0,28,28H95.64L92,207c0,.33,0,.67,0,1a36,36,0,0,0,72,0c0-.33,0-.67,0-1l-3.6-43H200a28,28,0,0,0,28-28V32A12,12,0,0,0,216,20ZM72,44h88V68a12,12,0,0,0,24,0V44h20V96H52V64A20,20,0,0,1,72,44Zm128,96H156a20,20,0,0,0-19.85,22.4l3.84,46a12,12,0,0,1-24,0l3.84-46A20,20,0,0,0,100,140H56a4,4,0,0,1-4-4V120H204v16A4,4,0,0,1,200,140Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v72H48V64A24,24,0,0,1,72,40Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,112v24a16,16,0,0,1-16,16H152a8,8,0,0,0-7.92,9.13L152,208a24,24,0,0,1-48,0l7.92-46.87A8,8,0,0,0,104,152H56a16,16,0,0,1-16-16V112Z" opacity="0.2"/><path d="M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24,24,0,0,1,72,40ZM200,144H152a16,16,0,0,0-15.84,18.26l0,.2L144,208.6a16,16,0,0,1-32,0l7.8-46.14,0-.2A16,16,0,0,0,104,144H56a8,8,0,0,1-8-8V120H208v16A8,8,0,0,1,200,144Z"/>`,
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
      ${PhPaintBrushBroad.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPaintBrushBroad };
