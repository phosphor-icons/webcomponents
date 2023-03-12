/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-caret-double-down")
export default class PhCaretDoubleDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M210.83,125.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,1,1,5.66-5.66L128,202.34l77.17-77.17A4,4,0,0,1,210.83,125.17Zm-85.66,5.66a4,4,0,0,0,5.66,0l80-80a4,4,0,1,0-5.66-5.66L128,122.34,50.83,45.17a4,4,0,0,0-5.66,5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M212.24,123.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,1,1,8.48-8.48L128,199.51l75.76-75.75A6,6,0,0,1,212.24,123.76Zm-88.48,8.48a6,6,0,0,0,8.48,0l80-80a6,6,0,0,0-8.48-8.48L128,119.51,52.24,43.76a6,6,0,0,0-8.48,8.48Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M213.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35A8,8,0,0,1,213.66,122.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,116.69,53.66,42.34A8,8,0,0,0,42.34,53.66Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216.49,119.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,1,1,17-17L128,191l71.51-71.52A12,12,0,0,1,216.49,119.51Zm-97,17a12,12,0,0,0,17,0l80-80a12,12,0,0,0-17-17L128,111,56.49,39.51a12,12,0,0,0-17,17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M215.39,124.94a8,8,0,0,1-1.73,8.72l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,120h60.69L42.34,53.66A8,8,0,0,1,48,40H208a8,8,0,0,1,5.66,13.66L147.31,120H208A8,8,0,0,1,215.39,124.94Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,48l-80,80L48,48Z" opacity="0.2"/><path d="M213.66,133.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35a8,8,0,0,1,11.32,11.32Zm-171.32-80A8,8,0,0,1,48,40H208a8,8,0,0,1,5.66,13.66l-80,80a8,8,0,0,1-11.32,0Zm25,2.34L128,116.69,188.69,56Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhCaretDoubleDown.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-caret-double-down": PhCaretDoubleDown;
  }
}