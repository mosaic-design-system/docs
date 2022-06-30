---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation rail
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-navigation-rail-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation rail?


      A **Navigation rail** is a side-navigation component that displays links to primary destinations in an application.


      - - -


      ### When, and why?


      **Navigation rails** provide a compact, but consistent, approach to navigation. They should be used to provide access to top-level destinations on desktops and tablets, which need to be accessed from anywhere. 


      On smaller screens the **Navigation rail** should transition to a [**Navigation bar**](/components/navigation-bar). 


      Although a **rail** can be used in its own, when there is a secondary navigation structure it should be used in conjunction with a [**Drawer**](/components/drawer) to display secondary destinations or actions. 


      - - -


      ## Navigation rail types


      The following **Navigation rail** types are available:


      | **Type**      | **Description**                                                                         | **Behaviour** |

      | ------------- | --------------------------------------------------------------------------------------- | ------------- |

      | Default       | A Navigation rail containing up to 8 destinations, represented by icons and text labels |               |

      | With tooltips | Adds tooltips to each item of a Navigation rail                                                    |               |


      - - -


      ## Using a Navigation rail


      ### Navigating with a rail

      When a user selects a **rail** item, they are taken to the top-level destination associated with it and that item appears selected. These locations should be very high level, and denote different 'areas' of your product, separated logically.


      You should only ever have eight items on a **Navigation rail**, to ensure the list of available locations isn't too long and difficult to locate individual places. 


      You should also put some thought into the ordering of these items - alphabetical works for a rail with a small number of options, but you may decide that actually it's more useful to list the items in order of importance for larger lists. 


      ### Signposting destinations


      **Navigation rail** destinations are always represented by icons that indicate the content or the nature of a destination. In addition, they must always include text labels. Icons alone should never be used, as icons may not be universally known and will automatically exclude users that do not known what they mean. 


      Text labels should provide short, meaningful descriptions and provide an alternative way for users to understand an icon’s meaning. Labels should not be truncated and wrapping long labels should be avoided when possible.


      Navigation rails can contain up to 8 items.


      ### Additional iconography

      **Navigation rail** icons can include [**Chips**](/components/chips) to convey information about the associated destination, such as a count of the number of things that require the user's attention. When **Chips** are used in this way, they must be placed centrally, underneath a **rail** item.


      **Location**


      **Navigation rails** are placed on the left-hand side of the screen and always run vertically along the side of a page.


      The top of a **Navigation rail** can also be used for a logo. However, this is dependent on the layout you are using. For example, if you are using a layout where the Navigation Header runs across the entire top of the screen, then the logo would be placed on the left-hand side of the header. For more information, please refer to Layouts as soon as they become available.


      ### Drawers

      As mentioned above, **Navigation rails** can also be used with a **Drawer**. This supports your navigation structure if you have secondary destinations or additional actions, providing further navigation options for your user. They can continue to navigate between sub-destinations in each section, or move to another section in the **Navigation rail**. Keep in mind that a **Drawer** is unnecessary if there are no secondary destinations or actions in your application.



      ### Smaller screens

      When moving from a large screen to a smaller display, a **Navigation rail** transforms into a **Navigation Bar** component, which still provides the same access as a **rail**, but in a way that's suitable for smaller screens. A **rail** and a **Bar** should never be used at the same time - a user should only ever have one type of 'top-level' navigation available to them.
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


      When designing with a **Navigation rail**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Navigation rail** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Navigation rail** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the contents within the **Navigation rail**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      A **Navigation rail** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
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
