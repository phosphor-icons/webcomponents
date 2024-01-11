/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-knife")
export default class PhKnife extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M229,35a24,24,0,0,0-34,0L21.14,213.4a4,4,0,0,0,2,6.7,150.65,150.65,0,0,0,34,3.9c32.64,0,65.34-10.65,96.12-31.52,31.2-21.15,49.21-45,50-46a4,4,0,0,0-.37-5.24l-21.48-21.5L229,69A24.09,24.09,0,0,0,229,35ZM194.65,144.41a226.48,226.48,0,0,1-45.89,41.44C110.83,211.57,71.58,220.94,32,213.75L146.53,96.24Zm28.68-81.07a.76.76,0,0,0-.09.09L175.7,114.11l-23.58-23.6,48.57-49.83a16,16,0,0,1,22.64,22.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230.4,33.6a26,26,0,0,0-36.83.06L19.71,212a6,6,0,0,0,2.94,10.05A153.08,153.08,0,0,0,57.15,226c33,0,66.11-10.76,97.22-31.86,31.47-21.35,49.68-45.41,50.44-46.42a6,6,0,0,0-.56-7.85l-20.11-20.14,46.33-49.39A26.09,26.09,0,0,0,230.4,33.6ZM191.94,144.53a226.59,226.59,0,0,1-44.61,39.87c-36.18,24.45-73.55,33.84-111.26,28L146.55,99.09Zm30-82.61-.13.14-46.13,49.18L154.93,90.49,202.11,42.1a14,14,0,0,1,19.8,19.82Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M231.81,32.19a28,28,0,0,0-39.67.07L18.27,210.6A8,8,0,0,0,22.2,224a154.93,154.93,0,0,0,35,4c33.42,0,66.88-10.88,98.33-32.21,31.75-21.53,50.15-45.85,50.92-46.88a8,8,0,0,0-.74-10.46l-18.74-18.76,45-48A28.08,28.08,0,0,0,231.81,32.19ZM189.22,144.63a225.51,225.51,0,0,1-43.11,38.18c-34.47,23.25-70,32.7-105.84,28.16l106.3-109ZM220.5,60.5l-.18.19-44.71,47.67L157.74,90.47l45.78-47a12,12,0,0,1,17,17Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M234.64,29.37a32,32,0,0,0-45.26,0l-.1.1L15.41,207.79a12,12,0,0,0,5.89,20.1A159.13,159.13,0,0,0,57.19,232c34.21,0,68.42-11.11,100.55-32.9,32.29-21.9,51.09-46.74,51.87-47.78a12,12,0,0,0-1.11-15.7l-16-16,42.29-45.08A32.09,32.09,0,0,0,234.64,29.37Zm-91,150.25C112.74,200.43,81,209.85,49,207.77L146.6,107.64l37.13,37.16A222.39,222.39,0,0,1,143.67,179.62Zm74-121.94-.26.27-41.89,44.66L163.37,90.44l43-44.12a8,8,0,0,1,11.28,11.36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M231.81,32.19a28,28,0,0,0-39.67.07L18.27,210.6A8,8,0,0,0,22.2,224a154.93,154.93,0,0,0,35,4c33.42,0,66.88-10.88,98.33-32.21,31.75-21.53,50.15-45.85,50.92-46.88a8,8,0,0,0-.74-10.46l-18.74-18.76,45-48A28.08,28.08,0,0,0,231.81,32.19ZM189.22,144.63a225.51,225.51,0,0,1-43.11,38.18c-34.47,23.25-70,32.7-105.84,28.16l106.3-109Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M226.15,66.14l-50.36,53.65L146.5,90.49l51.37-52.63a20,20,0,0,1,28.28,28.28Z" opacity="0.2"/><path d="M231.81,32.19a28,28,0,0,0-39.67.07L18.27,210.6A8,8,0,0,0,22.2,224a154.93,154.93,0,0,0,35,4c33.42,0,66.88-10.88,98.33-32.21,31.75-21.53,50.15-45.85,50.92-46.88a8,8,0,0,0-.74-10.46l-18.74-18.76,45-48A28.08,28.08,0,0,0,231.81,32.19ZM189.22,144.63a225.51,225.51,0,0,1-43.11,38.18c-34.47,23.25-70,32.7-105.84,28.16l106.3-109ZM220.5,60.5l-.18.19-44.71,47.67L157.74,90.47l45.78-47a12,12,0,0,1,17,17Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "currentColor";

  @property({ type: Boolean })
  mirrored: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${PhKnife.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-knife": PhKnife;
  }
}
