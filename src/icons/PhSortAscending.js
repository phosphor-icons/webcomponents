/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSortAscending = {
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
      ${weight === "bold" && svg`<polyline points="144 167.994 184 207.994 223.999 168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184" y1="111.99347" x2="184" y2="207.99347" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="63.99353" x2="183.99902" y2="63.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="191.99353" x2="104" y2="191.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="144 167.994 184 207.994 223.999 168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="111.99347" x2="184" y2="207.99347" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="63.99353" x2="183.99902" y2="63.99353" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="191.99353" x2="104" y2="191.99353" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <path d="M229.65625,162.34412a8,8,0,0,0-11.31348-.001L192,188.682V111.99353a8,8,0,0,0-16,0v76.686L149.65723,162.3363a8.00036,8.00036,0,0,0-11.314,11.31446l40,40c.02588.02588.05469.04785.08106.07324.16211.15771.32861.31152.50341.45508.09864.08056.20166.15137.30274.22656.1084.08057.21387.16455.32617.23975.11719.07812.23926.14648.35938.21826.10351.06152.20507.12695.312.18408.12109.06494.2456.11963.36865.17773.11377.05372.2251.11036.3418.1587.11865.04882.24023.08886.36035.13183.126.04492.25.09326.3789.13233.11963.03662.2417.063.36329.09326.13183.0332.26171.07031.396.09668.14014.02783.28125.04443.42236.06445.11719.01709.23243.03906.35108.05078.26269.02588.52588.04.78955.04s.52686-.01416.78906-.04c.12012-.01172.23682-.03418.35547-.05127.13965-.02.2793-.03613.418-.06347.13574-.02686.26758-.06446.40137-.09815.11914-.03027.23925-.05615.35791-.0918.13037-.04.25683-.08886.38427-.13476.11866-.04248.2378-.08154.3545-.12988.11914-.04932.2334-.10743.35009-.16211.12012-.05713.2417-.11035.35987-.17334.11084-.05957.21679-.12744.32422-.1919.11621-.06933.23339-.13476.34668-.21045.11816-.0791.22949-.16748.34326-.25244.09521-.07129.19336-.13769.28613-.21387q.29-.238.55615-.50244c.00928-.00927.02-.01709.0293-.02685l39.999-39.99317A7.99958,7.99958,0,0,0,229.65625,162.34412Z"/>
    <path d="M119.999,119.99353H48a8,8,0,0,0,0,16h71.999a8,8,0,1,0,0-16Z"/>
    <path d="M48,71.99353H183.999a8,8,0,0,0,0-16H48a8,8,0,1,0,0,16Z"/>
    <path d="M104,183.99353H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" && svg`<polyline points="144 167.994 184 207.994 223.999 168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="111.99347" x2="184" y2="207.99347" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="63.99353" x2="183.99902" y2="63.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="191.99353" x2="104" y2="191.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="144 167.994 184 207.994 223.999 168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="111.99347" x2="184" y2="207.99347" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="63.99353" x2="183.99902" y2="63.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="191.99353" x2="104" y2="191.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="144 167.994 184 207.994 223.999 168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="111.99347" x2="184" y2="207.99347" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="63.99353" x2="183.99902" y2="63.99353" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="191.99353" x2="104" y2="191.99353" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-sort-ascending", PhSortAscending);
export default PhSortAscending;
