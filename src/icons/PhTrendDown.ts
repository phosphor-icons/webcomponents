/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-trend-down": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-trend-down": IconAttrs;
    }
  }
}

@customElement("ph-trend-down")
class PhTrendDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M236,128v64a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h54.34L136,101.66,98.83,138.83a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L96,130.34l37.17-37.17a4,4,0,0,1,5.66,0L228,182.34V128a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M238,128v64a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h49.52L136,104.49l-35.76,35.75a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L96,127.51l35.76-35.75a6,6,0,0,1,8.48,0L226,177.52V128a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L224,172.69V128a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,128v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h35l-67-67-31.51,31.52a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L96,119l31.51-31.52a12,12,0,0,1,17,0L220,163V128a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L188.69,160,136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L200,148.69l26.34-26.35A8,8,0,0,1,240,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,128v64H168Z" opacity="0.2"/><path d="M235.06,120.61a8,8,0,0,0-8.72,1.73L200,148.69,141.66,90.34a8,8,0,0,0-11.32,0L96,124.69,29.66,58.34A8,8,0,0,0,18.34,69.66l72,72a8,8,0,0,0,11.32,0L136,107.31,188.69,160l-26.35,26.34A8,8,0,0,0,168,200h64a8,8,0,0,0,8-8V128A8,8,0,0,0,235.06,120.61ZM224,184H187.31L224,147.31Z"/>`,
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
      ${PhTrendDown.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTrendDown };
