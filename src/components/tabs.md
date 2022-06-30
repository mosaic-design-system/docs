---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tabs
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-tabs-introduction
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
    body: "### Component accessibility


      This component has been built to meet the current WCAG AA 2.1
      guidelines. We also test these components against the guidelines before
      release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure
      that screen readers can effectively parse the page. Aria tags are provided
      as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout
      the product.


      ### Colour Combinations


      When designing with **Tabs**, you should be mindful of the colour
      combinations you are using. The components have been designed with this in
      mind, but if you are using colours that are not part of the default
      component, please ensure that there is a clear colour contrast within the
      parts of the component and between the **Tabs** and the background it is
      on. To check the contrast, please use [WebAIM's contrast
      checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      **Tabs** need to have a focus state - a focus state is when you tab
      into an element to interact with it. Ensure that users can use their
      keyboard to focus on the **Tabs**.


      ### Icons


      An icon needs to have underlying code that describes what action the
      icon takes. the labels should be specific - for example, 'bin' icon for
      delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      **Tabs** need to be able to be interacted with via a keyboard. Where
      possible we will provide key-binds within our Mosaic component or there
      will be default HTML ones. If this isn't the case then please implement
      logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG
      guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C\
      131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C\
      251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-thre\
      shold) for the time-based considerations for animations.


      ###Code Accessibility Tip


      The active tab should have the attribute aria-selected set to true,
      and the others to false. The active panel associated with the active tab
      should have the attribute aria-hidden set to true, and the others to
      false. In addition, each tab should have an aria-controls attribute set to
      the id of the matching panel and each panel should have an aria-labelled
      by attribute set to the id of the tab associated with the panel.\r\n"
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
