---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tooltip
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-tooltip--with-direction
tabs:
  - title: Usage
    body: "## What is a Tooltip?


      User-triggered popups that display informative text


      - - -


      ### When, and why?


      When you need to provide brief and helpful content to an element
      that isn’t 100% clear how to use.



      - - -


      ## Tooltip Variants


      | Variant           |
      Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \
      | Example                                                                                                                                                                                                                                                                                                        \
      |

      | ----------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ---------- |

      | **Default**      | Our tooltip has 8 different beak directions to
      make sure the content is always clearly connected to its trigger and the
      content fully
      visible.                                                                                                                                                                                                                                                                                 \
      | <button class=\"mcc-button mcc-button--primary\" disabled> <span
      class=\"mcc-button__label\">Disabled</span>
      </button>                                                                                                                                                                                             \
      |

      - - -


      ## Using a Tooltip


      TUsers shouldn’t need tooltips to use your product, they are
      supplementary messages that are triggered by the user hovering over
      elements such as images, icons, buttons or hyperlinks. \r

      Don’t use tooltips to repeat text that is already visible, or for
      critical information the user needs to complete a task. For example
      requirements on a password field is critical information we wouldn’t put
      in a tooltip, it will only be available when the user is interacting with
      the trigger element, this will result in the user trying to remember the
      information whilst completing the task. \r

      We advise all icon buttons include a label but if this isn’t
      possible tooltips can help distinguish actions between unlabelled icons.\r

      \n"
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
