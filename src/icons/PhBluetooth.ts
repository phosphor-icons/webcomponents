/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-bluetooth")
export default class PhBluetooth extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M186.4,172.8,126.67,128,186.4,83.2a4,4,0,0,0,0-6.4l-64-48A4,4,0,0,0,116,32v88L58.4,76.8a4,4,0,0,0-4.8,6.4L113.33,128,53.6,172.8a4,4,0,0,0,4.8,6.4L116,136v88a4,4,0,0,0,6.4,3.2l64-48a4,4,0,0,0,0-6.4ZM124,40l53.33,40L124,120Zm0,176V136l53.33,40Z"/>`,
    ],
    [
      "light",
      svg`<path d="M187.6,171.2,130,128l57.6-43.2a6,6,0,0,0,0-9.6l-64-48A6,6,0,0,0,114,32v84L59.6,75.2a6,6,0,0,0-7.2,9.6L110,128,52.4,171.2a6,6,0,1,0,7.2,9.6L114,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM126,44l48,36-48,36Zm0,168V140l48,36Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M188.8,169.6,133.33,128,188.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.67,128,51.2,169.6a8,8,0,1,0,9.6,12.8L112,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM128,48l42.67,32L128,112Zm0,160V144l42.67,32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M191.2,166.4,140,128l51.2-38.4a12,12,0,0,0,0-19.2l-64-48A12,12,0,0,0,108,32v72L63.2,70.4A12,12,0,0,0,48.8,89.6L100,128,48.8,166.4a12,12,0,1,0,14.4,19.2L108,152v72a12,12,0,0,0,19.2,9.6l64-48a12,12,0,0,0,0-19.2ZM132,56l32,24-32,24Zm0,144V152l32,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M192,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,120,232a8,8,0,0,1-8-8V144L60.8,182.4a8,8,0,0,1-9.6-12.8L106.67,128,51.2,86.4a8,8,0,0,1,9.6-12.8L112,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L133.33,128l55.47,41.6A8,8,0,0,1,192,176Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M184,80l-64,48V32ZM120,224l64-48-64-48Z" opacity="0.2"/><path d="M188.8,169.6,133.33,128,188.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.67,128,51.2,169.6a8,8,0,1,0,9.6,12.8L112,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM128,48l42.67,32L128,112Zm0,160V144l42.67,32Z"/>`,
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
      ${PhBluetooth.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-bluetooth": PhBluetooth;
  }
}
