---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: List group
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-list-group-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a List group?


      **List groups** are a flexible component that can display a series of content. They can be modified and extended to support just about any content within.


      ### When, and why?


      When you have an ordered or unordered list of elements to display in your application, a **List group** can be used to display them.


      - - -


      ## List group types


      The following types of **List group** are available. These are our default configurations for list items and should be used as designed, unless you need more content. If additional content is needed, please refer to Using a List group below:


      | **Type**      | **Description**                           |

      | ------------- | ----------------------------------------- |

      | Default       | A simple list of text items               |

      | As flush      | This removes the boarder around the list  |


      ### List group properties


      **List group** contain a list of items. Each list item can be interactable and when clicked will perform some kind of action, much like a **Button** would, but in this scenario shouldn't contain any interactable components eg **Checkbox**. If the list items are not interactable then interactable components can be used. 


      The following **Dropdown** properties are available:


      | **Type**    | **Description**                                                                                                                 |

      | ----------- | --------------------------------------------------------- |

      | Filter      | Toggles a filter at the top of the list                   |

      | Style       | Default/Compact - compact reduces top and bottom padding and removes the ability to have a subtitle |

      | Selector    | Toggles a left-hand Checkbox to allow selection           |

      | Icon        | Toggles a left-hand icon (should not be used with Avatar) |

      | Avatar      | Toggles a left-hand Avatar (should not be used with Icon) |

      | Subtitle    | Toggles the subtitle text                                 |

      | Chip        | Toggles a Right-hand Chip to show a status or tag         |

      | Action menu | Toggles a right-hand button to open an actions menu       |


      - - -


      ## Using a List group


      ### Building list content


      If one of the default types doesn't allow enough information to be presented, start off with a default type and build on it so that you keep consistency with other **List groups**. Each list item should only contain just enough information for the user to get what they need.  This keeps the items simpler and helps the user find what they need.


      ### Filter


      A filter can be added to the top of the **List group** if the list is large to help the user to find the information they are interested in.  If pagination is being used to limit the number of list items returned, the filter should search the whole list available to the user, not just the items on their current page. 


      ### Flush


      Flush **List groups** have no border or padding.  Use this style of **List group** when there is already a form of grouping around the **List group**. As an example, you might be putting a **List group** on a **Card** and therefore the **Card** is the container. 


      ### Pagination


      Pagination can be used with a **List group**.  This could be for performance reasons, or to help the user understand the size of the list and navigate around it.   To understand what type of pagination to use, please refer to the [Pagination component page](/components/pagination).
    icon: file_invoice
    toc: true
  - title: Code
    hook: code
    icon: source_code
    toc: false
  - title: Accessibility
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **List group**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **List group** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **List group** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on each part of the **List group**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      A **List group** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a List Group component. Use the drop-down menus and radio buttons to view the different List Group Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li>Oranges</li>
              <li>Pineapples</li>
              <li>Apples</li>
              <li>Bananas</li>
              <li>Pears</li>
            </ul>
        name: As default
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
      - template:
          lang: html
          code: |-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li>
                <button type="button">Oranges</button>
              </li>
              <li>
                <button type="button">Pineapples</button>
              </li>
              <li>
                <button type="button">Apples</button>
              </li>
              <li>
                <button type="button">Bananas</button>
              </li>
              <li>
                <button type="button">Pears</button>
              </li>
            </ul>
        name: With buttons
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li class="mu-d-flex mu-align-items-center mu-justify-content-between">
                <span>Oranges</span>
                <button class="[ mcc-button mcc-button--outline mcc-button--sm ] [ mu-ml-auto mu-w-auto ]" aria-haspopup="true">
                  <span class="mcc-button__label">Button</span>
                </button>
              </li>
              <li>Pineapples</li>
              <li>Apples</li>
              <li>Bananas</li>
              <li>Pears</li>
            </ul>
        name: With nested buttons
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
      - template:
          lang: html
          code: |-
            <ul class="mcc-list-group" style="max-width: 400px; width: 100%">
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Oranges
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Pineapples
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Apples
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Bananas
                  </span>
                </label>
              </li>
              <li>
                <label class="mfc-checkbox-wrapper">
                  <input class="mu-mr-05" type="checkbox" value="">
                  <span class="mu-mr-auto">
                    Pears
                  </span>
                </label>
              </li>
            </ul>
        name: With checkbox
        modifiers:
          - name: Flush
            selector: .mcc-list-group
            classes:
              - name: Flush
                value: mcc-list-group--flush
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
