---
title: Text input
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-text--as-default
tabs:
  - title: Usage
    body: "


      ## What is a form input small?


      A **form input small** is a small text field most used for details
      consisting of a few words or numbers. The field input small can also have
      the dropdown icon to choose from multiple pre-defined where appropriate.


      - - -


      ## When, and why?


      A **form input small** is often used for details such as name, phone
      number, email address or other similar details consisting of a few words
      or numbers, or the form input short dropdown can be used for short
      pre-defined options. There are two different types of the **form input
      small**.


      - - -


      ## Types



      Default: the form field has a label to the top left and appropriate
      form text indicating what goes in the field. In certain circumstances can
      include an icon to either the left or the right of the form text

      \r

      Dropdown. Like a default form field, has a label with form text
      positioned to the left of the field. The dropdown chevron down icon is
      aligned to the right-hand side.\ 


      - - -


      ## Variants



      Mandatory: has a label above the form field with a red asterisk to
      indicate the mandatory state. Also has a grey strip down the left-hand
      side before the field text acting as further indication.

      \r

      Disabled: the same styling as the default form field with the
      opacity of all elements set to 40% showing the user it is in the form but
      isn’t able to be used.

      \r

      Read-only: field text and labels remain the same as the default
      variant however the form field itself has no border and has a dark grey
      fill indicating the user is unable to change the content, but ensuring the
      content is still readable.


      - - -


      ## Using form field small?


      * Labels are aligned to the top left just above the form field.

      \r

      * Capital letters should only be used for the first word with the
      rest remaining lowercase

      \r

      * Form inputs should be presented in a single column layout not and
      not use two columns.


      \r

      * The field length should be used to indicate the length of the
      content so for example for a phone number it should be about 11 characters
      long (with the width attribute, in pixels).

      \r

      * Fields where necessary should contain correct validation showing
      the mandatory strip as red if filled in incorrectly with useful help text
      shown below.

      \r

      * Make sure disabled fields have a light grey background with light
      grey text to show they are protected and cannot be edited unless a user
      enables them by interacting with the screen.

      \r

      * Make sure read-only fields have a dark background with no input
      border to show that they are for display purposes only and to
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
