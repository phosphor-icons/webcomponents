/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-number-eight": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-number-eight": IconAttrs;
    }
  }
}

@customElement("ph-number-eight")
class PhNumberEight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M147.08,119.64a44,44,0,1,0-38.16,0,52,52,0,1,0,38.16,0ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Zm36,132a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,212Z"/>`,
    ],
    [
      "light",
      svg`<path d="M151.62,119.45a46,46,0,1,0-47.24,0,54,54,0,1,0,47.24,0ZM94,80a34,34,0,1,1,34,34A34,34,0,0,1,94,80Zm34,130a42,42,0,1,1,42-42A42,42,0,0,1,128,210Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M162.44,118.91a52,52,0,1,0-68.88,0,60,60,0,1,0,68.88,0ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,124a36,36,0,1,1,36-36A36,36,0,0,1,128,204Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M108,92a20,20,0,1,1,20,20A20,20,0,0,1,108,92Zm20,36a28,28,0,1,0,28,28A28,28,0,0,0,128,128Zm88-88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM172,156a44,44,0,0,0-20.23-37,36,36,0,1,0-47.54,0A44,44,0,1,0,172,156Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z"/>`,
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
      ${PhNumberEight.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhNumberEight };
