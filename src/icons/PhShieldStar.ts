/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-shield-star": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-shield-star": IconAttrs;
    }
  }
}

@customElement("ph-shield-star")
class PhShieldStar extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M171.71,118.51a4,4,0,0,1-2.22,5.2l-35.16,14.07L155.2,165.6a4,4,0,1,1-6.4,4.8L128,142.67,107.2,170.4a4,4,0,0,1-6.4-4.8l20.87-27.82L86.51,123.71a4,4,0,1,1,3-7.42L124,130.09V96a4,4,0,0,1,8,0v34.09l34.51-13.8A4,4,0,0,1,171.71,118.51ZM220,56v56c0,51.16-24.73,82.12-45.47,99.1-22.4,18.32-44.55,24.5-45.48,24.76a4,4,0,0,1-2.1,0c-.93-.26-23.08-6.44-45.48-24.76C60.73,194.12,36,163.16,36,112V56A12,12,0,0,1,48,44H208A12,12,0,0,1,220,56Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v56c0,38.44,14.23,69.63,42.29,92.71A132.23,132.23,0,0,0,128,227.82a132.45,132.45,0,0,0,41.71-23.11C197.77,181.63,212,150.44,212,112Z"/>`,
    ],
    [
      "light",
      svg`<path d="M173.57,117.77a6,6,0,0,1-3.34,7.8L137.5,138.66l19.3,25.74a6,6,0,0,1-9.6,7.2L128,146l-19.2,25.6a6,6,0,1,1-9.6-7.2l19.3-25.74L85.77,125.57a6,6,0,0,1,4.46-11.14L122,127.14V96a6,6,0,0,1,12,0v31.14l31.77-12.71A6,6,0,0,1,173.57,117.77ZM222,56v56c0,51.94-25.12,83.4-46.2,100.64-22.73,18.6-45.27,24.89-46.22,25.15a6,6,0,0,1-3.16,0c-1-.26-23.49-6.55-46.22-25.15C59.12,195.4,34,163.94,34,112V56A14,14,0,0,1,48,42H208A14,14,0,0,1,222,56Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v56c0,37.75,13.94,68.39,41.44,91.06A130.94,130.94,0,0,0,128,225.72a131.17,131.17,0,0,0,40.56-22.66C196.06,180.39,210,149.75,210,112Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M80.57,117A8,8,0,0,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43l-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,0,1,80.57,117ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M76.86,115.54a12,12,0,0,1,15.6-6.68L116,118.28V96a12,12,0,0,1,24,0v22.28l23.54-9.42a12,12,0,0,1,8.92,22.28L147,141.33,161.6,160.8a12,12,0,1,1-19.2,14.4L128,156l-14.4,19.2a12,12,0,1,1-19.2-14.4L109,141.33,83.54,131.14A12,12,0,0,1,76.86,115.54ZM228,56v56c0,54.29-26.32,87.22-48.4,105.29-23.71,19.39-47.44,26-48.44,26.29a12.1,12.1,0,0,1-6.32,0c-1-.28-24.73-6.9-48.44-26.29C54.32,199.22,28,166.29,28,112V56A20,20,0,0,1,48,36H208A20,20,0,0,1,228,56Zm-24,4H52v52c0,35.71,13.09,64.69,38.91,86.15A126.14,126.14,0,0,0,128,219.38a126.28,126.28,0,0,0,37.09-21.23C190.91,176.69,204,147.71,204,112Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-37,87.43-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,1,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" opacity="0.2"/><path d="M80.57,117A8,8,0,0,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43l-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,0,1,80.57,117ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z"/>`,
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
      ${PhShieldStar.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhShieldStar };
