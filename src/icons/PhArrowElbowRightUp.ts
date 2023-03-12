/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-arrow-elbow-right-up")
export default class PhArrowElbowRightUp extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M226.83,98.83a4,4,0,0,1-5.66,0L180,57.66V192a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H172V57.66L130.83,98.83a4,4,0,1,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48A4,4,0,0,1,226.83,98.83Z"/>`,
    ],
    [
      "light",
      svg`<path d="M228.24,100.24a6,6,0,0,1-8.48,0L182,62.49V192a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H170V62.49l-37.76,37.75a6,6,0,1,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,228.24,100.24Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M229.66,101.66a8,8,0,0,1-11.32,0L184,67.31V192a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H168V67.31l-34.34,34.35a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,229.66,101.66Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232.49,104.49a12,12,0,0,1-17,0L188,77V192a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24H164V77l-27.51,27.52a12,12,0,1,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,232.49,104.49Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M231.39,99.06A8,8,0,0,1,224,104H184v88a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H168V104H128a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,231.39,99.06Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,96H128l48-48Z" opacity="0.2"/><path d="M229.66,90.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,128,104h40v80H32a8,8,0,0,0,0,16H176a8,8,0,0,0,8-8V104h40a8,8,0,0,0,5.66-13.66ZM147.31,88,176,59.31,204.69,88Z"/>`,
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
      ${PhArrowElbowRightUp.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-elbow-right-up": PhArrowElbowRightUp;
  }
}