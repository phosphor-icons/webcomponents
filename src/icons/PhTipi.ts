/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-tipi": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-tipi": IconAttrs;
    }
  }
}

@customElement("ph-tipi")
class PhTipi extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.37,213.84,132.75,53.5l22.62-35.34a4,4,0,1,0-6.74-4.32L128,46.08,107.37,13.84a4,4,0,0,0-6.74,4.32L123.25,53.5,20.63,213.84A4,4,0,0,0,24,220H232a4,4,0,0,0,3.37-6.16ZM79,212l49-76.58L177,212Zm107.52,0-55.14-86.16a4,4,0,0,0-6.74,0L69.49,212H31.31L128,60.92,224.69,212Z"/>`,
    ],
    [
      "light",
      svg`<path d="M237.05,212.77,135.12,53.5l21.93-34.26A6,6,0,1,0,147,12.77L128,42.37l-19-29.6A6,6,0,1,0,99,19.24L120.88,53.5,19,212.77A6,6,0,0,0,24,222H232a6,6,0,0,0,5.05-9.23ZM82.64,210,128,139.13,173.36,210Zm105,0-54.55-85.23a6,6,0,0,0-10.1,0L68.4,210H35L128,64.63,221,210Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31ZM86.3,208,128,142.84,169.7,208Zm102.4,0-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M242.11,209.53l-99.86-156,19.86-31A12,12,0,1,0,141.89,9.53L128,31.24,114.11,9.53A12,12,0,0,0,93.89,22.47l19.86,31-99.86,156A12,12,0,0,0,24,228H232a12,12,0,0,0,10.11-18.47ZM96.17,204,128,154.26,159.83,204Zm92.16,0-50.22-78.47a12,12,0,0,0-20.22,0L67.67,204H45.93L128,75.76,210.07,204Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31Zm-50-3.69-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M184.32,216H71.68L128,128Z" opacity="0.2"/><path d="M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31ZM86.3,208,128,142.84,169.7,208Zm102.4,0-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z"/>`,
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
      ${PhTipi.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTipi };
