---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Nav
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-nav-introduction
tabs:
  - title: Usage
    body: "## What is a Nav?


      A **Nav** is an easy way to position one or more links together
      inside other components.


      - - -


      ### When, and why?


      There may occasions when you want to display a series of links
      inside another component. For example, inside a tabbed UI, where sub-tabs
      or links are required.


      \r

      \r

      Another example of where a **Nav** component could be used is in a
      footer, where a number of links need to be grouped together into a block.
      Where this is the case, a **Nav** component positions links horizontally
      or vertically in a consistent manner, so you don't have to worry about
      padding or spacing.


      - - -


      ## Nav types


      The following types of **Nav** are available:


      | **Type**               | **Description**
      |                                                                                                                                  \
      \ 

      | ---------------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ------------------ |

      | Default                | A Nav with its links positioned
      horizontally                                                                                                                         \
      |

      | As vertical            | A Nav with its links positioned
      vertically                                                                                                                           \
      |

      | As simple              | A Nav with its links positioned
      horizontally, but without any padding - this is useful if the Nav is being
      placed inside a container that already has its own padding |

      | As vertical and simple | A Nav with its links positioned
      vertically, but without any padding - this is useful if the Nav is being
      placed inside a container that already has its own padding   |


      - - -


      ## Using a Nav



      ### Consistent, but simple

      There is no styling customisation available for the **Nav**
      component, but the main benefit of implementing it is that it
      automatically groups links on to a single line or column. It is an
      alternate and easier method to creating multiple links and manually
      positioning them next to each other. It makes your coding quicker and more
      maintainable - if something changes on the page, you don't need to worry
      about reformatting the content in the **Nav** component.


      ### Link text

      Always remember to keep link text short and concise, with ideally
      fewer than one or two words. Users should be able to scan links and learn
      something about their destination without much reference to the
      surrounding content. They should never be an instruction, either: \"click
      HERE to learn more about Mosaic\" should instead read \"Learn more\"."
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


      When designing with a **Nav**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Nav** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Nav** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the elements within the **Nav**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Nav** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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

    Below, you can find a live demo for a Nav component. Use the drop-down menus and radio buttons to view the different Nav Types and Variants.
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
