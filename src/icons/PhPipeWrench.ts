/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-pipe-wrench": PhPipeWrench;
  }
}

@customElement("ph-pipe-wrench")
class PhPipeWrench extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M217.46,57.85l-.09-.08L172.44,15.46a12,12,0,0,0-16.91,0l-47.38,47-4.35-4.39A21,21,0,0,0,74.12,87.78l4.25,4.31L55.51,114.83a12,12,0,0,0,0,17L68.2,144.48a12,12,0,0,0,17,0l22.77-22.45,14.91,15.12a4,4,0,0,1,0,5.66h0L58.14,208.2a21,21,0,1,0,29.67,29.65l88.68-89.37a12,12,0,0,0,0-16.95L138,92.62l15.77-15.45a4,4,0,0,1,5.68,0l37.4,35.35a12,12,0,0,0,16.93,0l3.72-3.71a36,36,0,0,0,0-50.92Zm-137.95,81a4,4,0,0,1-5.65,0L61.17,126.14a4,4,0,0,1,0-5.65L84,97.78l18.32,18.58Zm91.31,4L82.14,232.2a13,13,0,1,1-18.33-18.36l64.69-65.37a12,12,0,0,0,0-16.94L79.8,82.14A13,13,0,0,1,98.13,63.78l72.7,73.39A4,4,0,0,1,170.82,142.84Zm41-39.73-3.72,3.72a4,4,0,0,1-5.65,0l-.09-.08L165,71.42a12,12,0,0,0-16.85.06L132.33,86.94,113.78,68.21l47.39-47a4,4,0,0,1,5.66,0l.09.08,44.92,42.3a28,28,0,0,1,0,39.56Z"/>`,
    ],
    [
      "light",
      svg`<path d="M218.87,56.44a1.59,1.59,0,0,1-.13-.13L173.83,14a14,14,0,0,0-19.71.06l-46,45.62-3-3A23,23,0,0,0,72.7,89.18l2.85,2.89L54.1,113.41a14,14,0,0,0,0,19.8L66.79,145.9a14,14,0,0,0,19.76,0l21.35-21.05,13.51,13.7a2,2,0,0,1,0,2.83l0,0L56.73,206.79a23,23,0,1,0,32.5,32.47L177.9,149.9a14,14,0,0,0,0-19.78L140.79,92.64l14.35-14.06a2,2,0,0,1,2.82,0l.07.07L195.42,114a14,14,0,0,0,19.74-.07l3.71-3.72a38,38,0,0,0,0-53.74Zm-140.77,81a2,2,0,0,1-2.83,0L62.58,124.73a2,2,0,0,1-.58-1.42,2,2,0,0,1,.57-1.4L84,100.62l15.5,15.72Zm91.3,4L80.73,230.79a11,11,0,1,1-15.49-15.54l64.67-65.37a14,14,0,0,0,0-19.75L81.21,80.73a11,11,0,0,1,15.5-15.54l72.7,73.39A2,2,0,0,1,169.4,141.43Zm41-39.73-3.71,3.71a2,2,0,0,1-2.83,0l-.12-.12L166.31,70a14,14,0,0,0-19.61.1L132.35,84.12,116.6,68.22l46-45.64a2,2,0,0,1,2.84,0l.12.13L210.45,65a26,26,0,0,1-.07,36.71Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86Zm2.62,93.37a9,9,0,1,1-12.65-12.71l64.67-65.37a16,16,0,0,0,0-22.57L82.63,79.31A9,9,0,0,1,95.29,66.6L168,140ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M219.11,40.2l-.36-.35L185.92,9.64a20,20,0,0,0-28,.19L110.36,57.11a32,32,0,0,0-45.46,45l-15.06,15a20,20,0,0,0,0,28.29l17.72,17.72-30.2,30.2a32,32,0,0,0,45.26,45.26l0,0,91.51-92.32a20,20,0,0,0-.38-28.61l-13-12.4,11.91-11.8,14.73,13a20,20,0,0,0,28-.33l3.71-3.71a44,44,0,0,0,0-62.23ZM69.65,131.32l12.21-12.19L96.73,134l-12.2,12.21Zm-4,90.36a8,8,0,0,1-11.3-11.33l67.86-67.86a12,12,0,0,0,0-17L82.33,85.66A8,8,0,0,1,93.65,74.34c.06.07.13.13.19.19l60.44,57.72ZM202.14,85.46l-1,1L186.27,73.44a20.06,20.06,0,0,0-27.82.38l-15,14.88-15.72-15L172.1,29.53l30.19,27.8a20,20,0,0,1-.15,28.13Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M173.66,145.66,85,235a17,17,0,0,1-24-24l64.69-65.37a8,8,0,0,0,0-11.32L77,85a17,17,0,0,1,0-24h0a17,17,0,0,1,24,0l72.69,73.37A8,8,0,0,1,173.66,145.66Z" opacity="0.2"/><path d="M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86Zm2.62,93.37a9,9,0,1,1-12.65-12.71l64.67-65.37a16,16,0,0,0,0-22.57L82.63,79.31A9,9,0,0,1,95.29,66.6L168,140ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z"/>`,
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
      ${PhPipeWrench.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhPipeWrench };
