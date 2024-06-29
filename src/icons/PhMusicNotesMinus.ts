/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-music-notes-minus": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-music-notes-minus": IconAttrs;
    }
  }
}

@customElement("ph-music-notes-minus")
class PhMusicNotesMinus extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228,48a4,4,0,0,1-4,4H176a4,4,0,0,1,0-8h48A4,4,0,0,1,228,48ZM212,88v76a32.06,32.06,0,1,1-8-21.13V88a4,4,0,0,1,8,0Zm-8,76a24,24,0,1,0-24,24A24,24,0,0,0,204,164ZM84,107.12V196a32.06,32.06,0,1,1-8-21.13V56a4,4,0,0,1,3-3.88l56-14A4,4,0,0,1,137,45.88L84,59.12V98.88l75-18.76A4,4,0,0,1,161,87.88ZM76,196a24,24,0,1,0-24,24A24,24,0,0,0,76,196Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230,48a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h48A6,6,0,0,1,230,48ZM214,88v76a34.06,34.06,0,1,1-12-25.89V88a6,6,0,0,1,12,0Zm-12,76a22,22,0,1,0-22,22A22,22,0,0,0,202,164ZM86,108.69V196a34.06,34.06,0,1,1-12-25.89V56a6,6,0,0,1,4.54-5.82l56-14a6,6,0,1,1,2.92,11.64L86,60.68V96.31l72.54-18.13a6,6,0,1,1,2.92,11.64ZM74,196a22,22,0,1,0-22,22A22,22,0,0,0,74,196Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,48a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h48A8,8,0,0,1,232,48ZM216,88v76a36,36,0,1,1-16-29.92V88a8,8,0,0,1,16,0Zm-16,76a20,20,0,1,0-20,20A20,20,0,0,0,200,164ZM88,110.25V196a36,36,0,1,1-16-29.92V56a8,8,0,0,1,6.06-7.76l56-14a8,8,0,0,1,3.88,15.52L88,62.25v31.5l70.06-17.51a8,8,0,0,1,3.88,15.52ZM72,196a20,20,0,1,0-20,20A20,20,0,0,0,72,196Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M236,48a12,12,0,0,1-12,12H176a12,12,0,0,1,0-24h48A12,12,0,0,1,236,48ZM220,88v76a40,40,0,1,1-24-36.65V88a12,12,0,0,1,24,0Zm-24,76a16,16,0,1,0-16,16A16,16,0,0,0,196,164ZM92,113.37V196a40,40,0,1,1-24-36.65V56a12,12,0,0,1,9.09-11.64l56-14a12,12,0,0,1,5.82,23.28L92,65.37V88.63l65.09-16.27a12,12,0,0,1,5.82,23.28ZM68,196a16,16,0,1,0-16,16A16,16,0,0,0,68,196Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M224,40H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/><path d="M162.13,76.5a31.57,31.57,0,0,1-16.44-38.76A4,4,0,0,0,141,32.53L78.06,48.25A8,8,0,0,0,72,56V166.1A36,36,0,1,0,52.42,232C72.25,231.77,88,215.13,88,195.3V102.25l73.26-18.31A4,4,0,0,0,162.13,76.5Z"/><path d="M212,80h-8a4,4,0,0,0-4,4v50.1A36,36,0,1,0,180.42,200c19.83-.23,35.58-16.86,35.58-36.7V84A4,4,0,0,0,212,80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,164a28,28,0,1,1-28-28A28,28,0,0,1,208,164ZM52,168a28,28,0,1,0,28,28A28,28,0,0,0,52,168Z" opacity="0.2"/><path d="M232,48a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h48A8,8,0,0,1,232,48ZM216,88v76a36,36,0,1,1-16-29.92V88a8,8,0,0,1,16,0Zm-16,76a20,20,0,1,0-20,20A20,20,0,0,0,200,164ZM88,110.25V196a36,36,0,1,1-16-29.92V56a8,8,0,0,1,6.06-7.76l56-14a8,8,0,0,1,3.88,15.52L88,62.25v31.5l70.06-17.51a8,8,0,0,1,3.88,15.52ZM72,196a20,20,0,1,0-20,20A20,20,0,0,0,72,196Z"/>`,
    ],
  ]);

  @property({ type: String, reflect: true })
  size?: string | number = "1em";

  @property({ type: String, reflect: true })
  weight?: IconWeight = "regular";

  @property({ type: String, reflect: true })
  color?: string = "currentColor";

  @property({ type: Boolean, reflect: true })
  mirrored?: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      ${PhMusicNotesMinus.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhMusicNotesMinus };
