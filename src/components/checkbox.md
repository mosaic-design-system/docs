---
title: Checkbox
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/dev/components/?path=/docs/forms-input-checkbox--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Checkbox?


      A **Checkbox** is a visual component that indicates if something is selected or not.


      - - -


      ### When, and why?


      **Checkboxes** are used in forms so that users can choose one or more options.


      - - -


      ## Checkbox types


      **Checkboxes** can be unselected, selected or indeterminate (which is when a checkbox is neither selected or unselected and therefore cannot be determined). Active, Disabled, Read-only and Focused states also apply to all of the above.


      In addition, the following **Checkbox** types are available:


      | **Type**                      | **Description**                                                                                                           |

      | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |

      | With label                    | This is the default Checkbox and should be used in multiple choice lists and parent-child multiple choice lists                    |

      | Without label                 | This should only be used within a Selector column of a table where the column header becomes the label for the checkboxes |

      | Checkbox choice button        | This Checkbox is within the container, and is used where a label isn’t enough information and more text is required - instead, it has both a title and subtitle accompanying the checkbox                    |

      | Visual checkbox choice button | This is similar to the checkbox choice button, however there is an icon positioned to the left-hand side and the checkbox itself is aligned to the right hand side - this should only be used where the icon helps the user to make a selection |


      - - -


      ## Using a Checkbox


      ### Checkbox behaviour


      **Checkboxes** are used for multiple choices, and work independently from other **Checkboxes** in the same list - therefore, checking an additional box does not affect any other selections.



      ### Parent Checkboxes

      **Checkboxes** allow users to select one or multiple items in a list. Applying a 'parent' **Checkbox** allows the user to easily select all or unselect all items. The undetermined state will appear if the user selects all via the parent and then deselect 1 or more of the children. 


      ### Standalone Checkboxes

      We only suggest using a single checkbox to collect data and as part of another question/item, rather than as a standalone question/item. For example a checkbox used on a log in page with 'Keep me logged in' only works relation to the input fields above and the perference is saved upon succesfully logging in.


      ### Single-selects


      Do not use a **Checkbox** if a user can select **only** one option from a list. In this case, [Radio buttons](/forms/radio-buttons) or a [Toggle switch](/component/toggle) depending on the 'save' should be used instead. **Checkboxes** allow the user to select multiple items in a set, whereas **Radio Buttons** allow the user to select only one option.


      ### Using a checkbox in a table


      A selection column on a table is the only instance that a **Checkbox** without a label is valid, as the column header becomes the overarching label. Applying a selection column to a table allows the user to easily scan read and see which rows are selected and are more visually prominent than unselected items. They also make it easier to compare available items.  The selector column must always be on the left.
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
  example: null
  body: >-
    ## Live demo

    Below, you can find a live demo for an Checkbox component. Use the drop-down menus and radio buttons to view the different Checkbox Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div>
              <label class="mfc-label">Checkbox input</label>
              <div class="mfc-checkbox-wrapper">
                <input id="checkboxInput1" name="checkboxInput1" type="checkbox">
                <label for="checkboxInput1">Checkbox input</label>
                <div class="mfc-help-text">Checkbox input help text</div>
              </div>
            </div>
        name: As default
        modifiers:
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Checked
            selector: input
            type: attribute
            attribute:
              name: checked
          - name: Switch
            selector: input
            classes:
              - name: Switch
                value: mfc-switch
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
