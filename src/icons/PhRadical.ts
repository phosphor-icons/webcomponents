/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-radical": PhRadical;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-radical": PhRadical;
    }
  }
}

@customElement("ph-radical")
class PhRadical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M244,80v24a4,4,0,0,1-8,0V84H130.77l-47,125.4a4,4,0,0,1-7.49,0l-48-128a4,4,0,1,1,7.49-2.81L80,196.61l44.26-118A4,4,0,0,1,128,76H240A4,4,0,0,1,244,80Z"/>`,
    ],
    [
      "light",
      svg`<path d="M246,80v24a6,6,0,0,1-12,0V86H132.16L85.62,210.11a6,6,0,0,1-11.24,0l-48-128a6,6,0,1,1,11.24-4.22L80,190.91l42.38-113A6,6,0,0,1,128,74H240A6,6,0,0,1,246,80Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M248,80v24a8,8,0,0,1-16,0V88H133.55L87.49,210.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L80,185.22l40.51-108A8,8,0,0,1,128,72H240A8,8,0,0,1,248,80Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M252,80v24a12,12,0,0,1-24,0V92H136.32L91.24,212.21a12,12,0,0,1-22.47,0l-48-128a12,12,0,1,1,22.47-8.43l36.76,98,36.77-98A12,12,0,0,1,128,68H240A12,12,0,0,1,252,80Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,80a8,8,0,0,1-16,0v-8H125.42l-30,75a8,8,0,0,1-14.86,0l-32-80A8,8,0,1,1,63.43,93L88,154.46,112.57,93A8,8,0,0,1,120,88h80a8,8,0,0,1,8,8Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,80V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80Z" opacity="0.2"/><path d="M248,80v24a8,8,0,0,1-16,0V88H133.55L87.49,210.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L80,185.22l40.51-108A8,8,0,0,1,128,72H240A8,8,0,0,1,248,80Z"/>`,
    ],
  ]);

  @property({ type: String })
  size?: string | number = "1em";

  @property({ type: String })
  weight?: IconWeight = "regular";

  @property({ type: String })
  color?: string = "currentColor";

  @property({ type: Boolean })
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
      <slot></slot>
      ${PhRadical.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhRadical };
