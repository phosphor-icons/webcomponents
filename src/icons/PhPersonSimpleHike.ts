/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-person-simple-hike": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-person-simple-hike": IconAttrs;
    }
  }
}

@customElement("ph-person-simple-hike")
class PhPersonSimpleHike extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M152,76a28,28,0,1,0-28-28A28,28,0,0,0,152,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,152,28Zm44,116v88a4,4,0,0,1-8,0V147.92c-26.68-1.13-34.8-13.66-42.67-25.79-3.53-5.46-6.87-10.61-12-15-.66-.56-1.33-1.1-2-1.6L114.5,144.29l39.83,28.45A4,4,0,0,1,156,176v56a4,4,0,0,1-8,0V178.06L111.23,151.8,75.67,233.59A4,4,0,0,1,72,236a4.08,4.08,0,0,1-1.59-.33,4,4,0,0,1-2.08-5.27L125.86,98.09a4,4,0,0,1,5.5-2,37.24,37.24,0,0,1,7.26,4.94c5.94,5.15,9.74,11,13.42,16.71C159.77,129.7,166.45,140,192,140A4,4,0,0,1,196,144ZM72,148a4,4,0,0,0,3.68-2.43l24-56a4,4,0,0,0-2.1-5.25l-28-12a4,4,0,0,0-5.26,2.1l-24,56a4,4,0,0,0,2.11,5.26l28,12A3.94,3.94,0,0,0,72,148ZM49.25,129.9,70.1,81.25,90.75,90.1,69.9,138.75Z"/>`,
    ],
    [
      "light",
      svg`<path d="M152,78a30,30,0,1,0-30-30A30,30,0,0,0,152,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,30Zm46,114v88a6,6,0,0,1-12,0V149.81c-26.23-1.73-34.76-14.89-42.35-26.59-3.43-5.3-6.68-10.31-11.5-14.52L117,143.61l38.52,27.51A6,6,0,0,1,158,176v56a6,6,0,0,1-12,0V179.09l-33.92-24.23L77.5,234.39a6,6,0,0,1-11-4.78L124,97.29a6,6,0,0,1,8.25-2.94,38.89,38.89,0,0,1,7.65,5.21c6.15,5.34,10,11.33,13.79,17.13C161.44,128.59,167.54,138,192,138A6,6,0,0,1,198,144ZM72,150a6,6,0,0,0,5.52-3.64l24-56a6,6,0,0,0-3.16-7.88l-28-12a6,6,0,0,0-7.87,3.16l-24,56a6,6,0,0,0,3.15,7.87l28,12A6,6,0,0,0,72,150ZM51.88,128.85l19.27-45,17,7.27-19.27,45Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm48,112v88a8,8,0,0,1-16,0V151.66c-25.75-2.25-34.35-15.52-42-27.36-2.85-4.39-5.56-8.57-9.13-12.19l-13.4,30.81,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.14-10.52L122.19,96.5a8,8,0,0,1,11-3.92,40.92,40.92,0,0,1,8,5.47c6.37,5.52,10.51,11.91,14.16,17.55,7.68,11.84,13.22,20.4,36.6,20.4A8,8,0,0,1,200,144ZM72,152a8,8,0,0,0,7.35-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152ZM54.51,127.8,72.2,86.5l13.3,5.7L67.8,133.49Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M152,84a36,36,0,1,0-36-36A36,36,0,0,0,152,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,36Zm52,108v88a12,12,0,0,1-24,0V155.24c-24.92-3.37-33.94-17.29-41.38-28.76-1.55-2.39-3.05-4.71-4.67-6.88l-9.54,22L159,166.23a12,12,0,0,1,5,9.77v56a12,12,0,0,1-24,0V182.17l-25.37-18.12L83,236.78a12,12,0,1,1-22-9.57L118.52,94.9A12,12,0,0,1,135,89a45.53,45.53,0,0,1,8.84,6c6.78,5.89,11.09,12.53,14.89,18.39C166.27,125,170.8,132,192,132A12,12,0,0,1,204,144ZM64.6,153.88,39.27,143A12,12,0,0,1,33,127.27l24-56A12,12,0,0,1,72.73,65L98.34,76A12,12,0,1,1,88.89,98L74.3,91.76,59.76,125.7l14.29,6.12a12,12,0,1,1-9.45,22.06Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M120,48a32,32,0,1,1,32,32A32,32,0,0,1,120,48Zm72,88c-23.37,0-28.92-8.56-36.6-20.4-3.65-5.64-7.79-12-14.16-17.55a40.92,40.92,0,0,0-8-5.47,8,8,0,0,0-11,3.92L64.66,228.81a8,8,0,0,0,4.15,10.52A7.84,7.84,0,0,0,72,240a8,8,0,0,0,7.34-4.81l33.59-77.27L144,180.12V232a8,8,0,0,0,16,0V176a8,8,0,0,0-3.35-6.51l-37.2-26.57,13.4-30.81c3.57,3.62,6.28,7.8,9.13,12.19,7.67,11.84,16.27,25.11,42,27.36V232a8,8,0,0,0,16,0V144A8,8,0,0,0,192,136ZM72,152a8,8,0,0,0,7.36-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M176,48a24,24,0,1,1-24-24A24,24,0,0,1,176,48ZM44,132l28,12L96,88,68,76Z" opacity="0.2"/><path d="M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm48,112v88a8,8,0,0,1-16,0V151.66c-25.75-2.25-34.35-15.52-42-27.36-2.85-4.39-5.56-8.57-9.13-12.19l-13.4,30.81,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.15-10.52L122.19,96.5a8,8,0,0,1,11-3.92,40.92,40.92,0,0,1,8,5.47c6.37,5.52,10.51,11.91,14.16,17.55,7.68,11.84,13.23,20.4,36.6,20.4A8,8,0,0,1,200,144ZM72,152a8,8,0,0,0,7.36-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152ZM54.51,127.8,72.2,86.5l13.3,5.7L67.8,133.49Z"/>`,
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
      ${PhPersonSimpleHike.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPersonSimpleHike };
