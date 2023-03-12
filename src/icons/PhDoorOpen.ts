/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-door-open")
export default class PhDoorOpen extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M232,220H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V220H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM196,40V220H172V40a11.8,11.8,0,0,0-.7-4H192A4,4,0,0,1,196,40ZM60,40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4V220H60Zm84,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z"/>`,
    ],
    [
      "light",
      svg`<path d="M232,218H206V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V218H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM194,40V218H174V40a14.71,14.71,0,0,0-.16-2H192A2,2,0,0,1,194,40ZM62,40a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2V218H62Zm82,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,40V216H176V40ZM64,40h96V216H64Zm80,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232,212H212V40a20,20,0,0,0-20-20H64A20,20,0,0,0,44,40V212H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm-44,0H172V44h16ZM68,44h80V212H68Zm68,88a12,12,0,1,1-12-12A12,12,0,0,1,136,132Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-64,0H64V40H168Zm-40-84a12,12,0,1,1,12,12A12,12,0,0,1,128,132Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,40V224H168V40a8,8,0,0,0-8-8h32A8,8,0,0,1,200,40Z" opacity="0.2"/><path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,40V216H176V40ZM64,40h96V216H64Zm80,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

  @property({ type: Boolean })
  mirrored: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${PhDoorOpen.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-door-open": PhDoorOpen;
  }
}