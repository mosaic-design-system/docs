---
title: Chip
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-chip--as-default
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


      The following types of **Chip** are available:


      | **Type**           | **Description**                                                                        | **Example** |

      | ------------------ | -------------------------------------------------------------------------------------- | ----------- |

      | Default            | A Chip that contains a simple text label                                               |             |

      | With icon          | A Chip that contains a text label and an icon on the left-hand side                    |             |

      | With trailing icon | A Chip that contains a text label and an icon on the right-hand side                   |             |

      | As soft            | A Chip that is styled using subtle background colours and a border                     |             |

      | As outline         | A Chip that is styled using a white background and a solid dark border                 |             |

      | As sized           | Allows a Chip to use one of the following sizes; Extra Small, Small, Medium, and Large |             |

      | As anchor          | Allows a Chip to be used as a link                                                        |             |

      | As button          | Allows a Chip to be used as a button                                                   |             |

      | As disabled        | Allows a Chip to be disabled                                                           |             |


      - - -


      ## Chip contexts


      Context helps convey the information being communicated. **Chip** contexts correspond to a colour to provide a consistent experience for users. For more information, please refer to [Colours](/guidelines/colours).


      | **Context**    | **Description**                                                                                                          |

      | ----------- | ------------------------------------------------------------------------------------------------------------------------ |

      | **Success** | Used where a Chip is required to show an element with a successful or positive nature. The Success colour is green.      |

      | **Danger**  | Used where a Chip is required to show an element with an unsuccessful or negative nature. The Danger colour is red.      |

      | **Warning** | Used where a Chip is required to show an element with an undesirable or unexpected nature. The Warning colour is yellow. |

      | **Info**    | Used where a Chip is required to show an element with a neutral or advisory nature. The Info colour is teal.             |


      - - -


      ## Using a Chip


      ### Chip placement

      **Chips** can be used as labels or counters. The important fact is that they are in-line elements, enabling them to be placed pretty much anywhere. They often work well in navbars, sidebars, tabs, or in tables to indicate a status.


      **Chip frequency**

      Like any component, overuse can quickly erode usefulness. With this in mind, you should always consider how often **Chips** are being used and whether they provide a clear and helpful relationship with their associated content. Most importantly, **Chips** should make tasks easier to complete, content easier to sort, selections easier to determine, and pages easier to scan.


      **Chip contexts**

      Use the various contextual colours described above to denote further meaning, but be careful when combining colours with backgrounds of other elements. For example, red **Chips** on green backgrounds are not accessible. Consider high contrast pairings so the **Chip** value is easy to read.
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
