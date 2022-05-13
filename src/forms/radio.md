---
title: Radio button
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-radio--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Radio button?


      A **Radio button** is a visual component that indicates if something is selected or not. A **Radio button** differs from a [**Checkbox**](/forms/checkbox) in that only one **Radio button** item can be selected from a list at any time.


      - - -


      ### When, and why?


      A **Radio button** can be used in forms where it is only possible to select one item, but the user has multiple choices.


      - - -


      ## Radio button types


      **Radio buttons** can be unselected or selected. Active, Disabled, Read-only and Focussed states also apply to both of the above.


      | **Type**                   | **Description** |                                                                                                                                                                                                                       

      | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | With label                 | This is the default and should be used for multiple choice lists and parent-child multiple choice lists                                                                                                                                        |

      | Without label              | This should only be used within a selector column of a table where the column header becomes the label for the radio button                                                                                                                   |

      | Radio choice button        | This is a container and the Radio button is within the container. This is used where a label isn’t enough information and more text is required. This instead has both a title and subtitle accompanying the Radio button.           |

      | Radio choice button visual | This similar to the radio choice button, however there is an icon positioned to the left-hand side and the Radio button itself is aligned to the right hand side.  This should only be used where the icon helps the user to make a selection |

      | Segmented control| A segmented control is a group of buttons wrapped in a single container. The buttons are separated by dividers with only one option from the segmented control being able to be selected at a time. These could be used for example to toggle between multiple different views|

      - - -


      ## Using a Radio button


      ### Where to use a Radio button


      **Radio buttons** are used when multiple options are available, no matter how they are linked. Only one **Radio button** can be selected from a list at any one time, so if the user selects an option in the list, other options will remain unselected or automatically become unselected.


      Additionally, **Radio buttons** should only be used within forms to collect data. Other areas of your product where you would be tempted to use them (i.e. choosing from a list of settings in a configuration page) should use components such as [**Buttons**](/component/button) instead.


      ### Multiple-selects


      Do not use a **Radio button** if a user can select multiple options from a list. In this case, [**Checkboxes**](/forms/checkbox/) or a [**Toggle**](/forms/toggle) should be used instead. **Radio buttons** only allow the user to select a single item from a set, whereas **Checkboxes** allow the user to select multiple options.
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
