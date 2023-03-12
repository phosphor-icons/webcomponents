/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-arrow-elbow-left-down")
export default class PhArrowElbowLeftDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228,64a4,4,0,0,1-4,4H84V198.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L76,198.34V64a4,4,0,0,1,4-4H224A4,4,0,0,1,228,64Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230,64a6,6,0,0,1-6,6H86V193.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L74,193.51V64a6,6,0,0,1,6-6H224A6,6,0,0,1,230,64Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,64a8,8,0,0,1-8,8H88V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L72,188.69V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M236,64a12,12,0,0,1-12,12H92V179l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L68,179V64A12,12,0,0,1,80,52H224A12,12,0,0,1,236,64Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,64a8,8,0,0,1-8,8H88v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,32,152H72V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,160,80,208,32,160Z" opacity="0.2"/><path d="M224,56H80a8,8,0,0,0-8,8v88H32a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,128,152H88V72H224a8,8,0,0,0,0-16ZM80,196.69,51.31,168h57.38Z"/>`,
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
      ${PhArrowElbowLeftDown.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-elbow-left-down": PhArrowElbowLeftDown;
  }
}
