---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tooltip
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-tooltip--with-direction
tabs:
  - title: Usage
    body: >-
      ## What is a Tooltip?


      User-triggered popups that display informative text via a hover


      - - -


      ### When, and why?


      When a singular element needs more explanation than the UI is able to provide, tooltips supplement the UI and ensure the element usage is clear


      - - -


      ## Tooltip Variants


      Our tooltip has 8 different beak directions to make sure the content is always clearly connected to its trigger and the content fully visible.


      | Variant           | Description                                                                               | 

      | ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |

      | **Left**          | Use when there enough space right of trigger for the content is fully visible on the page 

      | **Top left**      | Use when there enough space below of trigger for the content is fully visible on the page | 

      | **Top middle**    | Use when there enough space below of trigger for the content is fully visible on the page | 

      | **Top right**     | Use when there enough space below of trigger for the content is fully visible on the page | 

      | **Right**         | Use when there enough space left of trigger for the content is fully visible on the page  | 

      | **Bottom right**  | Use when there enough space above of trigger for the content is fully visible on the page | 

      | **Bottom Middle** | Use when there enough space above of trigger for the content is fully visible on the page | 

      | **Bottom left**   | Use when there enough space above of trigger for the content is fully visible on the page | 


      - - -


      ## Using a Tooltip


      Users shouldn’t need tooltips to use your product, they are supplementary messages that are triggered by the user hovering over elements such as images, icons, buttons or hyperlinks. 


      Although similar to the Popover, the tooltip is triggered by the user hovering over an element not clicking. Also, a popover can hold more contextual information than a tooltip. See Popover for more information.


      Don’t use tooltips to repeat text that is already visible, or for critical information the user needs to complete a task. For example requirements on a password field is critical information we wouldn’t put in a tooltip, it will only be available when the user is interacting with the trigger element, this will result in the user trying to remember the information whilst completing the task. 

      We advise all icon buttons include a label but if this isn’t possible tooltips can help distinguish actions between unlabelled icons.
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo

    Below, you can find a live demo for a Tooltip component. Use the drop-down menus and radio buttons to view the different Tooltip Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <span class="mcc-tooltip mcc-tooltip" aria-label="Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.">
              .mcc-tooltip
            </span>
        name: As default
        modifiers:
          - name: Direction
            selector: .mcc-tooltip
            classes:
              - name: North West
                value: mcc-tooltip--nw
                default: true
              - name: North
                value: mcc-tooltip--n
              - name: North East
                value: mcc-tooltip--ne
              - name: South West
                value: mcc-tooltip--sw
              - name: South
                value: mcc-tooltip--s
              - name: South East
                value: mcc-tooltip--se
              - name: East
                value: mcc-tooltip--e
              - name: West
                value: mcc-tooltip--w
            type: class
            select_multiple: false
          - name: Multiple lines
            selector: .mcc-tooltip
            classes:
              - name: Multiple lines
                value: mcc-tooltip--multiline
            type: class
            select_multiple: false
          - name: Delay
            selector: .mcc-tooltip
            classes:
              - name: Delay
                value: mcc-tooltip
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
