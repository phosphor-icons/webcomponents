/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMediumLogo = {
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
      svg`<line x1="24.03516" y1="48.00094" x2="40.03516" y2="48.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="120.03516" y1="48.00094" x2="136.03516" y2="48.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="24.03516" y1="128.00094" x2="48.03516" y2="128.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="112.03516" y1="128.00094" x2="136.03516" y2="128.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176.03516" y1="88.00094" x2="240.03516" y2="88.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176.03516" y1="128.00094" x2="240.03516" y2="128.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="72.03516" y1="168.00094" x2="240.03516" y2="168.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="72.03516" y1="208.00094" x2="240.03516" y2="208.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="40.035 128.001 40.035 48.001 80.035 112.001 120.035 48.001 120.035 128.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="24.01172" y1="56.00094" x2="40.01172" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120.01172" y1="56.00094" x2="136.01172" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="24.01172" y1="136.00094" x2="48.01172" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112.01172" y1="136.00094" x2="136.01172" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168.01172" y1="104.00094" x2="240.01172" y2="104.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168.01172" y1="136.00094" x2="240.01172" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="72.01172" y1="168.00094" x2="240.01172" y2="168.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="72.01172" y1="200.00094" x2="240.01172" y2="200.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="40.012 136.001 40.012 56.001 80.012 120.001 120.012 56.001 120.012 136.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M48.02344,128.00094V83.89547l25.21582,40.34571a8.00063,8.00063,0,0,0,13.56836,0l25.21582-40.34571v44.10547a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16h-8v-64h8a8,8,0,0,0,0-16h-16c-.04,0-.07862.00537-.11817.00586-.15478.00244-.3081.01221-.46191.02344-.11768.0083-.23584.01611-.35205.0293-.12793.01513-.2544.03711-.38135.05859-.13769.02246-.27539.04443-.41064.07422-.103.02246-.20459.05176-.30664.07861-.15088.03955-.30176.07862-.44922.12647-.09424.03076-.186.06836-.2793.10254-.11816.04345-.23926.08105-.35449.12988-.02881.01172-.05518.02734-.0835.04-.104.04492-.20459.09814-.30713.14746-.125.06152-.25146.12061-.373.188s-.23877.14355-.35743.21728c-.09619.06006-.19384.11719-.28711.18116-.1289.08837-.25244.18554-.37695.28173-.07812.061-.1582.11914-.23437.18262-.11914.09961-.23243.20752-.3462.31494-.0581.05469-.12109.10449-.17724.16114-.01807.01757-.0332.03759-.05078.05566-.09766.09961-.18994.20557-.28321.31152-.05957.06787-.125.13086-.18261.20069-.02344.02832-.043.05957-.06592.08838-.07373.09228-.14307.189-.21289.28515-.09082.124-.18067.249-.26416.37842-.02149.0332-.04639.063-.06787.09668l-33.21582,53.146-33.21582-53.146c-.02149-.03369-.04639-.06348-.06787-.09668-.0835-.1294-.17334-.2544-.26416-.37842-.06983-.09619-.13916-.19287-.2129-.28515-.02294-.02881-.043-.06006-.06591-.08838-.05762-.06983-.12256-.13282-.18262-.20069-.09326-.10547-.18555-.21191-.2832-.312-.01758-.01758-.03321-.0376-.05078-.05517-.05616-.05616-.11866-.106-.17627-.16065-.11426-.10791-.228-.21582-.34766-.31592-.0752-.063-.1543-.12011-.23193-.18017-.125-.09717-.24952-.19483-.3794-.28369-.09277-.064-.19043-.1211-.28613-.18116-.11865-.07373-.23584-.14941-.35791-.21679-.12256-.06836-.25-.12793-.37647-.19-.10058-.04882-.20019-.10107-.30273-.1455-.02881-.0127-.05566-.02881-.08447-.04053-.1167-.04981-.23926-.08789-.35889-.13184-.09131-.0332-.18164-.06982-.27393-.10009-.14843-.04834-.30127-.08789-.45361-.12745-.10059-.02636-.20068-.05566-.30225-.07812-.1372-.02979-.27636-.05225-.416-.0752-.125-.0205-.249-.04248-.375-.05712-.11817-.01368-.23828-.02149-.35791-.02979-.15186-.01123-.30322-.02051-.45557-.02344-.04052-.00049-.08008-.00586-.1206-.00586h-16a8,8,0,0,0,0,16h8v64h-8a8,8,0,1,0,0,16h24a8,8,0,0,0,0-16Z"/>
    <path d="M168.02344,112.00094h72a8,8,0,0,0,0-16h-72a8,8,0,0,0,0,16Z"/>
    <path d="M240.02344,128.00094h-72a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z"/>
    <path d="M240.02344,160.00094h-168a8,8,0,0,0,0,16h168a8,8,0,0,0,0-16Z"/>
    <path d="M240.02344,192.00094h-168a8,8,0,0,0,0,16h168a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="24.04688" y1="56.00094" x2="40.04688" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="120.04688" y1="56.00094" x2="136.04688" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="24.04688" y1="136.00094" x2="48.04688" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="112.04688" y1="136.00094" x2="136.04688" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="168.04688" y1="104.00094" x2="240.04688" y2="104.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="168.04688" y1="136.00094" x2="240.04688" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="72.04688" y1="168.00094" x2="240.04688" y2="168.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="72.04688" y1="200.00094" x2="240.04688" y2="200.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="40.047 136.001 40.047 56.001 80.047 120.001 120.047 56.001 120.047 136.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="24.05859" y1="56.00094" x2="40.05859" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="120.05859" y1="56.00094" x2="136.05859" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="24.05859" y1="136.00094" x2="48.05859" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="112.05859" y1="136.00094" x2="136.05859" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="168.05859" y1="104.00094" x2="240.05859" y2="104.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="168.05859" y1="136.00094" x2="240.05859" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="72.05859" y1="168.00094" x2="240.05859" y2="168.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="72.05859" y1="200.00094" x2="240.05859" y2="200.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="40.059 136.001 40.059 56.001 80.059 120.001 120.059 56.001 120.059 136.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="24.07031" y1="56.00094" x2="40.07031" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120.07031" y1="56.00094" x2="136.07031" y2="56.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="24.07031" y1="136.00094" x2="48.07031" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112.07031" y1="136.00094" x2="136.07031" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168.07031" y1="104.00094" x2="240.07031" y2="104.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168.07031" y1="136.00094" x2="240.07031" y2="136.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="72.07031" y1="168.00094" x2="240.07031" y2="168.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="72.07031" y1="200.00094" x2="240.07031" y2="200.00094" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="40.07 136.001 40.07 56.001 80.07 120.001 120.07 56.001 120.07 136.001" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-medium-logo", PhMediumLogo);
export default PhMediumLogo;
