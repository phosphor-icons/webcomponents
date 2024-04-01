/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-acorn": PhAcorn;
  }
}

@customElement("ph-acorn")
class PhAcorn extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228,104a52.06,52.06,0,0,0-52-52H132V48a28,28,0,0,1,28-28,4,4,0,0,0,0-8,36,36,0,0,0-36,36v4H80a52.06,52.06,0,0,0-52,52,12,12,0,0,0,8,11.3V128c0,33.61,32.29,59.54,58.24,80.37C109.54,220.66,124,232.27,124,240a4,4,0,0,0,8,0c0-7.73,14.46-19.34,29.76-31.63C187.71,187.54,220,161.61,220,128V115.3A12,12,0,0,0,228,104Zm-71.25,98.13c-12.51,10.05-23.23,18.65-28.75,26.79-5.52-8.14-16.24-16.74-28.75-26.79C74.63,182.37,44,157.78,44,128V116H212v12C212,157.78,181.37,182.37,156.75,202.13ZM216,108H40a4,4,0,0,1-4-4A44.05,44.05,0,0,1,80,60h96a44.05,44.05,0,0,1,44,44A4,4,0,0,1,216,108Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230,104a54.06,54.06,0,0,0-54-54H134V48a26,26,0,0,1,26-26,6,6,0,0,0,0-12,38,38,0,0,0-38,38v2H80a54.06,54.06,0,0,0-54,54,14,14,0,0,0,8,12.63V128c0,34.57,32.71,60.83,59,81.93,14.26,11.45,29,23.29,29,30.07a6,6,0,0,0,12,0c0-6.78,14.75-18.62,29-30.07,26.28-21.1,59-47.36,59-81.93V116.63A14,14,0,0,0,230,104ZM80,62h96a42,42,0,0,1,42,42,2,2,0,0,1-2,2H40a2,2,0,0,1-2-2A42,42,0,0,1,80,62Zm75.5,138.58c-11.48,9.21-21.48,17.24-27.5,25-6-7.72-16-15.75-27.5-25C76.22,181.08,46,156.82,46,128V118H210v10C210,156.82,179.78,181.08,155.5,200.58Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M236,104a60.07,60.07,0,0,0-60-60H140.4A20,20,0,0,1,160,28a12,12,0,0,0,0-24,44.06,44.06,0,0,0-43.81,40H80a60.07,60.07,0,0,0-60,60,20,20,0,0,0,8,16v8c0,37.45,34,64.71,61.23,86.61,10.22,8.2,25.63,20.58,26.77,25.56a12,12,0,0,0,24,0c1.14-5,16.55-17.36,26.77-25.56C194.05,192.71,228,165.45,228,128v-8A20,20,0,0,0,236,104ZM80,68h96a36.06,36.06,0,0,1,35.78,32H44.22A36.06,36.06,0,0,1,80,68Zm71.74,127.9c-9.17,7.36-17.46,14-23.74,20.55-6.28-6.53-14.57-13.19-23.74-20.55C81,177.2,52,153.94,52,128v-4H204v4C204,153.94,175,177.2,151.74,195.9Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.84V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.84A16,16,0,0,0,232,104Zm-77.75,95c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112Z" opacity="0.2"/><path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z"/>`,
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
      ${PhAcorn.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhAcorn };
