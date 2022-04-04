---
title: Accordion
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-accordion--as-default
tabs:
  - title: Usage
    body: >-
      ## What is an accordion?


      An accordion toggles between a collapsed and expanded state to expose hidden information. The expanded state pushes the page content down rather than being over laid.


      ### When, and why?


      An accordion is useful when your users need to consume multiple items with specific content in a single page. Allowing people to have control over the content by expanding it or leaving it collapsed lets them decide what is relevant to them at that time. 


      ## Accordion variations


      1. Default
         The default accordion has no actions
      2. With chip
         Chips in the header can be used to signify things like status, content type, dates etc. 
      3. With edit
         This option allows the user to enter an edit state for each accordion
      4. With overflow
         Used when there a specific actions linked to each accordion
      5. With icon
         Icons can be applied to support the content of the heading but should not be used in conjunction with buttons or chips on the right as will add to cognitive load

      ## Using an accordion

       Accordions are more suitable when the context of the page only requires a few key pieces of information but you want to give the option of learning more. Accordions should be avoided when your audience needs most or all of the content on the page to complete their task
      Make sure the section headings are clear and concise, but still give the user enough information about what each one contains. All headings should be sentence case and not have the first letter of every word capitalised.
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
  - title: Status
    hook: status
    icon: source_code
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
            <details class="mcc-accordion" style="max-width: 400px; width:
            100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card mcc-card--high-emphasis"
            style="max-width: 400px; width: 100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With card
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card" style="max-width: 400px;
            width: 100%">
              <summary>
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With icon
        modifiers: []
status:
  body: This is some content in relation to the status of this component.
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
