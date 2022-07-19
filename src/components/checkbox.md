---
title: Checkbox
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/forms-input-checkbox--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Checkbox?


      A **Checkbox** is a visual component that indicates if something is selected or not.


      - - -


      ### When, and why?


      **Checkboxes** are used in forms so that users can choose one or more options.


      - - -


      ## Checkbox types


      **Checkboxes** can be unselected, selected or indeterminate (which is when a checkbox is neither selected or unselected and therefore cannot be determined). Active, Disabled, Read-only and Focused states also apply to all of the above.


      In addition, the following **Checkbox** types are available:


      | **Type**         | **Description**                                                                                                                                                            |

      | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | As default       | A default Checkbox used in multiple choice lists and parent-child multiple choice lists                                                                                    |

      | As choice button | A Checkbox within a container, used where a label isn’t enough information and more text is required - instead, it has both a title and subtitle accompanying the checkbox |


      ![Checkbox component next the checkbox as a choice button](/assets/img/checkboxsvglight.svg)


      ## Checkbox properties


      In addition, the following **Checkbox** properties are available:


      | **Property** | **Description**       |

      | ------------ | --------------------- |

      | State        |                       |

      | Selected     |                       |

      | Label        |                       |

      | Mandatory    | (Choice buttons only) |

      | Help         | (Choice buttons only) |


      - - -


      ## Using a Checkbox


      ### Checkbox behaviour


      **Checkboxes** are used for multiple choices, and work independently from other **Checkboxes** in the same list - therefore, checking an additional box does not affect any other selections.


      ### Parent Checkboxes


      **Checkboxes** allow users to select one or multiple items in a list. Applying a 'parent' **Checkbox** allows the user to easily select all or unselect all items. The undetermined state will appear if the user selects all via the parent and then deselect 1 or more of the children. 


      ### Standalone Checkboxes


      We only suggest using a single checkbox to collect data and as part of another question/item, rather than as a standalone question/item. For example a checkbox used on a log in page with 'Keep me logged in' only works in relation to the input fields above and the preference is saved upon successfully logging in.


      ### Single-selects


      Do not use a **Checkbox** if a user can select **only** one option from a list. In this case, [Radio buttons](/forms/radio-buttons) or a [Toggle switch](/component/toggle) depending on the 'save' should be used instead. **Checkboxes** allow the user to select multiple items in a set, whereas **Radio Buttons** allow the user to select only one option.


      ![On the left four radio buttons with the following text do use the radio button' if only one item from a list can be selected. on the right are four checkbox' with the text don't use the checkbox in a list if only one item can be selected at any one time.](/assets/img/checkboxdosdontssvglight.svg)


      ### Using a checkbox in a table


      A selection column on a table is the only instance that a **Checkbox** without a label is valid, as the column header becomes the overarching label. Applying a selection column to a table allows the user to easily scan read and see which rows are selected and are more visually prominent than unselected items. They also make it easier to compare available items.  The selector column must always be on the left.
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


      When designing with a **Checkbox**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Checkbox** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Checkbox** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Checkbox**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Checkbox** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: null
  body: >-
    ## Live demo

    Below, you can find a live demo for an Checkbox component. Use the drop-down menus and radio buttons to view the different Checkbox Types and Variants.
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
