/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-globe-simple-x": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-globe-simple-x": IconAttrs;
    }
  }
}

@customElement("ph-globe-simple-x")
class PhGlobeSimpleX extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M218.83,170.83,197.66,192l21.17,21.17a4,4,0,0,1-5.66,5.66L192,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L186.34,192l-21.17-21.17a4,4,0,0,1,5.66-5.66L192,186.34l21.17-21.17a4,4,0,0,1,5.66,5.66ZM228,128a4,4,0,0,1-4,4H92.08c1.61,58.53,38.05,88.58,38.42,88.88h0A4,4,0,0,1,128,228a100,100,0,0,1,0-200h0A100.11,100.11,0,0,1,228,128ZM138.46,36.6c11.74,12.88,32.33,41.85,33.48,87.4h48A92.14,92.14,0,0,0,138.46,36.6ZM92.07,124h71.86C162.57,74.52,136.32,45.4,128,37.39,119.68,45.39,93.43,74.52,92.07,124Zm-56,0h48c1.15-45.55,21.74-74.52,33.48-87.4A92.14,92.14,0,0,0,36.09,124Zm48,8h-48a92.14,92.14,0,0,0,81.45,87.4C105.8,206.52,85.21,177.55,84.06,132Z"/>`,
    ],
    [
      "light",
      svg`<path d="M220.24,172.24,200.49,192l19.75,19.76a6,6,0,1,1-8.48,8.48L192,200.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L183.51,192l-19.75-19.76a6,6,0,0,1,8.48-8.48L192,183.51l19.76-19.75a6,6,0,0,1,8.48,8.48ZM230,128a6,6,0,0,1-6,6H94.13a128.29,128.29,0,0,0,18.68,62.37c9.35,15.11,18.85,22.88,18.95,22.95A6,6,0,0,1,128,230h0A102,102,0,1,1,230,128ZM143.46,39.33c11.95,14.44,28.89,41.9,30.43,82.67H217.8A90.19,90.19,0,0,0,143.46,39.33Zm-30.65,20.3A128.29,128.29,0,0,0,94.13,122h67.74a128.29,128.29,0,0,0-18.68-62.37A109.19,109.19,0,0,0,128,40.18,109.19,109.19,0,0,0,112.81,59.63ZM38.2,122H82.11c1.54-40.77,18.48-68.23,30.43-82.67A90.19,90.19,0,0,0,38.2,122Zm43.91,12H38.2a90.19,90.19,0,0,0,74.34,82.67C100.59,202.23,83.65,174.77,82.11,134Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77h0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM128,43c-9.54,9.92-29.46,35.42-31.77,77h63.54C157.46,78.4,137.55,52.9,128,43ZM40.37,120H80.21C82,83.49,96.06,57.67,107.59,42.4A88.19,88.19,0,0,0,40.37,120Zm39.84,16H40.37a88.19,88.19,0,0,0,67.22,77.6C96.06,198.33,82,172.51,80.21,136Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M224.49,176.49,209,192l15.52,15.51a12,12,0,0,1-17,17L192,209l-15.51,15.52a12,12,0,0,1-17-17L175,192l-15.52-15.51a12,12,0,0,1,17-17L192,175l15.51-15.52a12,12,0,0,1,17,17ZM236,128a12,12,0,0,1-12,12H100.54c4.37,49.56,34.63,74.37,35,74.63h0A12,12,0,0,1,128,236,108,108,0,1,1,236,128ZM158.21,49.64A144.3,144.3,0,0,1,179.56,116h31.57A84.22,84.22,0,0,0,158.21,49.64ZM117.64,63.23A119.74,119.74,0,0,0,100.53,116h54.94c-3-33.9-18.09-56.22-27.45-67A107.75,107.75,0,0,0,117.64,63.23ZM44.87,116H76.44A144.3,144.3,0,0,1,97.79,49.64,84.22,84.22,0,0,0,44.87,116Zm31.57,24H44.87a84.22,84.22,0,0,0,52.92,66.36A144.3,144.3,0,0,1,76.44,140Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77h0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM96.23,120h63.54C157.46,78.4,137.55,52.9,128,43,118.46,52.89,98.54,78.39,96.23,120Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77l0,0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM128,43c-9.54,9.92-29.46,35.42-31.77,77h63.54C157.46,78.4,137.55,52.9,128,43ZM40.37,120H80.21C82,83.49,96.06,57.67,107.59,42.4A88.19,88.19,0,0,0,40.37,120Zm39.84,16H40.37a88.19,88.19,0,0,0,67.22,77.6C96.06,198.33,82,172.51,80.21,136Z"/>`,
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
      ${PhGlobeSimpleX.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhGlobeSimpleX };
