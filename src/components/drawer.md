---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Drawer
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/custom-elements-drawer--as-dismissible-start
tabs:
  - title: Usage
    body: >-
      ## What is a Drawer


      A **Drawer** is panel that can appear on any side of the application. It will usually take up the whole height or width and can either push the content or be an overlay.   


      ### When and why


      There are two main purposes of a **Drawer**, navigation or contextual content. 

      The navigation Drawer is usual used as part of the shell of the application to do site wide navigation. 

      Contextual content Drawers are used to show options or information that relate the current page, such as, filters, advanced search options, form submissions, etc. The drawer would be shown by an action a user takes on the main page, eg a button. 

      On mobile bottom Drawers are also used a instead of Dropdowns to display a list of actions. 


      - - -


      ## Drawer types


      | **Type**        | **description**                                                                                                                                                |

      | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | As dismissible  | The Drawer will push the current content over to make space for the drawer. The user can toggle the drawer in and out.                                         |

      | As modal        | Shown as an overlay which can not be dismissed unless the user selects a close option. This means the user can only interact with the drawer while it is open. |

      | Position        | Start, finish, top, bottom - the Drawer can slide out from any side with the exception of Modals that can only be start or finish                              |

      | With Content    | A drawer to display content, eg a form or information. This will generally include a header, body and footer                                                   |

      | With Navigation | A Drawer with a navigation menu to allow the user to navigate around the application                                                                           |


      ## Using a Drawer


      ### Dismissible or modal?


      The choice here depends on if the user should be able to interact with rest of the page while the drawer is open.\

      For example a navigation drawer would want to be dismissible as they might want to leave it open while using the page they have navigated to.  However if the intention was to complete a task, a modal Drawer should be used to make the user focus on that task until completion (unless they decide to cancel). 


      ### Position


      Drawers can be configured to appear at the top, bottom, start or finish of a screen and they can be triggered by any action such as the click of a button, the selection of a checkbox, etc. Drawers slide in and out from their specified location.

      In general if you are using a drawer with content they are positioned at the finish. 


      ### With content


      The content and styling of a Drawer is entirely customisable using other Mosaic components, however you should stick to our Drawer with content layout (header, body, footer) and only customise the body section unless you have a good reason and then speak with your UX Designer. 

      The sections would be used for the following:

      **Header** - Title, subtitle and close button (cross top right)

      **Body** - Content to display eg filter fields for a table

      **Footer** - Buttons for actions the user may need to take


      ### With navigation


      A Drawer with navigation will often be used with our [Navigation Rail](Link), so when an item is selected in the Rail the Drawer will slide out to provide more navigation options.  It can be used without a Rail if the top level navigation is not needed.
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

    Below, you can find a live demo for a Drawer component. Use the drop-down menus and radio buttons to view the different Drawer Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <mcc-drawer id="modal-drawer" class="mcc-drawer mcc-drawer--start"
            type="modal"></mcc-drawer>

            <button class="mcc-button mcc-button--primary" onclick="showDrawer()">Show drawer</button>

            <script>
              function showDrawer() {
                const drawer = document.getElementById('modal-drawer')
                drawer.open()
              }
            </script>
        name: As default
        modifiers:
          - name: Position
            selector: .mcc-drawer
            classes:
              - name: Top
                value: mcc-drawer--top
              - name: Bottom
                value: mcc-drawer--bottom
              - name: Start
                value: mcc-drawer--start
                default: true
              - name: End
                value: mcc-drawer--end
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
