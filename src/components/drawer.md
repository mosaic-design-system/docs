---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Drawer
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-drawer-introduction
tabs:
  - title: Usage
    body: "## What is a Drawer?\r

      \r

      A **Drawer** is panel that can appear on any side of the
      application. It will usually take up the whole height or width and can
      either push the content or be an overlay.   \r

      \r

      ### When, and why?\r

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

      The following **Drawer** types are available:\r

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

      **Body** - Content to display e.g. filter fields for a table\r

      **Footer** - Buttons for actions the user may need to take\r

      \r

      ### With navigation\r

      \r

      A **Drawer** with navigation will often be used with a [Navigation
      rail](/components/navigation-rail), so when an item is selected in the
      **Rail**, the **Drawer** will slide out to provide more navigation
      options.  It can be used without a **Rail** if the top level navigation is
      not needed."
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


      When designing with a **Drawer**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Drawer** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Drawer** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Drawer** and all of its contents.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      A **Drawer** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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
