/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-laptop": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-laptop": IconAttrs;
    }
  }
}

@customElement("ph-laptop")
class PhLaptop extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M232,172H220V72a20,20,0,0,0-20-20H56A20,20,0,0,0,36,72V172H24a4,4,0,0,0-4,4v16a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V176A4,4,0,0,0,232,172ZM44,72A12,12,0,0,1,56,60H200a12,12,0,0,1,12,12V172H44ZM228,192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V180H228ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z"/>`,
    ],
    [
      "light",
      svg`<path d="M232,170H222V72a22,22,0,0,0-22-22H56A22,22,0,0,0,34,72v98H24a6,6,0,0,0-6,6v16a22,22,0,0,0,22,22H216a22,22,0,0,0,22-22V176A6,6,0,0,0,232,170ZM46,72A10,10,0,0,1,56,62H200a10,10,0,0,1,10,10v98H46ZM226,192a10,10,0,0,1-10,10H40a10,10,0,0,1-10-10V182H226ZM150,88a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,88Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232,156h-4V72a28,28,0,0,0-28-28H56A28,28,0,0,0,28,72v84H24a12,12,0,0,0-12,12v24a28,28,0,0,0,28,28H216a28,28,0,0,0,28-28V168A12,12,0,0,0,232,156ZM52,72a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4v84H52ZM220,192a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V180H220ZM156,96a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,96Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM112,72h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,72V176H40V72A16,16,0,0,1,56,56H200A16,16,0,0,1,216,72Z" opacity="0.2"/><path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"/>`,
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
      ${PhLaptop.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhLaptop };
