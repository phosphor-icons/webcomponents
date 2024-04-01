/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-wine": PhWine;
  }
}

@customElement("ph-wine")
class PhWine extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M201.5,104.8,179.72,30.87A4,4,0,0,0,175.89,28H80.11a4,4,0,0,0-3.83,2.87L54.5,104.8a59.51,59.51,0,0,0,16.32,60.62A83.39,83.39,0,0,0,124,187.91V236H88a4,4,0,1,0,0,8h80a4,4,0,1,0,0-8H132V187.91a83.39,83.39,0,0,0,53.18-22.49A59.51,59.51,0,0,0,201.5,104.8ZM83.1,36h89.8l20.93,71.06c.43,1.49.8,3,1.1,4.47-23.64,10.47-50.76.18-65.12-7.1-28.22-14.29-49.48-14.1-63.88-10.14Zm96.62,123.57a75.68,75.68,0,0,1-103.44,0,51.53,51.53,0,0,1-14.11-52.51l1-3.46c12.66-4.87,33.45-7,63,8C137,117,154.33,124,172.8,124A62.78,62.78,0,0,0,196,119.78,51.26,51.26,0,0,1,179.72,159.57Z"/>`,
    ],
    [
      "light",
      svg`<path d="M203.41,104.23,181.64,30.3a6,6,0,0,0-5.75-4.3H80.11a6,6,0,0,0-5.75,4.3L52.59,104.23a61.48,61.48,0,0,0,16.87,62.65A85.35,85.35,0,0,0,122,189.77V234H88a6,6,0,1,0,0,12h80a6,6,0,1,0,0-12H134V189.77a85.38,85.38,0,0,0,52.54-22.89A61.48,61.48,0,0,0,203.41,104.23ZM84.6,38h86.8l20.51,69.63c.26.9.5,1.8.71,2.7-22.54,9.07-48.17-.73-61.91-7.68C104.1,89.17,83.48,88.34,68.83,91.52Zm93.75,120.11a73.67,73.67,0,0,1-100.7,0,49.53,49.53,0,0,1-13.56-50.48l.74-2.51c12.34-4.46,32.26-6.05,60.46,8.23,11,5.55,28.65,12.64,47.52,12.64A65.56,65.56,0,0,0,194,122.62,49.22,49.22,0,0,1,178.35,158.11Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M205.33,103.67,183.56,29.74A8,8,0,0,0,175.89,24H80.11a8,8,0,0,0-7.67,5.74L50.67,103.67a63.46,63.46,0,0,0,17.42,64.67A87.39,87.39,0,0,0,120,191.63V232H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V191.63a87.41,87.41,0,0,0,51.91-23.29A63.46,63.46,0,0,0,205.33,103.67ZM86.09,40h83.82L190,108.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,88.11,86.43,86.49,71.68,88.93ZM177,156.65a71.69,71.69,0,0,1-98,0,47.55,47.55,0,0,1-13-48.46l.45-1.52c12-4.06,31.07-5.14,57.93,8.47,11.15,5.65,29.16,12.85,48.43,12.85a68.64,68.64,0,0,0,19.05-2.6A47.2,47.2,0,0,1,177,156.65Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M209.17,102.54,187.39,28.61A12,12,0,0,0,175.89,20H80.11a12,12,0,0,0-11.5,8.61L46.83,102.54a67.45,67.45,0,0,0,18.53,68.72A91.32,91.32,0,0,0,116,195.2V228H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V195.2a91.32,91.32,0,0,0,50.65-23.94A67.45,67.45,0,0,0,209.17,102.54ZM89.08,44h77.84l18.38,62.41c-10.88,2.8-28.05,3-51.88-9.12C110.68,85.78,91.92,83,77.24,84.22ZM128,172a67.5,67.5,0,0,1-46.26-18.27,43.55,43.55,0,0,1-12-43.89c18.44-5.33,38.64,1.66,52.87,8.87,11.55,5.85,30.18,13.28,50.26,13.28a74.15,74.15,0,0,0,14.29-1.35,43.2,43.2,0,0,1-12.87,23.09A67.5,67.5,0,0,1,128,172Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M205.33,103.67,183.56,29.74A8,8,0,0,0,175.89,24H80.11a8,8,0,0,0-7.67,5.74L50.67,103.67a63.46,63.46,0,0,0,17.42,64.67A87.41,87.41,0,0,0,120,191.63V232H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V191.63a87.39,87.39,0,0,0,51.91-23.29A63.48,63.48,0,0,0,205.33,103.67ZM86.09,40h83.82L190,108.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,88.11,86.43,86.49,71.68,88.93Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M182.48,162.5a79.77,79.77,0,0,1-109,0A55.86,55.86,0,0,1,58.3,105.93l1.57-5.31h0C72.49,95.21,95.2,91.4,128,108c35.86,18.16,59.67,11.89,71.42,5.84h0A55.72,55.72,0,0,1,182.48,162.5Z" opacity="0.2"/><path d="M205.33,103.67,183.56,29.74A8,8,0,0,0,175.89,24H80.11a8,8,0,0,0-7.67,5.74L50.67,103.67a63.46,63.46,0,0,0,17.42,64.67A87.41,87.41,0,0,0,120,191.63V232H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V191.63a87.39,87.39,0,0,0,51.91-23.29A63.48,63.48,0,0,0,205.33,103.67ZM86.09,40h83.82L190,108.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,88.11,86.43,86.49,71.68,88.93ZM177,156.65a71.69,71.69,0,0,1-98,0,47.55,47.55,0,0,1-13-48.46l.45-1.52c12-4.06,31.07-5.14,57.93,8.47,11.15,5.65,29.16,12.85,48.43,12.85a68.64,68.64,0,0,0,19.05-2.6A47.2,47.2,0,0,1,177,156.65Z"/>`,
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
      ${PhWine.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhWine };
