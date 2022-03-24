---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Menu component. Use the drop-down menus and radio buttons to view the different Menu Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <nav class="mcc-menu" style="max-width: 400px; width: 100%">
              <div class="mcc-menu__title">Title</div>
              <div class="mcc-menu__subtitle">Subtitle</div>
              <button class="mcc-menu__button" type="button">
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span>Button</span>
              </button>
              <div class="mcc-menu__split-button">
                <button class="mcc-menu__button" type="button">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  <span>Split button</span>
                </button>
                <details class="mcc-dropdown mcc-dropdown--sw">
                  <summary>
                    <div class="mcc-menu__button">
                      <mcc-icon class="mcc-menu__overflow-icon" name="menu_2"></mcc-icon>
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
              </div>
              <div class="mcc-menu__subtitle">Subtitle</div>
              <button class="mcc-menu__button" type="button">
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span>Button</span>
              </button>
              <button class="mcc-menu__button" type="button">
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span>Button</span>
              </button>
            </nav>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: >-
            <nav class="mcc-menu" style="max-width: 400px; width: 100%; height:
            auto">
              <div class="mcc-menu__title">Title</div>
              <details open>
                <summary class="mcc-menu__subtitle">
                  <span>Subtitle</span>
                  <mcc-icon name="angle_down" aria-hidden="true"></mcc-icon>
                </summary>
                <div>
                  <button class="mcc-menu__button" type="button">
                    <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                    <span>Button</span>
                  </button>
                  <button class="mcc-menu__button" type="button">
                    <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                    <span>Button</span>
                  </button>
                </div>
              </details>
              <details>
                <summary class="mcc-menu__subtitle">
                  <span>Subtitle</span>
                  <mcc-icon name="angle_down" aria-hidden="true"></mcc-icon>
                </summary>
                <div>
                  <div class="mcc-menu__split-button">
                    <button class="mcc-menu__button" type="button">
                      <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                      <span>Split button</span>
                    </button>
                    <details class="mcc-dropdown mcc-dropdown--sw">
                      <summary>
                        <div class="mcc-menu__button">
                          <mcc-icon class="mcc-menu__overflow-icon" name="menu_2"></mcc-icon>
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
                  </div>
                  <div class="mcc-menu__split-button">
                    <button class="mcc-menu__button" type="button">
                      <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                      <span>Split button</span>
                    </button>
                    <details class="mcc-dropdown mcc-dropdown--sw">
                      <summary>
                        <div class="mcc-menu__button">
                          <mcc-icon class="mcc-menu__overflow-icon" name="menu_2"></mcc-icon>
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
                  </div>
                </div>
              </details>
            </nav>
        name: As groups
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
title: Menu
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-page-header--as-default
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
