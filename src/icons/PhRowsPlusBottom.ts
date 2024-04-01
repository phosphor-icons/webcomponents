/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-rows-plus-bottom": PhRowsPlusBottom;
  }
}

@customElement("ph-rows-plus-bottom")
class PhRowsPlusBottom extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,116H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V128A12,12,0,0,0,208,116Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V128a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,44H48A12,12,0,0,0,36,56V80A12,12,0,0,0,48,92H208a12,12,0,0,0,12-12V56A12,12,0,0,0,208,44Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM156,216a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V220H104a4,4,0,0,1,0-8h20V192a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,216Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,114H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V128A14,14,0,0,0,208,114Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V128a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,42H48A14,14,0,0,0,34,56V80A14,14,0,0,0,48,94H208a14,14,0,0,0,14-14V56A14,14,0,0,0,208,42Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM158,216a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V222H104a6,6,0,0,1,0-12h18V192a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,216Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V128A16,16,0,0,0,208,112Zm0,40H48V128H208v24Zm0-112H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,40H48V56H208V80ZM160,216a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V224H104a8,8,0,0,1,0-16h16V192a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,216Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,112H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V132A20,20,0,0,0,208,112Zm-4,40H52V136H204Zm4-116H48A20,20,0,0,0,28,56V80a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V56A20,20,0,0,0,208,36Zm-4,40H52V60H204ZM160,220a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,160,220Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M224,128v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H208A16,16,0,0,1,224,128ZM208,40H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM152,208H136V192a8,8,0,0,0-16,0v16H104a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V224h16a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,128v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V128a8,8,0,0,1,8-8H208A8,8,0,0,1,216,128Zm-8-80H48a8,8,0,0,0-8,8V80a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V56A8,8,0,0,0,208,48Z" opacity="0.2"/><path d="M208,112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V128A16,16,0,0,0,208,112Zm0,40H48V128H208v24Zm0-112H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,40H48V56H208V80ZM160,216a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V224H104a8,8,0,0,1,0-16h16V192a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,216Z"/>`,
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
      ${PhRowsPlusBottom.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhRowsPlusBottom };
