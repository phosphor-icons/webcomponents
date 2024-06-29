/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-compass-tool": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-compass-tool": IconAttrs;
    }
  }
}

@customElement("ph-compass-tool")
class PhCompassTool extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M211.56,121.82a4,4,0,1,0-7.12-3.64,84.05,84.05,0,0,1-38.58,37.16l-19.68-44.29A36,36,0,0,0,132,44.23V24a4,4,0,0,0-8,0V44.23a36,36,0,0,0-14.18,66.82L60.35,222.37a4,4,0,0,0,2,5.28A3.88,3.88,0,0,0,64,228a4,4,0,0,0,3.66-2.38l26.66-60A91.4,91.4,0,0,0,128,172a95.21,95.21,0,0,0,33.75-6.22l26.59,59.84A4,4,0,0,0,192,228a3.88,3.88,0,0,0,1.62-.35,4,4,0,0,0,2-5.28l-26.54-59.73A92,92,0,0,0,211.56,121.82ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,84a83.43,83.43,0,0,1-30.43-5.68l19.56-44a36,36,0,0,0,21.74,0l19.63,44.15A87.44,87.44,0,0,1,128,164Z"/>`,
    ],
    [
      "light",
      svg`<path d="M213.34,122.73a6,6,0,1,0-10.68-5.46,81.79,81.79,0,0,1-35.81,35.36l-18.14-40.8A38,38,0,0,0,134,42.48V24a6,6,0,0,0-12,0V42.48a38,38,0,0,0-14.71,69.35L58.52,221.56a6,6,0,1,0,11,4.88l25.9-58.26A93.37,93.37,0,0,0,128,174a97,97,0,0,0,32.68-5.69l25.84,58.13a6,6,0,1,0,11-4.88l-25.77-58A93.92,93.92,0,0,0,213.34,122.73ZM128,54a26,26,0,1,1-26,26A26,26,0,0,1,128,54Zm0,108a81.51,81.51,0,0,1-27.73-4.83l18-40.45a37.85,37.85,0,0,0,19.52,0l18,40.6A85.34,85.34,0,0,1,128,162Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-16.58-37.32A40,40,0,0,0,136,40.8V24a8,8,0,0,0-16,0V40.8a40,40,0,0,0-15.22,71.74L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56Zm0,104a79.52,79.52,0,0,1-25-4l16.42-36.94a39.81,39.81,0,0,0,17.2,0l16.48,37.06A83.21,83.21,0,0,1,128,160Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M218.68,125.46a12,12,0,1,0-21.37-10.92,75.15,75.15,0,0,1-27.66,29.64l-13.5-30.39A44,44,0,0,0,140,37.68V24a12,12,0,0,0-24,0V37.68a44,44,0,0,0-16.15,76.11L53,219.12A12,12,0,0,0,59.13,235,11.86,11.86,0,0,0,64,236a12,12,0,0,0,11-7.13l23.67-53.26A99.52,99.52,0,0,0,128,180a102.81,102.81,0,0,0,29.39-4.32L181,228.87A12,12,0,0,0,192,236a11.85,11.85,0,0,0,4.86-1A12,12,0,0,0,203,219.12l-23.51-52.9A99.39,99.39,0,0,0,218.68,125.46ZM128,60a20,20,0,1,1-20,20A20,20,0,0,1,128,60Zm0,96a75.8,75.8,0,0,1-19.52-2.53l13.3-29.92a43.21,43.21,0,0,0,12.44,0l13.33,30A79.11,79.11,0,0,1,128,156Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-18.24-41.05A36,36,0,0,0,136,44.91V24a8,8,0,0,0-16,0V44.91a36,36,0,0,0-13.56,63.9L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,160a79.52,79.52,0,0,1-25-4l18.08-40.68a35.75,35.75,0,0,0,13.88,0l18.14,40.8A83.21,83.21,0,0,1,128,160Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M160,80a32,32,0,1,1-32-32A32,32,0,0,1,160,80Z" opacity="0.2"/><path d="M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-16.58-37.32A40,40,0,0,0,136,40.8V24a8,8,0,0,0-16,0V40.8a40,40,0,0,0-15.22,71.74L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56Zm0,104a79.52,79.52,0,0,1-25-4l16.42-36.94a39.81,39.81,0,0,0,17.2,0l16.48,37.06A83.21,83.21,0,0,1,128,160Z"/>`,
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
      ${PhCompassTool.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhCompassTool };
