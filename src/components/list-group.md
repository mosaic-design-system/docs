---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: List group
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-list-group--with-buttons
tabs:
  - title: Usage
    body: >-
      ## What is a List Group


      **List groups** are a flexible component that can display a series of content. They can be modified and extended to support just about any content within.


      ### When and why


      When you have an ordered or unordered list of elements to display in your application, a **List group** can be used to display them.


      - - -


      ## List Group Types


      The following types of **List Group are available**. These are our default configurations for list items and should be used as designed, unless you need more content. If additional content is needed, please refer to Using a List Group below.


      | **Type**      | **Description**                                                                                                                                                                            |

      | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

      | Default       | A simple list of text items                                                                                                                                                                |

      | With selector | Selectors can be applied to allow the user to select one or more items and perform actions against them.                                                                                   |

      | With icon     | Icons can be added to support the content of the list item, but should not be used in conjunction with buttons or chips on the right - this will add too much cognitive load to the page |

      | With chip     | Chips can be used to signify status, content type, dates, etc.                                                                                                                             |

      | With button   | Buttons can be used to perform actions in relation to the list item                                                                                   |

      | With filter   | This adds a filter to the list                                                                                                                                                                  |

      | As flush      | This removes the boarder and padding around the list                                                                                                                                            |


      - - -


      ## Using a List Group


      ### Building list content


      If one of the default types doesn't allow enough information to be presented, start off with a default type and build on it so that you keep consistency with other **List Groups**. Each list item should only contain just enough information for the user to get what they need.  This keeps the items simpler and helps the user find what they need.


      ### Filter


      A filter can be added to the top of the **List Group** if the list is large to help the user to find the information they are interested in.  If pagination is being used to limit the number of list items returned, the filter should search the whole list available to the user, not just the items on their current page. 


      ### Flush


      Flush **List groups** have no border or padding.  Use this style of **List group** when there is already a form of grouping around the **List Group**. As an example, you might be putting a **List Group** on a **Card** and therefore the **Card** is the container. 


      ### Pagination


      Pagination can be used with a **List Group**.  This could be for performance reasons, or to help the user understand the size of the list and navigate around it.   To understand what type of pagination to use, see the [Pagination component page](/component/pagination).
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
