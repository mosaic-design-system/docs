---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo

    Below, you can find a live demo for a Collapse component. Use the drop-down menus and radio buttons to view the different Collapse Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <details class="mcc-collapse">
                <summary>
                  <div class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Collapse</span>
                    <mcc-icon class="mcc-button__dropdown-caret" name="angle_down" aria-hidden="true"></mcc-icon>
                  </div>
                </summary>
                <div class="mcc-collapse-body mu-mt-03">
                  <div class="[ mcc-alert mcc-alert--primary ] [ mu-mb-00 ]" role="alert">
                    <mcc-icon name="ok" icon-set="fluency-outline" aria-hidden="true"></mcc-icon>
                    <div class="mu-d-flex mu-flex-column">
                      <div class="mu-fw-semi-bold">Information title</div>
                      <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
                    </div>
                  </div>
                </div>
              </details>
        name: As default
        modifiers: []
        attributes:
          - name: Open
            selector: .mcc-collapse
            attribute: open
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
title: Collapse
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-collapse--as-opened
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
