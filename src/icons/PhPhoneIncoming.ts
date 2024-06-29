/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-phone-incoming": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-phone-incoming": IconAttrs;
    }
  }
}

@customElement("ph-phone-incoming")
class PhPhoneIncoming extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212.78,170.13,165.56,149A12,12,0,0,0,154.18,150a3.37,3.37,0,0,0-.38.28L129,171.42a3.9,3.9,0,0,1-3.7.21c-16.24-7.84-33-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L85.9,43.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,28,88c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,212.78,170.13ZM212,181.58A44.23,44.23,0,0,1,168,220C95.22,220,36,160.78,36,88A44.23,44.23,0,0,1,74.42,44a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49L99.68,93.63a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,212,181.58ZM148,104V64a4,4,0,0,1,8,0V94.34l41.17-41.17a4,4,0,1,1,5.66,5.66L161.66,100H192a4,4,0,0,1,0,8H152A4,4,0,0,1,148,104Z"/>`,
    ],
    [
      "light",
      svg`<path d="M213.59,168.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a5.06,5.06,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L87.73,42.49a14,14,0,0,0-14.56-8.38A54.25,54.25,0,0,0,26,88c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,213.59,168.3ZM168,218C96.32,218,38,159.68,38,88A42.23,42.23,0,0,1,74.67,46h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L76.73,121.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,168,218ZM146,104V64a6,6,0,0,1,12,0V89.51l37.76-37.75a6,6,0,0,1,8.48,8.48L166.48,98H192a6,6,0,0,1,0,12H152A6,6,0,0,1,146,104Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M144,104V64a8,8,0,0,1,16,0V84.69l34.34-34.35a8,8,0,0,1,11.32,11.32L171.32,96H192a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm79.88,79.08A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.24,56.24,0,0,1,72.92,32.13a16,16,0,0,1,16.62,9.51l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a6.84,6.84,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,162.8l-47.09-21.1-.18-.08a19.89,19.89,0,0,0-19,1.74,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L93.2,40A20.06,20.06,0,0,0,72.42,28.15,60.27,60.27,0,0,0,20,88c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,216,162.8ZM168,212A124.15,124.15,0,0,1,44,88,36.29,36.29,0,0,1,72.48,52.46l18.82,42L72.14,117.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,70,138.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,138,184.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,168,212ZM140,104V64a12,12,0,0,1,24,0V75l27.52-27.52a12,12,0,0,1,17,17L181,92h11a12,12,0,0,1,0,24H152A12,12,0,0,1,140,104Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M223.88,183.08A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08ZM152,112h40a8,8,0,0,0,0-16H171.32l34.34-34.34a8,8,0,0,0-11.32-11.32L160,84.69V64a8,8,0,0,0-16,0v40A8,8,0,0,0,152,112Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M215.94,182.08A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,215.94,182.08Z" opacity="0.2"/><path d="M144,104V64a8,8,0,0,1,16,0V84.69l34.34-34.35a8,8,0,0,1,11.32,11.32L171.32,96H192a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm79.88,79.08A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.24,56.24,0,0,1,72.92,32.13a16,16,0,0,1,16.62,9.51l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a6.84,6.84,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"/>`,
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
      ${PhPhoneIncoming.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPhoneIncoming };
