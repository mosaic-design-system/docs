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


    Below, you can find a live demo for an Dropdown component. Use the drop-down menus and radio buttons to view the different Dropdown Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: As default
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With alignment
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li class="mcc-dropdown__header">Dropdown header</li>
                <div class="mcc-dropdown__divider"></div>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With header
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <div class="mcc-dropdown__divider"></div>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With divider
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button" disabled>Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button class="mu-is-disabled" type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With disabled button
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">
                    <mcc-icon name="does-not-exist"></mcc-icon>
                    <div>Button</div>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <mcc-icon name="does-not-exist"></mcc-icon>
                    <div>Button</div>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <mcc-icon name="does-not-exist"></mcc-icon>
                    <div>Button</div>
                  </button>
                </li>
              </ul>
            </details>
        name: With icon
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">
                    <span>Button</span>
                    <mcc-icon class="mu-ml-auto mu-mr-00" name="does-not-exist"></mcc-icon>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <span>Button</span>
                    <mcc-icon class="mu-ml-auto mu-mr-00" name="does-not-exist"></mcc-icon>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <span>Button</span>
                    <mcc-icon class="mu-ml-auto mu-mr-00" name="does-not-exist"></mcc-icon>
                  </button>
                </li>
              </ul>
            </details>
        name: With trailing icon
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <label class="[ mcc-dropdown__item mfc-checkbox-wrapper ] [ mu-d-flex mu-justify-content-between mu-flex-nowrap ]">
                  <span>Checkbox item</span>
                  <span>
                    <input type="checkbox" value="">
                  </span>
                </label>
              </ul>
            </details>
        name: With checkbox item
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--outline mcc-button--icon-only">
                  <mcc-icon name="menu_2" aria-hidden="true"></mcc-icon>
                  <span class="mcc-button__label">Dropdown</span>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: As overflow menu
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
title: Dropdown
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-dropdown--as-default
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
