/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-dev-to-logo": PhDevToLogo;
  }
}

@customElement("ph-dev-to-logo")
class PhDevToLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M232,60H24A12,12,0,0,0,12,72V184a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V72A12,12,0,0,0,232,60Zm4,124a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4ZM124,100v24h12a4,4,0,0,1,0,8H124v24h20a4,4,0,0,1,0,8H120a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4h24a4,4,0,0,1,0,8Zm87.85-2.92-18,64a4,4,0,0,1-7.7,0l-18-64a4,4,0,1,1,7.7-2.16L190,145.23l14.15-50.31a4,4,0,0,1,7.7,2.16ZM64,92H56a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h8a28,28,0,0,0,28-28V120A28,28,0,0,0,64,92Zm20,44a20,20,0,0,1-20,20H60V100h4a20,20,0,0,1,20,20Z"/>`,
    ],
    [
      "light",
      svg`<path d="M232,58H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V72A14,14,0,0,0,232,58Zm2,126a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2ZM126,102v20h10a6,6,0,0,1,0,12H126v20h18a6,6,0,0,1,0,12H120a6,6,0,0,1-6-6V96a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12Zm87.78-4.38-18,64a6,6,0,0,1-11.56,0l-18-64a6,6,0,0,1,11.56-3.24L190,137.84l12.22-43.46a6,6,0,1,1,11.56,3.24ZM64,90H56a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h8a30,30,0,0,0,30-30V120A30,30,0,0,0,64,90Zm18,46a18,18,0,0,1-18,18H62V102h2a18,18,0,0,1,18,18Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,56H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V72A16,16,0,0,0,232,56Zm0,128H24V72H232V184ZM128,104v16h8a8,8,0,0,1,0,16h-8v16h16a8,8,0,0,1,0,16H120a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16Zm87.7-5.83-18,64a8,8,0,0,1-15.4,0l-18-64a8,8,0,0,1,15.4-4.34L190,130.45l10.3-36.62a8,8,0,1,1,15.4,4.34ZM64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32V120A32,32,0,0,0,64,88Zm16,48a16,16,0,0,1-16,16V104a16,16,0,0,1,16,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232,52H24A20,20,0,0,0,4,72V184a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V72A20,20,0,0,0,232,52Zm-4,128H28V76H228ZM108,156V100a12,12,0,0,1,12-12h20a12,12,0,0,1,0,24h-8v4a12,12,0,0,1,0,24v4h8a12,12,0,0,1,0,24H120A12,12,0,0,1,108,156Zm52.46-52.7a12,12,0,1,1,23.08-6.6L188,112.32l4.46-15.62a12,12,0,0,1,23.08,6.6l-16,56a12,12,0,0,1-23.08,0ZM52,168H64a36,36,0,0,0,36-36v-8A36,36,0,0,0,64,88H52a12,12,0,0,0-12,12v56A12,12,0,0,0,52,168Zm12-56a12,12,0,0,1,12,12v8a12,12,0,0,1-12,12Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M80,120v16a16,16,0,0,1-16,16V104A16,16,0,0,1,80,120ZM248,72V184a16,16,0,0,1-16,16H24A16,16,0,0,1,8,184V72A16,16,0,0,1,24,56H232A16,16,0,0,1,248,72ZM96,120A32,32,0,0,0,64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32Zm32,0V104h16a8,8,0,0,0,0-16H120a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h24a8,8,0,0,0,0-16H128V136h8a8,8,0,0,0,0-16Zm82.17-31.7a8,8,0,0,0-9.87,5.53L190,130.45,179.7,93.83a8,8,0,0,0-15.4,4.34l18,64a8,8,0,0,0,15.4,0l18-64A8,8,0,0,0,210.17,88.3Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,72V184a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z" opacity="0.2"/><path d="M232,56H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V72A16,16,0,0,0,232,56Zm0,128H24V72H232V184ZM128,104v16h8a8,8,0,0,1,0,16h-8v16h16a8,8,0,0,1,0,16H120a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16Zm87.7-5.83-18,64a8,8,0,0,1-15.4,0l-18-64a8,8,0,0,1,15.4-4.34L190,130.45l10.3-36.62a8,8,0,1,1,15.4,4.34ZM64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32V120A32,32,0,0,0,64,88Zm16,48a16,16,0,0,1-16,16V104a16,16,0,0,1,16,16Z"/>`,
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
      ${PhDevToLogo.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhDevToLogo };
