/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-asterisk": PhAsterisk;
  }
}

@customElement('ph-asterisk')
class PhAsterisk extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M211.43,178.06a4,4,0,0,1-5.49,1.37L132,135.06V216a4,4,0,0,1-8,0V135.06L50.06,179.43a4,4,0,0,1-4.12-6.86L120.22,128,45.94,83.43a4,4,0,0,1,4.12-6.86L124,120.94V40a4,4,0,0,1,8,0v80.94l73.94-44.37a4,4,0,1,1,4.12,6.86L135.78,128l74.28,44.57A4,4,0,0,1,211.43,178.06Z"/>`],
    ["light", svg`<path d="M213.14,179.09a6,6,0,0,1-8.23,2.06L134,138.6V216a6,6,0,0,1-12,0V138.6L51.09,181.15A6.07,6.07,0,0,1,48,182a6,6,0,0,1-3.1-11.15L116.34,128,44.91,85.15a6,6,0,0,1,6.18-10.3L122,117.4V40a6,6,0,0,1,12,0v77.4l70.91-42.55a6,6,0,0,1,6.18,10.3L139.66,128l71.43,42.85A6,6,0,0,1,213.14,179.09Z"/>`],
    ["regular", svg`<path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"/>`],
    ["bold", svg`<path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"/>`],
    ["fill", svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm64.12,133.14a8,8,0,0,1-8.24,13.72L136,142.13V194a8,8,0,0,1-16,0V142.13L72.12,170.86a8,8,0,0,1-8.24-13.72L112.45,128,63.88,98.86a8,8,0,0,1,8.24-13.72L120,113.87V62a8,8,0,0,1,16,0v51.87l47.88-28.73a8,8,0,1,1,8.24,13.72L143.55,128Z"/>`],
    ["duotone", svg`<path d="M200,128a72,72,0,1,1-72-72A72,72,0,0,1,200,128Z" opacity="0.2"/><path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"/>`],
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
      ${PhAsterisk.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhAsterisk }
