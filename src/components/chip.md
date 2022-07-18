---
title: Chip
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-chip-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Chip?


      A **Chip** is a compact element used to represent statuses, counts, selections, filters, or even trigger actions.


      - - -


      ### When, and why?


      **Chips** are mainly used to show statuses, or as counters to indicate, things like the number of unread notifications, emails, or outstanding tasks. By default, they are small and compact, and can be easily placed where space is limited and information is to be shown discretely. They should be used when you want to provide a clear visual indicator of something that aids the readability of a page without impacting the visual design too much.


      - - -


      ## Chip types


      The following **Chip** types are available:


      | **Type**   | **Description**                                                          |

      | ---------- | ------------------------------------------------------------------------ |

      | As solid   | A Chip that is styled using a solid background colour                    |

      | As soft    | A Chip that is styled using subtle background colours and a border       |

      | As outline | A Chip that is styled using a white background and a solid dark border   |

      | As filters | A Chip that is styled with a tick to show that a filter has been applied |


      ## Chip properties


      The following **Chip** properties are available:


      | **Property** | **Description**                                                            |

      | ------------ | -------------------------------------------------------------------------- |

      | Context      | Sets the context of a Chip, using one of the contextual colours below      |

      | State        | Sets the state of a Chip; Default, Hover, Active, or Disabled              |

      | Size         | Sets the size of a Chip; XS, S, M (default) or L                           |

      | Icon         | Sets whether a Chip contains an icon and its position; None, Left or Right |


      ## Chip contexts


      Context helps convey the information being communicated. **Chip** contexts correspond to a colour to provide a consistent experience for users. For more information, please refer to [Colours](/guidelines/colour).


      | **Context** | **Description**                                                                                                          |

      | ----------- | ------------------------------------------------------------------------------------------------------------------------ |

      | N/A         | Used where a Chip does not have a context, i.e. when it's disabled                                                       |

      | Primary     | Used where a Chip is required to show an element with a primary nature. The Primary colour is blue.                      |

      | Success     | Used where a Chip is required to show an element with a successful or positive nature. The Success colour is green.      |

      | Danger      | Used where a Chip is required to show an element with an unsuccessful or negative nature. The Danger colour is red.      |

      | Warning     | Used where a Chip is required to show an element with an undesirable or unexpected nature. The Warning colour is yellow. |

      | Info        | Used where a Chip is required to show an element with a neutral or advisory nature. The Info colour is teal.             |


      ![8 different chip contexts in three row grid. Top row consisting of primary, success, warning. Second row being negative, info, white and third row being disabled and outline](/assets/img/chipssvglight.svg)


      - - -


      ## Using a Chip


      ### Chip placement


      **Chips** can be used as labels or counters. The important fact is that they are in-line elements, enabling them to be placed pretty much anywhere. They often work well in navbars, sidebars, tabs, or in tables to indicate a status.


      ![Chips in five column table. First column checkbox, two text columns then chips and finally overflow button](/assets/img/useofchipssvglight.svg)


      **Chip frequency**

      Like any component, overuse can quickly erode usefulness. With this in mind, you should always consider how often **Chips** are being used and whether they provide a clear and helpful relationship with their associated content. Most importantly, **Chips** should make tasks easier to complete, content easier to sort, selections easier to determine, and pages easier to scan.


      **Chip contexts**

      Use the various contextual colours described above to denote further meaning, but be careful when combining colours with backgrounds of other elements. For example, red **Chips** on green backgrounds are not accessible. Consider high contrast pairings so the **Chip** value is easy to read.


      ### Chips as filters


      **Chips** can also be used to act as filters, sitting at the top of a table or something similar. They can be used as either the mechanism for filtering content, or as visual indicators for what is being filtered.


      #### Chips that act as toggleable filters


      These **Chips** are used as tags or descriptive words to filter content interactively. They are always visible and are typically positioned above or below their related content area. When selected, a leading tick icon is added in front of the **Chip's** label to show that it has been selected, and then when it is unselected the icon is removed. Multiple **Chips** can be selected or unselected, and as selections are made the associated content is filtered dynamically. 


      #### Chips that act as visual indicators of selected filters


      These **Chips** are used to indicate filters that have been applied via a separate filters area, such as a **Drawer**. They are only visible when applied and are typically positioned above or below their related content area. It is not possible to toggle these chips on/off interactively, but they do contain a trailing cross icon to directly remove the **Chip** (i.e. remove the filter). As filters are removed, the associated content changes dynamically.


      #### Positioning filter Chips


      As mentioned above, when **Chips** are used as filters (or visual indicators for filters), they can be positioned above or below their related content. Where they are placed depends on the following:﻿


      * If the filters are related to a table, then they should be placed above the table in a single row, as they directly affect the records it contains

      * If the filters are related to a search field, then they can be shown underneath in a single row, as they can be selected as part of the search process to narrow down results

      * If the filters are part of other components, such as side drawers, then they can be shown on multiple rows.
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


      When designing with a **Chip**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Chip** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Chip** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Chip**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Chip** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Chip component. Use the drop-down menus and radio buttons to view the different Chip Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: <span class="mcc-chip">Chip</span>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--primary
                name: Primary
                default: true
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mds-hide-chip-icon">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: With icon
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - name: Primary
                value: mcc-chip--primary
                default: true
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mcc-chip--primary">
              <span>Chip</span>
              <mcc-icon name="does-not-exist"></mcc-icon>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: With trailing icon
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--primary
                name: Primary
                default: true
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As soft
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--soft-primary
                name: Primary
                default: true
              - value: mcc-chip--soft-secondary
                name: Secondary
              - value: mcc-chip--soft-success
                name: Success
              - value: mcc-chip--soft-danger
                name: Danger
              - value: mcc-chip--soft-warning
                name: Warning
              - value: mcc-chip--soft-info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mcc-chip--outline">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As outline
        modifiers:
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <a href="#" class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </a>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As anchor
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--soft-primary
                name: Primary
                default: true
              - value: mcc-chip--soft-secondary
                name: Secondary
              - value: mcc-chip--soft-success
                name: Success
              - value: mcc-chip--soft-danger
                name: Danger
              - value: mcc-chip--soft-warning
                name: Warning
              - value: mcc-chip--soft-info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <button class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </button>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As button
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--soft-primary
                name: Primary
                default: true
              - value: mcc-chip--soft-secondary
                name: Secondary
              - value: mcc-chip--soft-success
                name: Success
              - value: mcc-chip--soft-danger
                name: Danger
              - value: mcc-chip--soft-warning
                name: Warning
              - value: mcc-chip--soft-info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
---
