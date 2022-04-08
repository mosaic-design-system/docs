---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tooltip
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-tooltip--with-direction
tabs:
  - title: Usage
    body: >
      ## What is a Button?


      A **Button** should be used when a user is given a possible action – these are usually things like submissions, confirmations, cancellations, et cetera. They can serve many purposes, and are mostly used to initialise a certain process within the system.


      - - -


      ### When, and why?


      **Buttons** should be used when a **Call to Action (CTA)** is needed on a page, **Form** or **Card**. Users will recognise that a **Button** must be pressed in order to carry out a specific task. 



      - - -


      ## Button Variants


      In addition to the **Button Type**, each **Button** can also have a **Button Variant**. A **Variant** can be applied to a **Button** to give it some more context, or add some additional functionality to the **Button**.


      | Variant           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                        |

      | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Disabled**      | This can be added to limit when a **Button** can be used. A **Disabled Button** is always visible to the user, but it will not be interactable until the user has completed a specific task. Once the task in question has been performed, the **Disabled Button** will be set to active.*                                                                                                                                                                                                                                                                                  | <button class="mcc-button mcc-button--primary" disabled> <span class="mcc-button__label">Disabled</span> </button>                                                                                                                                                                                             |

      - - -


      ## Using a Button


      There are many ways to implement **Buttons** in a product, and there are many views to support each of those solutions. After carrying out extensive research, the UX Team have agreed on what we believe to be the best rules governing the usage of **Buttons** across Advanced products. Use these following guidelines when implementing a **Button** into your product.
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
