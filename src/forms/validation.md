---
title: Validation
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-text--as-default
tabs:
  - title: Usage
    body: >-
      ## What is Validation?


      **Validation** is when a user enters data, the form checks to see that the data is correct. If correct, the form notifies the application that the data can be submitted to the server; if not, it gives you an error message explaining what corrections need to be made.


      - - -


      ### When, and why?


      **Validation** is useful when you have a form where a particular criterion needs to be met (for example the amount of characters or specific fields that need to be filled out) in order for that data be submitted or in order to progress to the next step.


      For example, when you are logging into a product and you don't fill out the email field, then the **Validation** will show an error message explaining that you need to fill out the email field in order to continue.


      **Validation** isn't just to show people when they haven't completed something incorrectly, but in some cases to show them that they have completed something correctly.


      - - -


      ## Validation types


      The following **Validation** types are available, all of which allow you to include a subheading:


      | **Variant**                              | **Description**                                                           |

      | ---------------------------------------- | ------------------------------------------------------------------------- |

      | Form with red asterisk               | Shows that the form is mandatory and has Validation applied to it            |

      | Form with help text below                | Shows the user what form criteria they will have to complete to continue |

      | Form with red highlight                  | Shows the user which forms have failed Validation.                        |

      | Generic page error                       | Generic page errors will show if the data can't be submitted and why     |

      | Validation in sheet and/or applet footer | Shows validation within that sheet/applet before submitting information |


      - - -


      ## Using Validation


      ### Text validation


      Invalid text is **essential** for form fields as it helps the user to understand if something isn't right and gives them the opportunity to correct it.


      Where possible, you must show **Validation** (invalid) as soon as the user has completed an input so that they can correct as they go.


      Where necessary, showing the valid text is the most useful for fields that require special inputs, such as a password field.  Most other times you would not show valid text.



      ### Help text


      Help text should be considered part of your **Validation**. Giving help text below an input can provide useful additional information about what a field expects the user to enter. This type of information should be given as early as possible in the process. For example, if an input requires specific characters or length to be entered.


      The required or optional **Validation** should be considered part of your **Validation**.  If the majority of fields on the form are required (mandatory) then it is better to just show the optional ones. Similarly, if the majority of fields are optional, just show the required ones.
    icon: file_invoice
  - title: Code
    hook: ""
    icon: source_code
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  - title: Accessibility
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: null
  body: >-
    ### Uh-oh! Looks like we haven't finished building this page yet.


    Come back soon, and we'll have more exciting content to share.


    ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mfc-input-wrapper" style="max-width: 240px; width:
            100%">
              <label for="textInput1">Input</label>
              <input id="textInput1" name="textInput1" type="text">
              <div class="mfc-help-text">Input help text</div>
              <div id="textInput1" class="mfc-invalid-feedback">This is some invalid text</div>
            </div>
        name: As text
        modifiers:
          - name: Size
            selector: .mfc-input-wrapper
            classes:
              - name: Small
                value: mfc-input-wrapper--sm
              - name: Medium (default)
                value: mfc-input-wrapper
                default: true
              - name: Large
                value: mfc-input-wrapper--lg
            type: class
            select_multiple: false
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: input
            classes:
              - name: Invalid
                value: ms-is-invalid
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mfc-input-wrapper" style="max-width: 240px; width:
            100%">
              <label for="textInput2">Input</label>
              <input id="textInput2" name="textInput2" type="date">
              <div class="mfc-help-text">Input help text</div>
              <div id="textInput2" class="mfc-invalid-feedback">This is some invalid text</div>
            </div>
        name: As date
        modifiers:
          - name: Size
            selector: .mfc-input-wrapper
            classes:
              - name: Small
                value: mfc-input-wrapper--sm
              - name: Medium (default)
                value: mfc-input-wrapper
                default: true
              - name: Large
                value: mfc-input-wrapper--lg
            type: class
            select_multiple: false
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: input
            classes:
              - name: Invalid
                value: ms-is-invalid
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mfc-input-wrapper" style="max-width: 240px; width:
            100%">
              <label for="textInput3">Input</label>
              <input id="textInput3" name="textInput3" type="number">
              <div class="mfc-help-text">Input help text</div>
              <div id="textInput3" class="mfc-invalid-feedback">This is some invalid text</div>
            </div>
        name: As number
        modifiers:
          - name: Size
            selector: .mfc-input-wrapper
            classes:
              - name: Small
                value: mfc-input-wrapper--sm
              - name: Medium (default)
                value: mfc-input-wrapper
                default: true
              - name: Large
                value: mfc-input-wrapper--lg
            type: class
            select_multiple: false
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: input
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
