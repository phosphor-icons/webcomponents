/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-fire-truck": PhFireTruck;
  }
}

@customElement("ph-fire-truck")
class PhFireTruck extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M251.71,118.51l-14-35A12,12,0,0,0,226.58,76H188V64a4,4,0,0,0-8,0V166.71A28.05,28.05,0,0,0,164.29,188H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V136a4,4,0,0,0-8,0v48a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V120A4,4,0,0,0,251.71,118.51ZM226.58,84a4,4,0,0,1,3.72,2.51L242.09,116H188V84ZM80,212a20,20,0,1,1,20-20A20,20,0,0,1,80,212Zm112,0a20,20,0,1,1,20-20A20,20,0,0,1,192,212Zm48-24H219.71A28,28,0,0,0,188,164.29V124h56v60A4,4,0,0,1,240,188ZM24,100a4,4,0,0,0,0,8H152a4,4,0,0,0,0-8H132V68h20a4,4,0,0,0,0-8H24a4,4,0,0,0,0,8H44v32Zm100,0H92V68h32ZM52,68H84v32H52Z"/>`,
    ],
    [
      "light",
      svg`<path d="M253.57,117.77l-14-35a13.93,13.93,0,0,0-13-8.8H190V64a6,6,0,0,0-12,0V165.48A30.1,30.1,0,0,0,162.6,186H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V136a6,6,0,0,0-12,0v48a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V120A6.1,6.1,0,0,0,253.57,117.77ZM226.58,86a2,2,0,0,1,1.86,1.26L239.14,114H190V86ZM80,210a18,18,0,1,1,18-18A18,18,0,0,1,80,210Zm112,0a18,18,0,1,1,18-18A18,18,0,0,1,192,210Zm48-24H221.4A30.05,30.05,0,0,0,192,162c-.67,0-1.34,0-2,.07V126h52v58A2,2,0,0,1,240,186ZM24,98a6,6,0,0,0,0,12H152a6,6,0,0,0,0-12H134V70h18a6,6,0,0,0,0-12H24a6,6,0,0,0,0,12H42V98Zm98,0H94V70h28ZM54,70H82V98H54Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0V164.31A32.11,32.11,0,0,0,161,184H111a32,32,0,0,0-62,0H32V136a8,8,0,0,0-16,0v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM226.58,88l9.6,24H192V88ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm31-24a32.06,32.06,0,0,0-31-24V128h48v56ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96Zm96,0H96V72h24ZM56,72H80V96H56Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M255.14,115.54l-14-35A19.9,19.9,0,0,0,222.58,68H204V64a12,12,0,0,0-24,0v94.06A36.23,36.23,0,0,0,158.06,180H113.94a36,36,0,0,0-67.88,0H36V144a12,12,0,0,0-24,0v40a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h44.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V120A12,12,0,0,0,255.14,115.54ZM219.88,92l6.4,16H204V92ZM80,204a12,12,0,1,1,12-12A12,12,0,0,1,80,204Zm112,0a12,12,0,1,1,12-12A12,12,0,0,1,192,204Zm33.94-24A36.23,36.23,0,0,0,204,158.06V132h28v48ZM24,92a12,12,0,0,0,0,24H152a12,12,0,0,0,0-24H140V76h12a12,12,0,0,0,0-24H24a12,12,0,0,0,0,24H36V92Zm92,0H100V76h16ZM60,76H76V92H60Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0v64H24a8,8,0,0,0-8,8v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm0-96V88h34.58l9.6,24ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96ZM96,72h24V96H96ZM56,72H80V96H56Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-32-22.63h0A24,24,0,0,0,168,192H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184v56Z" opacity="0.2"/><path d="M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0V164.31A32.11,32.11,0,0,0,161,184H111a32,32,0,0,0-62,0H32V136a8,8,0,0,0-16,0v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM226.58,88l9.6,24H192V88ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm31-24a32.06,32.06,0,0,0-31-24V128h48v56ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96Zm96,0H96V72h24ZM56,72H80V96H56Z"/>`,
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
      ${PhFireTruck.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhFireTruck };
