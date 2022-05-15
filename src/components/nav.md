---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Nav
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-nav--as-default
tabs:
  - title: Usage
    body: "## What is a Nav?


      A **Nav** is an easy way to position one or more links together
      inside other components.


      - - -


      ### When, and why?


      There may occasions when you want to display a series of links
      inside another component. For example, inside a tabbed UI, where sub-tabs
      or links are required.


      \r

      \r

      Another example of where a **Nav** component could be used is in a
      footer, where a number of links need to be grouped together into a block.
      Where this is the case, a **Nav** component positions links horizontally
      or vertically in a consistent manner, so you don't have to worry about
      padding or spacing.


      - - -


      ## Nav types


      The following types of **Nav** are available:


      | **Type**               | **Description**
      |                                                                                                                                  \
      \ 

      | ---------------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ------------------ |

      | Default                | A Nav with its links positioned
      horizontally                                                                                                                         \
      |

      | As vertical            | A Nav with its links positioned
      vertically                                                                                                                           \
      |

      | As simple              | A Nav with its links positioned
      horizontally, but without any padding - this is useful if the Nav is being
      placed inside a container that already has its own padding |

      | As vertical and simple | A Nav with its links positioned
      vertically, but without any padding - this is useful if the Nav is being
      placed inside a container that already has its own padding   |


      - - -


      ## Using a Nav



      ### Consistent, but simple

      There is no styling customisation available for the **Nav**
      component, but the main benefit of implementing it is that it
      automatically groups links on to a single line or column. It is an
      alternate and easier method to creating multiple links and manually
      positioning them next to each other. It makes your coding quicker and more
      maintainable - if something changes on the page, you don't need to worry
      about reformatting the content in the **Nav** component.


      ### Link text

      Always remember to keep link text short and concise, with ideally
      fewer than one or two words. Users should be able to scan links and learn
      something about their destination without much reference to the
      surrounding content. They should never be an instruction, either: \"click
      HERE to learn more about Mosaic\" should instead read \"Learn more\"."
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

    Below, you can find a live demo for a Nav component. Use the drop-down menus and radio buttons to view the different Nav Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <div class="mcc-nav" style="height: auto;">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
        name: As default
        modifiers:
          - name: Vertical
            selector: .mcc-nav
            classes:
              - name: Vertical
                value: mcc-nav--vertical
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
