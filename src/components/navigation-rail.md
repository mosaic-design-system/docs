---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation Rail
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-navigation-rail--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation Rail?


      A **Navigation Rail** is a side-navigation component that displays links to primary destinations in an application.


      - - -


      ### When, and why?


      **Navigation Rails** provide a compact, but consistent, approach to navigation. They should be used to provide access to top-level destinations on desktops and tablets, which need to be accessed from anywhere. 


      On smaller screens the **Navigation Rail** should transition to a [**Navigation Bar**](/components/navigation-bar). 


      Although a **Rail** can be used in its own, when there is a secondary navigation structure it should be used in conjunction with a [**Drawer**](/components/drawer) to display secondary destinations or actions. 


      - - -


      ## Navigation Rail types


      The following types of **Navigation Rail** are available:


      | **Name**      | **Description**                                                                         | **Behaviour** |

      | ------------- | --------------------------------------------------------------------------------------- | ------------- |

      | Default       | A Navigation Rail containing up to 8 destinations, represented by icons and text labels |               |

      | With tooltips | Adds tooltips to each item of a Navigation Rail                                                    |               |


      - - -


      ## Using a Navigation Rail


      ### Navigating with a Rail

      When a user selects a **Rail** item, they are taken to the top-level destination associated with it and that item appears selected. These locations should be very high level, and denote different 'areas' of your product, separated logically.


      You should only ever have eight items on a **Navigation Rail**, to ensure the list of available locations isn't too long and difficult to locate individual places. 


      You should also put some thought into the ordering of these items - alphabetical works for a Rail with a small number of options, but you may decide that actually it's more useful to list the items in order of importance for larger lists. 


      ### Signposting destinations


      **Navigation Rail** destinations are always represented by icons that indicate the content or the nature of a destination. In addition, they must always include text labels. Icons alone should never be used, as icons may not be universally known and will automatically exclude users that do not known what they mean. 


      Text labels should provide short, meaningful descriptions and provide an alternative way for users to understand an icon’s meaning. Labels should not be truncated and wrapping long labels should be avoided when possible.


      Navigation Rails can contain up to 8 items.


      ### Additional iconography

      **Navigation Rail** icons can include [**Chips**](/components/chips) to convey information about the associated destination, such as a count of the number of things that require the user's attention. When **Chips** are used in this way, they must be placed centrally, underneath a **Rail** item.


      **Location**


      **Navigation Rails** are placed on the left-hand side of the screen and always run vertically along the side of a page.


      [[Review the below section please Jop]]


      //The top of a **Navigation Rail** can also be used for a logo. However, this is dependent on the layout you are using. For example, if you are using a layout where the Navigation Header runs across the entire top of the screen, then the logo would be placed on the left-hand side of the header. For more information, please refer to Layouts \[link to Layouts page. We don't currently have one, but as we introduce more layouts, we'll need a page to document them].//


      ### Drawers

      As mentioned above, **Navigation Rails** can also be used with a **Drawer**. This supports your navigation structure if you have secondary destinations or additional actions, providing further navigation options for your user. They can continue to navigate between sub-destinations in each section, or move to another section in the **Navigation Rail**. Keep in mind that a **Drawer** is unnecessary if there are no secondary destinations or actions in your application.



      ### Smaller screens

      When moving from a large screen to a smaller display, a **Navigation Rail** transforms into a **Navigation Bar** component, which still provides the same access as a **Rail**, but in a way that's suitable for smaller screens. A **Rail** and a **Bar** should never be used at the same time - a user should only ever have one type of 'top-level' navigation available to them.
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


    Below, you can find a live demo for a Navigation Rail component. Use the drop-down menus and radio buttons to view the different Navigation Rail Types and Variants.
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
