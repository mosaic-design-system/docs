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


      A **Table** is a useful component for displaying and editing large amounts of data like statistics, employee clock ins, holidays, etc. Data displayed within a table is both organised and customisable.


      **Tables** consist of logical rows and columns to help users easily find and reference sections of data.


      - - -


      ### When, and why?


      A **Table** is useful when you have tabular data to display, such as data for charts. **Tables** can help users easily digest large amounts of data, and can be especially useful when a user might need to edit this data or find a specific piece easily.


      For example, in Advanced HR, **Tables** are used to show a list of how many holidays you have booked and when they are. You can then perform a series of actions on each of these specific rows.


      Please be mindful that **Tables** should make data and information easier to digest information, not harder.


      - - -


      ## Table types


      The following **Table** types are available - each type of **Table** also allows you to include a subheading:


      | Type                      | Description                                                                                                                                                                                                                     |

      | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**               | The default Table has an overflow button to enable actions to be performed on a specific selected row                                                                                                                           |

      | **With chips**            | Chips can be included within the cells of a Table to help with quick references, break up repetitive information and/or quickly show different statuses of the date (e.g. positive or negative)                                 |

      | **With editable cell**    | An editable cell in a Table allows users to edit the data within a specific cell                                                                                                                                                |

      | **With reordered header** | There are icons within the header to allow the user to reorder the content of that specific column either alphabetically or numerically, depending on the content                                                               |

      | **With Selector**         | [Selectors](/component/selector) in Tables are there to help with selecting rows, in order to interact with specific cells - the Selector highlights the desired cells and helps the user visualise the impact of their actions |

      | **Nested tables**         | Each Table row can be expanded to show additional information                                                                                                                                                                   |


      - - -


      ## Using a Table


      ### Table data


      First, and most importantly, **Tables** should only be used for data. Data can contain words, but long sentences of text within a table should be avoided. 


      If you do need to use long text (for example when the text itself is a piece of data, like a reason for an absence when an employee has booked holiday), the text should be truncated in order to give the user an overview of the information. However, a **[Tooltip](/components/tooltip/)** should be used to reveal all of the information within that particular cell.


      ### Table sizing


      **Tables** should not have so many rows that they need a vertical scroll bar - pagination should be used instead as part of the footer **Table** pattern. **Tables** should have at least 13 rows before using pagination.


      Similarly, we recommend 6 columns maximum within the **Table** -  some products may need more, but it may be worth reviewing the product's information architecture when creating **Tables** to ensure that all columns are necessary for the user experience.


      ### Table Actions


      In order to perform an action on a single/multiple **Table** row, you can access the overflow menu and actions will appear in there. To perform multiple actions, user the overflow menu in the header, this will contain the actions that you can perform on those items selected only.


      ### Zebra striping


      The zebra striping should not be overridden within a **Table**, as it is there to help users scan and follow the **Table's** content easier - it is also helpful in maintaining accessibility standards of your product. 


      ### Headers & Footers


      **Table** titles, search, export, filters and the overflow menu for triggering whole **Table** actions etc. must be paired with the **Table header** component. Similarly, **Pagination** should be used with the **Table footer** component. Both of these components fall under the **[Table pattern](patterns/table)**.


      You can use the **Table** component alone, but never use the **Table header** or **Table footer** components without the **Table** component.


      ### Text alignment

      All column header text should be left aligned regardless of the content below it.  This improves its usability as the text is easier to scan.  The data text should always be left aligned also with one exception.  


      Where numerical values are displayed, such as in a Finance application where you may have wholes numbers or decimals, these should always be right aligned.  This improves the user's ability to review numerical data quickly.  The header for these rows remains left aligned.
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
