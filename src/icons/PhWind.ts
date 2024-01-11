/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-wind")
export default class PhWind extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M180,184a28,28,0,0,1-28,28c-12.09,0-23.76-7.83-27.75-18.61a4,4,0,1,1,7.5-2.78C134.58,198.24,143.28,204,152,204a20,20,0,0,0,0-40H40a4,4,0,0,1,0-8H152A28,28,0,0,1,180,184ZM148,72a28,28,0,0,0-28-28c-12.09,0-23.76,7.83-27.75,18.61a4,4,0,0,0,7.5,2.78C102.58,57.76,111.28,52,120,52a20,20,0,0,1,0,40H24a4,4,0,0,0,0,8h96A28,28,0,0,0,148,72Zm60,4c-12.09,0-23.76,7.83-27.75,18.61a4,4,0,1,0,7.5,2.78C190.58,89.76,199.28,84,208,84a20,20,0,0,1,0,40H32a4,4,0,0,0,0,8H208a28,28,0,0,0,0-56Z"/>`,
    ],
    [
      "light",
      svg`<path d="M182,184a30,30,0,0,1-30,30c-12.9,0-25.36-8.38-29.63-19.92a6,6,0,0,1,11.26-4.16C136.13,196.69,144.2,202,152,202a18,18,0,0,0,0-36H40a6,6,0,0,1,0-12H152A30,30,0,0,1,182,184ZM150,72a30,30,0,0,0-30-30c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C104.13,59.31,112.2,54,120,54a18,18,0,0,1,0,36H24a6,6,0,0,0,0,12h96A30,30,0,0,0,150,72Zm58,2c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C192.13,91.31,200.2,86,208,86a18,18,0,0,1,0,36H32a6,6,0,0,0,0,12H208a30,30,0,0,0,0-60Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M24,104a12,12,0,0,1,0-24h96a12,12,0,0,0,0-24,15.07,15.07,0,0,0-10.26,4.45,12,12,0,0,1-17-16.9A39.34,39.34,0,0,1,120,32a36,36,0,0,1,0,72ZM208,68a39.34,39.34,0,0,0-27.3,11.55,12,12,0,0,0,17,16.9A15.07,15.07,0,0,1,208,92a12,12,0,0,1,0,24H32a12,12,0,0,0,0,24H208a36,36,0,0,0,0-72Zm-56,84H40a12,12,0,0,0,0,24H152a12,12,0,0,1,0,24,15.11,15.11,0,0,1-10.27-4.45,12,12,0,1,0-17,16.9A39.34,39.34,0,0,0,152,224a36,36,0,0,0,0-72Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M120,104H24a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,24.27,88H112a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,111.73,72H92.29a4,4,0,0,1-4-4.58A32,32,0,1,1,120,104Zm119.92-2.29a32,32,0,0,0-63.59-2.29,4,4,0,0,0,4,4.58h19.44a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H32.27A8.17,8.17,0,0,0,24,127.47,8,8,0,0,0,32,136H208A32,32,0,0,0,239.92,101.71ZM152,152H40.27A8.17,8.17,0,0,0,32,159.47,8,8,0,0,0,40,168H143.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H124.29a4,4,0,0,0-4,4.58A32,32,0,1,0,152,152Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M120,96a24,24,0,1,1,24-24A24,24,0,0,1,120,96Zm88-16a24,24,0,1,0,24,24A24,24,0,0,0,208,80Zm-56,80a24,24,0,1,0,24,24A24,24,0,0,0,152,160Z" opacity="0.2"/><path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"/>`,
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
      ${PhWind.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-wind": PhWind;
  }
}
