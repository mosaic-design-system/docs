---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Popover
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-tooltip--with-direction
tabs:
  - title: Usage
    body: >-
      ## What is a popover?


      An overlay to show additional information that exceeded what would typically be displayed in a Tooltip.


      - - -


      ### When, and why?


      Use popovers sparingly when you have non-critical information to aid the user’s decision making.


      - - -


      ## Popover variants


      f,g.
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
