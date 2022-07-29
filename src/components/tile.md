---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tile
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-tile-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Tile?


      **Tiles** are customisable buttons, with a larger centralised icon and title text underneath. Tiles are 150px by 150px with an icon size of 64px by 64px.


      ![Tile component](/assets/img/tilesvglight.svg)


      - - -


      ## When, and why?


      **Tiles** can be used to build a user-friendly interactive screen, providing easy to use navigation. You can use **Tiles** to build things like home screens and dashboards on both mobile and desktop devices, and they are also great for acting as large navigation links elsewhere in the application.


      - - -


      ## Tile types


      The following **Tile** types are available: 


      | **Type**   | **Description**                                                                                                                                      |

      | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |

      | As default | Used for data visualisation and assembling a dashboard - the default type has an icon and text that can be used for desktop and other larger devices |


      ## Tile properties


      The following **Tile** properties are available:


      | **Property** | **Description**                                     |

      | ------------ | --------------------------------------------------- |

      | State        | Sets the state of a Tile; Default, Hover, or Active |

      | Title        | Shows/hides the title                               |


      - - -


      ## Using a Tile


      ### Tile labels


      All **Tiles** should have a label, **just like Buttons**. Make sure you use an informative label that describes where it will take the user, and be mindful of keeping it concise. You can check out the [Structure](/guidelines/style-guide/#structure) section of the Style Guide for more help on creating appropriate headings and labels.


      Labels in the **Tile** should also be centrally aligned.


      ### Tile icons


      Similarly, the icon in a **Tile** should be centrally aligned. 


      The icons are set to a height and width of 48px, and should use the icons from the [Icons8 icon library](https://mosaic-icon-search.oneadvanced.io/).


      ### Number of Tiles


      We do not have rules governing the number of **Tiles** that you include on a page. However, do keep in mind that an overuse of **Tiles** will make it hard for users to locate the content they are looking for. For example, 16 or more **Tiles** would be harder to navigate than an application that uses an effective navigation system, such as a **[Navigation bar](/components/navigation-bar)** component.


      ![Tiles used in a wireframe showing a group of 8 tiles](/assets/img/tilewireframesvglight.svg)
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


      When designing with a **Tile**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Accordion** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Tile** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Tile** as well as any content within the **Tile**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Tile** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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


    Below, you can find a live demo for a Tile component. Use the drop-down menus and radio buttons to view the different Tile Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button type="button" class="mcc-tile">
              <span>Tile</span>
            </button>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: |-
            <button type="button" class="mcc-tile">
              <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
              <span>Tile</span>
            </button>
        name: With icon
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
