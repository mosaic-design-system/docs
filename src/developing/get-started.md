---
title: Get started
order: 1
toc: true
---
# Getting Started

The core components are a set of HTML and custom element components that are deployed to the Advanced CDN.

## [](https://tessera.oneadvanced.io/dev/components-core/iframe.html?id=getting-started--page&viewMode=docs#important-globals)Important globals

Mosaic Design System UI components employ a handful of important global styles that are packaged in the below stylesheet.

```html
<link href="https://cdn.svc.oneadvanced.com/tessera/components-core/2.8.1/css/mosaic-global.css" rel="stylesheet">
```

## [](https://tessera.oneadvanced.io/dev/components-core/iframe.html?id=getting-started--page&viewMode=docs#html-components)HTML components

Each HTML component has its own CSS file that can be loaded by URL from the Advanced CDN.

```html
<link href="https://cdn.svc.oneadvanced.com/tessera/components-core/2.8.1/components/html/alert/css/alert.css" rel="stylesheet">
```

## [](https://tessera.oneadvanced.io/dev/components-core/iframe.html?id=getting-started--page&viewMode=docs#custom-element-components)Custom element components

Custom element components should be consumed by URL from the Advanced CDN using [ES module imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

These components are built using [MosaicJS](https://developer.oneadvanced.io/mosaic-js/) and distributed as modules. Visit [the MosaicJS documentation](https://developer.oneadvanced.io/mosaic-js/modules/) to learn more about modules.

### [](https://tessera.oneadvanced.io/dev/components-core/iframe.html?id=getting-started--page&viewMode=docs#loading-individual-components)Loading individual components

Individual custom element components can be loaded by URL from the Advanced CDN.

```javascript
import { alert } from 'https://cdn.svc.oneadvanced.com/tessera/components-core/2.8.1/components/custom-elements/alert/index.js'

// load the alert component
use(alert)
```

### [](https://tessera.oneadvanced.io/dev/components-core/iframe.html?id=getting-started--page&viewMode=docs#loading-multiple-components)Loading multiple components

A loader is available for importing multiple custom element components. The `loadComponents` function returns a `Promise` and can import multiple components.

```javascript
import { loadComponents } from 'https://cdn.svc.oneadvanced.com/tessera/components-core/2.8.1/components/loader/index.js'

// set the components you want to load
loadComponents(use, ['alert', 'dialog'])
  .then(() => {
    // do other stuff
  })
```

When invoking the `loadComponents` function, the following arguments must be provided.

| Argument     | Type       | Description                                                                                                      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `use`        | `function` | The `use` function provided to your module. [Find out more](https://developer.oneadvanced.io/mosaic-js/modules/) |
| `components` | `array`    | The array of component names to load. For example `['alert', 'dialog']`                                          |

### CSS

Each custom element component has its own CSS file that can be loaded by URL from the Advanced CDN.

```html
<link href="https://cdn.svc.oneadvanced.com/tessera/components-core/2.8.1/components/custom-elements/alert/css/alert.css" rel="stylesheet">
```

## [](https://tessera.oneadvanced.io/dev/components-core/iframe.html?id=getting-started--page&viewMode=docs#package-css)Package CSS

All core components are also packaged into a single CSS file. **Please note this file still needs optimising as it contains duplication. Please only use while testing/experimenting.**

```html
<link href="https://cdn.svc.oneadvanced.com/tessera/components-core/2.8.1/css/core.css" rel="stylesheet">
```