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


      ### Number of Tabs


      You should only use **Tabs** when you have two or more **Tabs**, and
      a maximum number of eight. If you have more than eight, then they will not
      remain on a single row. Be mindful of the number of **Tabs** that you use
      - while **Tabs** are quicker to navigate than separate pages, they still
      require interaction from the user. Ensure you group related content into
      the same **Tab** to avoid forcing the user to swap between many, many
      **Tabs** for a single process.


      ### Tab ordering


      **Tabs** should be arranged in a logical order. They do not need to
      be sorted alphabetically, and you should aim to have the **Tabs** that are
      the most used first, and **Tabs** that have less usage towards the end.


      ### Tab styling


      The size of the **Tabs** should not be modified. They are large
      enough for users to easily select them. For mobile users, the **Tabs**
      need to be at least the size of a finger (about 30px wide).

      \r



      ### Tab headers and content


      A **Tab** title should be no longer than one or two words - users
      should be able to quickly scan across the **Tabs** to find what they are
      looking for. The titles should be clear and concise and give the user
      information about what each **Tab** contains. For more information, please
      see the [Structure section](/guidelines/style-guide/#structure) of the
      **Style Guide**.


      Ensure that each **Tab** is displaying the correct content for their
      header. If the header doesn't match the content, this will lead to
      confusion for users. Content should also be related to the rest of the
      content in the **Tab** - multipurpose **Tabs** should be avoided and
      unrelated content should be split out into their own areas.


      ### Tabs as navigation


      **Tabs** should **not** be used an an alternative form of
      navigation. Do not be tempted to replace links or
      [**Breadcrumb**](/guidelines/breadcrumb) with **Tabs** to take the user to
      another page or part of the application.\ 


      \r

      \r\n"
    icon: file_invoice
    toc: true
  - title: Code
    hook: code
    icon: source_code
    toc: false
  - title: Accessibility
    body: "Accessibility Tip: The active tab should have the attribute aria-selected
      set to true, and the others to false. The active panel associated with the
      active tab should have the attribute aria-hidden set to true, and the
      others to false. In addition, each tab should have an aria-controls
      attribute set to the id of the matching panel and each panel should have
      an aria-labelledby attribute set to the id of the tab associated with the
      panel.\r\n"
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
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
