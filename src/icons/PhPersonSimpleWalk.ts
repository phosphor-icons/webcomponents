/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-person-simple-walk": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-person-simple-walk": IconAttrs;
    }
  }
}

@customElement("ph-person-simple-walk")
class PhPersonSimpleWalk extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M152,76a28,28,0,1,0-28-28A28,28,0,0,0,152,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,152,28Zm60,116a4,4,0,0,1-4,4c-33.65,0-49.92-16.43-64.28-30.93-3.52-3.57-6.86-6.93-10.34-10-.66-.57-1.34-1.09-2-1.59l-16.86,38.77,39.84,28.45A4,4,0,0,1,156,176v56a4,4,0,0,1-8,0V178.06L111.23,151.8,75.67,233.59a4,4,0,1,1-7.34-3.19l55.93-128.62c-29.7-10.55-73,29.64-73.52,30.09A4,4,0,1,1,45.26,126,173.4,173.4,0,0,1,78.1,102.59c25.15-13.54,46.07-14.06,60.52-1.52,3.71,3.23,7.15,6.7,10.79,10.37,13.9,14,28.28,28.56,58.59,28.56A4,4,0,0,1,212,144Z"/>`,
    ],
    [
      "light",
      svg`<path d="M152,78a30,30,0,1,0-30-30A30,30,0,0,0,152,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,30Zm62,114a6,6,0,0,1-6,6c-34.48,0-51.06-16.75-65.7-31.52-3.47-3.51-6.75-6.82-10.15-9.78L117,143.61l38.52,27.51A6,6,0,0,1,158,176v56a6,6,0,0,1-12,0V179.09l-33.92-24.23L77.5,234.39a6,6,0,0,1-11-4.78l55-126.61c-10.18-2.75-23.07,0-38.51,8.29a165.76,165.76,0,0,0-30.92,22,6,6,0,0,1-8.22-8.74,175.4,175.4,0,0,1,33.27-23.77c25.93-14,47.64-14.39,62.77-1.26,3.77,3.27,7.4,6.93,10.9,10.47,13.62,13.75,27.69,28,57.17,28A6,6,0,0,1,214,144Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm64,112a8,8,0,0,1-8,8c-35.31,0-52.95-17.81-67.12-32.12-2.74-2.77-5.36-5.4-8-7.84l-13.43,30.88,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.15-10.52l54.08-124.37c-9.31-1.65-20.92,1.2-34.7,8.58a163.88,163.88,0,0,0-30.57,21.77,8,8,0,0,1-10.95-11.66c2.5-2.35,61.69-57.23,98.72-25.08,3.83,3.32,7.48,7,11,10.57C166.19,122.7,179.36,136,208,136A8,8,0,0,1,216,144Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M152,84a36,36,0,1,0-36-36A36,36,0,0,0,152,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,36Zm68,112a12,12,0,0,1-12,12c-37,0-55.27-18.47-70-33.3-1.71-1.72-3.36-3.4-5-5l-8.63,19.85L159,166.23a12,12,0,0,1,5,9.77v56a12,12,0,0,1-24,0V182.17l-25.37-18.12L83,236.78a12,12,0,1,1-22-9.57l50.06-115.13q-10.64.75-25,8.4a159.78,159.78,0,0,0-29.83,21.23,12,12,0,0,1-16.43-17.5c2.61-2.45,64.36-59.67,104.09-25.18,3.94,3.42,7.64,7.16,11.22,10.78C168.43,123.28,181,136,208,136A12,12,0,0,1,220,148Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M120,48a32,32,0,1,1,32,32A32,32,0,0,1,120,48Zm88,88c-28.64,0-41.81-13.3-55.75-27.37-3.53-3.57-7.18-7.26-11-10.58-37-32.14-96.22,22.73-98.72,25.08a8,8,0,0,0,10.95,11.66A163.88,163.88,0,0,1,84,113c13.78-7.38,25.39-10.23,34.7-8.58L64.66,228.81a8,8,0,0,0,4.15,10.52A7.84,7.84,0,0,0,72,240a8,8,0,0,0,7.34-4.81l33.59-77.27L144,180.12V232a8,8,0,0,0,16,0V176a8,8,0,0,0-3.35-6.51l-37.2-26.57L132.88,112c2.64,2.44,5.26,5.07,8,7.84C155.05,134.19,172.69,152,208,152a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M176,48a24,24,0,1,1-24-24A24,24,0,0,1,176,48Z" opacity="0.2"/><path d="M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm64,112a8,8,0,0,1-8,8c-35.31,0-52.95-17.81-67.12-32.12-2.74-2.77-5.36-5.4-8-7.84l-13.43,30.88,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.15-10.52l54.08-124.37c-9.31-1.65-20.92,1.2-34.7,8.58a163.88,163.88,0,0,0-30.57,21.77,8,8,0,0,1-10.95-11.66c2.5-2.35,61.69-57.22,98.72-25.08,3.83,3.32,7.48,7,11,10.58C166.19,122.7,179.36,136,208,136A8,8,0,0,1,216,144Z"/>`,
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
      ${PhPersonSimpleWalk.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPersonSimpleWalk };
