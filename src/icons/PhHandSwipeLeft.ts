/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-hand-swipe-left": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-hand-swipe-left": IconAttrs;
    }
  }
}

@customElement("ph-hand-swipe-left")
class PhHandSwipeLeft extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212,140v36c0,24.66-8.08,41.1-8.42,41.79a4,4,0,1,1-7.16-3.58c.07-.15,7.58-15.55,7.58-38.21V140a16,16,0,0,0-32,0v4a4,4,0,0,1-8,0V124a16,16,0,0,0-32,0v12a4,4,0,0,1-8,0V68a16,16,0,0,0-32,0V176a4,4,0,0,1-7.39,2.11l-18.68-30a.75.75,0,0,1-.07-.12,16,16,0,0,0-27.72,16l29.31,50a4,4,0,0,1-6.9,4L31.22,168a24,24,0,0,1,41.52-24.09L84,162V68a24,24,0,0,1,48,0v38.13a24,24,0,0,1,39.94,16.06A24,24,0,0,1,212,140Zm36-88H185.65l25.18-25.17a4,4,0,1,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66L185.65,60H248a4,4,0,0,0,0-8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214,140v36c0,25.13-8.28,42-8.64,42.68a6,6,0,1,1-10.73-5.36c.07-.14,7.37-15.19,7.37-37.32V140a14,14,0,0,0-28,0v4a6,6,0,0,1-12,0V124a14,14,0,0,0-28,0v12a6,6,0,0,1-12,0V68a14,14,0,0,0-28,0V176a6,6,0,0,1-11.09,3.17l-18.68-30a1,1,0,0,1-.1-.17,14,14,0,0,0-24.25,14l29.29,50A6,6,0,0,1,58.81,219L29.49,169a26,26,0,0,1,45-26.13L82,155V68a26,26,0,0,1,52,0v34.1a26,26,0,0,1,39.42,16.39A26,26,0,0,1,214,140Zm34-90H190.48l21.76-21.76a6,6,0,0,0-8.49-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.49-8.48L190.48,62H248a6,6,0,0,0,0-12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,140v36c0,25.59-8.49,42.85-8.85,43.58A8,8,0,0,1,200,224a7.9,7.9,0,0,1-3.57-.85,8,8,0,0,1-3.58-10.73c.06-.12,7.16-14.81,7.16-36.42V140a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V124a12,12,0,0,0-24,0v12a8,8,0,0,1-16,0V68a12,12,0,0,0-24,0V176a8,8,0,0,1-14.79,4.23l-18.68-30-.14-.23A12,12,0,1,0,41.6,162L70.89,212A8,8,0,1,1,57.08,220l-29.32-50a28,28,0,0,1,48.41-28.17L80,148V68a28,28,0,0,1,56,0V98.7a28,28,0,0,1,38.65,16.69A28,28,0,0,1,216,140Zm32-92H195.31l18.34-18.34a8,8,0,0,0-11.31-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.31-11.32L195.31,64H248a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M256,56a12,12,0,0,1-12,12H201l11.51,11.51a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L201,44h43A12,12,0,0,1,256,56Zm-68,60a31.86,31.86,0,0,0-11.22,2A32,32,0,0,0,140,101V76a32,32,0,0,0-64,0v66.83A32,32,0,0,0,24.28,180l.12.2,25.31,42A12,12,0,0,0,70.27,209.8L45,167.92A8,8,0,0,1,58.92,160l.21.34,18.68,30A12,12,0,0,0,100,184V76a8,8,0,0,1,16,0v68a12,12,0,0,0,24,0V132a8,8,0,0,1,16,0v20a12,12,0,0,0,24,0v-4a8,8,0,0,1,16,0v36c0,11.08-1.28,21.67-3.42,28.32a12,12,0,1,0,22.84,7.36c3-9.16,4.58-21.83,4.58-35.68V148A32,32,0,0,0,188,116Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,128v50.93c0,25.59-8.48,39.93-8.84,40.65A8,8,0,0,1,200,224H64a8,8,0,0,1-6.9-3.95L26.15,160a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,88,175.74V56a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V128a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V112a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V136a8,8,0,0,0,8.53,8,8.18,8.18,0,0,0,7.47-8.25v-7.28c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,216,128Zm32-80H195.31l18.35-18.34a8,8,0,1,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L195.31,64H248a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,140v36c0,24-8,40-8,40H64L34.68,166a20,20,0,0,1,34.64-20L88,176V68a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0Z" opacity="0.2"/><path d="M216,140v36c0,25.59-8.49,42.85-8.85,43.58A8,8,0,0,1,200,224a7.9,7.9,0,0,1-3.57-.85,8,8,0,0,1-3.58-10.73c.06-.12,7.16-14.81,7.16-36.42V140a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V124a12,12,0,0,0-24,0v12a8,8,0,0,1-16,0V68a12,12,0,0,0-24,0V176a8,8,0,0,1-14.79,4.23l-18.68-30-.14-.23A12,12,0,1,0,41.6,162L70.89,212A8,8,0,1,1,57.08,220l-29.32-50a28,28,0,0,1,48.41-28.17L80,148V68a28,28,0,0,1,56,0V98.7a28,28,0,0,1,38.65,16.69A28,28,0,0,1,216,140Zm32-92H195.31l18.34-18.34a8,8,0,0,0-11.31-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.31-11.32L195.31,64H248a8,8,0,0,0,0-16Z"/>`,
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
      ${PhHandSwipeLeft.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhHandSwipeLeft };
