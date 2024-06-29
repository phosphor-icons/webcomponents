/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-subtitles-slash": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-subtitles-slash": IconAttrs;
    }
  }
}

@customElement("ph-subtitles-slash")
class PhSubtitlesSlash extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M52,136a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H56A4,4,0,0,1,52,136Zm159,77.31a4,4,0,1,1-5.92,5.38L191.69,204H32a12,12,0,0,1-12-12V64A12,12,0,0,1,32,52H53.5L45,42.69A4,4,0,0,1,51,37.31ZM184.41,196l-21.82-24H56a4,4,0,0,1,0-8h99.32L133.5,140H104a4,4,0,0,1,0-8h22.23L60.78,60H32a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4ZM200,140a4,4,0,0,0,0-8H178.52a4,4,0,1,0,0,8Zm24-88H105.79a4,4,0,0,0,0,8H224a4,4,0,0,1,4,4V194.83a4,4,0,1,0,8,0V64A12,12,0,0,0,224,52Z"/>`,
    ],
    [
      "light",
      svg`<path d="M52.44,36A6,6,0,0,0,43.56,44L49,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H190.8l12.76,14a6,6,0,0,0,8.88-8.08ZM32,194a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H59.89l61.82,68H104a6,6,0,0,0,0,12h28.62l18.18,20H56a6,6,0,0,0,0,12H161.71l18.18,20Zm18-58a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H56A6,6,0,0,1,50,136ZM238,64V194.83a6,6,0,1,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H224A14,14,0,0,1,238,64Zm-59.48,78a6,6,0,1,1,0-12H200a6,6,0,0,1,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M48,128a12,12,0,0,1,12-12H76a12,12,0,0,1,0,24H60A12,12,0,0,1,48,128Zm168.88,79.93a12,12,0,1,1-17.76,16.14l-11-12.07H32a20,20,0,0,1-20-20V64A20,20,0,0,1,32,44h4.68a12,12,0,0,1,20.2-12.07ZM166.33,188l-10.91-12H60a12,12,0,0,1,0-24h73.6l-10.91-12H116a12,12,0,0,1-10.1-18.47L57.24,68H36V188ZM224,44H116.6a12,12,0,0,0,0,24H220V182.94a12,12,0,0,0,24,0V64A20,20,0,0,0,224,44Zm-28,96a12,12,0,0,0,0-24H182.06a12,12,0,0,0,0,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M53.92,34.62a8,8,0,0,0-11.48-.37,8.23,8.23,0,0,0-.14,11.38L44.46,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H189.92l12.16,13.38a8,8,0,0,0,11.33.51,8.31,8.31,0,0,0,.3-11.51ZM104,128h13.19l14.54,16H104.27A8.18,8.18,0,0,1,96,136.53,8,8,0,0,1,104,128Zm-48,0H72a8,8,0,0,1,8,8.53A8.18,8.18,0,0,1,71.73,144H56.27A8.18,8.18,0,0,1,48,136.53,8,8,0,0,1,56,128Zm96,48H56.27A8.18,8.18,0,0,1,48,168.53,8,8,0,0,1,56,160h90.28l11.9,13.09A8,8,0,0,1,152,176ZM240,64V192a16,16,0,0,1-5.19,11.78,4,4,0,0,1-5.7-.24L175,144h25a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47h-39.3L93.79,54.69a4,4,0,0,1,3-6.69H224A16,16,0,0,1,240,64Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,64V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z" opacity="0.2"/><path d="M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z"/>`,
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
      ${PhSubtitlesSlash.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhSubtitlesSlash };
