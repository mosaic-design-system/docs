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


      ## Using a Navigation Header



      ### Navigation structure

      The **Navigation header** is a fundamental part of the the application. It is used in conjunction with other navigational components to form the overall shell or layout.


      There are 4 navigation components: **Navigation header**, [**Navigation rail**](/components/navigation-rail), [**Drawer**](/components/drawer), and [**Navigation bar**](/components/navigation-bar). 


      The **Navigation Header** is the primary navigation that appears across the top of the page, while the **Rail** and **Drawer** are combined to create a [**Sidebar**](/patterns/sidebar) for the secondary navigation, which appears in a left-hand pane. Using a **Navigation header** with a **Sidebar** is a common pattern for multiple levels of navigation. The **Navigation bar** is used to display links across the bottom on small devices.


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
