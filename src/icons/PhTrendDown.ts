/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-trend-down")
export default class PhTrendDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M236,136v64a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h54.34L136,109.66,98.83,146.83a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L96,138.34l37.17-37.17a4,4,0,0,1,5.66,0L228,190.34V136a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M238,136v64a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h49.52L136,112.49l-35.76,35.75a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L96,135.51l35.76-35.75a6,6,0,0,1,8.48,0L226,185.52V136a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,136v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,115.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,66.34L96,132.69l34.34-34.35a8,8,0,0,1,11.32,0L224,180.69V136a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,136v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h35l-67-67-31.51,31.52a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L96,127l31.51-31.52a12,12,0,0,1,17,0L220,171V136a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,136v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L188.69,168,136,115.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,66.34L96,132.69l34.34-34.35a8,8,0,0,1,11.32,0L200,156.69l26.34-26.35A8,8,0,0,1,240,136Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,136v64H168Z" opacity="0.2"/><path d="M235.06,128.61a8,8,0,0,0-8.72,1.73L200,156.69,141.66,98.34a8,8,0,0,0-11.32,0L96,132.69,29.66,66.34A8,8,0,0,0,18.34,77.66l72,72a8,8,0,0,0,11.32,0L136,115.31,188.69,168l-26.35,26.34A8,8,0,0,0,168,208h64a8,8,0,0,0,8-8V136A8,8,0,0,0,235.06,128.61ZM224,192H187.31L224,155.31Z"/>`,
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
      ${PhTrendDown.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-trend-down": PhTrendDown;
  }
}
