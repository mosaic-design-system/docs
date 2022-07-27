---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Pagination
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-pagination-introduction
tabs:
  - title: Usage
    body: >-
      ## What is Pagination?


      **Pagination** is a mechanism for breaking up content into multiple pages, and includes a visual depiction of the number of said pages that are available in a given context. For example, if a user is looking at a list of employees in a department, a **Pagination** component would break that down into 15 pages of employees, and show which page they are currently on and how many pages there are in total, and give them a method of quickly moving between these pages.


      ![On the left the page list pagination component on the right the page selector component](/assets/img/paginationsvglight.svg)


      - - -


      ### When, and why?


      **Pagination** should be used when there are more than 25 items displayed in one view, or when there is a large amount of data that cannot reasonably be presented on a single page. **Pagination** makes it easier for a user to find the information that they are looking for, and prevents needlessly long pages. 


      - - -


      ## Pagination types


      The following **Pagination** types are available:


      | **Type**   | **Description**                                                                                                                                                       |

      | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | As default | Pagination that shows pages listed horizontally with single step forward/back buttons and start/end buttons either side.                                              |

      | As select  | Pagination that shows a dropdown menu with the total number of pages detailed beside it. There is a single step forward/back button either side of the dropdown menu. |


      ## Pagination properties


      The following **Pagination** properties are available:


      | **Property** | **Description**                                                 |

      | ------------ | --------------------------------------------------------------- |

      | State        | Sets the state of the Pagination; Default, Active*, or Disabled |

      | Footnote     | Shows/hides the "Showing X of XX" footnote*                     |

      | Showing      | Sets the total number of pages*                                 |


      \

      *As default only\

      \*\*As select only


      - - -


      ## Using Pagination


      ### Pagination types


      A **Page list Pagination** is appropriate when there is a small fixed number of pages. Users can get frustrated if there is a very long list of available pages, and it can prove difficult to find the page they want.


      The **Page selector** is more useful for larger data sets. The buttons provided allow the user to jump backwards and forwards more easily.


      ![on the left the page list component with the text do use the page list component when there is a small number of pages with the recommended maximum being 12 pages. On the right the page selector component with the text don't use the page selector component when there is any less than 12 pages, the page list view component should be used in such instances.](/assets/img/paginationdosdontssvglight.svg)


      ### Pagination totals


      Both types of **Pagination** display the number of pages available to the user, and clearly show which one they are currently on. Ensure that the rest of the page clearly shows what it is that the user is looking through, and make sure that the entries on each page are displayed in a logical order (for example, alphabetically).


      ### Table Pagination


      **Pagination** is commonly used for data tables. It helps to help break down the data into a digestible manner. Table **Pagination** should always sit in the bottom right directly under the table.
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


      When designing with **Pagination**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Pagination** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      **Pagination** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on each element of the **Pagination**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      An **Pagination** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Pagination component. Use the drop-down menus and radio buttons to view the different Pagination Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <nav class="mcc-pagination" aria-label="Pagination">
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="double_left" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Start</span>
              </button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="back" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Back</span>
              </button>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="forward" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">Forward</span>
              </button>
              <button class="mcc-button mcc-button--outline mcc-button--icon-only">
                <mcc-icon name="double_right" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                <span class="mcc-button__label">End</span>
              </button>
            </nav>
        name: As default
        modifiers:
          - name: Disabled
            selector: .mcc-pagination button:nth-child(5)
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
