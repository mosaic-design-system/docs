---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-progress-bar" style="mx-width: 500px; width: 100%;">
              <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
            </div>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-progress-bar
            classes:
              - name: Primary
                value: mcc-progress-bar--primary
                default: true
              - name: Secondary
                value: mcc-progress-bar--secondary
              - name: Success
                value: mcc-progress-bar--success
              - name: Danger
                value: mcc-progress-bar--danger
              - name: Warning
                value: mcc-progress-bar--warning
              - name: Info
                value: mcc-progress-bar--info
            type: class
            select_multiple: false
          - name: Height
            selector: .mcc-progress-bar
            classes:
              - name: Extra small
                value: mcc-progress-bar--xs
              - name: Small
                value: mcc-progress-bar--sm
              - name: Medium (default)
                value: mcc-progress-bar
                default: true
              - name: Large
                value: mcc-progress-bar--lg
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-progress-bar mcc-progress-bar--striped"
            style="mx-width: 500px; width: 100%;">
              <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
            </div>
        name: As striped
        modifiers:
          - name: Colours
            selector: .mcc-progress-bar
            classes:
              - name: Primary
                value: mcc-progress-bar--primary
                default: true
              - name: Secondary
                value: mcc-progress-bar--secondary
              - name: Success
                value: mcc-progress-bar--success
              - name: Danger
                value: mcc-progress-bar--danger
              - name: Warning
                value: mcc-progress-bar--warning
              - name: Info
                value: mcc-progress-bar--info
            type: class
            select_multiple: false
          - name: Height
            selector: .mcc-progress-bar
            classes:
              - name: Extra small
                value: mcc-progress-bar--xs
              - name: Small
                value: mcc-progress-bar--sm
              - name: Medium (default)
                value: mcc-progress-bar
                default: true
              - name: Large
                value: mcc-progress-bar--lg
            type: class
            select_multiple: false
          - name: Animated
            selector: .mcc-progress-bar
            classes:
              - name: Animated
                value: mcc-progress-bar--animated
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: N/A
navigation: button
title: Progress bar
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-progress-bar--as-default
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
