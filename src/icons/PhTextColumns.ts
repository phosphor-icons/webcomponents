/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-text-columns": PhTextColumns;
  }
}

@customElement('ph-text-columns')
class PhTextColumns extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M116,64a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8h72A4,4,0,0,1,116,64Zm-4,36H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM144,68h72a4,4,0,0,0,0-8H144a4,4,0,0,0,0,8Zm72,32H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Z"/>`],
    ["light", svg`<path d="M118,64a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12h72A6,6,0,0,1,118,64Zm-6,34H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12ZM144,70h72a6,6,0,0,0,0-12H144a6,6,0,0,0,0,12Zm72,28H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Z"/>`],
    ["regular", svg`<path d="M120,64a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h72A8,8,0,0,1,120,64Zm-8,32H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,72h72a8,8,0,0,0,0-16H144a8,8,0,0,0,0,16Zm72,24H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z"/>`],
    ["bold", svg`<path d="M120,64a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h68A12,12,0,0,1,120,64ZM108,92H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm40-96h68a12,12,0,0,0,0-24H148a12,12,0,0,0,0,24Zm68,16H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Z"/>`],
    ["fill", svg`<path d="M120,184v8a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8a8,8,0,0,1,8-8h72A8,8,0,0,1,120,184Zm-8-88H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,112,96Zm0,40H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,112,136Zm0-80H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V64A8,8,0,0,0,112,56ZM216,96H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,96Zm0,80H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,176Zm0-120H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V64A8,8,0,0,0,216,56Zm0,80H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,136Z"/>`],
    ["duotone", svg`<path d="M216,64V184H40V64Z" opacity="0.2"/><path d="M120,64a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h72A8,8,0,0,1,120,64Zm-8,32H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,72h72a8,8,0,0,0,0-16H144a8,8,0,0,0,0,16Zm72,24H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z"/>`],
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
      ${PhTextColumns.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhTextColumns }
