/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-caret-double-up")
export default class PhCaretDoubleUp extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M210.83,205.17a4,4,0,0,1-5.66,5.66L128,133.66,50.83,210.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0Zm-160-74.34L128,53.66l77.17,77.17a4,4,0,0,0,5.66-5.66l-80-80a4,4,0,0,0-5.66,0l-80,80a4,4,0,0,0,5.66,5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M212.24,203.76a6,6,0,1,1-8.48,8.48L128,136.49,52.24,212.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0Zm-160-71.52L128,56.49l75.76,75.75a6,6,0,0,0,8.48-8.48l-80-80a6,6,0,0,0-8.48,0l-80,80a6,6,0,0,0,8.48,8.48Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M213.66,202.34a8,8,0,0,1-11.32,11.32L128,139.31,53.66,213.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0Zm-160-68.68L128,59.31l74.34,74.35a8,8,0,0,0,11.32-11.32l-80-80a8,8,0,0,0-11.32,0l-80,80a8,8,0,0,0,11.32,11.32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216.49,199.51a12,12,0,0,1-17,17L128,145,56.49,216.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0Zm-160-63L128,65l71.51,71.52a12,12,0,0,0,17-17l-80-80a12,12,0,0,0-17,0l-80,80a12,12,0,0,0,17,17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M213.66,202.34A8,8,0,0,1,208,216H48a8,8,0,0,1-5.66-13.66L108.69,136H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,208,136H147.31Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,208H48l80-80Z" opacity="0.2"/><path d="M133.66,122.34a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,216H208a8,8,0,0,0,5.66-13.66ZM67.31,200,128,139.31,188.69,200Zm-25-66.34a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1-11.32,11.32L128,59.31,53.66,133.66A8,8,0,0,1,42.34,133.66Z"/>`,
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
      ${PhCaretDoubleUp.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-caret-double-up": PhCaretDoubleUp;
  }
}
