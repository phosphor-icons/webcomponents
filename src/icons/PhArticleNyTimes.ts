/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-article-ny-times": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-article-ny-times": IconAttrs;
    }
  }
}

@customElement("ph-article-ny-times")
class PhArticleNyTimes extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,100H232a4,4,0,0,1,0,8H128a4,4,0,0,1,0-8Zm104,32H128a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM96,140a4,4,0,0,0,0-8H84V60h40V72a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V72a4,4,0,0,0,8,0V60H76v72H64a4,4,0,0,0,0,8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,98H232a6,6,0,0,1,0,12H128a6,6,0,0,1,0-12Zm104,32H128a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM96,142a6,6,0,0,0,0-12H86V62h36V72a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V72a6,6,0,0,0,12,0V62H74v68H64a6,6,0,0,0,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,96H232a8,8,0,0,1,0,16H128a8,8,0,0,1,0-16Zm104,32H128a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,0-16H88V64h32v8a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V72a8,8,0,0,0,16,0V64H72v64H64a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M156,92a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H168A12,12,0,0,1,156,92Zm76,28H168a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM96,144a12,12,0,0,0,0-24H92V68h24v4a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H32A12,12,0,0,0,20,56V72a12,12,0,0,0,24,0V68H68v52H64a12,12,0,0,0,0,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM64,92a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8V92a8,8,0,0,1-16,0V88H100v48h4a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16h4V88H64Zm136,92H80a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,104v96H80V168h48V104Z" opacity="0.2"/><path d="M128,96H232a8,8,0,0,1,0,16H128a8,8,0,0,1,0-16Zm104,32H128a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,0-16H88V64h32v8a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V72a8,8,0,0,0,16,0V64H72v64H64a8,8,0,0,0,0,16Z"/>`,
    ],
  ]);

  @property({ type: String, reflect: true })
  size?: string | number = "1em";

  @property({ type: String, reflect: true })
  weight?: IconWeight = "regular";

  @property({ type: String, reflect: true })
  color?: string = "currentColor";

  @property({ type: Boolean, reflect: true })
  mirrored?: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      ${PhArticleNyTimes.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhArticleNyTimes };
