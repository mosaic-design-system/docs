---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Page header
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-page-header--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Page Header?


      A **Page Header** is the bar that sits underneath the main navigation header to indicate the name of the currently viewed page. It defines the top of the page.


      - - -


      ### When, and why?


      Every page in your application must have a Page Header, as it is a vital part of the overall layout. As well as being a signpost, it also provides access to the primary and secondary actions for the page. It can also be used for inter-page navigation, where navigating back to the previous page is required.


      Page Headers contain a page title, which is styled as the main heading (H1). This assists with the visual representation of the aria-level and helps to define the hierarchy of the page. It is also used by screen readers, which is important from an accessibility perspective.


      - - -


      ## Page Header types


      The following types of Page Header are available:


      | **Name**      | **Description**                                                        | **Behaviour** | **Example** |

      | ------------- | ---------------------------------------------------------------------- | ------------- | ----------- |

      | Default       | A Page Header that contains a title and up to 4 call to action buttons |               |             |

      | With subtitle | A Page Header that adds a subtitle                                     |               |             |

      | With back     | A Page Header that adds a Back button                                  |               |             |


      - - -


      ## Using a Page Header


      Page Headers can optionally include a subtitle.


      When scrolling, the Page Header should be fixed, i.e. it remains visible at the top of the page.


      There must only ever be one Page Header per page.


      Page Headers can include up to a maximum of 4 buttons. If more actions are required, then the fourth can be a More button, with a dropdown menu to display the additional items.


      Page titles must be short and concise.


      On mobile, the Page Header will collapse the buttons down into an overflow menu, i.e. a single button with a dropdown menu attached. The page title itself must be truncated if it is too long to display in full and an ellipsis should be present to indicate this.
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


    Below, you can find a live demo for a Page header component. Use the drop-down menus and radio buttons to view the different Page header Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-page-header" style="width: 100%">
              <section class="mu-d-flex mu-flex-column">
                <h1 class="mu-mb-00">Page header title</h1>
                <span class="mu-text-muted">Subtitle</span>
              </section>
              <section>
                <div class="mcc-button-group mcc-button-group--spaced" role="group" aria-label="Page header buttons">
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--primary">
                    <span class="mcc-button__label">Button</span>
                  </button>
                </div>
              </section>
            </div>
        name: As default
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
