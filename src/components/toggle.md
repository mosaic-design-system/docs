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


      | Type                 | Description                                                                                                                                                                |

      | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**          | The default Toggle is a standard looking Toggle that is grey when toggled 'off' and blue when toggled 'on'. It has an optional label to the right hand side                |

      | **As choice button** | The same as the default Toggle but contained within a selectable button to give more emphasis. It also contains a title and subtitle to provide more descriptive labelling |


      - - -


      ## Using a Toggle


      ### Toggle labels


      Labels should be on the right-hand side of the **Toggle**. They should also be in sentence case and both the **Toggle** and the label should be contained within the same columns.


      ### Toggle placement


      **Toggles** should not be used for yes or no responses - they should only be used for turning things on or off. If you want a yes or no response, you should consider something like a **[Select](/forms/select)** or **[Radio button](/form/radio)**
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
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
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
