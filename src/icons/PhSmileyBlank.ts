/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-smiley-blank": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-smiley-blank": IconAttrs;
    }
  }
}

@customElement("ph-smiley-blank")
class PhSmileyBlank extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM100,108a8,8,0,1,1-8-8A8,8,0,0,1,100,108Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,108Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM102,108A10,10,0,1,1,92,98,10,10,0,0,1,102,108Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,108Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM104,108A12,12,0,1,1,92,96,12,12,0,0,1,104,108Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM108,108A16,16,0,1,1,92,92,16,16,0,0,1,108,108Zm72,0a16,16,0,1,1-16-16A16,16,0,0,1,180,108Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM92,120a12,12,0,1,1,12-12A12,12,0,0,1,92,120Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM104,108A12,12,0,1,1,92,96,12,12,0,0,1,104,108Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Z"/>`,
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
      ${PhSmileyBlank.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhSmileyBlank };
