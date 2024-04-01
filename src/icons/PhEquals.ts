/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-equals": PhEquals;
  }
}

@customElement("ph-equals")
class PhEquals extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M220,160a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,160ZM40,100H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M222,160a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,160ZM40,102H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M228,160a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,160ZM40,108H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,160H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Zm0-48H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"/><path d="M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"/>`,
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
      ${PhEquals.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhEquals };
