/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-pepper": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-pepper": IconAttrs;
    }
  }
}

@customElement("ph-pepper")
class PhPepper extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M163.79,44.14A36.06,36.06,0,0,0,128,12a4,4,0,0,0,0,8,28,28,0,0,1,27.73,24.17A60.07,60.07,0,0,0,100,104c0,48.75-26.71,81.34-79.4,96.87a12,12,0,0,0,1.33,23.36A260.42,260.42,0,0,0,66.69,228a256.53,256.53,0,0,0,34.83-2.3c33.23-4.59,60.2-15.41,80.19-32.18C207.12,172.21,220,142.09,220,104A60.07,60.07,0,0,0,163.79,44.14ZM160,52a52.08,52.08,0,0,1,50.19,38.44L192,99.54,161.79,84.43a4,4,0,0,0-3.58,0L128,99.54l-18.19-9.1A52.08,52.08,0,0,1,160,52Zm16.57,135.39c-25.47,21.37-80.88,41.77-153.24,29a4,4,0,0,1-.47-7.81C78.56,192.14,108,156,108,104a53.28,53.28,0,0,1,.28-5.39l17.93,9a4,4,0,0,0,3.58,0L160,92.48l30.21,15.11a4,4,0,0,0,3.58,0l17.93-9A53.28,53.28,0,0,1,212,104C212,139.62,200.08,167.67,176.57,187.39Z"/>`,
    ],
    [
      "light",
      svg`<path d="M165.57,42.26A38.07,38.07,0,0,0,128,10a6,6,0,0,0,0,12,26,26,0,0,1,25.38,20.35A62.08,62.08,0,0,0,98,104c0,47.75-26.23,79.68-78,94.93a14,14,0,0,0,1.56,27.24A262.5,262.5,0,0,0,66.81,230c40.36,0,85.23-9,116.19-35,25.88-21.71,39-52.33,39-91A62.06,62.06,0,0,0,165.57,42.26ZM160,54a50.09,50.09,0,0,1,47.82,35.38L192,97.28,162.68,82.62a6,6,0,0,0-5.36,0L128,97.28l-15.81-7.91A50.07,50.07,0,0,1,160,54Zm15.28,131.82C150.15,206.89,95.36,227,23.67,214.33A1.88,1.88,0,0,1,22,212.44a1.81,1.81,0,0,1,1.43-2C80.06,193.73,110,156.92,110,104c0-.76,0-1.51.06-2.26l15.26,7.63a6,6,0,0,0,5.36,0L160,94.69l29.32,14.66a6,6,0,0,0,5.36,0l15.26-7.63c0,.75.06,1.5.06,2.26C210,139,198.32,166.49,175.28,185.81Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M167.27,40.42A40.06,40.06,0,0,0,128,8a8,8,0,0,0,0,16,24,24,0,0,1,22.85,16.66A64.08,64.08,0,0,0,96,104c0,46.75-25.75,78-76.53,93a16,16,0,0,0,1.77,31.13A264.8,264.8,0,0,0,66.75,232c40.78,0,86.16-9.15,117.53-35.46C210.64,174.44,224,143.3,224,104h0A64.07,64.07,0,0,0,167.27,40.42ZM160,56a48.07,48.07,0,0,1,45.37,32.37L192,95,163.58,80.83a8,8,0,0,0-7.16,0L128,95l-13.37-6.68A48.08,48.08,0,0,1,160,56Zm14,128.3c-18,15.07-43.6,25.26-74.12,29.47A254.08,254.08,0,0,1,24,212.37h0v0c57.23-16.87,87.63-54,88-107.42l12.44,6.22a8,8,0,0,0,7.16,0L160,96.93l28.42,14.21a8,8,0,0,0,7.16,0l12.41-6.2C207.78,138.84,196.35,165.54,174,184.29Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M170.56,36.82A44.08,44.08,0,0,0,128,4a12,12,0,0,0,0,24,20,20,0,0,1,17.09,9.66A68.11,68.11,0,0,0,92,104c0,21.74-5.83,40.14-17.32,54.69-12.22,15.47-31.18,27.08-56.34,34.49a20,20,0,0,0,2.2,38.91A268.22,268.22,0,0,0,66.64,236c41.61,0,88-9.38,120.21-36.38C214.16,176.72,228,144.55,228,104h0A68.11,68.11,0,0,0,170.56,36.82ZM160,60a44,44,0,0,1,40.32,26.41L192,90.58,165.37,77.26a12,12,0,0,0-10.74,0L128,90.58l-8.32-4.17A44,44,0,0,1,160,60Zm11.43,121.23c-17.4,14.59-42.33,24.47-72.1,28.58a251.28,251.28,0,0,1-58.21.89c46.68-18.51,72.28-52.54,74.68-99.39l6.83,3.42a12.07,12.07,0,0,0,10.74,0L160,101.41l26.63,13.32a12.07,12.07,0,0,0,10.74,0l6.43-3.22C202.24,141.07,191.38,164.5,171.43,181.23Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M167.27,40.42A40.06,40.06,0,0,0,128,8a8,8,0,0,0,0,16,24,24,0,0,1,22.85,16.66A64.08,64.08,0,0,0,96,104c0,46.75-25.75,78-76.53,93a16,16,0,0,0,1.77,31.13A264.8,264.8,0,0,0,66.75,232c40.78,0,86.16-9.15,117.53-35.46C210.64,174.44,224,143.3,224,104h0A64.07,64.07,0,0,0,167.27,40.42ZM192,95,163.58,80.83a8,8,0,0,0-7.16,0L128,95l-13.37-6.68a48,48,0,0,1,90.74,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M214.83,92.58,192,104,160,88l-32,16L105.17,92.58a56,56,0,0,1,109.66,0Z" opacity="0.2"/><path d="M167.27,40.42A40.06,40.06,0,0,0,128,8a8,8,0,0,0,0,16,24,24,0,0,1,22.85,16.66A64.08,64.08,0,0,0,96,104c0,46.75-25.75,78-76.53,93a16,16,0,0,0,1.77,31.13A264.8,264.8,0,0,0,66.75,232c40.78,0,86.16-9.15,117.53-35.46C210.64,174.44,224,143.3,224,104h0A64.07,64.07,0,0,0,167.27,40.42ZM160,56a48.07,48.07,0,0,1,45.37,32.37L192,95,163.58,80.83a8,8,0,0,0-7.16,0L128,95l-13.37-6.68A48.08,48.08,0,0,1,160,56Zm14,128.3c-18,15.07-43.6,25.26-74.12,29.47A254.41,254.41,0,0,1,24,212.37h0v0c57.23-16.87,87.63-54,88-107.42l12.44,6.22a8,8,0,0,0,7.16,0L160,96.93l28.42,14.21a8,8,0,0,0,7.16,0l12.41-6.2C207.78,138.84,196.35,165.54,174,184.29Z"/>`,
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
      ${PhPepper.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPepper };
