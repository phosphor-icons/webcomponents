/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-upload-simple")
export default class PhUploadSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M220,152v56a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V152a4,4,0,0,1,8,0v56a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V152a4,4,0,0,1,8,0ZM90.83,82.83,124,49.66V152a4,4,0,0,0,8,0V49.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M222,152v56a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V152a6,6,0,0,1,12,0v56a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V152a6,6,0,0,1,12,0ZM92.24,84.24,122,54.49V152a6,6,0,0,0,12,0V54.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM93.66,85.66,120,59.31V152a8,8,0,0,0,16,0V59.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,85.66Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M228,152v56a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V152a12,12,0,0,1,24,0v52H204V152a12,12,0,0,1,24,0ZM96.49,88.49,116,69v83a12,12,0,0,0,24,0V69l19.51,19.52a12,12,0,0,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,0,0,17,17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM88,88h32v64a8,8,0,0,0,16,0V88h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,88Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M168,80H88l40-40Z" opacity="0.2"/><path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM80.61,83.06a8,8,0,0,1,1.73-8.72l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,168,88H136v64a8,8,0,0,1-16,0V88H88A8,8,0,0,1,80.61,83.06ZM107.31,72h41.38L128,51.31Z"/>`,
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
      ${PhUploadSimple.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-upload-simple": PhUploadSimple;
  }
}
