/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-sneaker-move")
export default class PhSneakerMove extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,156a36,36,0,0,1-36-36V95.69a12,12,0,0,0-10.95-11.94c-26.11-2.11-43.77-19.41-45-44.07a12,12,0,0,0-3.49-7.91l-8.23-8.23a11.93,11.93,0,0,0-16.76-.2l-.07.07-64,64.12a12,12,0,0,0,0,17l107.27,104a11.93,11.93,0,0,0,8.48,3.51H240a12,12,0,0,0,12-12v-8A36,36,0,0,0,216,156Zm28,44a4,4,0,0,1-4,4H147.31a4,4,0,0,1-2.87-1.21L37.17,98.84a4,4,0,0,1,0-5.65l64-64.09a4,4,0,0,1,5.55.1l8.23,8.22a4,4,0,0,1,1.16,2.65c1.42,28.93,22,49.2,52.33,51.65a4,4,0,0,1,3.59,4V116H152a4,4,0,0,0,0,8h20.19a43.84,43.84,0,0,0,9.89,24H160a4,4,0,0,0,0,8h30.75A43.75,43.75,0,0,0,216,164a28,28,0,0,1,28,28ZM64,180H32a4,4,0,1,1,0-8H64a4,4,0,1,1,0,8Zm36,28a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H96A4,4,0,0,1,100,208Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,154a34,34,0,0,1-34-34V95.7a14,14,0,0,0-12.79-13.94c-25.05-2-42-18.58-43.14-42.18A14,14,0,0,0,122,30.36l-8.23-8.23a13.92,13.92,0,0,0-19.55-.24,1.14,1.14,0,0,1-.11.11l-64,64.12A14,14,0,0,0,30.17,106L137.41,209.9a13.94,13.94,0,0,0,9.9,4.1H240a14,14,0,0,0,14-14v-8A38,38,0,0,0,216,154Zm26,46a2,2,0,0,1-2,2H147.31a2.08,2.08,0,0,1-1.48-.65L38.59,97.43A2,2,0,0,1,38,96a2,2,0,0,1,.59-1.42l63.93-64a2,2,0,0,1,2.76.07l8.22,8.22a2,2,0,0,1,.58,1.33h0c.73,14.9,6.41,27.86,16.43,37.48,9.68,9.3,22.73,14.85,37.74,16.06a2,2,0,0,1,1.75,2V114H152a6,6,0,1,0,0,12h18.4a45.78,45.78,0,0,0,7.68,20H160a6,6,0,0,0,0,12h30.11A45.78,45.78,0,0,0,216,166a26,26,0,0,1,26,26ZM64,182H32a6,6,0,0,1,0-12H64a6,6,0,0,1,0,12Zm38,26a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H96A6,6,0,0,1,102,208Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M104,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H96A8,8,0,0,1,104,208ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm184,16v8a16,16,0,0,1-16,16H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54c1.13,22.88,17,38.31,41.31,40.27A16,16,0,0,1,184,95.7V120a32,32,0,0,0,32,32A40,40,0,0,1,256,192Zm-16,0a24,24,0,0,0-24-24,47.67,47.67,0,0,1-26.49-8H160a8,8,0,0,1,0-16h14.46a47.64,47.64,0,0,1-5.78-16H152a8,8,0,1,1,0-16h16V95.7c-15.43-1.26-28.88-7-38.88-16.6-10.39-10-16.28-23.41-17-38.83v0L103.87,32,40,96l107.22,103.9.09.08H240Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,148a24,24,0,0,1-24-24V95.71a20.14,20.14,0,0,0-18.42-19.93C147.45,74,133.07,60,132.06,39.3a20,20,0,0,0-5.83-13.17L118,17.9a19.91,19.91,0,0,0-27.94-.34l-.22.22-64,64.11a20,20,0,0,0,0,28.28l.13.13L133.25,214.22A19.86,19.86,0,0,0,147.31,220H236a20,20,0,0,0,20-20v-8A44,44,0,0,0,212,148Zm20,48H148.94L45.7,96,103.87,37.7,108.18,42c2.18,30.66,24.27,53.22,55.82,57.3V108H148a12,12,0,1,0,0,24h16.68a47.8,47.8,0,0,0,3.7,12H156a12,12,0,1,0,0,24h36.84A47.69,47.69,0,0,0,212,172a20,20,0,0,1,20,20ZM52,184H28a12,12,0,0,1,0-24H52a12,12,0,0,1,0,24Zm52,24a12,12,0,0,1-12,12H44a12,12,0,1,1,0-24H92A12,12,0,0,1,104,208Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M256,200.41A15.91,15.91,0,0,1,240,216H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54h0c1.13,22.83,16.91,38.26,41.19,40.26A16.13,16.13,0,0,1,184,95.7V108a4,4,0,0,1-4,4H152a8,8,0,0,0-8,8.53,8.18,8.18,0,0,0,8.25,7.47h28a4,4,0,0,1,4,3.55,31.31,31.31,0,0,0,1.64,7.14,4,4,0,0,1-3.77,5.3H160a8,8,0,0,0-8,8.53,8.17,8.17,0,0,0,8.25,7.47H216A40,40,0,0,1,256,200.41ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm24,24H48a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M248,192v8a8,8,0,0,1-8,8H147.31a8,8,0,0,1-5.65-2.34l-107.32-104a8,8,0,0,1,0-11.32l64-64.13a8,8,0,0,1,11.17.13l8.23,8.23a8,8,0,0,1,2.32,5.28c1.36,27.59,21.35,45.66,48.66,47.86a8,8,0,0,1,7.27,8V120a40,40,0,0,0,40,40h0A32,32,0,0,1,248,192Z" opacity="0.2"/><path d="M216,152a32,32,0,0,1-32-32V95.7a16,16,0,0,0-14.63-15.94c-24.35-2-40.18-17.39-41.31-40.27h0A16,16,0,0,0,123.4,29l-8.22-8.23a15.91,15.91,0,0,0-22.35-.27l-.15.14-64,64.12a16,16,0,0,0,0,22.62l.09.09,107.27,104A15.93,15.93,0,0,0,147.31,216H240a16,16,0,0,0,16-16v-8A40,40,0,0,0,216,152Zm24,48H147.31l-.09-.08L40,96l63.87-64,8.21,8.2v0c.76,15.42,6.65,28.85,17,38.83,10,9.6,23.45,15.34,38.88,16.6V112H152a8,8,0,1,0,0,16h16.68a47.64,47.64,0,0,0,5.78,16H160a8,8,0,0,0,0,16h29.51A47.67,47.67,0,0,0,216,168a24,24,0,0,1,24,24ZM64,184H32a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H96A8,8,0,0,1,104,208Z"/>`,
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
      ${PhSneakerMove.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-sneaker-move": PhSneakerMove;
  }
}
