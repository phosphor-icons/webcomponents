/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-upload": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-upload": IconAttrs;
    }
  }
}

@customElement("ph-upload")
class PhUpload extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M236,136v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V136a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V136a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h48A12,12,0,0,1,236,136ZM82.83,74.83,124,33.66V128a4,4,0,0,0,8,0V33.66l41.17,41.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66ZM196,168a8,8,0,1,0-8,8A8,8,0,0,0,196,168Z"/>`,
    ],
    [
      "light",
      svg`<path d="M238,136v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V136a14,14,0,0,1,14-14H80a6,6,0,0,1,0,12H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2V136a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h48A14,14,0,0,1,238,136ZM84.24,76.24,122,38.49V128a6,6,0,0,0,12,0V38.49l37.76,37.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48ZM198,168a10,10,0,1,0-10,10A10,10,0,0,0,198,168Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M188,184a16,16,0,1,1,16-16A16,16,0,0,1,188,184Zm36-68H180a12,12,0,0,0,0,24h40v56H36V140H76a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116ZM88.49,80.49,116,53v75a12,12,0,0,0,24,0V53l27.51,27.52a12,12,0,1,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,1,0,17,17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M74.34,77.66a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L136,43.31V128a8,8,0,0,1-16,0V43.31L85.66,77.66A8,8,0,0,1,74.34,77.66ZM240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16h68a4,4,0,0,1,4,4v3.46c0,13.45,11,24.79,24.46,24.54A24,24,0,0,0,152,128v-4a4,4,0,0,1,4-4h68A16,16,0,0,1,240,136Zm-40,32a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z" opacity="0.2"/><path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"/>`,
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
      ${PhUpload.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhUpload };
