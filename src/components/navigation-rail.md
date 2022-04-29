---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation rail
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-navigation-rail--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation Rail?


      A Navigation Rail is a side navigation component that displays links to primary destinations in an application.


      - - -


      ### When, and why?


      Text


      - - -


      ## Navigation Rail types


      The following types of Navigation Rail are available:


      | **Name**      | **Description** | **Behaviour** |

      | ------------- | --------------- | ------------- |

      | Default       |                 |               |

      | With tooltips |                 |               |


      - - -


      ## Using a Navigation Rail


      Text
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


    Below, you can find a live demo for a Navigation Rail component. Use the drop-down menus and radio buttons to view the different Navigation Rail Types and Variants.
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
