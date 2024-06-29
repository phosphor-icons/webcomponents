/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-chat-centered-slash": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-chat-centered-slash": IconAttrs;
    }
  }
}

@customElement("ph-chat-centered-slash")
class PhChatCenteredSlash extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M51,37.31A4,4,0,0,0,45,42.69L46.23,44H40A12,12,0,0,0,28,56V184a12,12,0,0,0,12,12h62.75L117.58,222a12,12,0,0,0,20.84,0L153.25,196h31.16L205,218.69a4,4,0,1,0,5.92-5.38ZM150.93,188a4,4,0,0,0-3.47,2l-16,28a4,4,0,0,1-6.94,0l-16-28a4,4,0,0,0-3.47-2H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H53.5L177.14,188ZM228,56V186a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H98.52a4,4,0,1,1,0-8H216A12,12,0,0,1,228,56Z"/>`,
    ],
    [
      "light",
      svg`<path d="M52.44,36a6,6,0,0,0-10.1,6H40A14,14,0,0,0,26,56V184a14,14,0,0,0,14,14h61.59L115.84,223a14,14,0,0,0,24.32,0L154.41,198h29.12l20,22a6,6,0,0,0,8.88-8.08Zm98.49,150a6,6,0,0,0-5.21,3l-16,28a2,2,0,0,1-3.48,0l-16-28a6,6,0,0,0-5.21-3H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H52.62l120,132ZM230,56V186a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H98.52a6,6,0,1,1,0-12H216A14,14,0,0,1,230,56Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Zm97,149.38a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H51.73L168.1,184ZM232,56V186a8,8,0,0,1-16,0V56H98.52a8,8,0,1,1,0-16H216A16,16,0,0,1,232,56Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M56.88,31.93a12,12,0,0,0-20.29,4.38A20,20,0,0,0,20,56V184a20,20,0,0,0,20,20H98.11l12.52,21.92a20,20,0,0,0,34.73,0L157.89,204h23l18.25,20.07a12,12,0,0,0,17.76-16.14ZM150.93,180a12,12,0,0,0-10.42,6.05L128,207.94l-12.51-21.89A12,12,0,0,0,105.07,180H44V60h6l109.1,120ZM236,56V174.14a12,12,0,0,1-24,0V60H109.33a12,12,0,1,1,0-24H216A20,20,0,0,1,236,56Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,56V184a15.93,15.93,0,0,1-4.82,11.42,4,4,0,0,1-5.68-.25L86.52,46.69a4,4,0,0,1,3-6.69H216A16,16,0,0,1,232,56ZM53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,56V184a8,8,0,0,1-8,8H150.93l-16,28a8,8,0,0,1-13.9,0l-16-28H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Zm97,149.38a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H51.73L168.1,184ZM232,56V186a8,8,0,0,1-16,0V56H98.52a8,8,0,1,1,0-16H216A16,16,0,0,1,232,56Z"/>`,
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
      ${PhChatCenteredSlash.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhChatCenteredSlash };
