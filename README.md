<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-webcomponents

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/phosphor-webcomponents.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-webcomponents)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-webcomponents?style=flat-square&label=Star)](https://github.com/phosphor-icons/phosphor-webcomponents)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-webcomponents?style=flat-square&label=Fork)](https://github.com/phosphor-icons/phosphor-webcomponents/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-webcomponents?style=flat-square&label=Watch)](https://github.com/phosphor-icons/phosphor-webcomponents)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

```bash
yarn add phosphor-webcomponents
```

or

```bash
npm install --save phosphor-webcomponents
```

## Usage

Simply import the icons you need, and add them anywhere in your render method. Phosphor supports tree-shaking, so your bundle only includes code for the icons you use.

```html
<!DOCTYPE html>
<html>
  <head>
    <script async src="https://unpkg.com/phosphor-webcomponents"></script>
  </head>
  <body>
    <ph-horse></ph-horse>
    <ph-heart color="crimson" weight="fill"></ph-heart>
    <ph-cube></ph-cube>
  </body>
</html>
```

### Styling

Icon components can be styled with the following attributes:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. This can be a number (defaults to pixels), or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

### Composability **TODO**

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components can accept arbitrary SVG elements as children, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```html
<html>
  <head>
    <script async src="https://unpkg.com/phosphor-webcomponents"></script>
  </head>
  <body>
    <ph-cube color="darkorchid" weight="duotone">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </ph-cube>
  </body>
</html>
```

> **Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

## Related Projects

- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) ▲ Phosphor icon component library for React
- [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) ▲ Phosphor icon component library for Vue
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
