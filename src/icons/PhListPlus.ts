/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-list-plus": PhListPlus;
  }
}

@customElement('ph-list-plus')
class PhListPlus extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm104,56H40a4,4,0,0,0,0,8H144a4,4,0,0,0,0-8Zm88,0H212V168a4,4,0,0,0-8,0v20H184a4,4,0,0,0,0,8h20v20a4,4,0,0,0,8,0V196h20a4,4,0,0,0,0-8Z"/>`],
    ["light", svg`<path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm104,52H40a6,6,0,0,0,0,12H144a6,6,0,0,0,0-12Zm88,0H214V168a6,6,0,0,0-12,0v18H184a6,6,0,0,0,0,12h18v18a6,6,0,0,0,12,0V198h18a6,6,0,0,0,0-12Z"/>`],
    ["regular", svg`<path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"/>`],
    ["bold", svg`<path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm104,40H40a12,12,0,0,0,0,24H144a12,12,0,0,0,0-24Zm88,0H220V168a12,12,0,0,0-24,0v12H184a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V204h12a12,12,0,0,0,0-24Z"/>`],
    ["fill", svg`<path d="M32,72V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V72a8,8,0,0,1-8,8H40A8,8,0,0,1,32,72Zm8,72H216a8,8,0,0,0,8-8V120a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v16A8,8,0,0,0,40,144Zm112,32H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H152a8,8,0,0,0,8-8V184A8,8,0,0,0,152,176Zm80,8H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"/>`],
    ["duotone", svg`<path d="M216,64V192H40V64Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"/>`],
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
      ${PhListPlus.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhListPlus }
