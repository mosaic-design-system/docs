---
title: Checkbox
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-checkbox--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Checkbox?


      A **Checkbox** is a visual component that indicates if something is selected or not.


      - - -


      ### When, and why?


      Used in forms so that users can choose one or more options.


      - - -


      ## Checkbox types


      Checkboxes can be unselected, selected or indeterminate which is when a checkbox is neither selected or unselected and therefore cannot be determined. Active, Disabled, Read-only and Focussed states also apply to all of the above.


      | **Name**                      | **Description**                                                                                                           |

      | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |

      | With label                    | This is the default and should be used to multiple choice lists and parent-child multiple choice lists                    |

      | Without label                 | This should only be used within a selector column of a table where the column header becomes the label for the checkboxes |

      | Checkbox choice button        | The checkbox is within the container. This is used where a label isn’t enough information and more text is required. This instead has both a title and subtitle accompanying the checkbox.                    |

      | Visual checkbox choice button | This similar to the checkbox choice button, however there is an icon positioned to the left-hand side and the checkbox itself is aligned to the right hand side. This should only be used where the icon helps the user to make a selection |


      - - -


      ## Using a Checkbox


      Checkboxes are used for multiple choices, and work independently from other checkboxes in the same list therefore checking an additional box does not affect any other selections.


      Checkboxes allow users to select one or multiple from a list. Applying a parent checkbox allows the user to easily select all or unselect all. The undetermined state will appear if the user selects all via the parent and then deselect 1 or more of the children. 


      We only suggest using a single checkbox to collect data and as part of another question/item, rather than as a standalone question/item. For example a checkbox used on a log in page with 'Keep me logged in' only works relation to the input fields above and the perference is saved upon succesfully logging in.


      ### Single-selects


      Do not use a **Checkbox** if a user can select **only** one option from a list. In this case, \[Radio Buttons](link to Radio Buttons page) or a \[Toggle switch](link to toggle-switch page) depending on the 'save' should be used instead. **Checkboxes** allow the user to select multiple items in a set, whereas **Radio Buttons** allow the user to select only one option.


      ### Using a checkbox in a table


      A selection column on a table is the only instant a checkbox without a label is vailed as the column header become the overarching label. Applying a selection column to a table allows the user to easily scan read and see which rows are selected and are more visually prominent than unselected items. They also make it easier to compare available items.
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
