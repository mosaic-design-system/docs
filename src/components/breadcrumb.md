---
title: Breadcrumb
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/dev/components/?path=/docs/components-breadcrumb-introduction
tabs:
  - title: Usage
    body: >-
      ## What is an Breadcrumb?


      A **Breadcrumb** is a secondary navigation aid that help users understand the relationship between their location and higher level pages. If the user is on a subpage, they can sometimes get confused as to what the 'parent' page is - a **Breadcrumb** helps solve that issue by showing them the path they took to get there!


      - - -


      ### When, and why?


      A **Breadcrumb** should be used when there are large amounts of content organised in a hierarchical manner. Use a **Breadcrumb** to indicate the current page's location within the navigational hierarchy.


      - - -


      ## Breadcrumb types


      The following **Breadcrumb** types are available, and each allows you to include a subheading


      | Variant     | Description                                                                                                                                       |

      | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default** | Boldfacing the last item (current page) gives it prominence and tells the user ‘this is where you are currently’. All other items are hyperlinks. |


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
    body: ""
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
