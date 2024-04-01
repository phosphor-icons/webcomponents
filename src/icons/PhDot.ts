/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-dot": PhDot;
  }
}

@customElement("ph-dot")
class PhDot extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"/>`],
    ["light", svg`<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"/>`],
    [
      "regular",
      svg`<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/>`,
    ],
    ["bold", svg`<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"/>`],
    [
      "fill",
      svg`<path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"/><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/>`,
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
      ${PhDot.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhDot };
