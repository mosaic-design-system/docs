---
title: Text input
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-text--as-default
tabs:
  - title: Usage
    body: "## What is a Text input?


      A **Text input** is a small text field mostly used for details
      consisting of a few words or numbers. It can also have the dropdown icon
      to choose from multiple pre-defined options where appropriate.


      A **Text input** differs from a **Rich-text area** in that it
      doesn't feature any features like bolding, underlining, or formatting of
      text.


      - - -


      ## When, and why?


      A **Text input** is often used for smaller details, such as a name,
      phone number, email address or other similar details consisting of a few
      words or numbers.\ 


      Alternatively, the **Text input** dropdown type can be used for
      short pre-defined options. This is for things like \"title\" options on
      forms, which would give a choice of things like \"Ms\", \"Mr\", \"Dr\",
      \"Mx\" etc.


      - - -


      ## Types


      The following **Form input** types are available, with each being
      able to be marked as mandatory (see [Validation](/components/validation)),
      disabled or read-only:


      | **Type** | Description |

      | --- | --- |

      | Default | The form field has a label to the top-left, and an
      appropriate label indicating what goes in the field - this can also
      include an icon to the left or the right of the form text |

      | Dropdown | Like a default form field, but with a number of
      predefined options to choose from. |


      - - -


      ## Using a Text input


      ### Labelling


      Like all copy within your product, you should read the [Tone of
      voice](/guidelines/tone-of-voice) and the [Content](/guides/style-guide)
      guidelines to create effective labels. Remember that your labels must be
      crystal clear on a form, so the user does not input the wrong information.


      ### Layout


      \r

      Form inputs should be presented in a single column layout, and not
      use two columns. Each field should be appropriate to the size of the
      expected information. For example, a field for a telephone number should
      have enough space to contain 11 character - for more information, please
      see [Field affordance](/guidelines/field-affordance).


      \r

      ### Validation


      Many of your **Text inputs** will be mandatory, such as names and
      contact information. Familiarise yourself with the
      [Validation](/components/validation) guidelines to make sure you implement
      it properly, both before and after entering information and submitting
      forms.

      \r


      ### Disabled & Read-only

      \r

      Disabled fields should have a light grey background with light grey
      text to show they are protected and cannot be edited, unless a user
      enables them by interacting with the screen elsewhere.


      Similarly, read-only fields have a dark background with no input
      border to show that they are for display purposes only - this
      differentiate them from regular fields."
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
