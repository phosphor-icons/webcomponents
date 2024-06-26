/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-bend-left-down": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-bend-left-down": IconAttrs;
    }
  }
}

@customElement("ph-arrow-bend-left-down")
class PhArrowBendLeftDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,32a4,4,0,0,1-4,4,92.1,92.1,0,0,0-92,92v86.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L100,214.34V128A100.11,100.11,0,0,1,200,28,4,4,0,0,1,204,32Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,32a6,6,0,0,1-6,6,90.1,90.1,0,0,0-90,90v81.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L98,209.51V128A102.12,102.12,0,0,1,200,26,6,6,0,0,1,206,32Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,32a8,8,0,0,1-8,8,88.1,88.1,0,0,0-88,88v76.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L96,204.69V128A104.11,104.11,0,0,1,200,24,8,8,0,0,1,208,32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,32a12,12,0,0,1-12,12,84.09,84.09,0,0,0-84,84v67l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L92,195V128A108.12,108.12,0,0,1,200,20,12,12,0,0,1,212,32Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32a8,8,0,0,1-8,8,88.1,88.1,0,0,0-88,88v40h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,56,168H96V128A104.11,104.11,0,0,1,200,24,8,8,0,0,1,208,32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M152,176l-48,48L56,176Z" opacity="0.2"/><path d="M200,24A104.11,104.11,0,0,0,96,128v40H56a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,152,168H112V128a88.1,88.1,0,0,1,88-88,8,8,0,0,0,0-16ZM104,212.69,75.31,184h57.38Z"/>`,
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
      ${PhArrowBendLeftDown.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhArrowBendLeftDown };
