---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation header
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-navigation-header--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a \[Component?]


      A **\[Component]** is...


      - - -


      ### When, and why?


      Text


      - - -


      ## \[Component] types


      The following types of \[Component] are available:


      | **Name** | **Description** | **Behaviour** | **Example** |

      | -------- | --------------- | ------------- | ----------- |

      | Default  |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |


      - - -


      ## \[Component] contexts


      Context helps convey the information being communicated. Dialog contexts correspond to a colour to provide a consistent experience for users. For more information, refer to Colours \[link to Colours page].


      | **Name** | **Description** | **Behaviour** | **Examples** |

      | -------- | --------------- | ------------- | ------------ |

      | Success  |                 |               |              |

      | Danger   |                 |               |              |

      | Warning  |                 |               |              |

      | Info     |                 |               |              |


      - - -


      ## Using a \[Component]


      Text
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


    Below, you can find a live demo for a Navigation Header component. Use the drop-down menus and radio buttons to view the different Navigation Header Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <div class="mcc-nav" style="height: auto;">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
        name: As default
        modifiers:
          - name: Vertical
            selector: .mcc-nav
            classes:
              - name: Vertical
                value: mcc-nav--vertical
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
