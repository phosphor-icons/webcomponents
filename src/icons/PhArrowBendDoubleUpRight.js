/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowBendDoubleUpRight = {
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
      transform=${mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${weight === "bold" &&
      svg`<polyline points="176 152 224 104 176 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="120 152 168 104 120 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M32,200a96,96,0,0,1,96-96h40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="176 152 224 104 176 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="128 152 176 104 128 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,200a96,96,0,0,1,96-96h48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M229.65723,98.34277l-48-48a8.00053,8.00053,0,0,0-11.31446,11.31446L212.68652,104l-42.34375,42.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l48-48A8.00122,8.00122,0,0,0,229.65723,98.34277Z"/>
    <path d="M181.81592,109.48145c.12524-.13282.25122-.26514.36719-.40625.09106-.11084.17114-.22706.25537-.3418.07055-.09522.14477-.188.21093-.28662.085-.12647.15894-.25782.23584-.38819.05567-.09423.11524-.186.16724-.2832.06909-.12891.12817-.26172.1897-.39355.04931-.10547.10205-.209.147-.31641.05225-.127.095-.25586.14063-.38477.042-.11816.08764-.23437.12426-.355.03907-.1289.06787-.25976.10034-.39013.03052-.12305.06519-.24414.09009-.36914.03-.15186.04859-.30469.06983-.45752.01465-.106.03515-.20948.04565-.3169a8.02276,8.02276,0,0,0,0-1.584c-.0105-.10742-.031-.21094-.04565-.3169-.02124-.15283-.0398-.30566-.06983-.45752-.0249-.125-.05957-.24609-.09009-.36914-.03247-.13037-.06127-.26123-.10034-.39013-.03662-.12061-.08227-.23682-.12426-.355-.04566-.12891-.08838-.25782-.14063-.38477-.04492-.10742-.09766-.21094-.147-.31641-.06153-.13183-.12061-.26464-.1897-.39355-.052-.09717-.11157-.189-.16724-.2832-.0769-.13037-.15087-.26172-.23584-.38819-.06616-.09863-.14038-.1914-.21093-.28662-.08423-.11474-.16431-.231-.25537-.3418-.116-.14111-.242-.27343-.36719-.40625-.05445-.0581-.1023-.11914-.15869-.17578l-48-48a8.00053,8.00053,0,0,0-11.31446,11.31446L156.68628,96H128A104.11791,104.11791,0,0,0,24,200a8,8,0,0,0,16,0,88.09957,88.09957,0,0,1,88-88h28.68628l-34.34351,34.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l48-48C181.71362,109.60059,181.76147,109.53955,181.81592,109.48145Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="176 152 224 104 176 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="128 152 176 104 128 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M32,200a96,96,0,0,1,96-96h48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="176 152 224 104 176 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="128 152 176 104 128 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M32,200a96,96,0,0,1,96-96h48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="176 152 224 104 176 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="128 152 176 104 128 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,200a96,96,0,0,1,96-96h48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-bend-double-up-right", PhArrowBendDoubleUpRight);
export default PhArrowBendDoubleUpRight;
