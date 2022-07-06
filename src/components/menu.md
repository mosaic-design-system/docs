---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Menu
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-menu-introduction
tabs:
  - title: Usage
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
    icon: file_invoice
    toc: true
  - title: Code
    hook: code
    icon: source_code
    toc: false
  - title: Accessibility
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **Menu**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Alert** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Menu** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Menu** and all of its elements.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Menu** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
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
---
