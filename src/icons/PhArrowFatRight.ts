/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-fat-right": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-fat-right": IconAttrs;
    }
  }
}

@customElement("ph-arrow-fat-right")
class PhArrowFatRight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M234.83,125.17l-96-96A4,4,0,0,0,132,32V76H48A12,12,0,0,0,36,88v80a12,12,0,0,0,12,12h84v44a4,4,0,0,0,2.47,3.7,4,4,0,0,0,4.36-.87l96-96A4,4,0,0,0,234.83,125.17ZM140,214.34V176a4,4,0,0,0-4-4H48a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h88a4,4,0,0,0,4-4V41.66L226.34,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H48A14,14,0,0,0,34,88v80a14,14,0,0,0,14,14h82v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h88a6,6,0,0,0,6-6V46.49L223.51,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68H48A20,20,0,0,0,28,88v80a20,20,0,0,0,20,20h76v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12H52V92h84a12,12,0,0,0,12-12V61l67,67Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,224V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88V32l96,96Z" opacity="0.2"/><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"/>`,
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
      ${PhArrowFatRight.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhArrowFatRight };
