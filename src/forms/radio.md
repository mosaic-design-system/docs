---
title: Radio
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-radio--default-story
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

    Below, you can find a live demo for an Radio component. Use the drop-down menus and radio buttons to view the different Radio Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <fieldset class="mfc-fieldset">
              <legend>Radio input legend</legend>
              <div class="[ mfc-radio-wrapper ] [ mu-mb-03 ]">
                <input id="radioInput1" name="radioInputGroup" type="radio">
                <label for="radioInput1">Radio input</label>
              </div>
              <div class="[ mfc-radio-wrapper ] [ mu-mb-03 ]">
                <input id="radioInput2" name="radioInputGroup" type="radio">
                <label for="radioInput2">Radio input</label>
              </div>
              <div class="[ mfc-radio-wrapper ] [ mu-mb-03 ]">
                <input id="radioInput3" name="radioInputGroup" type="radio">
                <label for="radioInput3">Radio input</label>
              </div>
              <div class="mfc-help-text">Radio input help text</div>
            </fieldset>
        name: As default
        modifiers:
          - name: Disabled
            selector: input[id="radioInput1"]
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: >-
            <fieldset class="mfc-fieldset" style="max-width: 320px; width:
            100%">
              <legend>Radio input legend</legend>
              <div class="[ mfc-radio-button-wrapper ] [ mu-mb-03 ]">
                <input id="radioInput4" name="radioInputGroup2" type="radio">
                <label for="radioInput4">
                  <span>Radio input</span>
                  <span>Subtitle</span>
                </label>
              </div>
              <div class="[ mfc-radio-button-wrapper ] [ mu-mb-03 ]">
                <input id="radioInput5" name="radioInputGroup2" type="radio">
                <label for="radioInput5">
                  <span>Radio input</span>
                  <span>Subtitle</span>
                </label>
              </div>
              <div class="[ mfc-radio-button-wrapper ] [ mu-mb-03 ]">
                <input id="radioInput6" name="radioInputGroup2" type="radio">
                <label for="radioInput6">
                  <span>Radio input</span>
                  <span>Subtitle</span>
                </label>
              </div>
              <div class="mfc-help-text">Radio input help text</div>
            </fieldset>
        name: As choice button
        modifiers:
          - name: Disabled
            selector: input[id="radioInput4"]
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
