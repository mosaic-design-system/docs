---
title: Breadcrumb
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-breadcrumb-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Breadcrumb?


      A **Breadcrumb** is a secondary navigation aid that help users understand the relationship between their location and higher level pages. If the user is on a subpage, they can sometimes get confused as to what the 'parent' page is - a **Breadcrumb** helps solve that issue by showing them the path they took to get there!


      - - -


      ### When, and why?


      A **Breadcrumb** should be used when there are large amounts of content organised in a hierarchical manner. Use a **Breadcrumb** to indicate the current page's location within the navigational hierarchy.


      - - -


      ## Breadcrumb types


      The following **Breadcrumb** types are available:


      | Type           | Description                                                                                                                                       |

      | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **As default** | Boldfacing the last item (current page) gives it prominence and tells the user ‘this is where you are currently’. All other items are hyperlinks. |


      ## Breadcrumb properties


      The following **Breadcrumb** properties are available:


      | Type       | Description                                            |

      | ---------- | ------------------------------------------------------ |

      | **Levels** | Allows you to show the number of levels between 1 to 8 |


      - - -


      ## Using a Breadcrumb


      ### Breadcrumb sizing


      If you have one or two levels in your navigation, then a **Breadcrumb** will not be necessary. If you have three or more levels, then a **Breadcrumb** is useful. 


      ### Using Breadcrumbs to navigate


      Giving users multiple ways to navigate through the application allows them to easily jump back to a specific page in their current workflow without having to use large or complex menus. A **Breadcrumb** provides hyperlinks to allow users to quickly jump back to another page.


      ### Breadcrumb location


      Place a **Breadcrumb** at the top of the page, above the main content. Use forward slashes (/) to separate the links, and use shorter heading for each individual page in the **Breadcrumb** instead of the long original link name. 


      **Breadcrumbs** should not be used on the homepage - the homepage is where the user journey starts, it doesn’t make sense to show them how they got here - hopefully that should be obvious!
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


      When designing with a **Breadcrumb**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Breadcrumb** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      Each levels of a **Breadcrumb** need to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on each specific level of the **Breadcrumb**.


      ### Key Binding


      A **Breadcrumb** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Breadcrumb component. Use the drop-down menus and radio buttons to view the different Breadcrumb Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <nav aria-label="breadcrumb">
              <ol class="mcc-breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Nav</a></li>
                <li><a href="#">Controls</a></li>
                <li><a href="#">Settings</a></li>
                <li aria-current="page">Data</li>
              </ol>
            </nav>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: |-
            <nav aria-label="breadcrumb">
              <span>You are here:</span>
              <ol class="mcc-breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Nav</a></li>
                <li><a href="#">Controls</a></li>
                <li><a href="#">Settings</a></li>
                <li aria-current="page">Data</li>
              </ol>
            </nav>
        name: With label
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
