/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-download-simple": PhDownloadSimple;
  }
}

@customElement('ph-download-simple')
class PhDownloadSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M220,152v56a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V152a4,4,0,0,1,8,0v56a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V152a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,142.34V40a4,4,0,0,0-8,0V142.34L90.83,109.17a4,4,0,0,0-5.66,5.66Z"/>`],
    ["light", svg`<path d="M222,152v56a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V152a6,6,0,0,1,12,0v56a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V152a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,137.51V40a6,6,0,0,0-12,0v97.51L92.24,107.76a6,6,0,0,0-8.48,8.48Z"/>`],
    ["regular", svg`<path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"/>`],
    ["bold", svg`<path d="M228,152v56a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V152a12,12,0,0,1,24,0v52H204V152a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,123V40a12,12,0,0,0-24,0v83L96.49,103.51a12,12,0,0,0-17,17Z"/>`],
    ["fill", svg`<path d="M82.34,117.66A8,8,0,0,1,88,104h32V40a8,8,0,0,1,16,0v64h32a8,8,0,0,1,5.66,13.66l-40,40a8,8,0,0,1-11.32,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z"/>`],
    ["duotone", svg`<path d="M168,112l-40,40L88,112Z" opacity="0.2"/><path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM82.34,117.66A8,8,0,0,1,88,104h32V40a8,8,0,0,1,16,0v64h32a8,8,0,0,1,5.66,13.66l-40,40a8,8,0,0,1-11.32,0Zm25,2.34L128,140.69,148.69,120Z"/>`],
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
      ${PhDownloadSimple.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhDownloadSimple }
