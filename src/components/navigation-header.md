---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Navigation header
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-navigation-header--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Navigation Header?


      A Navigation Header is a list of global navigation links to guide users around your application.


      - - -


      ### When, and why?


      A sound navigation offers a high degree of discoverability and feedback, letting your users know where they are at all times and ensuring they can easily get to where they want to go.


      The Navigation Header is the primary navigation for your application. It is fully responsive and begins collapsed in mobile views and becomes horizontal as the available screen width increases. It provides access to top level functions such as Search, Notifications, Profile, etc.


      On mobile devices, it serves to show and hide the essential sidebar navigation that allows the user to navigate around the application.


      - - -


      ## Using a Navigation Header


      The Navigation Header is a fundamental part of the the application shell or layout. 


      There are three navigation components; Navigation Header, Navigation Rail, Navigation Drawer, and Navigation Bar. The Navigation Header is the primary navigation that appears across the top of the page and the rail and drawer are combined to create a Sidebar for the secondary navigation, which appears in a left-hand pane. Using a Navigation Header with a Sidebar is a common pattern for multiple levels of navigation. The Navigation Bar is used to display links across the bottom on small devices.


      tbc


      The following rules apply to the Navigation Header:


      * It must be present on every page

      * It must only be present once per page

      * Keep link text short and concise

      * Users should be able to scan links and learn something about their destination without much reference to the surrounding content

      * Do not overcrowd the navigation. It must only be used for global links. As a rule of thumb, the recommended number is 2 to 6

      * Consider the navigation hierarchy. What belongs in the navigation versus what goes in the secondary navigation

      * Use a sidebar for secondary navigation
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
