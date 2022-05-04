---
title: Table
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-accordion--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Table?


      A **Table** is a useful component for displaying and editing large amounts of data in a more customised and organised way.


      **Tables** consist of logical rows and columns to help users easily find and reference sections of data.


      They don't have to only contain text, **Tables** can contain chips (see chips) to help signal negative, positive etc status' of information.


      An **Accordion** is a useful tool for splitting out information on a page - if you have a page that contains multiple different pieces of information, an **Accordion** can help reduce the amount of vertical space a page uses.


      **Accordions** can be toggled between a collapsed and expanded state to expose hidden content, which can help the user locate the specific information they need without presenting all of it to them at once. 


      The expanded state pushes the other page content down rather than being overlaying it on top of other content, which helps to maintain the vertical hierarchy of the page.


      - - -


      ### When, and why?


      A **Table** is useful when you have tabular data to display such as data charts. **Tables** can help users easily digest large amounts of data. It can be especially useful when a user might need to edit this data.


      For example, in Cloud HR, **Tables** are used to show a list of how many holidays you have booked and when they are. You can then perform a series of actions on these rows.


      **Tables** should make data and information easier to digest information, not harder.\

      \

      An **Accordion** is useful when your users need to consume multiple items with specific content in a single page. Allowing users to have control over the content by expanding it, or leaving it collapsed, lets them decide what is relevant to them at that time. 


      For example, in Clear Review **Accordions** are used to section off specific sections of feedback, as you can see below. The user can expand each piece of feedback and interact with the "Reply/Thank" button within. Without the **Accordion**, this page would be quite cluttered and the user wouldn't be able to focus one one specific piece of feedback.


      **Accordions** should only be used when there is enough content to condense - they shouldn't be used as an organisational tool, or for navigation purposes. They are a tool to help reduce visual clutter for a user and should only be used when necessary, not by default.


      Similarly, **critical** information shouldn't be hidden from users. If the content is critical for the page's function, it should always be visible and shouldn't be hidden by an **Accordion**.


      - - -


      ## Table Types


      All variations allow you to include a subheading


      | Variant                   | Description                                                                                                                                                                                       |

      | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**               | The default **Table** has an overflow button to enable actions to be performed on a specific selected row.                                                                                        |

      | **With chips**            | Chips can be included within the cells of a **Table** to help with quick references, breaking up repetitive information and quickly show positive, negative, etc statuses of various information. |

      | **With editable cell**    | An editable cell in a **Table** allowing users to edit the data within a specific cell.                                                                                                           |

      | **With reordered header** | Icons within the header to allow the user to Ireorder the content ocf that ospecific column. alphabetically or numerically.                                                                       |

      | **With selector**         | **Selectors** in **Tables** are there to help with selecting rows, in order to edit/delete etc or highlight specific cells for visibility purposes.                                               |


      \[[Code up some examples here]]


      - - -


      ## Using a Table


      **Tables** should be used for data, not long sentences of text.


      Where tick boxes are used. **Tables** are accompanied by button groups so that actions can be applied to the whole table or the specific row the user has clicked.


      Zebra striping should not be overridden as it is there to help users scan and follow the **Table's** content easier as well as increasing accessibility.


      **Tables** should not have vertical scroll bars, pagination should be used as part of the **Table** pattern (documentation coming soon). **Tables** should not have more than 13 rows before using the pagination as part of the **Table** pattern.


      We recommend 6 columns maximum within the **Table**, we appreciate some product may need more but the product's information architecture should be reviewed when creating tables. The need to have 6 columns should be a necessity for the user experience.


      Long text should be truncated in order to give the user an overview of the information. However a pop out (see pop out) should be implemented to reveal all of the information within that particular cell.
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
  documentation: Yes
  html_css: Available
  web_component: Available
---
