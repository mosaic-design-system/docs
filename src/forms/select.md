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
      ## What is a Select?


      A **Select** opens a list of options under the input field (in an overlay) that a user can select from within a form.  The selected option is shown in the input field when overlay is no longer open and not the focus of the user. 


      - - -


      ### When, and why?


      You should use a **Select** when you need a user to select one or more options from a large group of data. Using a **Select** allows the user to search and filter through the given list.


      Selects are similar to [Dropdowns](/components/dropdown).  Dropdowns however should never be used as part of a form.


      - - -


      ## Select types


      The following **Select** types are available:


      ### Types


      | **Type**          | **Description**                                              |

      | ----------------- | ------------------------------------------------------------ |

      | **Default**       | The user can select a single option                          |

      | **Required**      | The user is required to select at least one option           |

      | **Multiple**      | The user is able to select more than one answer              |

      | **Option groups** | The options available to the user are grouped under headings |

      | **Size**          | There are three sizes available: small, default and large    |


      ## Using a select


      ### Minimum required options


      A **Select** should only be used if there are six or more options to choose from. If the user has fewer options to choose from, then you can use [Radio buttons](/forms/radio-buttons) instead, or [Checkboxes](/forms/checkbox) for answers that require multiple answers.


      ### Select sizing


      The field width should be the same as the widest option that the user will be able to pick from. [See field affordance for more information](/guidelines/field-affordance)


      ### Multiple select


      In cases where the user needs to select multiple options, consideration needs to be taken about the number of options they might Select.  If it is going to be a large amount, for example more than 10, then it might be better to try a different approach.  For example, the **Select** input could be split it to several select inputs if the options can be grouped, or a **Picklist** might be a better component to use. 


      ### Option groups


      If the options in your **Select** menu have a hierarchy or categorisation, you should split them into groups (using headings). This allows users to find the option quickly by scanning the group labels instead of every single option. These groups should be logical (for the user) and have meaningful names.


      All headings should follow the guidelines outline in [Content](/guidelines/style-guide).


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
