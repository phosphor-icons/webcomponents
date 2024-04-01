/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-map-pin-area": PhMapPinArea;
  }
}

@customElement("ph-map-pin-area")
class PhMapPinArea extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80ZM97.08,147.73C78.05,127.35,68,103.93,68,80a60,60,0,0,1,120,0c0,23.93-10.05,47.35-29.08,67.73A136.54,136.54,0,0,1,130,171.47a4,4,0,0,1-4,0A136.54,136.54,0,0,1,97.08,147.73ZM76,80c0,47.09,42.25,77,52,83.3,9.75-6.28,52-36.21,52-83.3A52,52,0,0,0,76,80Zm125.38,71.38a4,4,0,0,0-2.76,7.51c18.67,6.89,29.38,16,29.38,25.11,0,17.39-40.18,36-100,36S28,201.39,28,184c0-9.07,10.71-18.22,29.38-25.11a4,4,0,0,0-2.76-7.51C32.29,159.62,20,171.21,20,184c0,12.46,11.73,23.83,33,32,20.09,7.73,46.72,12,75,12s54.89-4.25,75-12c21.29-8.19,33-19.56,33-32C236,171.21,223.71,159.62,201.38,151.38Z"/>`,
    ],
    [
      "light",
      svg`<path d="M114,80a14,14,0,1,1,14,14A14,14,0,0,1,114,80ZM66,80a62,62,0,0,1,124,0c0,58.81-56.61,91.83-59,93.21a6,6,0,0,1-6,0C122.61,171.83,66,138.81,66,80Zm12,0c0,44.52,38.81,73.49,50,80.91,11.18-7.42,50-36.38,50-80.91A50,50,0,0,0,78,80Zm124.08,69.51a6,6,0,1,0-4.16,11.25C215.5,167.25,226,175.94,226,184c0,16.08-40.25,34-98,34s-98-17.92-98-34c0-8.06,10.5-16.75,28.08-23.24a6,6,0,1,0-4.16-11.25C30.76,158.06,18,170.31,18,184c0,13.34,12.18,25.38,34.31,33.88C72.62,225.7,99.5,230,128,230s55.38-4.3,75.69-12.12C225.82,209.38,238,197.34,238,184,238,170.31,225.24,158.06,202.08,149.51Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M108,80a20,20,0,1,1,20,20A20,20,0,0,1,108,80ZM60,80a68,68,0,0,1,136,0c0,62.25-59.51,97-62.05,98.42a12,12,0,0,1-11.9,0C119.51,177,60,142.25,60,80Zm24,0c0,38.2,30.71,64.2,44,73.64C141.21,144.15,172,118,172,80a44,44,0,0,0-88,0Zm124.57,65.6a12,12,0,1,0-9.14,22.19C213.56,173.61,220,180.27,220,184c0,4-7.13,11.07-22.77,17.08-18.3,7-42.89,10.92-69.23,10.92s-50.93-3.88-69.23-10.92C43.12,195.07,36,188,36,184c0-3.73,6.44-10.39,20.57-16.21a12,12,0,1,0-9.14-22.19C31.27,152.25,12,164.31,12,184c0,34.14,58.36,52,116,52,29.22,0,56.86-4.44,77.85-12.52C220.1,218,244,205.59,244,184,244,164.31,224.73,152.25,208.57,145.6Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" opacity="0.2"/><path d="M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"/>`,
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
      ${PhMapPinArea.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhMapPinArea };
