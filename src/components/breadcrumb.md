---
title: Breadcrumb
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-breadcrumb--with-label
tabs:
  - title: Usage
    body: >-
      ## What is an Breadcrumb?


      Secondary navigation aid that help users understand the relationship between their location and higher level pages.


      - - -


      ### When, and why?


      When there are large amounts of content organised in a hierarchical manner. Use breadcrumbs to indicate the current page's location within that navigational hierarchy.


      - - -


      ## Accordion Types


      All variations allow you to include a subheading


      | Variant     | Description                                                                               |

      | ----------- | ----------------------------------------------------------------------------------------- |

      | **Default** | The default **Accordion** has no actions on it, and simply expands and collapses content. |


      \|

      | **With chip**     | Chips in the header of an **Accordion** can be used to signify status, content type, dates, etc.                                                                                         |

      | **With edit**     | An edit button on an **Accordion** allows the user to enter an edit state.                                                                                                               |

      | **With overflow** | Used when there a specific actions linked to each accordion                                                                                                                              |

      | **With icon**     | Icons can be applied to support the content of the heading but should not be used in conjunction with buttons or chips on the right - this will add too much cognitive load to the page. |


      \[[Code up some examples here]]


      - - -


      ## Using a Breadcrumb


      If you have one or two levels in your navigation a breadcrumb will not be necessary. If you have three or more levels, then a breadcrumb is useful. Giving users multiple ways to navigate through the application allows them to easily jump back to a specific page in their current workflow without having to use large or complex menus.

      Place the breadcrumbs at the top of the page, above the main content. Use ">" arrows or "/" forward slashes to separate the links, use shorter heading for the breadcrumbs instead of long original link name.
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
