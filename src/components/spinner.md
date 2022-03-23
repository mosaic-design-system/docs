---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Spinner component. Use the drop-down menus and radio buttons to view the different Spinner Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <svg class="mcc-spinner" viewBox="0 0 50 50">
              <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        name: As default
        modifiers:
          - name: Mono
            selector: .mcc-spinner
            classes:
              - name: Mono
                value: mcc-spinner--mono
            type: class
      - template:
          lang: html
          code: >
            
            <div class="mu-d-flex mu-flex-wrap" style="gap: 0.5rem;">
              <button class="mcc-button mcc-button--primary">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <span class="mcc-button__label">Button</span>
              </button>

              <button class="mcc-button mcc-button--warning">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <span class="mcc-button__label">Button</span>
              </button>

              <button class="mcc-button mcc-button--outline">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <span class="mcc-button__label">Button</span>
              </button>
            </div>
        name: As current color
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: N/A
navigation: button
title: Spinner
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-spinner--as-default
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
