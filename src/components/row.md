---
title: Row
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Row?


      A **Button** should be used when a user is given a possible action – these are usually things like submissions, confirmations, cancellations, et cetera. They can serve many purposes, and are mostly used to initialise a certain process within the system.


      - - -


      ### When, and why?


      **Buttons** should be used when a **Call to Action (CTA)** is needed on a page, **Form** or **Card**. Users will recognise that a **Button** must be pressed in order to carry out a specific task. 	


      - - -


      ## Using a Button


      There are many ways to implement **Buttons** in a product, and there are many views to support each of those solutions. After carrying out extensive research, the UX Team have agreed on what we believe to be the best rules governing the usage of **Buttons** across Advanced products. Use these following guidelines when implementing a **Button** into your product.ystem when making them.
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: >-
      ## Component accessibility 


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release. 


      ## Colour combinations 


      Please be mindful of colour contrast when using these buttons. Please make sure that the there is a clear colour contrast between the button and the background it is on. Please check this using this colour checker (https://webaim.org/resources/contrastchecker/). 


      ## Key binding 


      You should be able to select, submit data, confirm etc from all buttons via the keyboard ‘enter’ key. 


      ## Aria tags 


      Please ensure that all buttons have aria tags to ensure screen readers can understand that they are focussed on a button. 


      ## Focus state 


      All buttons should have a focus state and be able to have a focus applied to them by tabbing via a keyboard. (See focus state styling). 


      ## Wording  


      Please ensure that wording is as descriptive of the action as possible to help people understand clearly what action they are performing when they select the button. 


      ## Icons  


      Buttons without text should only be used as a last resort to save space on a table etc. 
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Button component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
            </button>
        name: As default
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
                default: false
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
            type: class
            select_multiple: false
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: With icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
              <mcc-icon name="arrows_long_right" aria-hidden="true"></mcc-icon>
            </button>
        name: With trailing icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--outline">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As outline
        modifiers:
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--text">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text
        modifiers:
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
---
