/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-tree": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-tree": IconAttrs;
    }
  }
}

@customElement("ph-tree")
class PhTree extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M195,65.59a72,72,0,0,0-134,0,67.72,67.72,0,0,0-41,62.22c-.1,36,30.24,67.26,66.25,68.17A68.24,68.24,0,0,0,124,185.66V232a4,4,0,0,0,8,0V185.67A68.09,68.09,0,0,0,168,196l1.72,0c36-.91,66.34-32.13,66.24-68.17A67.73,67.73,0,0,0,195,65.59ZM169.55,188A60.15,60.15,0,0,1,132,176v-45.5l45.79-22.89a4,4,0,1,0-3.58-7.16L132,121.53V88a4,4,0,0,0-8,0v57.53L81.79,124.42a4,4,0,1,0-3.58,7.16L124,154.47V176a60,60,0,0,1-37.55,12c-31.77-.8-58.54-28.35-58.45-60.15a59.77,59.77,0,0,1,37.62-55.5A4,4,0,0,0,67.88,70a64,64,0,0,1,120.24,0,4,4,0,0,0,2.26,2.33A59.79,59.79,0,0,1,228,127.83C228.09,159.63,201.32,187.18,169.55,188Z"/>`,
    ],
    [
      "light",
      svg`<path d="M196.55,64.09a74,74,0,0,0-137.1,0A69.71,69.71,0,0,0,18,127.8C17.9,164.91,49.13,197,86.19,198A70.32,70.32,0,0,0,122,189.16V232a6,6,0,0,0,12,0V189.16A70.1,70.1,0,0,0,168,198l1.77,0C206.87,197,238.1,164.9,238,127.8A69.71,69.71,0,0,0,196.55,64.09ZM169.5,186A57.88,57.88,0,0,1,134,175V131.71l44.68-22.34a6,6,0,1,0-5.36-10.74L134,118.29V88a6,6,0,0,0-12,0v54.29L82.68,122.63a6,6,0,0,0-5.36,10.74L122,155.71V175a58.09,58.09,0,0,1-35.5,11c-30.71-.77-56.58-27.4-56.5-58.14A57.78,57.78,0,0,1,66.37,74.19a6,6,0,0,0,3.39-3.51,62,62,0,0,1,116.48,0,6,6,0,0,0,3.39,3.51A57.77,57.77,0,0,1,226,127.83C226.08,158.58,200.21,185.2,169.5,186Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M198.1,62.59a76,76,0,0,0-140.2,0A71.71,71.71,0,0,0,16,127.8C15.9,166,48,199,86.14,200A72.09,72.09,0,0,0,120,192.47V232a8,8,0,0,0,16,0V192.47A72.17,72.17,0,0,0,168,200l1.82,0C208,199,240.11,166,240,127.8A71.71,71.71,0,0,0,198.1,62.59ZM169.45,184a56.08,56.08,0,0,1-33.45-10v-41l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94v17a56,56,0,0,1-33.45,10C56.9,183.23,31.92,157.52,32,127.84A55.77,55.77,0,0,1,67.11,76a8,8,0,0,0,4.53-4.67,60,60,0,0,1,112.72,0A8,8,0,0,0,188.89,76,55.79,55.79,0,0,1,224,127.84C224.08,157.52,199.1,183.23,169.45,184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M201.17,59.62a80,80,0,0,0-146.34,0,76,76,0,0,0,61.17,139V232a12,12,0,0,0,24,0V198.64A76.26,76.26,0,0,0,168,204l1.92,0A76,76,0,0,0,201.17,59.62ZM169.35,180A52,52,0,0,1,140,171.79V135.42l41.37-20.69a12,12,0,1,0-10.74-21.46L140,108.58V88a12,12,0,0,0-24,0v44.58L85.37,117.27a12,12,0,0,0-10.74,21.46L116,159.42v12.37A52.24,52.24,0,0,1,86.65,180c-27.53-.69-50.72-24.56-50.65-52.13a51.81,51.81,0,0,1,32.61-48.1,12,12,0,0,0,6.78-7,56,56,0,0,1,105.22,0,12,12,0,0,0,6.78,7A51.81,51.81,0,0,1,220,127.85C220.08,155.41,196.88,179.29,169.35,180Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,187.85a72.44,72.44,0,0,0,8,4.62V232a8,8,0,0,1-16,0V192.47A72.44,72.44,0,0,0,128,187.85ZM198.1,62.59a76,76,0,0,0-140.2,0A71.71,71.71,0,0,0,16,127.8C15.9,166,48,199,86.14,200A72.22,72.22,0,0,0,120,192.47V156.94L76.42,135.16a8,8,0,1,1,7.16-14.32L120,139.06V88a8,8,0,0,1,16,0v27.06l36.42-18.22a8,8,0,1,1,7.16,14.32L136,132.94v59.53A72.17,72.17,0,0,0,168,200l1.82,0C208,199,240.11,166,240,127.8A71.71,71.71,0,0,0,198.1,62.59Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,127.82c.09,33.94-28.41,63.3-62.34,64.16a63.72,63.72,0,0,1-41.66-14,63.71,63.71,0,0,1-41.65,14c-33.93-.86-62.44-30.22-62.35-64.16a64,64,0,0,1,40.13-59.2,68,68,0,0,1,127.74,0A64,64,0,0,1,232,127.82Z" opacity="0.2"/><path d="M198.1,62.59a76,76,0,0,0-140.2,0A71.71,71.71,0,0,0,16,127.8C15.9,166,48,199,86.14,200A72.22,72.22,0,0,0,120,192.47V232a8,8,0,0,0,16,0V192.47A72.17,72.17,0,0,0,168,200l1.82,0C208,199,240.11,166,240,127.8A71.71,71.71,0,0,0,198.1,62.59ZM169.45,184a56.08,56.08,0,0,1-33.45-10v-41l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94v17a56,56,0,0,1-33.45,10C56.9,183.23,31.92,157.52,32,127.84A55.79,55.79,0,0,1,67.11,76a8,8,0,0,0,4.53-4.67,60,60,0,0,1,112.72,0A8,8,0,0,0,188.89,76,55.79,55.79,0,0,1,224,127.84C224.08,157.52,199.1,183.23,169.45,184Z"/>`,
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
      ${PhTree.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTree };
