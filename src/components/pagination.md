---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Pagination
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-pagination--with-active-button
tabs:
  - title: Usage
    body: >-
      ## What is Pagination?


      A mechanism which communicates the number of pages that can be loaded within a given context


      - - -


      ### When, and why?


      When there are more than 25 items displayed in one view or when there is a large amount of data that cannot reasonably be presented on a single page. Pagination makes it easier for a user to find the information that they are looking for. 


      - - -


      ## Pagination types


      There are 2 types of pagination


      | Types             | Description                                                                                                                 |

      | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |

      | **Page list**     | All pages listed horizontally with single step forward/back buttons and start/end buttons either side                       |

      | **Page selector** | Active page selected via a dropdown with total number of pages detailed beside. Single step forward/back button either side |


      - - -


      ## Using Pagination


      Both types clearly show the current (active) page number, the Page list pagination is best suited when there is a small, fixed number of pages. When there is a larger data set the Page selector pagination allows the user can "jump" back and forward more easily.


      Commonly used for data tables to help break down the data into a digestible manner. Table pagination should always sit bottom right directly under the table.
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


    Below, you can find a live demo for a Pagination component. Use the drop-down menus and radio buttons to view the different Pagination Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <nav class="mcc-pagination" aria-label="Pagination">
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="double_left" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Start</span>
              </button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="back" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Back</span>
              </button>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="forward" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Forward</span>
              </button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="double_right" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">End</span>
              </button>
            </nav>
        name: As default
        modifiers:
          - name: Disabled
            selector: .mcc-pagination button:nth-child(5)
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
