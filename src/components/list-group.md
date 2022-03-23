---
title: List group
toc: true
navigation: button
chips:
  - HTML/CSS
  - Web Component
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-list-group--with-buttons
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


    Below, you can find a live demo for a List Group component. Use the drop-down menus and radio buttons to view the different List Group Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li>Oranges</li>
              <li>Pineapples</li>
              <li>Apples</li>
              <li>Bananas</li>
              <li>Pears</li>
            </ul>
        name: As default
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
      - template:
          lang: html
          code: |-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li>
                <button type="button">Oranges</button>
              </li>
              <li>
                <button type="button">Pineapples</button>
              </li>
              <li>
                <button type="button">Apples</button>
              </li>
              <li>
                <button type="button">Bananas</button>
              </li>
              <li>
                <button type="button">Pears</button>
              </li>
            </ul>
        name: With buttons
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li class="mu-d-flex mu-align-items-center mu-justify-content-between">
                <span>Oranges</span>
                <button class="[ mcc-button mcc-button--outline mcc-button--sm ] [ mu-ml-auto mu-w-auto ]" aria-haspopup="true">
                  <span class="mcc-button__label">Button</span>
                </button>
              </li>
              <li>Pineapples</li>
              <li>Apples</li>
              <li>Bananas</li>
              <li>Pears</li>
            </ul>
        name: With nested buttons
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
      - template:
          lang: html
          code: |-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Oranges
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Pineapples
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Apples
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Bananas
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Pears
                  </span>
                </label>
              </li>
            </ul>
        name: With checkbox
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
---
