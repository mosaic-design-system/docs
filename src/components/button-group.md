---
title: Button group
toc: true
navigation: button
chips:
  - HTML/CSS
  - Web Component
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button-group--as-default
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


    Below, you can find a live demo for a Button Group component. Use the drop-down menus and radio buttons to view the different Button Group Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-button-group" role="group" aria-label="Default
            example">
              <button class="mcc-button mcc-button--primary">
                <span class="mcc-button__label">Button</span>
              </button>
              <button class="mcc-button mcc-button--primary">
                <span class="mcc-button__label">Button</span>
              </button>
              <button class="mcc-button mcc-button--primary">
                <span class="mcc-button__label">Button</span>
              </button>
            </div>
        name: As default
        modifiers:
          - name: Size
            selector: .mcc-button-group
            classes:
              - name: Small
                value: mcc-button-group--sm
              - name: Medium (default)
                value: mcc-button-group
                default: true
              - name: Large
                value: mcc-button-group--lg
            type: class
            select_multiple: false
          - name: Spaced
            selector: .mcc-button-group
            classes:
              - name: Spaced
                value: mcc-button-group--spaced
            type: class
            select_multiple: false
          - name: Vertical
            selector: .mcc-button-group
            classes:
              - name: Vertical
                value: mcc-button-group--vertical
            type: class
            select_multiple: false
          - name: Block
            selector: .mcc-button-group
            classes:
              - name: Block
                value: mcc-button-group--block
            type: class
            select_multiple: false
---
