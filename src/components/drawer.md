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
    body: "## What is a Drawer\r

      \r

      A **Drawer** is panel that can appear on any side of the
      application. It will usually take up the whole height or width and can
      either push the content or be an overlay.   \r

      \r

      ### When and why\r

      \r

      There are two main purposes of a **Drawer**: navigation or
      contextual content. The  **Drawer** is usually used as part of the shell
      of the application to do site-wide navigation. Contextual content
      **Drawers** are used to show options or information that relate to the
      current page, such as, filters, advanced search options, form submissions,
      etc. In this case, the **Drawer** would be triggered by an action a user
      takes on the main page, e.g. selecting a **Button**. On mobile, bottom
      **Drawers** are also used a instead of **Dropdowns** to display a list of
      actions. \r

      \r

      - - -\r

      \r

      ## Drawer types\r

      \r

      The following types of **Drawer** are available:\r

      \r

      | **Type**        |
      **description**                                                                                                                                                                                            \
      |\r

      | --------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------- |\r

      | Default         | The Drawer is always visible and pushes the
      content over to make space for the
      Drawer                                                                                                                    \
      |\r

      | As dismissible  | Works in the same way as the default Drawer, but
      the user can toggle the drawer in and
      out                                                                                                                \
      |\r

      | As modal        | Shown as an overlay which slides out from the
      specified position, and cannot be dismissed unless the user selects a
      close option (which means the user can only interact with the drawer while
      it is open) |\r

      | Position        | Start, end, top, bottom - the Drawer can slide
      out from any side with the exception of Modals that can only be start or
      finish                                                                             \
      |\r

      | With Content    | A drawer to display content, e.g. a form or
      information. This will generally include a header, body and
      footer                                                                                               \
      |\r

      | With Navigation | A Drawer with a navigation menu to allow the
      user to navigate around the
      application                                                                                                                       \
      |\r

      \r

      ## Using a Drawer\r

      \r

      ### Default or modal?\r

      \r

      The choice here depends on if the user should be able to interact
      with the rest of the page while the **Drawer** is open. For example, a
      **Navigation Drawer** would want to be shown inline with the content (and
      maybe dismissible) as they might want to keep access to it while using the
      page they have navigated to.  However, if the intention was to complete a
      task, a **Modal Drawer** should be used to make the user focus on that
      task until completion (unless they decide to cancel). \r

      \r

      ### Position\r

      \r

      **Drawers** can be configured to appear at the top, bottom, start or
      end of a screen and they can be triggered by any action such as the click
      of a button, the selection of a checkbox, etc. **Drawers** slide in and
      out from their specified location. In general, if you are using a
      **Drawer** with content they are positioned at the end of the screen. \r

      \r

      ### With content\r

      \r

      The content and styling of a **Drawer** is entirely customisable
      using other Mosaic components, however you should stick to the Drawer with
      content layout (header, body, footer) and only customise the body section,
      unless there is good reason. If you wish to deviate from the layout, you
      should speak with your UX Designer.\r

      \r

      The sections would be used for the following:\r

      \r

      **Header** - Title, subtitle and close button (cross top right)\r

      **Body** - Content to display eg filter fields for a table\r

      **Footer** - Buttons for actions the user may need to take\r

      \r

      ### With navigation\r

      \r

      A **Drawer** with navigation will often be used with a [Navigation
      Rail](/components/navigation-rail), so when an item is selected in the
      **Rail**, the **Drawer** will slide out to provide more navigation
      options.  It can be used without a **Rail** if the top level navigation is
      not needed.a"
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
