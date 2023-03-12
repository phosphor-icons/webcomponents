/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-coat-hanger")
export default class PhCoatHanger extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M239.18,174.4,134.67,96l27.72-20.8A4,4,0,0,0,164,72a36,36,0,1,0-72,0,4,4,0,0,0,8,0,28,28,0,0,1,55.92-2l-30.26,22.7-.14.1L16.82,174.4A12,12,0,0,0,24,196H232a12,12,0,0,0,7.2-21.6Zm-3.41,10.87A3.88,3.88,0,0,1,232,188H24a4,4,0,0,1-2.4-7.2L128,101l106.38,79.8A3.88,3.88,0,0,1,235.77,185.27Z"/>`,
    ],
    [
      "light",
      svg`<path d="M240.37,172.8,138,96l25.59-19.2A6,6,0,0,0,166,72a38,38,0,1,0-76,0,6,6,0,0,0,12,0,26,26,0,0,1,51.82-2.88l-29.32,22-.21.16L15.63,172.8A14,14,0,0,0,24,198H232a14,14,0,0,0,8.39-25.2Zm-6.5,11.83A1.85,1.85,0,0,1,232,186H24a2,2,0,0,1-1.19-3.6L128,103.5l105.17,78.9A1.85,1.85,0,0,1,233.87,184.63Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L123.34,89.49l-.28.21L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM232,184H24l104-78,104,78Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,168,148,96l19.2-14.4A12,12,0,0,0,172,72a44,44,0,0,0-87.66-5.48,12,12,0,1,0,23.82,3,20,20,0,0,1,39.09-2.92L121,86.24c-.15.1-.29.21-.43.32L12,168a20,20,0,0,0,12,36H232a20,20,0,0,0,12-36ZM36,180l92-69,92,69Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM32.73,184C53.6,170.59,89.49,152,128,152s74.4,18.59,95.27,32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,192H24a8,8,0,0,1-4.8-14.4L128,96l108.79,81.6A8,8,0,0,1,232,192Z" opacity="0.2"/><path d="M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L123.34,89.49l-.28.22L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM232,184H24l104-78,104,78Z"/>`,
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
      ${PhCoatHanger.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-coat-hanger": PhCoatHanger;
  }
}