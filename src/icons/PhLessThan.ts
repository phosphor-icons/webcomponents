/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-less-than": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-less-than": IconAttrs;
    }
  }
}

@customElement("ph-less-than")
class PhLessThan extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M203.61,201.71A4,4,0,0,1,200,204a3.85,3.85,0,0,1-1.71-.39l-152-72a4,4,0,0,1,0-7.23l152-72a4,4,0,0,1,3.42,7.23L57.34,128l144.37,68.38A4,4,0,0,1,203.61,201.71Z"/>`,
    ],
    [
      "light",
      svg`<path d="M205.42,202.57a6,6,0,0,1-8,2.85l-152-72a6,6,0,0,1,0-10.84l152-72a6,6,0,0,1,5.14,10.84L62,128l140.55,66.58A6,6,0,0,1,205.42,202.57Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M210.84,205.13a12,12,0,0,1-16,5.71l-152-72a12,12,0,0,1,0-21.68l152-72a12,12,0,1,1,10.27,21.69L76,128l129.1,61.15A12,12,0,0,1,210.84,205.13Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM179.35,168.74a8,8,0,1,1-6.7,14.52l-104-48a8,8,0,0,1,0-14.52l104-48a8,8,0,0,1,6.7,14.52L91.09,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,56V200L48,128Z" opacity="0.2"/><path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"/>`,
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
      ${PhLessThan.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhLessThan };
