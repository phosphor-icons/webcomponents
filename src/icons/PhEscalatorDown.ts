/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-escalator-down": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-escalator-down": IconAttrs;
    }
  }
}

@customElement("ph-escalator-down")
class PhEscalatorDown extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M173.17,82.83a4,4,0,0,1,5.66-5.66L196,94.34V48a4,4,0,0,1,8,0V94.34l17.17-17.17a4,4,0,1,1,5.66,5.66l-24,24a4,4,0,0,1-5.66,0ZM236,160v40a12,12,0,0,1-12,12H168a4,4,0,0,1-2.94-1.29L70.25,108H32A12,12,0,0,1,20,96V56A12,12,0,0,1,32,44H88a4,4,0,0,1,2.94,1.29L185.75,148H224A12,12,0,0,1,236,160Zm-8,0a4,4,0,0,0-4-4H184a4,4,0,0,1-2.94-1.29L86.25,52H32a4,4,0,0,0-4,4V96a4,4,0,0,0,4,4H72a4,4,0,0,1,2.94,1.29L169.75,204H224a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M171.76,84.24a6,6,0,0,1,8.48-8.48L194,89.51V48a6,6,0,0,1,12,0V89.51l13.76-13.75a6,6,0,0,1,8.48,8.48l-24,24a6,6,0,0,1-8.48,0ZM238,160v40a14,14,0,0,1-14,14H168a6,6,0,0,1-4.41-1.93L69.37,110H32A14,14,0,0,1,18,96V56A14,14,0,0,1,32,42H88a6,6,0,0,1,4.41,1.93L186.63,146H224A14,14,0,0,1,238,160Zm-12,0a2,2,0,0,0-2-2H184a6,6,0,0,1-4.41-1.93L85.37,54H32a2,2,0,0,0-2,2V96a2,2,0,0,0,2,2H72a6,6,0,0,1,4.41,1.93L170.63,202H224a2,2,0,0,0,2-2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM240,160v40a16,16,0,0,1-16,16H168a8,8,0,0,1-5.88-2.57L68.5,112H32A16,16,0,0,1,16,96V56A16,16,0,0,1,32,40H88a8,8,0,0,1,5.88,2.57L187.5,144H224A16,16,0,0,1,240,160Zm-16,0H184a8,8,0,0,1-5.88-2.57L84.5,56H32V96H72a8,8,0,0,1,5.88,2.57L171.5,200H224Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M167.51,88.49a12,12,0,0,1,17-17L188,75V48a12,12,0,0,1,24,0V75l3.51-3.52a12,12,0,0,1,17,17l-24,24a12,12,0,0,1-17,0ZM244,160v40a20,20,0,0,1-20,20H168a12,12,0,0,1-8.82-3.86L66.75,116H32A20,20,0,0,1,12,96V56A20,20,0,0,1,32,36H88a12,12,0,0,1,8.82,3.86L189.25,140H224A20,20,0,0,1,244,160Zm-24,4H184a12,12,0,0,1-8.82-3.86L82.75,60H36V92H72a12,12,0,0,1,8.82,3.86L173.25,196H220Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM224,144H187.5L93.88,42.57A8,8,0,0,0,88,40H32A16,16,0,0,0,16,56V96a16,16,0,0,0,16,16H68.5l93.62,101.43A8,8,0,0,0,168,216h56a16,16,0,0,0,16-16V160A16,16,0,0,0,224,144Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,160v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88l96,104h40A8,8,0,0,1,232,160Z" opacity="0.2"/><path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM240,160v40a16,16,0,0,1-16,16H168a8,8,0,0,1-5.88-2.57L68.5,112H32A16,16,0,0,1,16,96V56A16,16,0,0,1,32,40H88a8,8,0,0,1,5.88,2.57L187.5,144H224A16,16,0,0,1,240,160Zm-16,0H184a8,8,0,0,1-5.88-2.57L84.5,56H32V96H72a8,8,0,0,1,5.88,2.57L171.5,200H224Z"/>`,
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
      ${PhEscalatorDown.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhEscalatorDown };
