/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-pencil-simple-line")
export default class PhPencilSimpleLine extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H216a4,4,0,0,0,0-8H105.66L224.49,93.17A12,12,0,0,0,224.49,76.2ZM94.34,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.82L136,69.66,186.35,120ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z"/>`,
    ],
    [
      "light",
      svg`<path d="M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H216a6,6,0,0,0,0-12H110.49L225.91,94.59A14,14,0,0,0,225.91,74.79ZM93.52,210H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.49,183.52,120ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H216a12,12,0,0,0,0-24H125L230.15,98.83A20,20,0,0,0,230.15,70.54ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z" opacity="0.2"/><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM48,163.31l88-88L180.69,120l-88,88H48Zm144-54.62L147.32,64l24-24L216,84.69Z"/>`,
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
      ${PhPencilSimpleLine.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-pencil-simple-line": PhPencilSimpleLine;
  }
}
