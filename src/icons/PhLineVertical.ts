/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-line-vertical": PhLineVertical;
  }
}

@customElement("ph-line-vertical")
class PhLineVertical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M132,24V232a4,4,0,0,1-8,0V24a4,4,0,0,1,8,0Z"/>`],
    ["light", svg`<path d="M134,24V232a6,6,0,0,1-12,0V24a6,6,0,0,1,12,0Z"/>`],
    ["regular", svg`<path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"/>`],
    [
      "bold",
      svg`<path d="M140,24V232a12,12,0,0,1-24,0V24a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM136,192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z" opacity="0.2"/><path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"/>`,
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
      ${PhLineVertical.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhLineVertical };
