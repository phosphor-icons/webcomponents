/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bandaids": PhBandaids;
  }
}

@customElement("ph-bandaids")
class PhBandaids extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M178.91,128l30.55-30.54a36,36,0,0,0-50.92-50.92L128,77.09,97.46,46.54A36,36,0,0,0,46.54,97.46L77.09,128,46.54,158.54a36,36,0,0,0,50.92,50.92L128,178.91l30.54,30.55a36,36,0,0,0,50.92-50.92ZM164.2,52.2a28,28,0,0,1,39.6,39.6l-30.55,30.54L133.66,82.75Zm3.4,75.8L128,167.6,88.4,128,128,88.4ZM52.2,91.8A28,28,0,0,1,91.8,52.2l30.54,30.55L82.75,122.34Zm39.6,112a28,28,0,0,1-39.6-39.6l30.55-30.54,39.59,39.59Zm112,0a28,28,0,0,1-39.6,0l-30.54-30.55,39.59-39.59L203.8,164.2a28,28,0,0,1,0,39.6ZM120,128a8,8,0,1,1,8,8A8,8,0,0,1,120,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M181.74,128l29.13-29.13a38,38,0,1,0-53.74-53.74L128,74.26,98.87,45.13A38,38,0,1,0,45.13,98.87L74.26,128,45.13,157.13a38,38,0,1,0,53.74,53.74L128,181.74l29.13,29.13a38,38,0,1,0,53.74-53.74ZM165.62,53.62h0a26,26,0,1,1,36.76,36.77l-29.13,29.13L136.49,82.75ZM164.77,128,128,164.77,91.23,128,128,91.23ZM53.62,90.38A26,26,0,1,1,90.38,53.62l29.13,29.13L82.75,119.52Zm36.76,112a26,26,0,1,1-36.76-36.76l29.13-29.13,36.76,36.76Zm112,0a26,26,0,0,1-36.76,0l-29.14-29.13,36.77-36.77,29.13,29.14a26,26,0,0,1,0,36.76ZM118,128a10,10,0,1,1,10,10A10,10,0,0,1,118,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184.57,128l27.71-27.72a40,40,0,1,0-56.56-56.56L128,71.43,100.28,43.72a40,40,0,1,0-56.56,56.56L71.43,128,43.72,155.72a40,40,0,1,0,56.56,56.56L128,184.57l27.72,27.71a40,40,0,1,0,56.56-56.56ZM167,55A24,24,0,1,1,201,89l-27.72,27.72L139.31,82.75Zm-5.09,73L128,161.94,94.06,128,128,94.06ZM55,89h0A24,24,0,1,1,89,55l27.72,27.72L82.75,116.69ZM89,201A24,24,0,1,1,55,167l27.72-27.72,33.94,33.94Zm112,0A24,24,0,0,1,167,201l-27.72-27.72,33.94-33.94L201,167A24,24,0,0,1,201,201Zm-85-73a12,12,0,1,1,12,12A12,12,0,0,1,116,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M190.23,128l24.88-24.89a44,44,0,1,0-62.22-62.22L128,65.77,103.11,40.89a44,44,0,1,0-62.22,62.22L65.77,128,40.89,152.89a44,44,0,1,0,62.22,62.22L128,190.23l24.89,24.88a44,44,0,1,0,62.22-62.22ZM169.86,57.86h0a20,20,0,1,1,28.28,28.28L173.25,111,145,82.75ZM156.28,128,128,156.28,99.72,128,128,99.72ZM57.86,86.14A20,20,0,1,1,86.14,57.86L111,82.75,82.75,111Zm28.28,112a20,20,0,1,1-28.28-28.28L82.75,145,111,173.25Zm112,0a20,20,0,0,1-28.28,0L145,173.25,173.25,145l24.89,24.89a20,20,0,0,1,0,28.28Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,116a12,12,0,1,1-12,12A12,12,0,0,1,128,116Zm84.28,39.72a40,40,0,1,1-56.56,56.56L128,184.57l-27.72,27.71a40,40,0,1,1-56.56-56.56L71.43,128,43.72,100.28a40,40,0,1,1,56.56-56.56L128,71.43l27.72-27.71a40,40,0,1,1,56.56,56.56L184.57,128Zm-95.59,17.53L82.75,139.31,55,167A24,24,0,1,0,89,201ZM161.94,128,128,94.06,94.06,128,128,161.94Zm39-39A24,24,0,1,0,167,55L139.31,82.75l33.94,33.94Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M206.63,94.63,173.25,128,128,82.75l33.37-33.38a32,32,0,0,1,45.26,45.26ZM49.37,161.37a32,32,0,0,0,45.26,45.26L128,173.25,82.75,128ZM82.75,128,128,82.75,94.63,49.37A32,32,0,0,0,49.37,94.63Zm90.5,0L128,173.25l33.37,33.38a32,32,0,0,0,45.26-45.26Z" opacity="0.2"/><path d="M184.57,128l27.71-27.72a40,40,0,1,0-56.56-56.56L128,71.43,100.28,43.72a40,40,0,1,0-56.56,56.56L71.43,128,43.72,155.72a40,40,0,1,0,56.56,56.56L128,184.57l27.72,27.71a40,40,0,1,0,56.56-56.56ZM167,55A24,24,0,1,1,201,89l-27.72,27.72L139.31,82.75Zm-5.09,73L128,161.94,94.06,128,128,94.06ZM55,89h0A24,24,0,1,1,89,55l27.72,27.72L82.75,116.69ZM89,201A24,24,0,1,1,55,167l27.72-27.72,33.94,33.94Zm112,0A24,24,0,0,1,167,201l-27.72-27.72,33.94-33.94L201,167A24,24,0,0,1,201,201Zm-85-73a12,12,0,1,1,12,12A12,12,0,0,1,116,128Z"/>`,
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
      ${PhBandaids.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhBandaids };
