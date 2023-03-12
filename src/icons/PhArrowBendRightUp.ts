/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-arrow-bend-right-up")
export default class PhArrowBendRightUp extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M202.83,82.83a4,4,0,0,1-5.66,0L156,41.66V128A100.11,100.11,0,0,1,56,228a4,4,0,0,1,0-8,92.1,92.1,0,0,0,92-92V41.66L106.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48A4,4,0,0,1,202.83,82.83Z"/>`,
    ],
    [
      "light",
      svg`<path d="M204.24,84.24a6,6,0,0,1-8.48,0L158,46.49V128A102.12,102.12,0,0,1,56,230a6,6,0,0,1,0-12,90.1,90.1,0,0,0,90-90V46.49L108.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,204.24,84.24Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M205.66,85.66a8,8,0,0,1-11.32,0L160,51.31V128A104.11,104.11,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V51.31L109.66,85.66A8,8,0,0,1,98.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,205.66,85.66Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208.49,88.49a12,12,0,0,1-17,0L164,61v67A108.12,108.12,0,0,1,56,236a12,12,0,0,1,0-24,84.09,84.09,0,0,0,84-84V61L112.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,208.49,88.49Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M207.39,83.06A8,8,0,0,1,200,88H160v40A104.11,104.11,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V88H104a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,207.39,83.06Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,80H104l48-48Z" opacity="0.2"/><path d="M205.66,74.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,104,88h40v40a88.1,88.1,0,0,1-88,88,8,8,0,0,0,0,16A104.11,104.11,0,0,0,160,128V88h40a8,8,0,0,0,5.66-13.66ZM123.31,72,152,43.31,180.69,72Z"/>`,
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
      ${PhArrowBendRightUp.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-bend-right-up": PhArrowBendRightUp;
  }
}
