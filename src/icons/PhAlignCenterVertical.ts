/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-align-center-vertical": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-align-center-vertical": IconAttrs;
    }
  }
}

@customElement("ph-align-center-vertical")
class PhAlignCenterVertical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M224,124H204V72a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12v52H116V48a12,12,0,0,0-12-12H64A12,12,0,0,0,52,48v76H32a4,4,0,0,0,0,8H52v76a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V132h24v52a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V132h20a4,4,0,0,0,0-8ZM108,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Zm88-24a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224,122H206V72a14,14,0,0,0-14-14H152a14,14,0,0,0-14,14v50H118V48a14,14,0,0,0-14-14H64A14,14,0,0,0,50,48v74H32a6,6,0,0,0,0,12H50v74a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V134h20v50a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V134h18a6,6,0,0,0,0-12ZM106,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Zm88-24a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,120H208V72a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v48H120V48a16,16,0,0,0-16-16H64A16,16,0,0,0,48,48v72H32a8,8,0,0,0,0,16H48v72a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V136h16v48a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM104,208H64V48h40Zm88-24H152V72h40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M224,116h-8V72a20,20,0,0,0-20-20H156a20,20,0,0,0-20,20v44H120V48a20,20,0,0,0-20-20H60A20,20,0,0,0,40,48v68H32a12,12,0,0,0,0,24h8v68a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V140h16v44a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V140h8a12,12,0,0,0,0-24ZM96,204H64V52H96Zm96-24H160V76h32Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,128a8,8,0,0,1-8,8H208v48a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V136H120v72a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V136H32a8,8,0,0,1,0-16H48V48A16,16,0,0,1,64,32h40a16,16,0,0,1,16,16v72h16V72a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v48h16A8,8,0,0,1,232,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,72V184a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h40A8,8,0,0,1,200,72ZM104,40H64a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V48A8,8,0,0,0,104,40Z" opacity="0.2"/><path d="M224,120H208V72a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v48H120V48a16,16,0,0,0-16-16H64A16,16,0,0,0,48,48v72H32a8,8,0,0,0,0,16H48v72a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V136h16v48a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM104,208H64V48h40Zm88-24H152V72h40Z"/>`,
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
      ${PhAlignCenterVertical.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhAlignCenterVertical };
