/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-lamp": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-lamp": IconAttrs;
    }
  }
}

@customElement("ph-lamp")
class PhLamp extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M243.68,150.42l-48-112A4,4,0,0,0,192,36H64a4,4,0,0,0-3.68,2.42l-48,112A4,4,0,0,0,16,156H124v56H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V156h64v36a4,4,0,0,0,8,0V156h36a4,4,0,0,0,3.68-5.58ZM22.07,148,66.64,44H189.36l44.57,104Z"/>`,
    ],
    [
      "light",
      svg`<path d="M245.51,149.64l-48-112A6,6,0,0,0,192,34H64a6,6,0,0,0-5.51,3.64l-48,112A6,6,0,0,0,16,158H122v52H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V158h60v34a6,6,0,0,0,12,0V158h34a6,6,0,0,0,5.51-8.36ZM25.1,146,68,46H188L230.9,146Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M251,147.27l-48-112A12,12,0,0,0,192,28H64a12,12,0,0,0-11,7.27l-48,112A12,12,0,0,0,16,164H116v40H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V164h48v28a12,12,0,0,0,24,0V164h28a12,12,0,0,0,11-16.73ZM34.2,140,71.91,52H184.09l37.71,88Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M246.68,156.4A8,8,0,0,1,240,160H208v32a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H16a8,8,0,0,1-7.35-11.15l48-112A8,8,0,0,1,64,32H192a8,8,0,0,1,7.35,4.85l48,112A8,8,0,0,1,246.68,156.4Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,152H16L64,40H192Z" opacity="0.2"/><path d="M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z"/>`,
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
      ${PhLamp.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhLamp };
