---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation bar
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-navigation-bar--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation Bar?


      A Navigation Bar is a bottom navigation component that displays links to primary destinations in an application.


      - - -


      ### When, and why?


      Navigation Bars provide a compact, but consistent approach to navigation. They should be used to provide access to top-level destinations on mobile devices, which need to be accessed from anywhere. On larger screens the bar should transition to a Navigation Rail \[link to Navigation Rail page]. Although a bar can be used in its own, when there is a secondary navigation structure, it should be used in conjunction with a Drawer component \[link to Drawer page] to display secondary destinations or actions.


      - - -


      ## Navigation Bar types


      The following types of Navigation Bar are available:


      | **Name** | **Description** | **Behaviour** | **Example** |

      | -------- | --------------- | ------------- | ----------- |

      | Default  |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |

      |          |                 |               |             |


      - - -


      ## Using a Navigation Bar


      When users click or tap a bar item, they are taken to the top-level destination associated with it and that item appears selected. Navigation bar destinations are always represented by icons that indicate the content or the nature of a destination. In addition, they must always include text labels. Icons alone should never be used, as icons may not be universally known and will automatically exclude users that do not known what they mean. Text labels should provide short, meaningful descriptions and provide an alternative way for users to understand an icon’s meaning. Labels should not be truncated and wrapping long labels should be avoided when possible.


      Bar icons can include Chips \[link to Chips component page] to convey information about the associated destination, such as a count. When Chips are used in this way, they must be placed centrally, underneath a bar item.


      Navigation bars are placed at the bottom of the screen and always runs horizontally along the bottom of a page.


      As mention above, bars can also be used with a Drawer component. This supports your navigation structure if you have secondary destinations or additional actions. However, a drawer is unnecessary if there are no secondary destinations or actions in your application.


      When moving from a small screen to a larger display, bars transform into a Navigation Rail component, while still providing the same access but in a way that's suitable for larger screens. However, the Navigation Rail and Navigation Bar should not be used together.
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


    Below, you can find a live demo for a Navigation Bar component. Use the drop-down menus and radio buttons to view the different Navigation Bar Types and Variants.
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
