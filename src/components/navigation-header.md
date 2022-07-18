---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation header
toc: true
chips:
  - "HTML/CSS: Available"
storybook: hhttps://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-navigation-header-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation header?


      A **Navigation header** contains a list of global navigation links to guide users around your application.


      - - -


      ### When, and why?


      A sound navigation framework offers a high degree of discoverability and feedback, letting your users know where they are at all times and ensuring they can easily get to where they want to go.


      The **Navigation header** is the primary navigation for your application. It is fully responsive and begins collapsed in mobile views and becomes horizontal as the available screen width increases. It provides access to top level functions such as the search, notifications, profile, etc.


      On mobile devices, it serves to show and hide the essential sidebar navigation that allows the user to navigate around the application.


      - - -


      ## Navigation Header types


      The following types of **Navigation Header** are available:


      | **Type**   | **Description**                                                |

      | ---------- | -------------------------------------------------------------- |

      | As desktop | A Navigation Header that is designed for desktop applications. |

      | As mobile  | A Navigation Header that is designed for mobile applications.  |


      ## Navigation Header properties


      The following **Navigation Header** properties are available:


      | **Property** | **Description**                                                              |

      | ------------ | ---------------------------------------------------------------------------- |

      | Brand        | Shows/hides the brand logo and product name                                  |

      | Chips        | Shows/hides optional Chips for indicating organisations, awareness days, etc |

      | Back         | Shows/hides a Back button*                                                   |

      | Username     | Show/hides a profile button*                                                 |


      \

      *Mobile header only


      - - -


      ## Using a Navigation Header


      ### Navigation structure


      The **Navigation header** is a fundamental part of the the application. It is used in conjunction with other navigational components to form the overall shell or layout.


      There are 4 navigation components: **Navigation header**, **[Navigation rail](/components/navigation-rail)**, **[Drawer](/components/drawer)**, and **[Navigation bar](/components/navigation-bar)**. 


      The **Navigation Header** is the primary navigation that appears across the top of the page, while the **Rail** and **Drawer** are combined to create a **[Sidebar](/patterns/sidebar)** for the secondary navigation, which appears in a left-hand pane. Using a **Navigation header** with a **Sidebar** is a common pattern for multiple levels of navigation. The **Navigation bar** is used to display links across the bottom on small devices.


      As such, a **Navigation header** should be present on **every** page in your application, and only appear once on each page.


      ### Navigation sizing


      The **Navigation header** responds to the size of the screen. This means it collapses incrementally as the screen size reduces, while maintaining access to the navigation links. 


      ### Navigation links


      The links on your **Navigation header** should all be global links that are the 'largest' sections of your application. Careful consideration should be put into the navigation hierarchy of your application. Each link should be at the top-level of your navigation structure - secondary content can be put into the **Sidebar** on each of those pages.


      Furthermore, make sure you do not overcrowd the **Navigation header**. Too many options presented to the user may overwhelm them. A general rule of thumb should be two to six items in the **Header**.


      The labels for each link should be short and concise, and be no more than a few words. Users should be able to read these labels and learn something about where it will take them without too much outside context.
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


      When designing with a **Navigation header**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Navigation header** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Navigation header** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the elements within the **Navigation header**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Navigation header** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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
