/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-tent": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-tent": IconAttrs;
    }
  }
}

@customElement("ph-tent")
class PhTent extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M251.66,190.38l-64-144A4,4,0,0,0,184,44H72a4,4,0,0,0-3.63,2.35s0,0,0,0l0,.06h0l-64,143.93A4,4,0,0,0,8,196H248a4,4,0,0,0,3.66-5.62ZM68,66.85V188H14.16ZM76,188V66.85L129.84,188Zm62.6,0L78.16,52H181.4l60.44,136Z"/>`,
    ],
    [
      "light",
      svg`<path d="M253.48,189.56l-64-144A6,6,0,0,0,184,42H72a6,6,0,0,0-5.45,3.51l0,.05,0,.09v0L2.52,189.56A6,6,0,0,0,8,198H248a6,6,0,0,0,5.48-8.44ZM66,76.27V186H17.23ZM78,186V76.27L126.77,186Zm61.9,0L81.23,54H180.1l58.67,132Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Zm61.2,0L84.31,56H178.8l56.89,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M255,187.13l-64-144A12,12,0,0,0,180,36H76a12,12,0,0,0-10.85,6.9,2.42,2.42,0,0,0-.12.23L65,43.3a.08.08,0,0,0,0,0L1,187.13A12,12,0,0,0,12,204H244a12,12,0,0,0,11-16.87ZM64,104.55V180H30.46ZM88,180V104.55L121.54,180Zm59.8,0L94.47,60H172.2l53.34,120Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.31,4.75h0l0,.12v0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M136,192H8L72,48Z" opacity="0.2"/><path d="M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Zm61.2,0L84.31,56H178.8l56.89,128Z"/>`,
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
      ${PhTent.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhTent };
