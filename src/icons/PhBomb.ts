/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bomb": PhBomb;
  }
}

@customElement("ph-bomb")
class PhBomb extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M248,36h0a4,4,0,0,0-4,4c0,1.47-.42,36-28,36-13.94,0-23.08-12.79-32.75-26.33C172.83,35.09,162.06,20,144,20c-14.86,0-25.82,7.79-31.71,22.51A63.73,63.73,0,0,0,108.22,60H88A12,12,0,0,0,76,72V84.08A84,84,0,0,0,112,244h1.51A84,84,0,0,0,148,84.08V72a12,12,0,0,0-12-12H116.24c.92-9.42,5.45-32,27.76-32,13.94,0,23.08,12.79,32.75,26.33C187.17,68.91,197.94,84,216,84c14.86,0,25.82-7.79,31.71-22.51A64.27,64.27,0,0,0,252,40,4,4,0,0,0,248,36ZM140,72V86.66a4,4,0,0,0,2.4,3.66,76,76,0,1,1-60.8,0A4,4,0,0,0,84,86.66V72a4,4,0,0,1,4-4h48A4,4,0,0,1,140,72ZM104.66,204.05A4,4,0,0,1,104,212a5,5,0,0,1-.66-.05,53.46,53.46,0,0,1-43.29-43.29,4,4,0,0,1,7.9-1.32A45.31,45.31,0,0,0,104.66,204.05Z"/>`,
    ],
    [
      "light",
      svg`<path d="M248,34a6,6,0,0,0-6,6,54.1,54.1,0,0,1-3.57,17.77C234.06,68.69,226.72,74,216,74c-12.91,0-21.76-12.38-31.12-25.49C174.67,34.21,163.09,18,144,18c-15.74,0-27.35,8.22-33.57,23.77a65.36,65.36,0,0,0-4,16.23H88A14,14,0,0,0,74,72V82.83A86,86,0,0,0,112,246h1.55A86,86,0,0,0,150,82.83V72a14,14,0,0,0-14-14H118.53a51.39,51.39,0,0,1,3.15-12c4.38-10.74,11.69-16,22.32-16,12.91,0,21.75,12.38,31.12,25.49C185.33,69.79,196.91,86,216,86c15.74,0,27.35-8.22,33.57-23.77A66.46,66.46,0,0,0,254,40,6,6,0,0,0,248,34ZM138,72V86.66a6,6,0,0,0,3.6,5.49,74,74,0,1,1-59.2,0A6,6,0,0,0,86,86.66V72a2,2,0,0,1,2-2h48A2,2,0,0,1,138,72ZM105,202.08A6,6,0,0,1,104,214a6.74,6.74,0,0,1-1-.08A55.48,55.48,0,0,1,58.08,169a6,6,0,1,1,11.84-2A43.29,43.29,0,0,0,105,202.08Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM140.8,94a72,72,0,1,1-57.6,0A8,8,0,0,0,88,86.66V72h48V86.66A8,8,0,0,0,140.8,94ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,28a12,12,0,0,0-12,12A48.71,48.71,0,0,1,228.67,56C224.23,66.64,217.43,68,212,68c-8.81,0-14.91-8.5-23.91-22.49C178.5,30.58,166.55,12,144,12c-18.14,0-32,9.78-39.14,27.54A68.26,68.26,0,0,0,101.27,52H88A20,20,0,0,0,68,72v7.18A92,92,0,0,0,112,252h1.66A92,92,0,0,0,156,79.18V72a20,20,0,0,0-20-20H125.93a40.89,40.89,0,0,1,1.4-4c4.44-10.62,11.24-12,16.67-12,8.81,0,14.91,8.5,23.91,22.49C177.5,73.42,189.45,92,212,92c18.14,0,32-9.78,39.14-27.54A71.91,71.91,0,0,0,256,40,12,12,0,0,0,244,28ZM139.2,97.65a68,68,0,1,1-54.4,0,12,12,0,0,0,7.2-11V76h19.5c.17,0,.33,0,.5,0s.34,0,.51,0H132V86.66A12,12,0,0,0,139.2,97.65ZM111.45,201.76A12,12,0,0,1,100,210.17a12.2,12.2,0,0,1-3.6-.55A51.79,51.79,0,0,1,60,160a12,12,0,0,1,24,0,27.89,27.89,0,0,0,19.6,26.72A12,12,0,0,1,111.45,201.76Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,160A80,80,0,1,1,80,86.66V72a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V86.66A80,80,0,0,1,192,160Z" opacity="0.2"/><path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM140.8,94a72,72,0,1,1-57.6,0A8,8,0,0,0,88,86.66V72h48V86.66A8,8,0,0,0,140.8,94ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"/>`,
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
      ${PhBomb.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhBomb };
