---
title: Select
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-select-examples--default-story
tabs:
  - title: Usage
    body: ""
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
