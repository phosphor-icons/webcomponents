/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-watch": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-watch": IconAttrs;
    }
  }
}

@customElement("ph-watch")
class PhWatch extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,128a75.94,75.94,0,0,0-32.35-62.16l-6.52-36A12,12,0,0,0,153.32,20H102.68a12,12,0,0,0-11.81,9.86l-6.52,36a75.89,75.89,0,0,0,0,124.32l6.52,36A12,12,0,0,0,102.68,236h50.64a12,12,0,0,0,11.81-9.86l6.52-36A75.94,75.94,0,0,0,204,128ZM98.74,31.29A4,4,0,0,1,102.68,28h50.64a4,4,0,0,1,3.94,3.29l5.26,29a75.69,75.69,0,0,0-69,0Zm58.52,193.42a4,4,0,0,1-3.94,3.29H102.68a4,4,0,0,1-3.94-3.29l-5.26-29a75.69,75.69,0,0,0,69,0ZM128,196a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Zm44-68a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,128a77.92,77.92,0,0,0-32.53-63.31L167.1,29.5A14,14,0,0,0,153.32,18H102.68A14,14,0,0,0,88.9,29.5L82.53,64.69a77.87,77.87,0,0,0,0,126.62L88.9,226.5A14,14,0,0,0,102.68,238h50.64a14,14,0,0,0,13.78-11.5l6.37-35.19A77.92,77.92,0,0,0,206,128ZM100.71,31.64a2,2,0,0,1,2-1.64h50.64a2,2,0,0,1,2,1.64l4.56,25.19a77.68,77.68,0,0,0-63.7,0Zm54.58,192.72a2,2,0,0,1-2,1.64H102.68a2,2,0,0,1-2-1.64l-4.56-25.19a77.68,77.68,0,0,0,63.7,0ZM128,194a66,66,0,1,1,66-66A66.08,66.08,0,0,1,128,194Zm46-66a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,128a79.85,79.85,0,0,0-27.95-60.68L173,28.43A20,20,0,0,0,153.32,12H102.68A20,20,0,0,0,83,28.43L76,67.32a79.84,79.84,0,0,0,0,121.36l7,38.89A20,20,0,0,0,102.68,244h50.64A20,20,0,0,0,173,227.57l7.05-38.89A79.85,79.85,0,0,0,208,128ZM106,36h44l2.9,16a79.76,79.76,0,0,0-49.76,0Zm44,184H106l-2.9-16a79.76,79.76,0,0,0,49.76,0Zm-22-36a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Zm40-56a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V100a12,12,0,0,1,24,0v16h16A12,12,0,0,1,168,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M175.3,63.53l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38a79.9,79.9,0,0,0,0-128.94ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0Zm50.64,192H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM168,136H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,128a72,72,0,1,1-72-72A72,72,0,0,1,200,128Z" opacity="0.2"/><path d="M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z"/>`,
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
      ${PhWatch.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhWatch };
