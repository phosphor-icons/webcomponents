/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-app-store-logo": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-app-store-logo": IconAttrs;
    }
  }
}

@customElement("ph-app-store-logo")
class PhAppStoreLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M60.9,194l-9.46,16A4,4,0,1,1,44.56,206L54,190A4,4,0,0,1,60.9,194ZM232,156H181.92L150,102a4,4,0,1,0-6.89,4.07L204.56,210a4,4,0,1,0,6.88-4.07l-24.79-42H232a4,4,0,0,0,0-8Zm-89.53,0H83.37L155.44,34A4,4,0,1,0,148.56,30L128,64.75,107.44,30A4,4,0,1,0,100.56,34l22.79,38.58L74.08,156H24a4,4,0,0,0,0,8H142.47a4,4,0,1,0,0-8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M62.62,195.05l-9.45,16A6,6,0,0,1,42.83,205l9.46-16a6,6,0,1,1,10.33,6.1ZM232,154H183.06l-31.31-53a6,6,0,1,0-10.33,6.11l61.41,103.93a6,6,0,0,0,10.34-6.1l-23-38.95H232a6,6,0,0,0,0-12Zm-89.53,0H86.88L157.17,35.05A6,6,0,0,0,146.83,29L128,60.82,109.17,29a6,6,0,0,0-10.34,6.1L121,72.62,72.94,154H24a6,6,0,0,0,0,12H142.47a6,6,0,1,0,0-12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M64.34,196.07l-9.45,16a8,8,0,1,1-13.78-8.14l9.46-16a8,8,0,1,1,13.77,8.14ZM232,152H184.2l-30.73-52a8,8,0,1,0-13.77,8.14l61.41,103.93a8,8,0,0,0,13.78-8.14L193.66,168H232a8,8,0,0,0,0-16Zm-89.53,0H90.38L158.89,36.07a8,8,0,0,0-13.78-8.14L128,56.89l-17.11-29a8,8,0,1,0-13.78,8.14l21.6,36.55L71.8,152H24a8,8,0,0,0,0,16H142.47a8,8,0,1,0,0-16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,160a12,12,0,0,1-12,12H200.67l17.66,29.89a12,12,0,1,1-20.66,12.21L140.9,118a12,12,0,0,1,20.66-12.2L186.48,148H232A12,12,0,0,1,244,160ZM133.15,148H97.39L162.33,38.11A12,12,0,1,0,141.67,25.9L128,49,114.33,25.9A12,12,0,1,0,93.67,38.11l20.39,34.51L69.52,148H24a12,12,0,0,0,0,24H133.15a12,12,0,0,0,0-24ZM58.83,189.67a12,12,0,0,0-16.43,4.22l-4.73,8A12,12,0,1,0,58.33,214.1l4.73-8A12,12,0,0,0,58.83,189.67Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM83.66,180.12l-4.8,8a8,8,0,1,1-13.72-8.24l4.8-8a8,8,0,0,1,13.72,8.24ZM128,152H56a8,8,0,0,1,0-16H91.47l27.2-45.33L105.14,68.12a8,8,0,0,1,13.72-8.24L128,75.12l9.14-15.24a8,8,0,0,1,13.72,8.24L110.13,136H128a8,8,0,0,1,0,16Zm72,0H174.13l16.73,27.88a8,8,0,0,1-13.72,8.24l-38.4-64a8,8,0,0,1,13.72-8.24L164.53,136H200a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M179.64,160H76.36L128,72.62Z" opacity="0.2"/><path d="M64.34,196.07l-9.45,16a8,8,0,1,1-13.78-8.14l9.46-16a8,8,0,1,1,13.77,8.14ZM232,152H184.2l-30.73-52a8,8,0,1,0-13.77,8.14l61.41,103.93a8,8,0,0,0,13.78-8.14L193.66,168H232a8,8,0,0,0,0-16Zm-89.53,0H90.38L158.89,36.07a8,8,0,0,0-13.78-8.14L128,56.89l-17.11-29a8,8,0,1,0-13.78,8.14l21.6,36.55L71.8,152H24a8,8,0,0,0,0,16H142.47a8,8,0,1,0,0-16Z"/>`,
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
      ${PhAppStoreLogo.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhAppStoreLogo };
