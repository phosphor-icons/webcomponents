/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-television": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-television": IconAttrs;
    }
  }
}

@customElement("ph-television")
class PhTelevision extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,68H137.66l41.17-41.17a4,4,0,1,0-5.66-5.66L128,66.34,82.83,21.17a4,4,0,0,0-5.66,5.66L118.34,68H40A12,12,0,0,0,28,80V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM36,200V80a4,4,0,0,1,4-4H148V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H156V76h60a4,4,0,0,1,4,4Zm-24-84a8,8,0,1,1-8-8A8,8,0,0,1,196,116Zm0,48a8,8,0,1,1-8-8A8,8,0,0,1,196,164Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,66H142.48l37.76-37.76a6,6,0,0,0-8.48-8.48L128,63.51,84.24,19.76a6,6,0,1,0-8.48,8.48L113.52,66H40A14,14,0,0,0,26,80V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM38,200V80a2,2,0,0,1,2-2H146V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H158V78h58a2,2,0,0,1,2,2Zm-20-84a10,10,0,1,1-10-10A10,10,0,0,1,198,116Zm0,48a10,10,0,1,1-10-10A10,10,0,0,1,198,164Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM40,80H144V200H40ZM216,200H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,60H157l27.52-27.52a12,12,0,0,0-17-17L128,55,88.49,15.51a12,12,0,0,0-17,17L99,60H40A20,20,0,0,0,20,80V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM44,84h84V196H44ZM212,196H152V84h60Zm-44-80a16,16,0,1,1,16,16A16,16,0,0,1,168,116Zm32,48a16,16,0,1,1-16-16A16,16,0,0,1,200,164Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M152,72V208H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8Z" opacity="0.2"/><path d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM40,80H144V200H40ZM216,200H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"/>`,
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
      ${PhTelevision.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTelevision };
