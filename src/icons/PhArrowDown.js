/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowDown = {
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
      ${weight === "bold" && svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56 144 128 216 200 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 144 128 216 200 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M205.65674,138.34277a8.00182,8.00182,0,0,0-11.31348,0L136,196.68652V40a8,8,0,0,0-16,0V196.68652L61.65674,138.34277a8.00018,8.00018,0,0,0-11.31348,11.31446l72,72c.02588.02612.05469.0476.08106.07324.16211.158.32861.31128.50341.45508.09766.08032.20118.15039.30176.22534.1084.08105.21485.16528.32764.241.11621.07788.2373.1455.35693.21679.10449.06226.20655.12793.31446.18579.12011.06421.24414.1189.36669.17676.11426.054.22657.11084.34327.15942.11816.04883.23925.08838.35937.13135.126.04541.251.09375.37988.13282.11963.03613.24122.06274.36231.09326.13183.0332.26269.07031.397.09692.13965.02759.28028.04419.42041.06421.11817.01685.23389.03931.353.051.26269.02587.52588.03979.78955.03979s.52686-.01392.78955-.03979c.11914-.01172.23486-.03418.353-.051.14013-.02.28076-.03662.42041-.06421.13428-.02661.26513-.06372.397-.09692.12109-.03052.24268-.05713.36231-.09326.1289-.03907.2539-.08741.37988-.13282.12012-.043.24121-.08252.35937-.13135.1167-.04858.229-.10546.34327-.15942.12255-.05786.24658-.11255.36669-.17676.10791-.05786.21-.12353.31446-.18579.11963-.07129.24072-.13891.35693-.21679.11279-.07569.21924-.15992.32764-.241.10058-.075.2041-.145.30176-.22534.17822-.14624.34765-.30225.51269-.46338.023-.02271.04883-.04175.07178-.06494l72-72A8.00034,8.00034,0,0,0,205.65674,138.34277Z"/>`}
      ${weight === "light" && svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56 144 128 216 200 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56 144 128 216 200 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 144 128 216 200 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-down", PhArrowDown);
export default PhArrowDown;
