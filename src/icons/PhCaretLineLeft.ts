/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-caret-line-left": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-caret-line-left": IconAttrs;
    }
  }
}

@customElement("ph-caret-line-left")
class PhCaretLineLeft extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M194.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L117.66,128ZM72,44a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V48A4,4,0,0,0,72,44Z"/>`,
    ],
    [
      "light",
      svg`<path d="M196.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L120.49,128ZM72,42a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V48A6,6,0,0,0,72,42Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M197.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L123.31,128ZM72,40a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V48A8,8,0,0,0,72,40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M200.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L129,128ZM72,36A12,12,0,0,0,60,48V208a12,12,0,0,0,24,0V48A12,12,0,0,0,72,36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M200,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,200,48ZM72,40a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V48A8,8,0,0,0,72,40Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,48V208l-80-80Z" opacity="0.2"/><path d="M195.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,200,208V48A8,8,0,0,0,195.06,40.61ZM184,188.69,123.31,128,184,67.31ZM80,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z"/>`,
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
      ${PhCaretLineLeft.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhCaretLineLeft };
