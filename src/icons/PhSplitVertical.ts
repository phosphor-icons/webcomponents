/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-split-vertical": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-split-vertical": IconAttrs;
    }
  }
}

@customElement("ph-split-vertical")
class PhSplitVertical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212,152a4,4,0,0,1-4,4H132v66.34l25.17-25.17a4,4,0,0,1,5.66,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,222.34V156H48a4,4,0,0,1,0-8H208A4,4,0,0,1,212,152ZM48,108H208a4,4,0,0,0,0-8H132V33.66l25.17,25.17a4,4,0,1,0,5.66-5.66l-32-32a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L124,33.66V100H48a4,4,0,0,0,0,8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214,152a6,6,0,0,1-6,6H134v59.51l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,217.51V158H48a6,6,0,0,1,0-12H208A6,6,0,0,1,214,152ZM48,110H208a6,6,0,0,0,0-12H134V38.49l21.76,21.75a6,6,0,0,0,8.48-8.48l-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L122,38.49V98H48a6,6,0,0,0,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,152a8,8,0,0,1-8,8H136v52.69l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,212.69V160H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,152ZM48,112H208a8,8,0,0,0,0-16H136V43.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L120,43.31V96H48a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M220,152a12,12,0,0,1-12,12H140v39l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,203V164H48a12,12,0,0,1,0-24H208A12,12,0,0,1,220,152ZM48,116H208a12,12,0,0,0,0-24H140V53l11.51,11.52a12,12,0,1,0,17-17l-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,1,0,17,17L116,53V92H48a12,12,0,0,0,0,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,152a8,8,0,0,1-8,8H136v32h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V160H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,152ZM48,112H208a8,8,0,0,0,0-16H136V64h24a8,8,0,0,0,5.66-13.66l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,64h24V96H48a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M160,56H96l32-32ZM128,232l32-32H96Z" opacity="0.2"/><path d="M208,144H48a8,8,0,0,0,0,16h72v32H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,192H136V160h72a8,8,0,0,0,0-16Zm-80,76.69L115.31,208h25.38ZM48,112H208a8,8,0,0,0,0-16H136V64h24a8,8,0,0,0,5.66-13.66l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,64h24V96H48a8,8,0,0,0,0,16Zm80-76.69L140.69,48H115.31Z"/>`,
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
      ${PhSplitVertical.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhSplitVertical };
