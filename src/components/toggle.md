---
title: Toggle
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/forms-input-checkbox--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Toggle?


      A **Toggle** is a useful tool for when you require an instant response or to turn different settings on/off.


      - - -


      ### When, and why?


      A **Toggle** is useful for when you want to switch something on or off in a given context. For example, in Clear Review, we use a **Toggle** to turn on 'Giving Feedback anonymously' when a user is giving Feedback.


      - - -


      ## Toggle types


      The following **Toggle** types are available:


      | Type        | Description                                                                                                      |

      | --------------- | ---------------------------------------------------------------------------------------------------------------- |

      | **Default**     | The default Toggle is a standard looking Toggle that is grey when toggled 'off' and green when toggled 'on' |

      | **With on/off** | The same as the default Toggle but with labels for when it is toggled 'on' and 'off'                            |

      | **With label**  | A Toggle with a label to the right hand side                                                                                  |


      - - -


      ## Using a Toggle


      ### Toggle labels

      Labels should be on the right-hand side of the **Toggle**. They should also be in sentence case and both the **Toggle** and the label should be contained within the same columns.


      ### Toggle placement

      **Toggles** should not be used for yes or no responses - they should only be used for turning things on or off. If you want a yes or no response, you should consider something like a [**Select**](/forms/select) or [**Radio button**](/form/radio)
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
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **Toggle**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Toggle** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Toggle** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Toggle**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      A **Toggle** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
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
