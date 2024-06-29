/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-sneaker-move": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-sneaker-move": IconAttrs;
    }
  }
}

@customElement("ph-sneaker-move")
class PhSneakerMove extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M229.37,170.21,200.75,155.9A51.7,51.7,0,0,1,172,109.39V80a4,4,0,0,0-4-4,52.06,52.06,0,0,1-52-52,4,4,0,0,0-6.42-3.19l-77,58.41-.1.08a12,12,0,0,0-.94,17.81L145.23,210.83a4,4,0,0,0,2.83,1.17H224a12,12,0,0,0,12-12V180.94A11.94,11.94,0,0,0,229.37,170.21ZM228,200a4,4,0,0,1-4,4H149.72L37.17,91.45a4,4,0,0,1,.27-5.9l15.79-12,41.26,41.25a4,4,0,0,0,5.65-5.66L59.67,68.7l48.82-37A60.12,60.12,0,0,0,164,83.87v25.52a59.68,59.68,0,0,0,33.17,53.67l28.62,14.31a4,4,0,0,1,2.21,3.57ZM70.8,180H32a4,4,0,0,1,0-8H70.8a4,4,0,1,1,0,8Zm36,28a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8h54.8A4,4,0,0,1,106.8,208Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230.26,168.42l-28.62-14.31A49.72,49.72,0,0,1,174,109.39V80a6,6,0,0,0-6-6,50.06,50.06,0,0,1-50-50,6,6,0,0,0-9.62-4.78l-77,58.41-.15.11A14,14,0,0,0,30.1,98.53L143.82,212.24a6,6,0,0,0,4.24,1.76H224a14,14,0,0,0,14-14V180.94A13.94,13.94,0,0,0,230.26,168.42ZM226,200a2,2,0,0,1-2,2H150.54L38.59,90A2,2,0,0,1,38,88.52a2,2,0,0,1,.69-1.41L53.05,76.22l40,40a6,6,0,0,0,8.49-8.48L62.71,68.91,107,35.3a62.13,62.13,0,0,0,55,50.41v23.68a61.65,61.65,0,0,0,34.27,55.45l28.62,14.32a2,2,0,0,1,1.11,1.78ZM70.8,182H32a6,6,0,0,1,0-12H70.8a6,6,0,1,1,0,12Zm38,26a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h54.8A6,6,0,0,1,108.8,208Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M231.16,166.63l-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-8-8,48.05,48.05,0,0,1-48-48,8,8,0,0,0-12.83-6.37L30.13,76l-.2.16a16,16,0,0,0-1.24,23.75L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63ZM224,200H151.37L40,88.63l12.87-9.76,38.79,38.79A8,8,0,0,0,103,106.34L65.74,69.11l40-30.31A64.15,64.15,0,0,0,160,87.5v21.89a63.65,63.65,0,0,0,35.38,57.24L224,180.94ZM70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h54.8A8,8,0,0,1,110.8,208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232.94,163.06l-28.62-14.31A43.78,43.78,0,0,1,180,109.39V80a12,12,0,0,0-12-12,44.05,44.05,0,0,1-44-44,12,12,0,0,0-19.25-9.56l-77,58.41-.3.23a20,20,0,0,0-1.56,29.69L139.57,216.49a12,12,0,0,0,8.49,3.51H224a20,20,0,0,0,20-20V180.94A19.88,19.88,0,0,0,232.94,163.06ZM220,196H153L46.08,89.05l12.86-9.76,41.2,41.2a12,12,0,0,0,17-17L78.25,64.65l25.24-19.14A68.24,68.24,0,0,0,156,90.94v18.45a67.62,67.62,0,0,0,37.59,60.82L220,183.42ZM55.49,184H32a12,12,0,0,1,0-24H55.49a12,12,0,0,1,0,24Zm48,24a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H91.49A12,12,0,0,1,103.49,208Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm32,16H48a8,8,0,0,0,0,16h54.8a8,8,0,1,0,0-16Zm128.36-33.37-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-7.93-8A48.05,48.05,0,0,1,120,24.07a8,8,0,0,0-12.83-6.44L45.11,64.68a4,4,0,0,0-.41,6l51.44,51.44a8.19,8.19,0,0,1,.6,11.09,8,8,0,0,1-11.71.43l-53-53a4,4,0,0,0-6.44,1.09,16,16,0,0,0,3.12,18.22L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,180.94V200a8,8,0,0,1-8,8H148.06L34.34,94.28A8,8,0,0,1,35,82.41L112,24a56,56,0,0,0,56,56v29.39a56,56,0,0,0,31,50.09l28.62,14.31A8,8,0,0,1,232,180.94Z" opacity="0.2"/><path d="M231.16,166.63l-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-8-8,48.05,48.05,0,0,1-48-48,8,8,0,0,0-12.83-6.37L30.13,76l-.2.16a16,16,0,0,0-1.24,23.75L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63ZM224,200H151.37L40,88.63l12.87-9.76,38.79,38.79A8,8,0,0,0,103,106.34L65.74,69.11l40-30.31A64.15,64.15,0,0,0,160,87.5v21.89a63.65,63.65,0,0,0,35.38,57.24L224,180.94ZM70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h54.8A8,8,0,0,1,110.8,208Z"/>`,
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
      ${PhSneakerMove.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhSneakerMove };
