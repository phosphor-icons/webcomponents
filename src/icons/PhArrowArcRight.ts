/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-arrow-arc-right")
export default class PhArrowArcRight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M236,88v64a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h54.3l-29.24-29A92,92,0,0,0,36,184a4,4,0,0,1-8,0,100,100,0,0,1,170.71-70.71L228,142.39V88a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M238,88v64a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h49.45l-25.8-25.63A90,90,0,0,0,38,184a6,6,0,0,1-12,0,102,102,0,0,1,174.12-72.12L226,137.58V88a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.6l-22.36-22.21A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,177.54-73.54L224,132.77V88a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,88v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h34.9l-15.48-15.37A84,84,0,0,0,44,184a12,12,0,0,1-24,0,108,108,0,0,1,184.37-76.37L220,123.16V88a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66l26.19-26.18A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,175.86-75.18l26.48-26.48A8,8,0,0,1,240,88Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,88v64H168Z" opacity="0.2"/><path d="M235.06,80.61a8,8,0,0,0-8.72,1.73l-26.48,26.49A104,104,0,0,0,24,184a8,8,0,0,0,16,0,88,88,0,0,1,148.53-63.84l-26.19,26.18A8,8,0,0,0,168,160h64a8,8,0,0,0,8-8V88A8,8,0,0,0,235.06,80.61ZM224,144H187.31L224,107.31Z"/>`,
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
      ${PhArrowArcRight.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-arc-right": PhArrowArcRight;
  }
}
