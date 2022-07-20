---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Stepper
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-stepper-introduction
tabs:
  - title: Usage
    body: |-
      ## What is a Stepper?

      A **Stepper** is...

      - - -

      ### When, and why?

      Text

      - - -

      ## Stepper types

      The following **Stepper** types are available:

      | **Type** | **Description** |
      | -------- | --------------- |
      | Default  |                 |
      |          |                 |
      |          |                 |
      |          |                 |
      |          |                 |
      |          |                 |

      ## Stepper properties

      The following **Stepper** properties are available:

      | **Property** | **Description** |
      | ------------ | --------------- |
      |              |                 |
      |              |                 |
      |              |                 |
      |              |                 |
      |              |                 |
      |              |                 |

      - - -

      ## Using a Stepper

      Text
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


      When designing with a **Timeline**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Timeline** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Timeline** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Timeline** for each element of the **Timeline** elements.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Timeline** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Stepper component. Use the drop-down menus and radio buttons to view the different Stepper Types and Variants.
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
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
