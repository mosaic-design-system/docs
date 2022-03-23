---
title: Timeline
toc: true
navigation: button
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-timeline--as-default
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


    Below, you can find a live demo for a Timeline component. Use the drop-down menus and radio buttons to view the different Timeline Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-timeline">
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-timeline-item__badge
            classes:
              - value: mcc-timeline-item__badge--primary
                name: Primary
                default: true
              - value: mcc-timeline-item__badge--secondary
                name: Secondary
              - value: mcc-timeline-item__badge--success
                name: Success
              - value: mcc-timeline-item__badge--danger
                name: Danger
              - value: mcc-timeline-item__badge--warning
                name: Warning
              - value: mcc-timeline-item__badge--info
                name: Info
            select_multiple: true
            type: class
          - name: Separator
            selector: .mcc-timeline
            classes:
              - name: Separator
                value: mcc-timeline--separator
            type: class
          - name: Spanned
            selector: .mcc-timeline
            classes:
              - name: Spanned
                value: mcc-timeline--spanned
            type: class
      - template:
          lang: html
          code: >-
            <div class="mcc-timeline">
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
        name: With icon
        modifiers:
          - name: Colours
            selector: .mcc-timeline-item__badge
            classes:
              - value: mcc-timeline-item__badge--primary
                name: Primary
                default: true
              - value: mcc-timeline-item__badge--secondary
                name: Secondary
              - value: mcc-timeline-item__badge--success
                name: Success
              - value: mcc-timeline-item__badge--danger
                name: Danger
              - value: mcc-timeline-item__badge--warning
                name: Warning
              - value: mcc-timeline-item__badge--info
                name: Info
            select_multiple: true
            type: class
          - name: Separator
            selector: .mcc-timeline
            classes:
              - name: Separator
                value: mcc-timeline--separator
            type: class
          - name: Spanned
            selector: .mcc-timeline
            classes:
              - name: Spanned
                value: mcc-timeline--spanned
            type: class
      - template:
          lang: html
          code: |-
            <div class="mcc-timeline mcc-timeline--condensed">
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
        name: As condensed
---
