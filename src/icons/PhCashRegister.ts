/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-cash-register": PhCashRegister;
  }
}

@customElement("ph-cash-register")
class PhCashRegister extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.88,159,213.4,69.09A12,12,0,0,0,201.75,60H132V40a12,12,0,0,0-12-12H80A12,12,0,0,0,68,40V60H54.25A12,12,0,0,0,42.6,69.09L20.12,159a4,4,0,0,0-.12,1v32a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V160A4,4,0,0,0,235.88,159ZM76,40a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4V60H76ZM50.37,71a4,4,0,0,1,3.88-3h147.5a4,4,0,0,1,3.88,3l21.25,85H29.12ZM224,196H32a4,4,0,0,1-4-4V164H228v28A4,4,0,0,1,224,196ZM68,96a4,4,0,0,1,4-4H88a4,4,0,0,1,0,8H72A4,4,0,0,1,68,96Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,96Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H168A4,4,0,0,1,164,96ZM68,128a4,4,0,0,1,4-4H88a4,4,0,0,1,0,8H72A4,4,0,0,1,68,128Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,128Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H168A4,4,0,0,1,164,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M237.82,158.54,215.34,68.61A14,14,0,0,0,201.75,58H134V40a14,14,0,0,0-14-14H80A14,14,0,0,0,66,40V58H54.25A14,14,0,0,0,40.66,68.6L18.18,158.54A6,6,0,0,0,18,160v32a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160A6,6,0,0,0,237.82,158.54ZM78,40a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2V58H78ZM52.31,71.51A2,2,0,0,1,54.25,70h147.5a2,2,0,0,1,1.94,1.51L224.32,154H31.68ZM224,194H32a2,2,0,0,1-2-2V166H226v26A2,2,0,0,1,224,194ZM66,96a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H72A6,6,0,0,1,66,96Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,96Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H168A6,6,0,0,1,162,96ZM66,128a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H72A6,6,0,0,1,66,128Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,128Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H168A6,6,0,0,1,162,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM80,40h40V56H80ZM54.25,72h147.5l20,80H34.25ZM32,192V168H224v24ZM64,96a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H72A8,8,0,0,1,64,96Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,96Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H168A8,8,0,0,1,160,96ZM64,128a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H72A8,8,0,0,1,64,128Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,128Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H168A8,8,0,0,1,160,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M243.61,157,221.17,71a20,20,0,0,0-19.35-15H140V40a20,20,0,0,0-20-20H80A20,20,0,0,0,60,40V56H54.18A20,20,0,0,0,34.83,71L12.39,157a11.94,11.94,0,0,0-.39,3v32a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160A11.94,11.94,0,0,0,243.61,157ZM84,44h32V56H84ZM57.27,80H198.73l17.74,68H39.53ZM36,188V172H220v16Zm28-72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H76A12,12,0,0,1,64,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,112,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,160,116Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM168,88h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Zm0,32h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM136,88a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16Zm8,40a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,128ZM80,40h40V56H80ZM72,88H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm0,32H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm152,72H32V168H224Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,160H24L46.49,70.06A8,8,0,0,1,54.25,64h147.5a8,8,0,0,1,7.76,6.06Z" opacity="0.2"/><path d="M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM80,40h40V56H80ZM54.25,72h147.5l20,80H34.25ZM32,192V168H224v24ZM64,96a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H72A8,8,0,0,1,64,96Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,96Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H168A8,8,0,0,1,160,96ZM64,128a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H72A8,8,0,0,1,64,128Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,128Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H168A8,8,0,0,1,160,128Z"/>`,
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
      ${PhCashRegister.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCashRegister };
