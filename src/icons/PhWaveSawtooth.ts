/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-wave-sawtooth": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-wave-sawtooth": IconAttrs;
    }
  }
}

@customElement("ph-wave-sawtooth")
class PhWaveSawtooth extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M234.1,131.41l-104,64a4,4,0,0,1-2.1.59,4,4,0,0,1-4-4V71.16L26.1,131.41a4,4,0,0,1-4.2-6.82l104-64A4,4,0,0,1,132,64V184.84l97.9-60.25a4,4,0,1,1,4.2,6.82Z"/>`,
    ],
    [
      "light",
      svg`<path d="M235.14,133.11l-104,64A6,6,0,0,1,122,192V74.74L27.15,133.11a6,6,0,1,1-6.29-10.22l104-64A6,6,0,0,1,134,64V181.26l94.85-58.37a6,6,0,1,1,6.29,10.22Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M236.19,134.81l-104,64A8,8,0,0,1,120,192V78.32L28.19,134.81a8,8,0,0,1-8.38-13.62l104-64A8,8,0,0,1,136,64V177.68l91.81-56.49a8,8,0,0,1,8.38,13.62Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M238.29,138.22l-104,64A12,12,0,0,1,116,192V85.47L30.29,138.22a12,12,0,0,1-12.58-20.44l104-64A12,12,0,0,1,140,64V170.53l85.71-52.75a12,12,0,1,1,12.58,20.44Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-11.56,94.66-72,48A8,8,0,0,1,128,184a8,8,0,0,1-8-8V95L60.44,134.66a8,8,0,1,1-8.88-13.32l72-48A8,8,0,0,1,136,80v81.05l59.56-39.71a8,8,0,0,1,8.88,13.32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,64v64H24Zm104,64H128v64Z" opacity="0.2"/><path d="M236.19,134.81l-104,64A8,8,0,0,1,120,192V78.32L28.19,134.81a8,8,0,0,1-8.38-13.62l104-64A8,8,0,0,1,136,64V177.68l91.81-56.49a8,8,0,0,1,8.38,13.62Z"/>`,
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
      ${PhWaveSawtooth.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhWaveSawtooth };
