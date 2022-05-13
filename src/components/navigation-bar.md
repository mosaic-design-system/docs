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


      A **Navigation bar** is a bottom navigation component that displays links to primary destinations in an application.


      - - -


      ### When, and why?


      **Navigation bars** provide a compact, but consistent approach to navigation. They should be used to provide access to top-level destinations on mobile devices, which need to be accessed from anywhere. On larger screens, the bar should transition to a [**Navigation rail**](/components/navigation-rail). Although a **Bar** can be used in its own, when there is a secondary navigation structure, it should be used in conjunction with a [**Drawer**}(/components/drawer) to display secondary destinations or actions.


      - - -


      ## Using a Navigation Bar


      ### Navigation items


      Each item on a **Bar** takes the user to the top-level destination associated with it, and that item then appears selected. **Navigation** bar destinations are always represented by icons and labels that indicate the content or the nature of a destination (see below for more information on using labels and icons effectively). 


      **Navigation bars** can contain up to 5 items. If there are more items, then the fifth item should become a "More" button, which displays a separate menu of the additional items.


      ### Bar positioning


      **Navigation bars** must be fixed to the bottom of the screen, i.e. when the page content is scrolled, the **Bar** remains visible. They run horizontally across the bottom of the screen, but do not scroll or move horizontally.


      ### Icons


      Icons alone should never be used, as icons may not be universally known and will automatically exclude users that do not known what they mean.


      Bar icons can include [**Chips**](/components/chips) to convey information about the associated destination, such as a count. When **Chips** are used in this way, they must be placed centrally, underneath a bar item.


      ### Labels


      In addition, they must always include text labels. Text labels should provide short, meaningful descriptions and provide an alternative way for users to understand an icon’s meaning. Labels should not be truncated and wrapping long labels should be avoided when possible.


      ### Drawer

      As mentioned above, **Bars** can also be used with a **Drawer** component. This supports your navigation structure if you have secondary destinations or additional actions. However, a **Drawer** is unnecessary if there are no secondary destinations or actions in your application.


      ### Bars on other devices

      When moving from a small screen to a larger display, **Bars** transform into a **Navigation rail** component. The **Rail** provides the same access as a **Bar**, but in a way that's suitable for larger screens. **Rails** and **Bars** should never appear on the same page together.
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
