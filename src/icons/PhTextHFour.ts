/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-text-h-four": PhTextHFour;
  }
}

@customElement('ph-text-h-four')
class PhTextHFour extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M252,176a4,4,0,0,1-4,4H236v28a4,4,0,0,1-8,0V180H184a4,4,0,0,1-3.79-5.26l24-72a4,4,0,1,1,7.58,2.52L189.55,172H228V144a4,4,0,0,1,8,0v28h12A4,4,0,0,1,252,176ZM144,52a4,4,0,0,0-4,4v56H44V56a4,4,0,0,0-8,0V176a4,4,0,0,0,8,0V120h96v56a4,4,0,0,0,8,0V56A4,4,0,0,0,144,52Z"/>`],
    ["light", svg`<path d="M254,176a6,6,0,0,1-6,6H238v26a6,6,0,0,1-12,0V182H184a6,6,0,0,1-5.69-7.9l24-72a6,6,0,1,1,11.38,3.8L192.32,170H226V144a6,6,0,0,1,12,0v26h10A6,6,0,0,1,254,176ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z"/>`],
    ["regular", svg`<path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,112h-8V144a8,8,0,0,0-16,0v24H195.1l20.49-61.47a8,8,0,0,0-15.18-5.06l-24,72A8,8,0,0,0,184,184h40v24a8,8,0,0,0,16,0V184h8a8,8,0,0,0,0-16Z"/>`],
    ["bold", svg`<path d="M256,176a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V188H184a12,12,0,0,1-11.38-15.79l24-72a12,12,0,0,1,22.76,7.58L200.65,164H220V144a12,12,0,0,1,24,0v20A12,12,0,0,1,256,176ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z"/>`],
    ["fill", svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM120,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h32V80a8,8,0,0,1,16,0Zm80,0h-8v16a8,8,0,0,1-16,0V160H144a8,8,0,0,1-7.49-10.81l24-64a8,8,0,0,1,15,5.62l-20,53.19H176V120a8,8,0,0,1,16,0v24h8a8,8,0,0,1,0,16Z"/>`],
    ["duotone", svg`<path d="M248,64V200a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56H240A8,8,0,0,1,248,64Z" opacity="0.2"/><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,112h-8V144a8,8,0,0,0-16,0v24H195.1l20.49-61.47a8,8,0,0,0-15.18-5.06l-24,72A8,8,0,0,0,184,184h40v24a8,8,0,0,0,16,0V184h8a8,8,0,0,0,0-16Z"/>`],
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
      ${PhTextHFour.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhTextHFour }
