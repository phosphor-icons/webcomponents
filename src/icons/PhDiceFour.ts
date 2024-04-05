/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-dice-four": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-dice-four": IconAttrs;
    }
  }
}

@customElement("ph-dice-four")
class PhDiceFour extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM108,100a8,8,0,1,1-8-8A8,8,0,0,1,108,100Zm56,0a8,8,0,1,1-8-8A8,8,0,0,1,164,100Zm-56,56a8,8,0,1,1-8-8A8,8,0,0,1,108,156Zm56,0a8,8,0,1,1-8-8A8,8,0,0,1,164,156Z"/>`,
    ],
    [
      "light",
      svg`<path d="M192,34H64A30,30,0,0,0,34,64V192a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V64A30,30,0,0,0,192,34Zm18,158a18,18,0,0,1-18,18H64a18,18,0,0,1-18-18V64A18,18,0,0,1,64,46H192a18,18,0,0,1,18,18ZM110,100a10,10,0,1,1-10-10A10,10,0,0,1,110,100Zm56,0a10,10,0,1,1-10-10A10,10,0,0,1,166,100Zm-56,56a10,10,0,1,1-10-10A10,10,0,0,1,110,156Zm56,0a10,10,0,1,1-10-10A10,10,0,0,1,166,156Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-96-92a12,12,0,1,1-12-12A12,12,0,0,1,112,100Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,100Zm-56,56a12,12,0,1,1-12-12A12,12,0,0,1,112,156Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,156Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M192,28H64A36,36,0,0,0,28,64V192a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V64A36,36,0,0,0,192,28Zm12,164a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H192a12,12,0,0,1,12,12ZM112,96A16,16,0,1,1,96,80,16,16,0,0,1,112,96Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,96Zm-64,64a16,16,0,1,1-16-16A16,16,0,0,1,112,160Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,160Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM100,168a12,12,0,1,1,12-12A12,12,0,0,1,100,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,100,112Zm56,56a12,12,0,1,1,12-12A12,12,0,0,1,156,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,156,112Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,64V192a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V64A24,24,0,0,1,64,40H192A24,24,0,0,1,216,64Z" opacity="0.2"/><path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-96-92a12,12,0,1,1-12-12A12,12,0,0,1,112,100Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,100Zm-56,56a12,12,0,1,1-12-12A12,12,0,0,1,112,156Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,156Z"/>`,
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
      <slot></slot>
      ${PhDiceFour.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhDiceFour };
