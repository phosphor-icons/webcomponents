/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-not-subset-of": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-not-subset-of": IconAttrs;
    }
  }
}

@customElement("ph-not-subset-of")
class PhNotSubsetOf extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M210.69,37a4,4,0,0,0-5.65.27L199,44H128A84,84,0,0,0,68.63,187.36L45,213.31A4,4,0,1,0,51,218.69l23.58-25.94A83.64,83.64,0,0,0,128,212h72a4,4,0,0,0,0-8H128a75.66,75.66,0,0,1-48.07-17.18L211,42.69A4,4,0,0,0,210.69,37ZM52,128a76.08,76.08,0,0,1,76-76h63.69L74,181.43A75.75,75.75,0,0,1,52,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M212,35.56a6,6,0,0,0-8.48.4l-5.49,6H128A85.93,85.93,0,0,0,65.9,187.4L43.56,212A6,6,0,0,0,52.44,220l22.33-24.57A85.52,85.52,0,0,0,128,214h72a6,6,0,0,0,0-12H128a73.65,73.65,0,0,1-45.14-15.42L212.44,44A6,6,0,0,0,212,35.56ZM54,128a74.09,74.09,0,0,1,74-74h59.16L74,178.5A73.7,73.7,0,0,1,54,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M213.38,34.08a8,8,0,0,0-11.3.54L197.19,40H128A88,88,0,0,0,63.16,187.43L42.08,210.62a8,8,0,1,0,11.84,10.76L75,198.2A87.5,87.5,0,0,0,128,216h72a8,8,0,0,0,0-16H128a71.63,71.63,0,0,1-42.18-13.7L213.92,45.38A8,8,0,0,0,213.38,34.08ZM56,128a72.08,72.08,0,0,1,72-72h54.64L74,175.53A71.69,71.69,0,0,1,56,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216.07,31.12a12,12,0,0,0-16.95.81L195.42,36H128A91.95,91.95,0,0,0,57.8,187.39L39.12,207.93a12,12,0,1,0,17.76,16.14l18.67-20.53A91.48,91.48,0,0,0,128,220h72a12,12,0,0,0,0-24H128a67.51,67.51,0,0,1-36.12-10.43l125-137.5A12,12,0,0,0,216.07,31.12ZM60,128a68.07,68.07,0,0,1,68-68h45.6L74.13,169.42A67.62,67.62,0,0,1,60,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,80h31.37L90.83,158.33A48,48,0,0,1,128,80Zm96-32V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.27,58a8,8,0,0,0-11.29.75L173.37,64H128A64,64,0,0,0,80.19,170.49L66,186.73a8,8,0,0,0,12,10.54L92.22,181A63.62,63.62,0,0,0,128,192h48a8,8,0,0,0,0-16H128a47.63,47.63,0,0,1-25.13-7.13L190,69.27A8,8,0,0,0,189.27,58Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z" opacity="0.2"/><path d="M213.38,34.08a8,8,0,0,0-11.3.54L197.19,40H128A88,88,0,0,0,63.16,187.43L42.08,210.62a8,8,0,1,0,11.84,10.76L75,198.2A87.5,87.5,0,0,0,128,216h72a8,8,0,0,0,0-16H128a71.63,71.63,0,0,1-42.18-13.7L213.92,45.38A8,8,0,0,0,213.38,34.08ZM56,128a72.08,72.08,0,0,1,72-72h54.64L74,175.53A71.69,71.69,0,0,1,56,128Z"/>`,
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
      ${PhNotSubsetOf.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhNotSubsetOf };
