/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-browsers": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-browsers": IconAttrs;
    }
  }
}

@customElement("ph-browsers")
class PhBrowsers extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,44H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,84H184a4,4,0,0,1,4,4v20H36V88A4,4,0,0,1,40,84ZM188,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V116H188Zm32-32a4,4,0,0,1-4,4H196V88a12,12,0,0,0-12-12H68V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,86H184a2,2,0,0,1,2,2v18H38V88A2,2,0,0,1,40,86ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V118H186Zm32-32a2,2,0,0,1-2,2H198V88a14,14,0,0,0-14-14H70V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm0,112H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M220,32H76A20,20,0,0,0,56,52V72H36A20,20,0,0,0,16,92V204a20,20,0,0,0,20,20H180a20,20,0,0,0,20-20V184h20a20,20,0,0,0,20-20V52A20,20,0,0,0,220,32ZM176,96v16H40V96Zm0,104H40V136H176Zm40-40H200V92a20,20,0,0,0-20-20H80V56H216Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm32,80H200V88a16,16,0,0,0-16-16H72V56H216Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,56V168a8,8,0,0,1-8,8H192V88a8,8,0,0,0-8-8H64V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88H184v16H40ZM184,200H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z"/>`,
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
      ${PhBrowsers.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhBrowsers };
