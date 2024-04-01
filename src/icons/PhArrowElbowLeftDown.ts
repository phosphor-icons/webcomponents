/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-elbow-left-down": PhArrowElbowLeftDown;
  }
}

@customElement("ph-arrow-elbow-left-down")
class PhArrowElbowLeftDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M236,72a4,4,0,0,1-4,4H92V206.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L84,206.34V72a4,4,0,0,1,4-4H232A4,4,0,0,1,236,72Z"/>`,
    ],
    [
      "light",
      svg`<path d="M238,72a6,6,0,0,1-6,6H94V201.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,201.51V72a6,6,0,0,1,6-6H232A6,6,0,0,1,238,72Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,72a8,8,0,0,1-8,8H96V196.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L80,196.69V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,72a12,12,0,0,1-12,12H100V187l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L76,187V72A12,12,0,0,1,88,60H232A12,12,0,0,1,244,72Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,72a8,8,0,0,1-8,8H96v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,160H80V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,168,88,216,40,168Z" opacity="0.2"/><path d="M232,64H88a8,8,0,0,0-8,8v88H40a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,136,160H96V80H232a8,8,0,0,0,0-16ZM88,204.69,59.31,176h57.38Z"/>`,
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
      ${PhArrowElbowLeftDown.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhArrowElbowLeftDown };
