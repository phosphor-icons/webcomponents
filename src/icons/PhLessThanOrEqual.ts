/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-less-than-or-equal": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-less-than-or-equal": IconAttrs;
    }
  }
}

@customElement("ph-less-than-or-equal")
class PhLessThanOrEqual extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M44,104a4,4,0,0,1,2.62-3.75l152-56a4,4,0,1,1,2.76,7.5L59.57,104l141.81,52.25A4,4,0,0,1,200,164a3.91,3.91,0,0,1-1.38-.25l-152-56A4,4,0,0,1,44,104Zm156,92H48a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M42,104a6,6,0,0,1,3.93-5.63l152-56a6,6,0,1,1,4.15,11.26L65.36,104l136.71,50.37A6,6,0,0,1,200,166a6.09,6.09,0,0,1-2.08-.37l-152-56A6,6,0,0,1,42,104Zm158,90H48a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M40,104a8,8,0,0,1,5.23-7.5l152-56a8,8,0,0,1,5.53,15L71.14,104l131.62,48.49A8,8,0,0,1,200,168a8.13,8.13,0,0,1-2.77-.49l-152-56A8,8,0,0,1,40,104Zm160,88H48a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M36,104a12,12,0,0,1,7.85-11.26l152-56a12,12,0,1,1,8.3,22.52L82.71,104l121.44,44.74A12,12,0,0,1,200,172a11.85,11.85,0,0,1-4.15-.74l-152-56A12,12,0,0,1,36,104Zm164,84H48a12,12,0,0,0,0,24H200a12,12,0,0,0,0-24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H72a8,8,0,0,1,0-16H176a8,8,0,0,1,0,16Zm2.35-55.65a8,8,0,0,1-4.7,15.3l-104-32a8,8,0,0,1,0-15.3l104-32a8,8,0,0,1,4.7,15.3L99.2,104Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,48V160L48,104Z" opacity="0.2"/><path d="M40,104a8,8,0,0,1,5.23-7.5l152-56a8,8,0,0,1,5.53,15L71.14,104l131.62,48.49A8,8,0,0,1,200,168a8.13,8.13,0,0,1-2.77-.49l-152-56A8,8,0,0,1,40,104Zm160,88H48a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16Z"/>`,
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
      ${PhLessThanOrEqual.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhLessThanOrEqual };
