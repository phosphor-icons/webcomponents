/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGitBranch = {
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
  render: ({ color, size, weight, mirrored }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      fill="${color}"
      viewBox="0 0 256 256"
      transform=${mirrored ? "scale(-1, 1)" : undefined}
    >
      <slot />
      ${weight === "bold" && svg`<path d="M68,160v-8.00018a23.99955,23.99955,0,0,1,23.99951-23.99909l72.001-.00146A23.99955,23.99955,0,0,0,188,104.00018V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="68" y1="96" x2="68" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="68" cy="188" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="188" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="68" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="188" cy="67.99756" r="28" opacity="0.2"/>
  <path d="M67.98779,160v-8.00018A23.99955,23.99955,0,0,1,91.9873,128.00073l72.001-.00146a23.99955,23.99955,0,0,0,23.99951-23.99909V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="67.98779" y1="96" x2="67.98779" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="68" cy="188" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="68" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M224.00049,67.99756a36,36,0,1,0-44,35.09289v.9076a16.01865,16.01865,0,0,1-16,16l-72.001.00146a31.80375,31.80375,0,0,0-15.999,4.29444v-21.2035a36,36,0,1,0-16,0V152.9071a36,36,0,1,0,16,0v-.90759a16.01844,16.01844,0,0,1,15.999-16l72.001-.00146a32.0373,32.0373,0,0,0,32-32v-.9076A36.05514,36.05514,0,0,0,224.00049,67.99756Zm-176,0a20,20,0,1,1,20,20A20.0226,20.0226,0,0,1,48.00049,67.99756ZM88.00049,188a20,20,0,1,1-20-20A20.0226,20.0226,0,0,1,88.00049,188Z"/>`}
      ${weight === "light" && svg`<path d="M68,160v-8.00018a23.99955,23.99955,0,0,1,23.99951-23.99909l72.001-.00146A23.99955,23.99955,0,0,0,188,104.00018V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="68" y1="96" x2="68" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="68" cy="188" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="188" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="68" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M68,160v-8.00018a23.99955,23.99955,0,0,1,23.99951-23.99909l72.001-.00146A23.99955,23.99955,0,0,0,188,104.00018V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="68" y1="96" x2="68" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="68" cy="188" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="188" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="68" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="68" cy="188" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="68" cy="67.99756" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M68,160v-8.00018a23.99955,23.99955,0,0,1,23.99951-23.99909l72.001-.00146A23.99955,23.99955,0,0,0,188,104.00018V96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="68" y1="96" x2="68" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-git-branch", PhGitBranch);
export default PhGitBranch;
