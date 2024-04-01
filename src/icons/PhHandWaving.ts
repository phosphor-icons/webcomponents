/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-hand-waving": PhHandWaving;
  }
}

@customElement("ph-hand-waving")
class PhHandWaving extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216.71,102,199.4,72a24,24,0,0,0-43.57,4.52L134.74,40a24,24,0,0,0-43.69,4.9A24,24,0,0,0,51.61,72l5.31,9.19a24,24,0,0,0-25.71,35.47l40,69.32a83.4,83.4,0,0,0,51,39.14,84.45,84.45,0,0,0,21.88,2.9,84,84,0,0,0,72.6-126Zm.67,61.67A76,76,0,0,1,78.16,182l-40-69.32a16,16,0,0,1,27.71-16L85.09,130A4,4,0,0,0,92,126L58.54,68A16,16,0,1,1,86.25,52l31.17,54a4,4,0,1,0,6.93-4L100.1,60a16,16,0,0,1,27.72-16l35,60.63a44,44,0,0,0-7.28,57.61,4,4,0,1,0,6.62-4.49,36,36,0,0,1,8.22-49,4,4,0,0,0,1.07-5.2L164.76,92a16,16,0,1,1,27.71-16l17.31,30A75.52,75.52,0,0,1,217.38,163.65ZM188.12,32.74A4,4,0,0,1,193,29.9,55.65,55.65,0,0,1,227.11,56l.33.58A4,4,0,0,1,226,62a4,4,0,0,1-5.47-1.46l-.33-.57A47.62,47.62,0,0,0,191,37.63,4,4,0,0,1,188.12,32.74ZM77.75,234.48A4,4,0,0,1,74.61,236a4,4,0,0,1-2.47-.86A115.55,115.55,0,0,1,43.53,202a4,4,0,1,1,6.92-4,107.72,107.72,0,0,0,26.64,30.86A4,4,0,0,1,77.75,234.48Z"/>`,
    ],
    [
      "light",
      svg`<path d="M218.44,101,201.13,71a26,26,0,0,0-45.58,1L136.47,39a26,26,0,0,0-46.14,2.19A26,26,0,0,0,49.88,73l3.29,5.7a26,26,0,0,0-23.69,39L69.5,187a85.44,85.44,0,0,0,52.21,40.08,86.71,86.71,0,0,0,22.4,3,86,86,0,0,0,74.33-129Zm-3,62.16A74,74,0,0,1,79.89,181l-40-69.32a14,14,0,0,1,24.25-14L83.36,131a6,6,0,0,0,10.39-6L60.27,67A14,14,0,1,1,84.52,53l31.17,54a6,6,0,0,0,5.2,3,5.9,5.9,0,0,0,3-.81,6,6,0,0,0,2.2-8.2L101.83,59a14,14,0,0,1,24.25-14l34.2,59.23a46,46,0,0,0-6.4,59.13,6,6,0,0,0,9.94-6.73,34,34,0,0,1,7.76-46.26,6,6,0,0,0,1.6-7.8L166.49,91a14,14,0,1,1,24.25-14l17.31,30A73.53,73.53,0,0,1,215.44,163.14ZM186.18,32.22A6,6,0,0,1,193.52,28a57.59,57.59,0,0,1,35.32,27l.33.57a6,6,0,1,1-10.39,6l-.33-.57a45.69,45.69,0,0,0-28-21.43A6,6,0,0,1,186.18,32.22ZM79.32,235.71a6,6,0,0,1-8.42,1A117.79,117.79,0,0,1,41.79,203a6,6,0,0,1,10.4-6,105.48,105.48,0,0,0,26.14,30.29A6,6,0,0,1,79.32,235.71Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M220.17,100,202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M184.63,23.14a12,12,0,0,1,15-8A72.34,72.34,0,0,1,228.4,32a12,12,0,0,1-16.58,17.35,48.31,48.31,0,0,0-19.2-11.2A12,12,0,0,1,184.63,23.14ZM232.85,167.8A92,92,0,0,1,64.31,190l-40-69.32A32,32,0,0,1,36,77a31.72,31.72,0,0,1,7.54-3.14A32,32,0,0,1,88.65,32.45a32,32,0,0,1,53,3.55l14.53,25.17A32,32,0,0,1,206.35,68l17.31,30A91.38,91.38,0,0,1,232.85,167.8Zm-30-57.81L185.57,80a8,8,0,0,0-13.86,8h0l6.68,11.57a12,12,0,0,1-3.18,15.59,28,28,0,0,0-6.41,38.1,12,12,0,1,1-19.86,13.46,52.05,52.05,0,0,1,3.9-63.4L120.9,48A8,8,0,0,0,107,56l24.25,42a12,12,0,1,1-20.78,12L79.33,56a8,8,0,0,0-13.85,8L99,122a12,12,0,0,1-20.78,12L58.93,100.67a8,8,0,1,0-13.85,8L85.1,178a68,68,0,0,0,117.78-68ZM50.46,198a12,12,0,1,0-20.78,12,132.79,132.79,0,0,0,20,26.38,12,12,0,1,0,17.17-16.76A109.2,109.2,0,0,1,50.46,198Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M219.31,98.46A88,88,0,1,1,67.08,186.77h0L26.15,115.88a16,16,0,0,1,27.69-16L72.4,132a8,8,0,0,0,13.86-8L47,56A16,16,0,0,1,74.69,40L114,108a8,8,0,1,0,13.85-8l-30-52a16,16,0,0,1,27.71-16L166,102.12A48.25,48.25,0,0,0,152,136a47.59,47.59,0,0,0,9.6,28.8,8,8,0,1,0,12.79-9.61A32,32,0,0,1,181,110.26a8,8,0,0,0,2.17-10.43L171.71,80a16,16,0,0,1,27.71-16l19.89,34.46Zm-29.37-57A43.74,43.74,0,0,1,216.74,62l.33.57a8,8,0,0,0,13.86-8L230.6,54a59.64,59.64,0,0,0-36.54-28,8,8,0,0,0-4.12,15.46ZM79.58,225.72A103.58,103.58,0,0,1,53.93,196a8,8,0,0,0-13.86,8,119.56,119.56,0,0,0,29.6,34.28,8,8,0,0,0,9.91-12.56Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M184,213.27A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L55.08,70A20,20,0,0,1,89.73,50l6.92,12h0a20,20,0,0,1,34.64-20l30,52A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,184,213.27Z" opacity="0.2"/><path d="M220.17,100,202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z"/>`,
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
      ${PhHandWaving.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhHandWaving };
