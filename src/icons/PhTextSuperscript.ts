/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-text-superscript": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-text-superscript": IconAttrs;
    }
  }
}

@customElement("ph-text-superscript")
class PhTextSuperscript extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M244,144a4,4,0,0,1-4,4H192a4,4,0,0,1-3.2-6.4L232,84.05A20,20,0,0,0,213.22,52.2a20,20,0,0,0-16.08,13.14,4,4,0,1,1-7.55-2.67,28.34,28.34,0,0,1,4-7.52,28,28,0,1,1,44.72,33.7L200,140h40A4,4,0,0,1,244,144ZM146.62,77a4,4,0,0,0-5.64.4L92,133.89,43,77.38a4,4,0,0,0-6,5.24L86.71,140,37,197.38a4,4,0,1,0,6,5.24l49-56.51,49,56.51a4,4,0,0,0,6-5.24L97.29,140,147,82.62A4,4,0,0,0,146.62,77Z"/>`,
    ],
    [
      "light",
      svg`<path d="M246,144a6,6,0,0,1-6,6H192a6,6,0,0,1-4.8-9.6l43.17-57.55A18,18,0,1,0,199,66a6,6,0,0,1-11.31-4A30.12,30.12,0,0,1,192,54,30,30,0,0,1,240,90.06L204,138h36A6,6,0,0,1,246,144ZM147.93,75.47a6,6,0,0,0-8.46.6L92,130.84,44.53,76.07a6,6,0,1,0-9.06,7.86L84.06,140,35.47,196.07a6,6,0,1,0,9.06,7.86L92,149.16l47.47,54.77a6,6,0,0,0,9.06-7.86L99.94,140l48.59-56.07A6,6,0,0,0,147.93,75.47Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M248,144a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.55a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.33,32,32,0,1,1,55.74,29.92L208,136h32A8,8,0,0,1,248,144ZM149.24,74a8,8,0,0,0-11.29.8L92,127.79l-45.95-53A8,8,0,0,0,34,85.24L81.41,140,34,194.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,140l47.46-54.76A8,8,0,0,0,149.24,74Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M252,144a12,12,0,0,1-12,12H192a12,12,0,0,1-9.6-19.2l43.17-57.55A12,12,0,1,0,204.68,68a12,12,0,0,1-22.63-8,36.24,36.24,0,0,1,5.2-9.66,36,36,0,0,1,57.5,43.33L216,132h24A12,12,0,0,1,252,144ZM151.86,70.94a12,12,0,0,0-16.93,1.2L92,121.68,49.07,72.14A12,12,0,0,0,30.93,87.86L76.12,140,30.93,192.14a12,12,0,0,0,18.14,15.72L92,158.32l42.93,49.54a12,12,0,1,0,18.14-15.72L107.88,140l45.19-52.14A12,12,0,0,0,151.86,70.94Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM126.55,179.41a8,8,0,1,1-13.1,9.18L92,158,70.55,188.59a8,8,0,1,1-13.1-9.18L82.23,144,57.45,108.59a8,8,0,1,1,13.1-9.18L92,130.05l21.45-30.64a8,8,0,0,1,13.1,9.18L101.77,144ZM192,160H152a8,8,0,0,1-6.4-12.8l36-48a12,12,0,1,0-19.15-14.46,13.06,13.06,0,0,0-2.58,4.81,8,8,0,1,1-15.68-3.18,28.17,28.17,0,1,1,50.2,22.44L168,144h24a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,64V184a16,16,0,0,1-16,16H40V64A16,16,0,0,1,56,48H224A16,16,0,0,1,240,64Z" opacity="0.2"/><path d="M248,144a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.55a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.33,32,32,0,1,1,55.74,29.92L208,136h32A8,8,0,0,1,248,144ZM149.24,74a8,8,0,0,0-11.29.8L92,127.79l-45.95-53A8,8,0,0,0,34,85.24L81.41,140,34,194.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,140l47.46-54.76A8,8,0,0,0,149.24,74Z"/>`,
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
      ${PhTextSuperscript.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTextSuperscript };
