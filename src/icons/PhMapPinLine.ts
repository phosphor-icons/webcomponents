/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-map-pin-line": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-map-pin-line": IconAttrs;
    }
  }
}

@customElement("ph-map-pin-line")
class PhMapPinLine extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M200,228H139.72A263.66,263.66,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62a84,84,0,0,0-168,0c0,30.42,14.17,62.79,41,93.62A263.66,263.66,0,0,0,116.28,228H56a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8ZM90.9,192.23C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0c0,35.9-21.15,67.8-38.9,88.23A254.62,254.62,0,0,1,128,227,254.62,254.62,0,0,1,90.9,192.23ZM164,104a36,36,0,1,0-36,36A36,36,0,0,0,164,104Zm-64,0a28,28,0,1,1,28,28A28,28,0,0,1,100,104Z"/>`,
    ],
    [
      "light",
      svg`<path d="M200,226H145.22a266.37,266.37,0,0,0,27.31-27.06c27.13-31.2,41.47-64,41.47-94.94a86,86,0,0,0-172,0c0,30.91,14.34,63.74,41.47,94.94A266.37,266.37,0,0,0,110.78,226H56a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12ZM54,104a74,74,0,0,1,148,0c0,59.62-59,108.93-74,120.51C113,212.93,54,163.62,54,104Zm112,0a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M200,220H160.73c5.18-5,10.75-10.71,16.33-17.13C205.15,170.57,220,136.37,220,104a92,92,0,0,0-184,0c0,50,34.12,91.94,59.18,116H56a12,12,0,0,0,0,24H200a12,12,0,0,0,0-24ZM60,104a68,68,0,0,1,136,0c0,33.31-20,63.37-36.7,82.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104Zm68,44a44,44,0,1,0-44-44A44.05,44.05,0,0,0,128,148Zm0-64a20,20,0,1,1-20,20A20,20,0,0,1,128,84Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2"/><path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"/>`,
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
      ${PhMapPinLine.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhMapPinLine };
