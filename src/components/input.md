---
title: Input
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/forms-input-introduction--html-stylesheet
tabs:
  - title: Usage
    body: >-
      ## What is an Input?


      An **Input** enables users to type data as part of collecting information in a form.


      - - -


      ## When, and why?


      **Inputs** are used when you need to capture the manual entry of single items of data. They are typically used for collecting things like name, phone number, email address or other similar details consisting of a few words or numbers.


      It should be noted that **Inputs** are not suitable when you want to collect long responses. For example, when you want to capture multiple lines of text or allow users to format their content. When this is the case, use a **[Textarea](/forms/textarea/)** or a **[Rich text editor](/forms/rich-text-editor/)** respectively.


      - - -


      ## Types


      The following **Input** types are available, with each being able to be marked as mandatory (see [Validation](/components/validation)), disabled or read-only:


      | **Type**     | **Description**                                        |

      | ------------ | ------------------------------------------------------ |

      | Default      | An Input that accepts a plain text entry               |

      | As email     | An Input that accepts an email address                 |

      | As number    | An Input that accepts a numeric value                  |

      | As password  | An Input that accepts a password and hides its content |

      | As search    | An Input that can be used to facilitate a search       |

      | As telephone | An Input that accepts a telephone number               |

      | As URL       | An Input that accepts a Uniform Resource Locator (URL) |


      - - -


      ## Using an Input


      ### Labelling


      Like all copy within your product, you should read the [Tone of voice](/guidelines/tone-of-voice) and the [Content](/guides/style-guide) guidelines to create effective labels. Remember that your labels must be crystal clear on a form, so the user does not input the wrong information.


      ### Layout


      Inputs should be presented in a single column layout, and not use two columns. Each field must be sized appropriately. This means that a user should be able to understand the what is expected by simply looking at the width of an input. For example, if you are capturing a postcode, make the width of the input the size of a postcode, not the full width of the form. For more information, please see [Field affordance](/guidelines/field-affordance).


      ### Placeholder text


      Sometimes it is useful to include placeholder text in **Inputs**. These can help the user see the format of what to enter. Placeholder text should disappear as the user begins to type. However, placeholder text should never contain information crucial to the completion of an **Input**.


      ### Validation


      Many of your **Inputs** will be mandatory, such as names and contact information. Familiarise yourself with the [Validation](/components/validation) guidelines to make sure you implement it properly, both before and after entering information and submitting forms.


      ### Disabled & Read-only


      Disabled fields should have a light grey background with light grey text to show they are protected and cannot be edited, unless a user enables them by interacting with the screen elsewhere.


      Similarly, read-only fields have a dark background with no input border to show that they are for display purposes only - this differentiate them from regular fields.
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


      When designing with an **Input**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Input** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/). Please note that inputs can only be used on a white background or 'soft' default background in order to be AA compliant.


      ### Focus state


      An **Input** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Input** and its elements.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      An **Input** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
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
