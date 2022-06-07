---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Page Header
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-page-header-introduction
tabs:
  - title: Usage
    body: "## What is a Page Header?


      A **Page Header** is the bar that sits underneath the main
      navigation header to indicate the name of the currently viewed page. It
      defines the top of the page.


      - - -


      ### When, and why?


      Every page in your application must have a **Page Header**, as it is
      a vital part of the overall layout. As well as being a signpost, it also
      provides access to the primary and secondary actions for the page. It can
      also be used for inter-page navigation, where navigating back to the
      previous page is required.


      **Page Headers** contain a page title, which is styled as the main
      heading (H1). This assists with maintaining semantic code and helps to
      define the hierarchy of the page. It is also used by screen readers, which
      is important from an accessibility perspective.


      - - -


      ## Page Header types


      The following **Page Header** types are available:


      | **Type** | **Description** | **Behaviour** |\r

      | -------- | --------------- | ------------- |\r

      | Default  |   A Page Header that contains a title and up to 4 call
      to action buttons              | Fixed to the top of the
      page              |\r

      |  With subtitle        |  A Page Header that includes a subtitle
      |  As above, but adds a subtitle             |\r

      | With back         | A Page Header that includes a Back button  |
      As above, but adds a Back button              |\r


      - - -


      ## Using a Page Header


      ### Headings

      **Page Headers** must always include a page title, which should be
      short, concise, and kept to one line - more guidance for headings can be
      found in the [Content](/guidelines/style-guide/#structure).\ 


      Optionally, a **Page Header** can also include a page subtitle which
      can be useful for adding extra context to the current page. For example, a
      subtitle could be used for a date, reference number, customer name, etc.


      ### Buttons


      **Page Headers** can include up to a maximum of four **Buttons**. If
      more actions are required, then the fourth can be a \"More\" **Button**,
      with a dropdown menu to display the additional items.


      ### Fixed position

      When scrolling, the **Page Header** should be fixed - a fixed header
      remains visible at the top of the page regardless of the user's position
      on that page. This reminds users of the page they are viewing and also
      allows them to perform any of the actions without having to scroll back
      the page.



      ### Back button

      If a user navigates to a lower level page, then you should provide a
      Back **Button** so that they can quickly and easily return to the previous
      page, using the **With back** type of **Page Header**.


      ### Mobile

      On mobile, the Page Header will collapse the **Buttons** down into
      an overflow menu, i.e. a single **Button** with a dropdown menu attached.
      The page title itself will be truncated if it is too long to display in
      full and an ellipsis is present to indicate this. For more information,
      please refer to the [Mobile guidelines](/guidelines/mobile)."
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


    Below, you can find a live demo for a Page header component. Use the drop-down menus and radio buttons to view the different Page header Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-page-header" style="width: 100%">
              <section class="mu-d-flex mu-flex-column">
                <h1 class="mu-mb-00">Page header title</h1>
                <span class="mu-text-muted">Subtitle</span>
              </section>
              <section>
                <div class="mcc-button-group mcc-button-group--spaced" role="group" aria-label="Page header buttons">
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--primary">
                    <span class="mcc-button__label">Button</span>
                  </button>
                </div>
              </section>
            </div>
        name: As default
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
