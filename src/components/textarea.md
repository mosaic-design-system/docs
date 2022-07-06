---
title: Textarea
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/forms-textarea-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Textarea?


      A **Textarea** is a form input that allows multiple lines of text to be entered. They differ from a [**Rich Text Editor**](/forms/rich-text-editor) in that they do not allow the user to format the text in any way.


      - - -


      ### When, and why?


      **Textareas** are really useful when you want to provide users with a way of submitting or recording some text. Usually, you would use them when the expected amount of content is more than a single line of text.


      For example, when submitting a request for something, you may include a **Textarea** field that is labelled "Reason" to give the user the option to give a reason for the request.


      - - -


      ## Textarea types


      The following **Textarea** types are available:


      | **Type**             | **Description**                                                                                          | **Behaviour** |

      | -------------------- | -------------------------------------------------------------------------------------------------------- | ------------- |

      | Default              | An input that allows more than one sentence to be entered                                                |               |

      | With character count | A Textarea that also displays the total number of characters permitted and how many there are remaining |               |


      - - -


      ## Using a Textarea


      ### Sizing

      **Textareas** are taller than regular text inputs and wrap text onto new lines automatically as a user types. They have a fixed height and scroll vertically when the text exceeds the bottom of the given area. However, they can also be manually resized to create a bigger space for content, if a user needs it.


      The starting size of a **Textarea** should indicate the amount of content that is expected, and roughly equate to the size required for the maximum of a character limit if you have included one.


      ### Character limits

      **Textareas** can also include a character limit and counter. This lets users know how long their entry can be before they start typing. Once the character limit has been reached, the user will no longer be able to input any more text.


      ### Validation

      As with all form inputs, a **Textarea** can be checked when a form is submitted to make sure its contents are valid or, if it is flagged as a mandatory field, that it's completed before continuing. For more information, please refer to [**Form Validation**](/components/validation).
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


      When designing with a **Text area**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Text area** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Text area** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Text area** and all of its elements.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Text area** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: null
  body: >-
    ## Live demo

    Below, you can find a live demo for a Textarea component. Use the drop-down menus and radio buttons to view the different Textarea Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mfc-textarea-wrapper" style="max-width: 240px; width:
            100%">
              <label for="textarea1">Textarea input</label>
              <textarea id="textarea1" name="textarea1"></textarea>
              <div class="mfc-help-text">Textarea input help text</div>
              <div id="textarea1" class="mfc-invalid-feedback">This is some invalid text</div>
            </div>
        name: As default
        modifiers:
          - name: Size
            selector: .mfc-textarea-wrapper
            classes:
              - name: Small
                value: mfc-textarea-wrapper--sm
              - name: Medium (default)
                value: mfc-textarea-wrapper
                default: true
              - name: Large
                value: mfc-textarea-wrapper--lg
            type: class
            select_multiple: false
          - name: Disabled
            selector: textarea
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: textarea
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
