/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-arrow-u-left-down")
export default class PhArrowULeftDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,88v88a4,4,0,0,1-8,0V88A52,52,0,0,0,92,88V214.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L84,214.34V88a60,60,0,0,1,120,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,88v88a6,6,0,0,1-12,0V88A50,50,0,0,0,94,88V209.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,209.51V88a62,62,0,0,1,124,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0V204.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L80,204.69V88a64,64,0,0,1,128,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,88v88a12,12,0,0,1-24,0V88a44,44,0,0,0-88,0V195l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L76,195V88a68,68,0,0,1,136,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,168H80V88a64,64,0,0,1,128,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,176,88,224,40,176Z" opacity="0.2"/><path d="M144,24A64.07,64.07,0,0,0,80,88v80H40a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,136,168H96V88a48,48,0,0,1,96,0v88a8,8,0,0,0,16,0V88A64.07,64.07,0,0,0,144,24ZM88,212.69,59.31,184h57.38Z"/>`,
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
      ${PhArrowULeftDown.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-u-left-down": PhArrowULeftDown;
  }
}
