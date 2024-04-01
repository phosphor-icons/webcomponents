/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-video-conference": PhVideoConference;
  }
}

@customElement("ph-video-conference")
class PhVideoConference extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,12v68H164V52h52A4,4,0,0,1,220,56ZM36,200V56a4,4,0,0,1,4-4H156V204H40A4,4,0,0,1,36,200Zm180,4H164V132h56v68A4,4,0,0,1,216,204ZM184,88a8,8,0,1,1,8,8A8,8,0,0,1,184,88Zm16,80a8,8,0,1,1-8-8A8,8,0,0,1,200,168Zm-68.13-1a36.2,36.2,0,0,0-20.43-23.67,28,28,0,1,0-30.88,0A36.28,36.28,0,0,0,60.13,167,4,4,0,0,0,63,171.87a3.87,3.87,0,0,0,1,.13,4,4,0,0,0,3.87-3C71,157,83.05,148,96,148s25.06,9,28.13,21a4,4,0,1,0,7.74-2ZM76,120a20,20,0,1,1,20,20A20,20,0,0,1,76,120Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,14v66H166V54h50A2,2,0,0,1,218,56ZM38,200V56a2,2,0,0,1,2-2H154V202H40A2,2,0,0,1,38,200Zm178,2H166V134h52v66A2,2,0,0,1,216,202ZM182,88a10,10,0,1,1,10,10A10,10,0,0,1,182,88Zm20,80a10,10,0,1,1-10-10A10,10,0,0,1,202,168Zm-68.19-1.49A38,38,0,0,0,115.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,58.19,166.5a6,6,0,0,0,11.62,3C72.67,158.38,83.93,150,96,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM78,120a18,18,0,1,1,18,18A18,18,0,0,1,78,120Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,80H168V56h48ZM40,56H152V200H40ZM216,200H168V136h48v64ZM180,88a12,12,0,1,1,12,12A12,12,0,0,1,180,88Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,204,168Zm-68.25-2a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM80,120a16,16,0,1,1,16,16A16,16,0,0,1,80,120Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,80H156V60h56ZM52,120a12,12,0,1,1,12,12A12,12,0,0,1,52,120Zm-8,49.77C46.69,161.84,55,156,64,156c9.43,0,18.19,6.44,20.38,15a12,12,0,0,0,23.24-6,43.22,43.22,0,0,0-15.16-23A36,36,0,0,0,44,90.08V60h88V196H44ZM156,196V140h56v56ZM168,88a16,16,0,1,1,16,16A16,16,0,0,1,168,88Zm32,80a16,16,0,1,1-16-16A16,16,0,0,1,200,168Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M204,88a12,12,0,1,1-12-12A12,12,0,0,1,204,88Zm-12,68a12,12,0,1,0,12,12A12,12,0,0,0,192,156ZM96,104a16,16,0,1,0,16,16A16,16,0,0,0,96,104ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-64,64h48V56H168Zm-32.25,46a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM216,200V136H168v64h48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M40,48a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H160V48Zm56,96a24,24,0,1,1,24-24A24,24,0,0,1,96,144Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,80H168V56h48ZM40,56H152V200H40ZM216,200H168V136h48v64ZM180,88a12,12,0,1,1,12,12A12,12,0,0,1,180,88Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,204,168Zm-68.25-2a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM80,120a16,16,0,1,1,16,16A16,16,0,0,1,80,120Z"/>`,
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
      ${PhVideoConference.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhVideoConference };
