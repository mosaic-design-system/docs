---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Progress indicator
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-progress-bar--as-default
tabs:
  - title: Usage
    body: "## What is Pagination?


      A mechanism which communicates the number of pages that can be
      loaded within a given context


      - - -


      ### When, and why?


      When there are more than 25 items displayed in one view or when
      there is a large amount of data that cannot reasonably be presented on a
      single page. Pagination makes it easier for a user to find the information
      that they are looking for.\ 


      - - -


      ## Pagination types


      There are 2 types of pagination


      | Types             |
      Description                                                                                                                 \
      |

      | ----------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------- |

      | **Full list**     | All pages listed horizontally with single step
      forward/back buttons and start/end buttons either
      side                       |

      | **Page selector** | Active page selected via a dropdown with total
      number of pages detailed beside. Single step forward/back button either
      side |


      - - -


      ## Using Pagination


      Both types clearly show the current (active) page number, the Full
      list pagination is best suited when there is a small, fixed number of
      pages. When there is a larger data set the Page selector pagination allows
      the user can \"jump\" back and forward more easily.\r

      \r

      Commonly used for data tables to help break down the data into a
      digestible manner. Table pagination should always sit bottom right
      directly under the table.\r\n"
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


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-progress-bar" style="mx-width: 500px; width: 100%;">
              <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
            </div>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-progress-bar
            classes:
              - name: Primary
                value: mcc-progress-bar--primary
                default: true
              - name: Secondary
                value: mcc-progress-bar--secondary
              - name: Success
                value: mcc-progress-bar--success
              - name: Danger
                value: mcc-progress-bar--danger
              - name: Warning
                value: mcc-progress-bar--warning
              - name: Info
                value: mcc-progress-bar--info
            type: class
            select_multiple: false
          - name: Height
            selector: .mcc-progress-bar
            classes:
              - name: Extra small
                value: mcc-progress-bar--xs
              - name: Small
                value: mcc-progress-bar--sm
              - name: Medium (default)
                value: mcc-progress-bar
                default: true
              - name: Large
                value: mcc-progress-bar--lg
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-progress-bar mcc-progress-bar--striped"
            style="mx-width: 500px; width: 100%;">
              <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
            </div>
        name: As striped
        modifiers:
          - name: Colours
            selector: .mcc-progress-bar
            classes:
              - name: Primary
                value: mcc-progress-bar--primary
                default: true
              - name: Secondary
                value: mcc-progress-bar--secondary
              - name: Success
                value: mcc-progress-bar--success
              - name: Danger
                value: mcc-progress-bar--danger
              - name: Warning
                value: mcc-progress-bar--warning
              - name: Info
                value: mcc-progress-bar--info
            type: class
            select_multiple: false
          - name: Height
            selector: .mcc-progress-bar
            classes:
              - name: Extra small
                value: mcc-progress-bar--xs
              - name: Small
                value: mcc-progress-bar--sm
              - name: Medium (default)
                value: mcc-progress-bar
                default: true
              - name: Large
                value: mcc-progress-bar--lg
            type: class
            select_multiple: false
          - name: Animated
            selector: .mcc-progress-bar
            classes:
              - name: Animated
                value: mcc-progress-bar--animated
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
