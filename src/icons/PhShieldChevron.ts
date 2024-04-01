/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-shield-chevron": PhShieldChevron;
  }
}

@customElement("ph-shield-chevron")
class PhShieldChevron extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44ZM169.71,204.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11A115.08,115.08,0,0,1,59.21,173L128,124.88,196.79,173A115.08,115.08,0,0,1,169.71,204.71ZM212,112c0,20-3.85,38-11.46,53.89l-70.25-49.17a4,4,0,0,0-4.58,0L55.46,165.89C47.85,150,44,132,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42ZM168.56,203.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66,113.09,113.09,0,0,1-25.56-29.45L128,127.32l66.12,46.29A113.09,113.09,0,0,1,168.56,203.06ZM210,112c0,18.75-3.44,35.75-10.28,50.88l-68.28-47.8a6,6,0,0,0-6.88,0l-68.28,47.8C49.44,147.75,46,130.75,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM167.4,201.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81,111.82,111.82,0,0,1-24.51-27.64L128,129.77l63.43,44.4A111.56,111.56,0,0,1,167.4,201.42ZM208,112q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36ZM52,60H204v52a119.54,119.54,0,0,1-7,41.64l-62.11-43.47a12,12,0,0,0-13.76,0L59,153.64A119.54,119.54,0,0,1,52,112ZM165.09,198.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23A109,109,0,0,1,70,175.23l58-40.58,58,40.58A109,109,0,0,1,165.09,198.15Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M202,171.78C177.13,218.6,128,232,128,232s-49.13-13.4-74-60.22L128,120Z" opacity="0.2"/><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM167.4,201.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81,111.82,111.82,0,0,1-24.51-27.64L128,129.77l63.43,44.4A111.56,111.56,0,0,1,167.4,201.42ZM208,112q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z"/>`,
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
      ${PhShieldChevron.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhShieldChevron };
