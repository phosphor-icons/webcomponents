/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-align-bottom": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-align-bottom": IconAttrs;
    }
  }
}

@customElement("ph-align-bottom")
class PhAlignBottom extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm-80-40V80a12,12,0,0,1,12-12h40a12,12,0,0,1,12,12v96a12,12,0,0,1-12,12H152A12,12,0,0,1,140,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4Zm-96,0V40A12,12,0,0,1,64,28h40a12,12,0,0,1,12,12V176a12,12,0,0,1-12,12H64A12,12,0,0,1,52,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm-84-40V80a14,14,0,0,1,14-14h40a14,14,0,0,1,14,14v96a14,14,0,0,1-14,14H152A14,14,0,0,1,138,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2ZM50,176V40A14,14,0,0,1,64,26h40a14,14,0,0,1,14,14V176a14,14,0,0,1-14,14H64A14,14,0,0,1,50,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-88-40V80a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v96a16,16,0,0,1-16,16H152A16,16,0,0,1,136,176Zm16,0h40V80H152ZM48,176V40A16,16,0,0,1,64,24h40a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H64A16,16,0,0,1,48,176Zm16,0h40V40H64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Zm-92-48V80a20,20,0,0,1,20-20h36a20,20,0,0,1,20,20v88a20,20,0,0,1-20,20H156A20,20,0,0,1,136,168Zm24-4h28V84H160ZM44,168V40A20,20,0,0,1,64,20h36a20,20,0,0,1,20,20V168a20,20,0,0,1-20,20H64A20,20,0,0,1,44,168Zm24-4H96V44H68Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm-88,0h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,80v96a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h40A8,8,0,0,1,200,80ZM104,32H64a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V40A8,8,0,0,0,104,32Z" opacity="0.2"/><path d="M64,192h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192ZM64,40h40V176H64ZM224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm0-112h40v96H152Z"/>`,
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
      ${PhAlignBottom.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhAlignBottom };
