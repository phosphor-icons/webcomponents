/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-notebook": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-notebook": IconAttrs;
    }
  }
}

@customElement("ph-notebook")
class PhNotebook extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M180,112a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h64A4,4,0,0,1,180,112Zm-4,28H112a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-92V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H76V44H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212ZM212,48a4,4,0,0,0-4-4H84V212H208a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M182,112a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h64A6,6,0,0,1,182,112Zm-6,26H112a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-90V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H74V46H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210ZM210,48a2,2,0,0,0-2-2H86V210H208a2,2,0,0,0,2-2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M108,108a12,12,0,0,1,12-12h56a12,12,0,0,1,0,24H120A12,12,0,0,1,108,108Zm68,28H120a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm52-88V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204H68V52H52ZM204,52H92V204H204Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M80,40V216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z" opacity="0.2"/><path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"/>`,
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
      ${PhNotebook.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhNotebook };
