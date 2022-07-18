---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation bar
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-navigation-bar-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation Bar?


      A **Navigation bar** is a bottom navigation component that displays links to primary destinations in an application.


      - - -


      ### When, and why?


      **Navigation bars** provide a compact, but consistent approach to navigation. They should be used to provide access to top-level destinations on mobile devices, which need to be accessed from anywhere. On larger screens, the bar should transition to a **[Navigation rail](/components/navigation-rail)**. Although a **Bar** can be used in its own, when there is a secondary navigation structure, it should be used in conjunction with a **[Drawer](/components/drawer)** to display secondary destinations or actions.


      ## Navigation Bar types


      The following types of **Navigation Bar** are available:


      | **Type**   | **Description**                                                           |

      | ---------- | ------------------------------------------------------------------------- |

      | As default | A Navigation Bar which is displayed horizontally and contains rail items. |


      - - -


      ## Using a Navigation Bar


      ### Navigation items


      Each item on a **Bar** takes the user to the top-level destination associated with it, and that item then appears selected. **Navigation** bar destinations are always represented by icons and labels that indicate the content or the nature of a destination (see below for more information on using labels and icons effectively). 


      **Navigation bars** can contain up to 5 items. If there are more items, then the fifth item should become a "More" button, which displays a separate menu of the additional items.


      ### Bar positioning


      **Navigation bars** must be fixed to the bottom of the screen, i.e. when the page content is scrolled, the **Bar** remains visible. They run horizontally across the bottom of the screen, but do not scroll or move horizontally.


      ### Icons


      Icons alone should never be used, as icons may not be universally known and will automatically exclude users that do not known what they mean.


      Bar icons can include **[Chips](/components/chips)** to convey information about the associated destination, such as a count. When **Chips** are used in this way, they must be placed centrally, underneath a bar item.


      ### Labels


      In addition, they must always include text labels. Text labels should provide short, meaningful descriptions and provide an alternative way for users to understand an icon’s meaning. Labels should not be truncated and wrapping long labels should be avoided when possible.


      ### Drawer


      As mentioned above, **Bars** can also be used with a **Drawer** component. This supports your navigation structure if you have secondary destinations or additional actions. However, a **Drawer** is unnecessary if there are no secondary destinations or actions in your application.


      ### Bars on other devices


      When moving from a small screen to a larger display, **Bars** transform into a **Navigation rail** component. The **Rail** provides the same access as a **Bar**, but in a way that's suitable for larger screens. **Rails** and **Bars** should never appear on the same page together.
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


      When designing with a **Navigation bar**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Navigation bar** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Navigation bar** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the elements within the **Navigation bar**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Navigation bar** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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
