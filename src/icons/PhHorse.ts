/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-horse": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-horse": IconAttrs;
    }
  }
}

@customElement("ph-horse")
class PhHorse extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M132,100a8,8,0,1,1-8-8A8,8,0,0,1,132,100Zm96,29.42A100.29,100.29,0,0,1,130,228l-2.09,0a99.37,99.37,0,0,1-66.6-25,4,4,0,1,1,5.34-6,89.08,89.08,0,0,0,24.09,15.39l31.35-43.11c-25.16-13-53.95-8.1-68.14-5.7a27.85,27.85,0,0,1-27.43-11.22c-.05-.07-.1-.14-.14-.21l-13.79-22a3.94,3.94,0,0,1-.5-3,4,4,0,0,1,1.79-2.5L116,61.76V32a4,4,0,0,1,4-4h8A100,100,0,0,1,228,129.42Zm-34.48-66A91.35,91.35,0,0,0,128,36h-4V64a4,4,0,0,1-1.9,3.41L21.53,129.29l11.58,18.52a19.89,19.89,0,0,0,19.52,7.91c15.68-2.66,48.08-8.13,76.39,8.25a44,44,0,0,0,43-44,4,4,0,0,1,8,0A52.06,52.06,0,0,1,130.07,172l-31.56,43.4A94.54,94.54,0,0,0,129.86,220,92,92,0,0,0,193.51,63.4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M134,100a10,10,0,1,1-10-10A10,10,0,0,1,134,100Zm96,29.45A102.29,102.29,0,0,1,130.06,230l-2.13,0A101.33,101.33,0,0,1,60,204.47a6,6,0,1,1,8-8.94,87.12,87.12,0,0,0,22.09,14.39l29-39.89c-23.93-11.37-50.18-6.93-64.8-4.45a29.84,29.84,0,0,1-29.38-12,3.62,3.62,0,0,1-.22-.32l-13.79-22a6,6,0,0,1,1.95-8.29L114,60.65V32a6,6,0,0,1,6-6h8A102,102,0,0,1,230,129.45Zm-12-.17A90,90,0,0,0,128,38h-2V64a6,6,0,0,1-2.86,5.11L24.29,129.94l10.47,16.74a17.91,17.91,0,0,0,17.54,7.06c15.82-2.67,48.42-8.18,77.23,8.22A42,42,0,0,0,170,120a6,6,0,0,1,12,0,54.06,54.06,0,0,1-50.87,53.9l-29.36,40.37A92.83,92.83,0,0,0,129.82,218,90.28,90.28,0,0,0,218,129.28Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M136,100a12,12,0,1,1-12-12A12,12,0,0,1,136,100Zm96,29.48A104.29,104.29,0,0,1,130.1,232l-2.17,0a103.32,103.32,0,0,1-69.26-26A8,8,0,1,1,69.34,194a84.71,84.71,0,0,0,20.1,13.37L116,170.84c-22.78-9.83-47.47-5.65-61.4-3.29A31.84,31.84,0,0,1,23.3,154.72l-.3-.43-13.78-22a8,8,0,0,1,2.59-11.05L112,59.53V32a8,8,0,0,1,8-8h8A104,104,0,0,1,232,129.48Zm-16-.22A88,88,0,0,0,128,40V64a8,8,0,0,1-3.81,6.81L27.06,130.59l9.36,15A15.92,15.92,0,0,0,52,151.77c16-2.7,48.77-8.24,78.07,8.18A40.06,40.06,0,0,0,168,120a8,8,0,0,1,16,0,56.07,56.07,0,0,1-51.8,55.83l-27.11,37.28A90.89,90.89,0,0,0,129.78,216,88.29,88.29,0,0,0,216,129.26Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M144,104a16,16,0,1,1-16-16A16,16,0,0,1,144,104Zm92,25.53A108.3,108.3,0,0,1,130.18,236l-2.25,0A107.31,107.31,0,0,1,56,208.94a12,12,0,1,1,16-17.88,81.42,81.42,0,0,0,16.2,11.26l21.54-29.62c-20.4-7-41.91-3.33-54.43-1.21a35.79,35.79,0,0,1-35.25-14.43c-.16-.21-.31-.43-.45-.65l-13.78-22A12,12,0,0,1,9.43,118L108,53.51V32a12,12,0,0,1,12-12h8A108,108,0,0,1,236,129.53Zm-24-.33a84,84,0,0,0-80-85.11V60a12,12,0,0,1-5.43,10L32.41,131.61l7.31,11.68a12,12,0,0,0,11.58,4.54c16.23-2.75,49.4-8.36,79.64,8A36,36,0,0,0,164,120a12,12,0,0,1,24,0,60.09,60.09,0,0,1-53.64,59.66l-22.45,30.87a87.57,87.57,0,0,0,17.8,1.45A84.29,84.29,0,0,0,212,129.2Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M202.05,55A103.24,103.24,0,0,0,128,24h-8a8,8,0,0,0-8,8V59.53L11.81,121.19a8,8,0,0,0-2.59,11.05l13.78,22,.3.43a31.84,31.84,0,0,0,31.34,12.83c13.93-2.36,38.62-6.54,61.4,3.29l-26.6,36.57A84.71,84.71,0,0,1,69.34,194,8,8,0,1,0,58.67,206a103.32,103.32,0,0,0,69.26,26l2.17,0a104,104,0,0,0,72-177ZM124,112a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,129.37c-.72,51.48-42.57,93.59-94.05,94.61a98.08,98.08,0,0,1-37.81-6.66L128,168h0c-26.64-16-57.23-11.3-74.7-8.34A24,24,0,0,1,29.79,150L16,128,120,64V32h8A96,96,0,0,1,224,129.37Z" opacity="0.2"/><path d="M136,100a12,12,0,1,1-12-12A12,12,0,0,1,136,100Zm96,29.48A104.29,104.29,0,0,1,130.1,232l-2.17,0a103.32,103.32,0,0,1-69.26-26A8,8,0,1,1,69.34,194a84.71,84.71,0,0,0,20.1,13.37L116,170.84c-22.78-9.83-47.47-5.65-61.4-3.29A31.84,31.84,0,0,1,23.3,154.72l-.3-.43-13.78-22a8,8,0,0,1,2.59-11.05L112,59.53V32a8,8,0,0,1,8-8h8A104,104,0,0,1,232,129.48Zm-16-.22A88,88,0,0,0,128,40V64a8,8,0,0,1-3.81,6.81L27.06,130.59l9.36,15A15.92,15.92,0,0,0,52,151.77c16-2.7,48.77-8.24,78.07,8.18A40.06,40.06,0,0,0,168,120a8,8,0,0,1,16,0,56.07,56.07,0,0,1-51.8,55.83l-27.11,37.28A90.89,90.89,0,0,0,129.78,216,88.29,88.29,0,0,0,216,129.26Z"/>`,
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
      ${PhHorse.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhHorse };
