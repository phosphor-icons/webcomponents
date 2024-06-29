/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-pentagon": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-pentagon": IconAttrs;
    }
  }
}

@customElement("ph-pentagon")
class PhPentagon extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M223.14,90.74,135.19,22.4l-.09-.07a12,12,0,0,0-14.19,0l-.09.07L32.87,90.74A12,12,0,0,0,28.57,104l32,107.7A12,12,0,0,0,72,220H184a12,12,0,0,0,11.44-8.41l32-107.53A12,12,0,0,0,223.14,90.74Zm-3.36,11-32,107.54A4,4,0,0,1,184,212H72a4,4,0,0,1-3.79-2.69l-32-107.7a4,4,0,0,1,1.44-4.45l.09-.07,87.94-68.33a4,4,0,0,1,4.65,0l87.94,68.33.09.07A4,4,0,0,1,219.78,101.69Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224.35,89.15,136.41,20.82l-.13-.1a14,14,0,0,0-16.56,0l-.13.1L31.65,89.15a14,14,0,0,0-5,15.45l32,107.56c0,.05,0,.09,0,.13A14,14,0,0,0,72,222H184a14,14,0,0,0,13.33-9.71s0-.08,0-.13l32-107.56A14,14,0,0,0,224.35,89.15ZM217.9,101s0,.08,0,.12l-32,107.54A2,2,0,0,1,184,210H72a2,2,0,0,1-1.89-1.34l-32-107.54s0-.08,0-.12a2,2,0,0,1,.72-2.23l.13-.1,87.91-68.3a2,2,0,0,1,2.28,0l87.91,68.3.13.1A2,2,0,0,1,217.9,101Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M228,84.38l-87.9-68.29-.26-.2a19.92,19.92,0,0,0-23.66,0l-.26.2L28,84.38a20,20,0,0,0-7.09,22l32,107.51.08.26A19.93,19.93,0,0,0,72,228H184a19.93,19.93,0,0,0,19-13.87l.08-.26,32-107.51A20,20,0,0,0,228,84.38ZM181,204H75L44.62,101.87,128,37.09l83.38,64.78Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M231.26,105.19l-32,107.54-.06.17A15.94,15.94,0,0,1,184,224H72A15.94,15.94,0,0,1,56.8,212.9l-.06-.17-32-107.54a16,16,0,0,1,5.7-17.63l87.92-68.31.18-.14a15.93,15.93,0,0,1,18.92,0l.18.14,87.92,68.31A16,16,0,0,1,231.26,105.19Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M223.61,102.83l-32,107.62A8,8,0,0,1,184,216H72a8,8,0,0,1-7.62-5.55l-32-107.62a8,8,0,0,1,2.88-8.9l88-68.38a8,8,0,0,1,9.46,0l88,68.38A8,8,0,0,1,223.61,102.83Z" opacity="0.2"/><path d="M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z"/>`,
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
      ${PhPentagon.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPentagon };
