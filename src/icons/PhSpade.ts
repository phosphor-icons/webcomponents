/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-spade": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-spade": IconAttrs;
    }
  }
}

@customElement("ph-spade")
class PhSpade extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M178.56,52.93a281.08,281.08,0,0,0-48.77-32.51,4,4,0,0,0-3.58,0A281.08,281.08,0,0,0,77.44,52.93C45.1,79.88,28,108.61,28,136a52,52,0,0,0,76.46,45.89l-12.29,41A4,4,0,0,0,96,228h64a4,4,0,0,0,3.83-5.15l-12.29-41A52,52,0,0,0,228,136C228,108.61,210.9,79.88,178.56,52.93ZM176,180a44,44,0,0,1-28.92-10.84,4,4,0,0,0-6.46,4.17l14,46.67H101.38l14-46.67a4,4,0,0,0-6.46-4.17A44,44,0,0,1,36,136c0-56.06,79-100.56,92-107.49,13,6.93,92,51.38,92,107.49A44.05,44.05,0,0,1,176,180Z"/>`,
    ],
    [
      "light",
      svg`<path d="M179.84,51.39a284.14,284.14,0,0,0-49.16-32.76,6,6,0,0,0-5.36,0A284.14,284.14,0,0,0,76.16,51.39C42.88,79.13,26,107.59,26,136a54,54,0,0,0,75.24,49.65l-11,36.63A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-11-36.63A54,54,0,0,0,230,136C230,107.59,213.12,79.13,179.84,51.39ZM176,178a42,42,0,0,1-27.6-10.34,6,6,0,0,0-9.69,6.24L151.94,218H104.06l13.23-44.1a6,6,0,0,0-9.69-6.24A42,42,0,0,1,38,136c0-53.73,74.77-97,90-105.22C143.24,39,218,82.2,218,136A42,42,0,0,1,176,178Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M131.58,16.85a8,8,0,0,0-7.16,0C120.32,18.9,24,67.84,24,136a56,56,0,0,0,74.15,53L88.34,221.7A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3L157.85,189A56,56,0,0,0,232,136C232,67.84,135.68,18.9,131.58,16.85ZM176,176a40,40,0,0,1-26.29-9.85,8,8,0,0,0-12.92,8.33L149.25,216h-42.5l12.46-41.52a8,8,0,0,0-12.92-8.33A40,40,0,0,1,40,136c0-29.88,24.41-56.55,44.89-73.66A279.13,279.13,0,0,1,128,33.06a279.13,279.13,0,0,1,43.11,29.28C208.21,93.34,216,119.51,216,136A40,40,0,0,1,176,176Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M133.37,13.27a12,12,0,0,0-10.74,0C118.44,15.36,20,65.4,20,136a60,60,0,0,0,69.51,59.25l-5.28,26.4A12,12,0,0,0,96,236h64a12,12,0,0,0,11.77-14.35l-5.28-26.4A60,60,0,0,0,236,136C236,65.4,137.56,15.36,133.37,13.27ZM176,172a35.88,35.88,0,0,1-19.09-5.47,12,12,0,0,0-18.14,12.52L145.36,212H110.64l6.59-32.95a12,12,0,0,0-18.14-12.52A36,36,0,0,1,44,136c0-28.29,23.57-53.95,43.34-70.49A274.68,274.68,0,0,1,128,37.63a274.16,274.16,0,0,1,40.66,27.88C188.43,82.05,212,107.71,212,136A36,36,0,0,1,176,172Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,136a56,56,0,0,1-83.4,48.82l11.06,36.88A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l11.06-36.88A56,56,0,0,1,24,136c0-32,17.65-62.84,51-89.27a234.14,234.14,0,0,1,49.89-30.11,7.93,7.93,0,0,1,6.16,0A234.14,234.14,0,0,1,181,46.73C214.35,73.16,232,104,232,136Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,136a48,48,0,0,1-79.55,36.18L160,224H96l15.55-51.82A48,48,0,0,1,32,136c0-64,96-112,96-112S224,72,224,136Z" opacity="0.2"/><path d="M131.58,16.85a8,8,0,0,0-7.16,0C120.32,18.9,24,67.84,24,136a56,56,0,0,0,74.15,53L88.34,221.7A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3L157.85,189A56,56,0,0,0,232,136C232,67.84,135.68,18.9,131.58,16.85ZM176,176a40,40,0,0,1-26.29-9.85,8,8,0,0,0-12.92,8.33L149.25,216h-42.5l12.46-41.52a8,8,0,0,0-12.92-8.33A40,40,0,0,1,40,136c0-29.88,24.41-56.55,44.89-73.66A279.13,279.13,0,0,1,128,33.06a279.13,279.13,0,0,1,43.11,29.28C208.21,93.34,216,119.51,216,136A40,40,0,0,1,176,176Z"/>`,
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
      ${PhSpade.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhSpade };
