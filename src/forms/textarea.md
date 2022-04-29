---
title: Textarea
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-textarea-examples--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Textarea?


      A Textarea is a fixed height input that allows multiple lines of text to be entered.


      - - -


      ### When, and why?


      Textareas are taller than regular text inputs and wrap text onto new lines automatically as a user types. They are a fixed height and scroll vertically when the cursor reaches the bottom. However, they can also be manually resized to create a bigger space for content if a user needs it. The starting size of a Textarea should indicate the amount of content that is expected.


      - - -


      ## Textarea types


      The following types of Textarea are available:


      | **Name**             | **Description**                                                                                          | **Behaviour** |

      | -------------------- | -------------------------------------------------------------------------------------------------------- | ------------- |

      | Default              | An input that allows more than one sentence to be entered                                                |               |

      | With character count | A Textarea that also displays the total number of characters permitted and how many there are remaining. |               |


      - - -


      ## Using a Textarea


      Textareas can also include a character limit and counter. This let users know how long their entry can be before they start typing.
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

    Below, you can find a live demo for a Textarea component. Use the drop-down menus and radio buttons to view the different Textarea Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mfc-textarea-wrapper" style="max-width: 240px; width:
            100%">
              <label for="textarea1">Textarea input</label>
              <textarea id="textarea1" name="textarea1"></textarea>
              <div class="mfc-help-text">Textarea input help text</div>
              <div id="textarea1" class="mfc-invalid-feedback">This is some invalid text</div>
            </div>
        name: As default
        modifiers:
          - name: Size
            selector: .mfc-textarea-wrapper
            classes:
              - name: Small
                value: mfc-textarea-wrapper--sm
              - name: Medium (default)
                value: mfc-textarea-wrapper
                default: true
              - name: Large
                value: mfc-textarea-wrapper--lg
            type: class
            select_multiple: false
          - name: Disabled
            selector: textarea
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: textarea
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
