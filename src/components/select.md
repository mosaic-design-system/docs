---
title: Select
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/forms-select-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Select?


      A **Select** opens a list of options under the input field (in an overlay) that a user can select from within a form.  The selected option is shown in the input field when overlay is no longer open and not the focus of the user. 


      ![Top left select default, top centre select active, top right select focussed. Middle left select disabled, top centre select read only, bottom left select valid, bottom centre select invalid](/assets/img/selectsvglight.svg)


      - - -


      ### When, and why?


      You should use a **Select** when you need a user to select one or more options from a large group of data. Using a **Select** allows the user to search and filter through the given list.


      Selects are similar to [Dropdowns](/components/dropdown).  Dropdowns however should never be used as part of a form.


      - - -


      ## Select types


      The following **Select** types are available:


      ### Types


      | **Type**   | **Description**                                                       |

      | ---------- | --------------------------------------------------------------------- |

      | As default | A Select which allows a user to choose an item from a list of options |


      ## Select properties


      The following **Select** properties are available:


      | **Property** | **Description**                                            |

      | ------------ | ---------------------------------------------------------- |

      | State        | Sets the state of a nav button; Default, Hover, or Active* |

      | Size         | Sets the size of the Select; S and M (default)             |

      | Label        | Shows/hides the input label                                |

      | Mandatory    | Shows/hides the mandatory input markers                    |

      | Help         | Shows/hides the help text                                  |


      - - -


      ## Using a select


      ### Minimum required options


      A **Select** should only be used if there are six or more options to choose from. If the user has fewer options to choose from, then you can use [Radio buttons](/forms/radio-buttons) instead, or [Checkboxes](/forms/checkbox) for answers that require multiple answers.


      ![on the left the select default with the text do use the select if there are more than six options available. On the right the radio button component with the text don't use the select if there are six or less options available](/assets/img/selectdosdontssvglight.svg)


      ### Select sizing


      The field width should be the same as the widest option that the user will be able to pick from. [See field affordance for more information](/guidelines/field-affordance)


      ### Multiple select


      In cases where the user needs to select multiple options, consideration needs to be taken about the number of options they might Select.  If it is going to be a large amount, for example more than 10, then it might be better to try a different approach.  For example, the **Select** input could be split it to several select inputs if the options can be grouped, or a **Picklist** might be a better component to use. 


      ### Option groups


      If the options in your **Select** menu have a hierarchy or categorisation, you should split them into groups (using headings). This allows users to find the option quickly by scanning the group labels instead of every single option. These groups should be logical (for the user) and have meaningful names.


      All headings should follow the guidelines outline in [Content](/guidelines/style-guide).


      - - -


      ## References


      https://www.nngroup.com/articles/drop-down-menus/

      https://www.nngroup.com/articles/listbox-dropdown/
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


      When designing with a **Select**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Select** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Select** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Select** and the elements within it.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      An **Select** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
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
