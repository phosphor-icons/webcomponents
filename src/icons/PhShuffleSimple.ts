/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-shuffle-simple")
export default class PhShuffleSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212,48V88a4,4,0,0,1-8,0V57.66L153.46,108.2a4,4,0,1,1-5.66-5.66L198.34,52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48Zm-4,116a4,4,0,0,0-4,4v30.34L50.83,45.17a4,4,0,0,0-5.66,5.66L198.34,204H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM102.54,147.8,45.17,205.17a4,4,0,0,0,5.66,5.66l57.37-57.37a4,4,0,1,0-5.66-5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214,48V88a6,6,0,0,1-12,0V62.48l-47.13,47.14a6,6,0,0,1-8.49-8.49L193.52,54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48Zm-6,114a6,6,0,0,0-6,6v25.52L52.24,43.76a6,6,0,0,0-8.48,8.48L193.52,202H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM101.13,146.38,43.76,203.76a6,6,0,1,0,8.48,8.48l57.38-57.37a6,6,0,0,0-8.49-8.49Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,48V88a8,8,0,0,1-16,0V67.31L156.28,111A8,8,0,0,1,145,99.72L188.69,56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48Zm-8,112a8,8,0,0,0-8,8v20.69L53.66,42.34A8,8,0,0,0,42.34,53.66L188.69,200H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M220,48V88a12,12,0,0,1-24,0V77L164.77,108.2a12,12,0,0,1-17-17L179,60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM208,156a12,12,0,0,0-12,12v11L56.49,39.51a12,12,0,0,0-17,17L179,196H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM91.23,147.8,39.51,199.51a12,12,0,0,0,17,17l51.71-51.72a12,12,0,0,0-17-17Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,48V88a8,8,0,0,1-13.66,5.66L188,79.31,156.28,111A8,8,0,0,1,145,99.72L176.69,68,162.34,53.66A8,8,0,0,1,168,40h40A8,8,0,0,1,216,48Zm-4.94,112.61a8,8,0,0,0-8.72,1.73L188,176.69,53.66,42.34A8,8,0,0,0,42.34,53.66L176.69,188l-14.35,14.34A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M48,48l80,80L48,208Zm80,80,80,80V48Z" opacity="0.2"/><path d="M216,48V88a8,8,0,0,1-16,0V67.31L156.28,111A8,8,0,0,1,145,99.72L188.69,56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48Zm-8,112a8,8,0,0,0-8,8v20.69L53.66,42.34A8,8,0,0,0,42.34,53.66L188.69,200H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z"/>`,
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
      ${PhShuffleSimple.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-shuffle-simple": PhShuffleSimple;
  }
}
