---
title: Rich Text Editor
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-checkbox--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Rich Text Editor?


      A Rich Text Editor (RTE) is a form input that allows users to add or edit content in a "what-you-see-is-what-you-get" (WYSIWYG) editing area.


      - - -


      ### When, and why?


      RTEs are really useful when you want to provide users with a way of adding or editing content, images, links, and other components, without having to know any code. They also allow content to be styled and formatted using bold, italics, headings, etc. The aim is to reduce the effort for users to enter formatted content directly, as valid HTML.




      - - -


      ## Using a Rich Text Editor


      RTEs...


      As with all form inputs, a RTEs can be checked when a form is submitted to make sure its contents are valid or, if it is flagged as a mandatory field, that it's completed before continuing. For more information, refer to Form Validation \[link to Form Validation page].
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


    Below, you can find a live demo for a Rich Text Editor component. Use the drop-down menus and radio buttons to view the different Rich Text Editor Types and Variants.
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
