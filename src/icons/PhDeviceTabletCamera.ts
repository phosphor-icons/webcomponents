/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-device-tablet-camera")
export default class PhDeviceTabletCamera extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M192,28H64A20,20,0,0,0,44,48V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Zm12,180a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V48A12,12,0,0,1,64,36H192a12,12,0,0,1,12,12ZM136,68a8,8,0,1,1-8-8A8,8,0,0,1,136,68Z"/>`,
    ],
    [
      "light",
      svg`<path d="M192,26H64A22,22,0,0,0,42,48V208a22,22,0,0,0,22,22H192a22,22,0,0,0,22-22V48A22,22,0,0,0,192,26Zm10,182a10,10,0,0,1-10,10H64a10,10,0,0,1-10-10V48A10,10,0,0,1,64,38H192a10,10,0,0,1,10,10ZM138,68a10,10,0,1,1-10-10A10,10,0,0,1,138,68Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24Zm8,184a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8ZM140,68a12,12,0,1,1-12-12A12,12,0,0,1,140,68Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M192,20H64A28,28,0,0,0,36,48V208a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V48A28,28,0,0,0,192,20Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM144,76a16,16,0,1,1-16-16A16,16,0,0,1,144,76Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32H192A16,16,0,0,1,208,48Z" opacity="0.2"/><path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24Zm8,184a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8ZM140,68a12,12,0,1,1-12-12A12,12,0,0,1,140,68Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "currentColor";

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
      ${PhDeviceTabletCamera.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-device-tablet-camera": PhDeviceTabletCamera;
  }
}
