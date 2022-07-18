---
title: Radio button
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/forms-input-radio--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Radio button?


      A **Radio button** is a visual component that indicates if something is selected or not. A **Radio button** differs from a **[Checkbox](/forms/checkbox)** in that only one **Radio button** item can be selected from a list at any time.


      - - -


      ### When, and why?


      A **Radio button** can be used in forms where it is only possible to select one item, but the user has multiple choices.


      **Radio buttons** should only be used when there are 5 or less options.  More than that and you should consider a **[Select](/forms/select)**.


      - - -


      ## Radio button types


      **Radio buttons** can be unselected or selected. Active, Disabled, Read-only and Focussed states also apply to both of the above.


      | **Type**            | **Description**                                                                                                                                                                                                                                                                |

      | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

      | As default          | This is the default and should be used for multiple choice lists and parent-child multiple choice lists                                                                                                                                                                        |

      | As choice button    | This is a container and the Radio button is within the container. This is used where a label isn’t enough information and more text is required. This instead has both a title and subtitle accompanying the Radio button.                                                     |

      | As segmented button | A segmented control is a group of buttons wrapped in a single container. The buttons are separated by dividers with only one option from the segmented control being able to be selected at a time. These could be used for example to toggle between multiple different views |


      - - -


      ## Using a Radio button


      ### Where to use a Radio button


      **Radio buttons** are used when multiple options are available, no matter how they are linked. Only one **Radio button** can be selected from a list at any one time, so if the user selects an option in the list, other options will remain unselected or automatically become unselected.


      Additionally, **Radio buttons** should only be used within forms to collect data. Other areas of your product where you would be tempted to use them (i.e. choosing from a list of settings in a configuration page) should use components such as **[Buttons](/components/button)** instead. Segmented controls are an exception to this rule, as they share a lot of traits with **[Buttons](/components/button)** - they can be used to do things like toggle between different views.


      ### Multiple-selects


      Do not use a **Radio button** if a user can select multiple options from a list. In this case, **[Checkboxes](/forms/checkbox/)** should be used instead. **Radio buttons** only allow the user to select a single item from a set, whereas **Checkboxes** allow the user to select multiple options.
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **Radio button**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Radio button** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Radio button** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Radio button**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Radio button** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
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
