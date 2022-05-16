---
title: Text input
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-text--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Text input?


      A **Text input** enables users to input data as part of collecting information in a form.


      - - -


      ## When, and why?


      **Text inputs** are used when you need to capture single lines of text. For example, they are typically used for collecting things like name, phone number, email address or other similar details consisting of a few words or numbers.


      Text inputs are not suitable when you want to collect long responses. When this is the case, use a **[Textarea](/forms/textarea/)** or a **[Rich text editor](/forms/rich-text-editor/)**.


      - - -


      ## Types


      The following **Form input** types are available, with each being able to be marked as mandatory (see [Validation](/components/validation)), disabled or read-only:


      | **Type** | **Description**                                                                                      |

      | -------- | ---------------------------------------------------------------------------------------------------- |

      | Default  | A Text input which comprises; a label, and optionally, a mandatory indicator, help text, and an icon |

      | As small | A more compact version of above                                                                      |


      - - -


      ## Using a Text input


      ### Labelling


      Like all copy within your product, you should read the [Tone of voice](/guidelines/tone-of-voice) and the [Content](/guides/style-guide) guidelines to create effective labels. Remember that your labels must be crystal clear on a form, so the user does not input the wrong information.


      ### Layout


      Form inputs should be presented in a single column layout, and not use two columns. Each field must be sized appropriately. This means that a user should be able to understand the what is expected by simply looking at the width of an input. For example, if you are capturing a postcode, make the width of the input the size of a postcode, not the full width of the form. For more information, please see [Field affordance](/guidelines/field-affordance).


      ### Placeholder text


      Sometimes it is useful to include placeholder text in inputs. These provide a hint or the format of what to enter. Placeholder text should disappear as as the user begins to type into the input. However, placeholder text should never contain information crucial to the completion of a Text input.


      ### Validation


      Many of your **Text inputs** will be mandatory, such as names and contact information. Familiarise yourself with the [Validation](/components/validation) guidelines to make sure you implement it properly, both before and after entering information and submitting forms.


      ### Disabled & Read-only


      Disabled fields should have a light grey background with light grey text to show they are protected and cannot be edited, unless a user enables them by interacting with the screen elsewhere.


      Similarly, read-only fields have a dark background with no input border to show that they are for display purposes only - this differentiate them from regular fields.
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

    Below, you can find a live demo for an Input component. Use the drop-down menus and radio buttons to view the different Input Types and Variants.
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
