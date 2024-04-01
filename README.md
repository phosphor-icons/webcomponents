<img src="/meta/phosphor-mark-tight-black.png" width="128" align="right" />

# @phosphor-icons/webcomponents

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/@phosphor-icons/webcomponents.svg?style=flat-square)](https://www.npmjs.com/package/@phosphor-icons/webcomponents)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/webcomponents?style=flat-square&label=Star)](https://github.com/phosphor-icons/webcomponents)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/webcomponents?style=flat-square&label=Fork)](https://github.com/phosphor-icons/webcomponents/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/webcomponents?style=flat-square&label=Watch)](https://github.com/phosphor-icons/webcomponents)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

To add Phosphor web components to your app via CDN, you can include the following in the `<head>` of the document:

```html
<script type="module" src="https://unpkg.com/@phosphor-icons/webcomponents@2.1"></script>
```

To use within ES modules, install the package and import once near the root of your app:

```bash
yarn add @phosphor-icons/webcomponents
```

or

```bash
npm install --save @phosphor-icons/webcomponents
```

Then

```ts
import "@phosphor-icons/webcomponents";
```

## Usage

Add the custom elements to the document, using the `ph-` prefixed name of the icon as the custom element name:

```html
<body>
  <ph-horse></ph-horse>
  <ph-heart color="crimson" weight="fill"></ph-heart>
  <ph-cube></ph-cube>
</body>
```

### Styling

Icon components can be styled with the following attributes:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. This can be a number (defaults to pixels), or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

## Our Related Projects

- [@phosphor-icons/homepage](https://github.com/phosphor-icons/homepage) ▲ Phosphor homepage and general info
- [@phosphor-icons/core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets and catalog
- [@phosphor-icons/react](https://github.com/phosphor-icons/react) ▲ Phosphor icon component library for React
- [@phosphor-icons/web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [@phosphor-icons/elm](https://github.com/phosphor-icons/phosphor-elm) ▲ Phosphor icons for Elm
- [@phosphor-icons/flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [@phosphor-icons/figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [@phosphor-icons/sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views
- [wordpress-phosphor-icons-block](https://github.com/robruiz/phosphor-icons-block) ▲ Phosphor icon block for use in WordPress v5.8+

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/phosphor-home)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)

