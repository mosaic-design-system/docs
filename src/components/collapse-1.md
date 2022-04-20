---
title: Collapse
toc: true
chips:
  - "Web Component: Available"
storybook: https://dev-svc.storybook.mosaic.oneadvanced.io/?path=/story/1-core-components-collapse--default
tabs:
  - title: Usage
    body: >
      ## What is a Collapse?


      A **Collapse** component allows you to show and hide content with a button. The button, when selected, toggles whether the user can see the content or not. This component differs from an [**Accordion**](/components/accordion) as the content is not within a self-contained section in and of itself, and a button is used to toggle the content rather than a drop-down style arrow.


      - - -


      ## When, and why?


      A **Collapse** button should be used when you want to initially limit what the user can see, but make additional content available when a button is selected.


      For example, this may be useful where there is lots of content already displayed on a page, such as multiple users contact details, and the **Collapse** button could be used to show more information about one of the users (without taking the user to another page).


      - - -


      ## Using a collapse


      * A collapse must always have a toggle button and some collapsible content, e.g. a paragraph of text.

      * The contents of a collapse should never include critical information such as important instructions, warnings, etc.

      * If you intend to show/hide multiple pieces of related information on a page, then an [**Accordion**](/components/accordion) is the preferred method.
  - title: Code
  - title: Accessibility
  - title: Status
status:
  design: Yes
  documentation: Yes
  html_css: Available
  web_component: Available
---
