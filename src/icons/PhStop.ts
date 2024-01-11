/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-stop")
export default class PhStop extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M200.73,44H55.27A11.29,11.29,0,0,0,44,55.27V200.73A11.29,11.29,0,0,0,55.27,212H200.73A11.29,11.29,0,0,0,212,200.73V55.27A11.29,11.29,0,0,0,200.73,44ZM204,200.73a3.28,3.28,0,0,1-3.27,3.27H55.27A3.28,3.28,0,0,1,52,200.73V55.27A3.28,3.28,0,0,1,55.27,52H200.73A3.28,3.28,0,0,1,204,55.27Z"/>`,
    ],
    [
      "light",
      svg`<path d="M200.73,42H55.27A13.28,13.28,0,0,0,42,55.27V200.73A13.28,13.28,0,0,0,55.27,214H200.73A13.28,13.28,0,0,0,214,200.73V55.27A13.28,13.28,0,0,0,200.73,42ZM202,200.73a1.27,1.27,0,0,1-1.27,1.27H55.27A1.27,1.27,0,0,1,54,200.73V55.27A1.27,1.27,0,0,1,55.27,54H200.73A1.27,1.27,0,0,1,202,55.27Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M200.73,36H55.27A19.3,19.3,0,0,0,36,55.27V200.73A19.3,19.3,0,0,0,55.27,220H200.73A19.3,19.3,0,0,0,220,200.73V55.27A19.3,19.3,0,0,0,200.73,36ZM196,196H60V60H196Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,55.27V200.73A15.29,15.29,0,0,1,200.73,216H55.27A15.29,15.29,0,0,1,40,200.73V55.27A15.29,15.29,0,0,1,55.27,40H200.73A15.29,15.29,0,0,1,216,55.27Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,55.27V200.73a7.28,7.28,0,0,1-7.27,7.27H55.27A7.28,7.28,0,0,1,48,200.73V55.27A7.28,7.28,0,0,1,55.27,48H200.73A7.28,7.28,0,0,1,208,55.27Z" opacity="0.2"/><path d="M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z"/>`,
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
      ${PhStop.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-stop": PhStop;
  }
}
