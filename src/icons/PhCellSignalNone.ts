/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-cell-signal-none": PhCellSignalNone;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-cell-signal-none": PhCellSignalNone;
    }
  }
}

@customElement("ph-cell-signal-none")
class PhCellSignalNone extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z"/>`],
    ["light", svg`<path d="M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z"/>`],
    ["regular", svg`<path d="M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z"/>`],
    ["bold", svg`<path d="M52,192v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Z"/>`],
    [
      "fill",
      svg`<path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H32L192,40Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z"/>`,
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
      ${PhCellSignalNone.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCellSignalNone };
