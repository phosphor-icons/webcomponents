/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-trolley": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-trolley": IconAttrs;
    }
  }
}

@customElement("ph-trolley")
class PhTrolley extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M84,224a12,12,0,1,1-12-12A12,12,0,0,1,84,224Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,216,212Zm24-32H52V75.31a12,12,0,0,0-3.51-8.48L26.83,45.17a4,4,0,0,0-5.66,5.66L42.83,72.48A4,4,0,0,1,44,75.31V180H32a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M86,224a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm130-14a14,14,0,1,0,14,14A14,14,0,0,0,216,210Zm24-32H54V75.31a13.94,13.94,0,0,0-4.1-9.9L28.24,43.76a6,6,0,1,0-8.48,8.48L41.41,73.9A2,2,0,0,1,42,75.31V178H32a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M92,224a20,20,0,1,1-20-20A20,20,0,0,1,92,224Zm124-20a20,20,0,1,0,20,20A20,20,0,0,0,216,204Zm24-36H60V75.31a19.86,19.86,0,0,0-5.86-14.14L32.49,39.51a12,12,0,0,0-17,17L36,77v91H32a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM88,160H216a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H88A16,16,0,0,0,72,80v64A16,16,0,0,0,88,160Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,88v96H48V72H224A16,16,0,0,1,240,88Z" opacity="0.2"/><path d="M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Z"/>`,
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
      ${PhTrolley.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTrolley };
