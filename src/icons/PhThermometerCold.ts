/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-thermometer-cold")
export default class PhThermometerCold extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M247.67,73.92l-25.2,8.18L238,103.54a4,4,0,1,1-6.47,4.7L216,86.81l-15.57,21.43a4,4,0,0,1-3.24,1.65,4,4,0,0,1-3.23-6.35L209.53,82.1l-25.2-8.18a4,4,0,1,1,2.47-7.61L212,74.49V48a4,4,0,0,1,8,0V74.49l25.2-8.18a4,4,0,1,1,2.47,7.61ZM148,184a28,28,0,1,1-32-27.71V120a4,4,0,0,1,8,0v36.29A28,28,0,0,1,148,184Zm-8,0a20,20,0,1,0-20,20A20,20,0,0,0,140,184Zm40,0a60,60,0,1,1-96-48V48a36,36,0,0,1,72,0v88A60.06,60.06,0,0,1,180,184Zm-8,0a52.06,52.06,0,0,0-22.29-42.68A4,4,0,0,1,148,138V48a28,28,0,0,0-56,0v90a4,4,0,0,1-1.71,3.28A52,52,0,1,0,172,184Z"/>`,
    ],
    [
      "light",
      svg`<path d="M248.29,75.82l-22.58,7.33,13.95,19.21a6,6,0,1,1-9.7,7.06L216,90.21l-14,19.21a6,6,0,1,1-9.7-7.06l13.95-19.21-22.58-7.33a6,6,0,1,1,3.71-11.41L210,71.74V48a6,6,0,0,1,12,0V71.74l22.58-7.33a6,6,0,0,1,3.71,11.41ZM150,184a30,30,0,1,1-36-29.4V120a6,6,0,0,1,12,0v34.6A30.05,30.05,0,0,1,150,184Zm-12,0a18,18,0,1,0-18,18A18,18,0,0,0,138,184Zm44,0A62,62,0,1,1,82,135V48a38,38,0,0,1,76,0v87A62.06,62.06,0,0,1,182,184Zm-12,0a50.07,50.07,0,0,0-21.43-41A6,6,0,0,1,146,138V48a26,26,0,0,0-52,0v90A6,6,0,0,1,91.43,143,50,50,0,1,0,170,184Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM152,184a32,32,0,1,1-40-31V120a8,8,0,0,1,16,0v33A32.06,32.06,0,0,1,152,184Zm-16,0a16,16,0,1,0-16,16A16,16,0,0,0,136,184Zm48,0A64,64,0,1,1,80,134V48a40,40,0,0,1,80,0v86A64.08,64.08,0,0,1,184,184Zm-16,0a48.08,48.08,0,0,0-20.58-39.4A8,8,0,0,1,144,138V48a24,24,0,0,0-48,0v90a8,8,0,0,1-3.42,6.56A48,48,0,1,0,168,184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M246.14,81.52l-14.72,4.79,9.1,12.52a12,12,0,1,1-19.42,14.11L212,100.42l-9.1,12.52a12,12,0,1,1-19.42-14.11l9.1-12.52-14.72-4.79a12,12,0,1,1,7.41-22.82L200,63.48V48a12,12,0,0,1,24,0V63.48l14.73-4.78a12,12,0,1,1,7.41,22.82ZM160,150.69a64,64,0,1,1-104,0V56a52,52,0,0,1,104,0ZM148,188a40,40,0,0,0-9.23-25.55,12,12,0,0,1-2.77-7.68V56a28,28,0,0,0-56,0v98.78a12,12,0,0,1-2.91,7.83A40,40,0,1,0,148,188Zm-28-20.78V120a12,12,0,0,0-24,0v47.22a24,24,0,1,0,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM176,192a56,56,0,1,1-88-45.92V40a32,32,0,0,1,64,0V146.08A56,56,0,0,1,176,192ZM136,40a16,16,0,0,0-32,0V80h32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M152,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,120,208Z" opacity="0.2"/><path d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM152,184a32,32,0,1,1-40-31V120a8,8,0,0,1,16,0v33A32.06,32.06,0,0,1,152,184Zm-16,0a16,16,0,1,0-16,16A16,16,0,0,0,136,184Zm48,0A64,64,0,1,1,80,134V48a40,40,0,0,1,80,0v86A64.08,64.08,0,0,1,184,184Zm-16,0a48.08,48.08,0,0,0-20.58-39.4A8,8,0,0,1,144,138V48a24,24,0,0,0-48,0v90a8,8,0,0,1-3.42,6.56A48,48,0,1,0,168,184Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhThermometerCold.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-thermometer-cold": PhThermometerCold;
  }
}