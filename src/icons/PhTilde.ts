/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-tilde": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-tilde": IconAttrs;
    }
  }
}

@customElement("ph-tilde")
class PhTilde extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M219.12,128.09c-13.82,17.18-27.26,26.24-41.11,27.7a38.9,38.9,0,0,1-4,.21c-18,0-33.48-12.64-48.53-24.9-15.57-12.68-30.29-24.66-46.64-22.93-11.62,1.22-23.3,9.32-35.71,24.76a4,4,0,0,1-6.24-5C50.7,110.73,64.14,101.67,78,100.21c19.67-2.08,36.38,11.53,52.54,24.69,15.57,12.68,30.29,24.66,46.64,22.93,11.62-1.22,23.3-9.32,35.71-24.76a4,4,0,1,1,6.24,5Z"/>`,
    ],
    [
      "light",
      svg`<path d="M220.68,129.34c-14.17,17.62-28.06,26.92-42.46,28.44A40.75,40.75,0,0,1,174,158c-18.64,0-34.44-12.87-49.76-25.35S94.57,108.51,79,110.16c-11.06,1.16-22.3,9-34.36,24a6,6,0,1,1-9.36-7.52c14.17-17.61,28.06-26.92,42.46-28.43,20.52-2.18,37.54,11.7,54,25.12C147,135.76,161.42,147.48,177,145.84c11.06-1.16,22.3-9,34.36-24a6,6,0,0,1,9.36,7.52Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M222.23,130.59c-14.51,18-28.84,27.6-43.8,29.17a43,43,0,0,1-4.5.24c-19.3,0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51,1.1-21.31,8.72-33,23.28a8,8,0,0,1-12.46-10c14.51-18,28.84-27.6,43.8-29.17,21.32-2.25,38.69,11.89,55.48,25.56,14.91,12.14,29,23.62,43.7,22,10.51-1.1,21.31-8.72,33-23.28a8,8,0,1,1,12.46,10Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M225.35,133.1c-15.22,18.93-30.43,29-46.5,30.65A46.71,46.71,0,0,1,174,164c-20.81,0-38.16-14.13-53.59-26.7-14.24-11.6-27.68-22.54-40.75-21.18-9.26,1-19.46,8.32-30.32,21.82a12,12,0,0,1-18.7-15C45.87,104,61.08,94,77.15,92.25c23-2.42,41.82,12.92,58.43,26.45,14.24,11.6,27.68,22.54,40.75,21.18,9.26-1,19.46-8.32,30.32-21.82a12,12,0,1,1,18.7,15Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-10,99.66c-13.19,15-25.34,20.29-36.37,20.29-14.94,0-27.81-9.61-38.43-17.54-19.2-14.34-31.89-23.81-53.2.48a8,8,0,1,1-12-10.55c31.05-35.41,56.34-16.53,74.8-2.75,19.2,14.34,31.89,23.81,53.2-.48a8,8,0,1,1,12,10.55Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"/><path d="M222.23,130.59c-14.51,18-28.84,27.6-43.8,29.17a43,43,0,0,1-4.5.24c-19.3,0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51,1.1-21.31,8.72-33,23.28a8,8,0,0,1-12.46-10c14.51-18,28.84-27.6,43.8-29.17,21.32-2.25,38.69,11.89,55.48,25.56,14.91,12.14,29,23.62,43.7,22,10.51-1.1,21.31-8.72,33-23.28a8,8,0,1,1,12.46,10Z"/>`,
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
      ${PhTilde.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTilde };
