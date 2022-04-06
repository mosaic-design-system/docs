---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Popover
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-tooltip--with-direction
tabs:
  - title: Usage
    body: "## What is a popover?


      A **Popover** is an overlay that can show additional information to
      the user - however, it does differ from a
      [**Tooltip**](/components/Tooltip). A **Popover** will typically be
      reserved for information that goes above-and-beyond what would normally be
      shown in a **Tooltip**.


      - - -


      ### When, and why?


      **Popovers** should be used sparingly - they should only be used
      when you need to display non-critical information that will aid the user's
      decision making. For example, you could add a **Popover** to an
      [**Avatar**](/components/avatar) to show a user's full name and job title:


      [[example image]]


      - - -


      ## Popover variants


      | Variant        |
      Description                                                                       \
      | Example                                                                                                     \
      |

      | -------------- |
      -------------------------------------------------------------------------\
      -------- |
      -------------------------------------------------------------------------\
      ---------------------------------- |

      | **Default** | A typical **Popover** that includes only text.
      Select the button to make the **Popover** appear. | <span
      class=\"mcc-tooltip mcc-tooltip--nw\" aria-label=\"This is the tooltip on
      the North West side.\"><button class=\"mcc-button
      mcc-button--primary\">\r.mcc-tooltip--nw</button>\r</span> |


      | **With title** | A **Popover** can include a title to provide
      further supporting information to the main body content of the **Popover**
      - note that a **Popover** can only have a single title. | [[awaiting dev]]
      |


      - - -


      ## Usage


      Although similar to a **Tooltip**, the major difference is that a
      **Popover** must be triggered and dismissed by a click. The trigger could
      be a something like a button or an image, but the **Popover** would never
      appear by simply hovering over the item.


      Secondly, a **Popover** can hold more content than a **Tooltip**,
      although it should never be over-populated or over-used. The content in a
      **Popover** should be seen as ‘additional information’ and not crucial to
      the users decision making. A **Popover** should only ever *add* to the
      user's experience, and never be a requirement. They are the cherry that
      you add on top of the cake, not the batter.


      There are many uses of a popover ranging from a larger Tooltip to a
      popover that contains additional HTML content. It is also possible to
      trigger a popover on the client of an element and to position a popover to
      appear either top, bottom, left or right using the `placement` attribute."
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
