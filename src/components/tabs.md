---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tabs
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-tabs--as-default
tabs:
  - title: Usage
    body: "## What are Tabs?


      **Tabs** allow a significant amount of content to be viewed without
      having to navigate away from the page - the content is instead broken up
      into multiple sections with each section having its own tab available that
      can be opened by selecting its name.


      - - -


      ## When, and why?


      **Tabs** are an easy way to organize content and switch between
      related content.  **Tabs** consist of two or more **Tabs** that can be
      selected to open what seems like a 'new page', however the user actually
      remains on the original page, but different content is displayed. By
      remaining on the original page, the user doesn't need to reload the entire
      page and can navigate between two related areas much quicker than if they
      were on separate pages.


      **Tabs** can be shown horizontally or vertically to adapt and suit
      the content being shown, and the device being used to view it.


      - - -


      ## Types of Tabs


      ### Horizontal Tabs \r

      **Horizontal Tabs** provide more vertical space and enable easy
      scanning of items, which helps with reading from left to right. They also
      allow you to occupy the content area of your page with content only.\r


      ### Vertical Tabs\r

      **Vertical Tabs** work best for form or installation wizards when a
      user is working down a list of steps - **Horizontal Tabs** are best for
      groups of related information.\r

      \r

      \r


      - - -


      ## Using Tabs


      •\tTabs should be arranged in a logical order for example the first
      tab is the most important or more most read.


      •\tTab titles should be no longer than either one or two words.

      \r

      •\tA minimum of two tabs should be used with a maximum of up to
      eight to ensure all tabs remain on a single row and don't wrap onto two.


      \r

      •\tTabs should not be used as an alternative form of navigation
      replacing links or breadcrumbs to take the user to another page or part of
      the application.


      \r

      •\tThe size of the tabs should not be modified, they are large
      enough for users to easily click or tap them. Mobile tabs need to be at
      least the size of a finger of at least 30px wide.


      \r

      •\tContent should be placed in the correct tab. Avoid mismatching
      content that doesn’t fit in a tab.


      \r

      •\tTab headers should be clear and concise but still give the user
      enough information about what each tab contains. In doing so speed and
      ease of use can be improved.

      \r

      •\tTab headings should be sentence case with only the first letter
      of the first word in capitals rather than the first letter of every word
      capitalised.

      \r

      Accessibility Tip: The active tab should have the attribute
      aria-selected set to true, and the others to false. The active panel
      associated with the active tab should have the attribute aria-hidden set
      to true, and the others to false. In addition, each tab should have an
      aria-controls attribute set to the id of the matching panel and each panel
      should have an aria-labelledby attribute set to the id of the tab
      associated with the panel.\r\n"
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


    Below, you can find a live demo for the Tabs component. Use the drop-down menus and radio buttons to view the different Tabs Types and Variants.
  preview:
    variants: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
