---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Page header component. Use the drop-down menus and radio buttons to view the different Page header Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-page-header" style="width: 100%">
              <section class="mu-d-flex mu-flex-column">
                <h1 class="mu-mb-00">Page header title</h1>
                <span class="mu-text-muted">Subtitle</span>
              </section>
              <section>
                <div class="mcc-button-group mcc-button-group--spaced" role="group" aria-label="Page header buttons">
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--primary">
                    <span class="mcc-button__label">Button</span>
                  </button>
                </div>
              </section>
            </div>
        name: As default
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
title: Page header
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-page-header--as-default
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
