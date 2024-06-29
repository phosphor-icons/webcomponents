/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-chart-pie-slice": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-chart-pie-slice": IconAttrs;
    }
  }
}

@customElement("ph-chart-pie-slice")
class PhChartPieSlice extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M100,109.5v-72a4,4,0,0,0-5.33-3.77,100,100,0,0,0-65,112.5A4,4,0,0,0,35.6,149L98,113A4,4,0,0,0,100,109.5Zm-8-2.31L36.67,139.11A92,92,0,0,1,92,43.34ZM128,28a4,4,0,0,0-4,4v94.12L43.2,173.18a4,4,0,0,0-1.43,5.49A100,100,0,1,0,128,28Zm0,192a92.47,92.47,0,0,1-77.22-42L130,131.88a4,4,0,0,0,2-3.46V36.09A92,92,0,0,1,128,220Z"/>`,
    ],
    [
      "light",
      svg`<path d="M102,109.5v-72a6,6,0,0,0-8-5.66A102,102,0,0,0,27.7,146.59a6,6,0,0,0,8.9,4.11l62.4-36A6,6,0,0,0,102,109.5ZM90,106l-51.66,29.8Q38,131.91,38,128A90.1,90.1,0,0,1,90,46.42Zm38-80a6,6,0,0,0-6,6v93L42.2,171.46a6,6,0,0,0-2.15,8.22A102,102,0,1,0,128,26Zm0,192a90.48,90.48,0,0,1-74.38-39.31L131,133.61a6,6,0,0,0,3-5.19V38.2A90,90,0,0,1,128,218Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM128,24a8,8,0,0,0-8,8v91.82L41.19,169.73a8,8,0,0,0-2.87,11A104,104,0,1,0,128,24Zm0,192a88.47,88.47,0,0,1-71.49-36.68l75.52-44a8,8,0,0,0,4-6.92V40.36A88,88,0,0,1,128,216Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M93.82,116.64A12,12,0,0,0,100,106.15V40.74A12,12,0,0,0,83,29.83,108.26,108.26,0,0,0,20,128c0,3.37.16,6.76.47,10.1a12,12,0,0,0,17.76,9.38ZM76,62.06v37L44.81,116.36A84.39,84.39,0,0,1,76,62.06ZM128,20a12,12,0,0,0-12,12v89.53L39.18,166.27a12,12,0,0,0-4.3,16.46A108,108,0,1,0,128,20Zm0,192a84.47,84.47,0,0,1-65.57-31.5L134,138.79a12,12,0,0,0,6-10.37V44.85A84,84,0,0,1,128,212Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM232,128A104,104,0,0,1,38.32,180.7a8,8,0,0,1,2.87-11L120,123.83V32a8,8,0,0,1,8-8,104.05,104.05,0,0,1,89.74,51.48c.11.16.21.32.31.49s.2.37.29.55A103.34,103.34,0,0,1,232,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M96,37.5v72l-62.4,36A96,96,0,0,1,96,37.5Z" opacity="0.2"/><path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM128,24a8,8,0,0,0-8,8v91.82L41.19,169.73a8,8,0,0,0-2.87,11A104,104,0,1,0,128,24Zm0,192a88.47,88.47,0,0,1-71.49-36.68l75.52-44a8,8,0,0,0,4-6.92V40.36A88,88,0,0,1,128,216Z"/>`,
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
      ${PhChartPieSlice.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhChartPieSlice };
