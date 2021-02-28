/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhLeaf = {
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
      ${weight === "bold" &&
      svg`<line x1="160" y1="96" x2="24" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" opacity="0.2"/>
  <line x1="160" y1="96" x2="24" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M39.209,211.792q-.80968-2.382-1.5249-4.78991L18.34326,226.34277a8.00018,8.00018,0,0,0,11.31348,11.31446L48.99805,218.3158q-2.40619-.71943-4.78955-1.52478A8.00059,8.00059,0,0,1,39.209,211.792Z"/>
    <path d="M216.791,44.2085A7.99794,7.99794,0,0,0,211.7915,39.209,135.76626,135.76626,0,0,0,168,32C93.00928,32,32,93.00928,32,168a135.916,135.916,0,0,0,5.68408,39.00208L154.34326,90.34326a7.99984,7.99984,0,0,1,11.31348,11.31348L48.99805,218.3158A135.92719,135.92719,0,0,0,88,224c74.99072,0,136-61.00977,136-136A135.76626,135.76626,0,0,0,216.791,44.2085Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="160" y1="96" x2="24" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="160" y1="96" x2="24" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="160" y1="96" x2="24" y2="232" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-leaf", PhLeaf);
export default PhLeaf;
