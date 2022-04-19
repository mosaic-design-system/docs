---
title: Select
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-select-examples--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a select

      A dropdown list of options for a user to select as part of a form.  The selected option is shown when the field is not in focus. 

      - - -

      ### When and why

      When the user is required to select one of the options from a large group of data and may need the ability to search and filter through the given list.

      - - -

      ## Select variants

      | **Variant** | **description** | **Example** |

      | -------- | -------- | -------- |

      | Default | a dropdown selection allowing the user to select a single option  | |

      | Required | The user is required to select at least one option | |

      | Multiple | The user is able to select more than one answer | |

      | Option groups | The options available to the user are grouped under headings | |


      ## Using a select


      - Only use if there are 6 or more options, anything less use radio buttons for single selection or checkboxes for multi-selects.

      - The field width should be the same as the widest option - [see field affordance for more information](URLlink)

      - Heading and item text styling should follow the style guide - [see text styls for more information](URLLInk)


      ### Examples

      If the user has one option to select.


      Example:

      <mfc-select name="selectInput1" label="Select input" help-text="Text input help text">
        <option value=""></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </mfc-select>


      If the options in your select menu have a hierarchy or categorisation, you should split them into groups (see below). This allows users to find the option quickly by scanning the group labels instead of every single option. Also, if you have more than one option to select.


      Example:

      <mfc-select name="selectInput1" label="Text input" help-text="Text input help text" required="true" .options="\${someOptions}"></mfc-select>


      - - -


      ## References

      https://www.nngroup.com/articles/drop-down-menus/

      https://www.nngroup.com/articles/listbox-dropdown/
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

    Below, you can find a live demo for a Select component. Use the drop-down menus and radio buttons to view the different Select Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mfc-select-wrapper" style="max-width: 240px; width:
            100%">
              <label for="selectInput1">Select input</label>
              <select id="selectInput1" name="selectInput1">
                <option value=""></option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
              </select>
              <div class="mfc-help-text">Select input help text</div>
              <div id="selectInput1" class="mfc-invalid-feedback">This is some invalid text</div>
            </div>
        name: As default
        modifiers:
          - name: Size
            selector: .mfc-select-wrapper
            classes:
              - name: Small
                value: mfc-select-wrapper--sm
              - name: Medium (default)
                value: mfc-select-wrapper
                default: true
              - name: Large
                value: mfc-select-wrapper--lg
            type: class
            select_multiple: false
          - name: Disabled
            selector: select
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: select
            classes:
              - name: Invalid
                value: ms-is-invalid
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
