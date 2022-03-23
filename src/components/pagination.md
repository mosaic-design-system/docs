---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Pagination component. Use the drop-down menus and radio buttons to view the different Pagination Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <nav class="mcc-pagination" aria-label="Pagination">
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="double_left" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Start</span>
              </button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="back" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Back</span>
              </button>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="forward" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Forward</span>
              </button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="double_right" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">End</span>
              </button>
            </nav>
        name: As default
        modifiers:
          - name: Disabled
            selector: .mcc-pagination button:nth-child(5)
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
title: Pagination
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-pagination--with-active-button
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
  - title: Status
    hook: status
---
