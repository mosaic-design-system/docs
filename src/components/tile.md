---
title: Tile
toc: true
navigation: button
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-tile--as-default
tabs:
  - title: Usage
    body: ""
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Tile component. Use the drop-down menus and radio buttons to view the different Tile Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button type="button" class="mcc-tile">
              <span>Tile</span>
            </button>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: |-
            <button type="button" class="mcc-tile">
              <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
              <span>Tile</span>
            </button>
        name: With icon
        modifiers: []
---
