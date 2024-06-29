/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-city": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-city": IconAttrs;
    }
  }
}

@customElement("ph-city")
class PhCity extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M240,212H228V88a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4v44H100V40a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM164,92h56V212H164Zm-8,48v72H100V140ZM36,44H92V212H36ZM68,72V88a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm0,48v16a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm0,48v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm56,16V168a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm64,0V168a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm0-48V120a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M240,210H230V88a6,6,0,0,0-6-6H160a6,6,0,0,0-6,6v42H102V40a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM166,94h52V210H166Zm-12,48v68H102V142ZM38,46H90V210H38ZM70,72V88a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm52,16V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm64,0V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm0-48V120a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M240,204h-4V88a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12v36H116V40a12,12,0,0,0-12-12H32A12,12,0,0,0,20,40V204H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM164,100h48V204H164Zm-24,48v56H116V148ZM44,52H92V204H44ZM80,76v8a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm0,48v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm0,48v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm96,8v-8a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Zm0-48v-8a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,184a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm64,96a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm64,0a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M32,40H96V216H32ZM160,88V216h64V88Z" opacity="0.2"/><path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z"/>`,
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
      ${PhCity.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhCity };
