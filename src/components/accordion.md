---
title: Accordion
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-accordion--as-default
tabs:
  - title: Usage
    body: "## What is an Accordion?


      An **Accordion** is a useful tool for splitting out information on a
      page - if you have a page that contains multiple different pieces of
      information, an **Accordion** can help reduce the amount of vertical space
      a page uses.


      **Accordions** can be toggled between a collapsed and expanded state
      to expose hidden information, which can help the user locate the specific
      information they need without presenting all of the information to them at
      once.\ 


      The expanded state pushes the other page content down rather than
      being overlaying it on top of other content, which helps to maintain the
      vertical hierarchy of the page.


      - - -


      ### When, and why?


      An **Accordion** is useful when your users need to consume multiple
      items with specific content in a single page. Allowing users to have
      control over the content by expanding it, or leaving it collapsed, lets
      them decide what is relevant to them at that time.\ 


      For example,


      [Include an example with screenshots]


      - - -


      ## Accordion Variants


      All variations allow you to include a subheading


      | Variant           | Description
      |                                                                                                                                                \
      \ 

      | ----------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ---------------- |

      | **Default**       | The default **Accordion** has no actions on
      it, and simply expands and collapses
      content.                                                                                                                  \
      |                                                                                                                                                                                            \
      \ 

      | **With chip**     | Chips in the header of an **Accordion** can be
      used to signify status, content type, dates,
      etc.                                                                                        \
      |

      | **With edit**     | An edit button on an **Accordion** allows the
      user to enter an edit
      state.                                                                                             \
      |

      | **With overflow** | Used when there a specific actions linked to
      each
      accordion                                                                                                        \
      |

      | **With icon**     | Icons can be applied to support the content of
      the heading but should not be used in conjunction with buttons or chips on
      the right - this will add too much cognitive load to the page. |


      [[Code up some examples here]]


      - - -


      ## Using an accordion


      **Accordions** are a great way to section off content-rich pages,
      collapsing the sections will also give users an overview of the content
      available whilst minimizing scrolling and make the page appear less
      daunting. If your page contains multiple different content types, an
      **Accordion** should be used to separate them out into easy-to-digest
      sections.\r


      Make sure the section headings are clear and concise, but still give
      the user enough information about what each one contains. All headings
      should be sentence case and not have the first letter of every word
      capitalised.\r


      Always allow the user to expand multiple accordions at a time and
      avoid hiding task critical content."
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
  - title: Status
    hook: status
    icon: source_code
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
            <details class="mcc-accordion" style="max-width: 400px; width:
            100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card mcc-card--high-emphasis"
            style="max-width: 400px; width: 100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With card
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card" style="max-width: 400px;
            width: 100%">
              <summary>
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With icon
        modifiers: []
status:
  body: This is some content in relation to the status of this component.
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
