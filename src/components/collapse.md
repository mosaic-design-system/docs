---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Collapse
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-collapse--as-opened
tabs:
  - title: Usage
    body: >
      ## What is a Collapse?


      A **Collapse** component allows you to show and hide content with a button. The button, when selected, toggles whether the user can see the content or not. This component differs from an **[Accordion](/components/accordion)** as the content is not within a self-contained section in and of itself, and a button is used to toggle the content rather than a drop-down style arrow. When the content of a **Collapse** is revealed, the content is pushed below the down button.


      - - -


      ## When, and why?


      A **Collapse** button should be used when you want to initially limit what the user can see, but make additional content available when a button is selected.


      For example, this may be useful where there is lots of content already displayed on a page, such as multiple users' contact details, and the **Collapse** button could be used to show more information about one of the users (without taking the user to another page).


      - - -


      ## Using a collapse


      ### Collapse content


      A **Collapse** must always have both a toggle button and some content contained within, e.g. a paragraph of text.


      The contents of a collapse should never include critical information such as important instructions, warnings, etc. Users may not open the collapse, and information that is important may be missed.


      **Note**: Navigation is counted as important information. You should never hide navigation behind a **Collapse**.


      ### Collapse vs Accordion

      If you intend to show/hide several instances of related information on a page, then an **[Accordion](/components/accordion)** is the preferred method. The **Accordion** works better for users that wish to choose which information they want to view. 
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

    Below, you can find a live demo for a Collapse component. Use the drop-down menus and radio buttons to view the different Collapse Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <details class="mcc-collapse">
                <summary>
                  <div class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Collapse</span>
                    <mcc-icon class="mcc-button__dropdown-caret" name="angle_down" aria-hidden="true"></mcc-icon>
                  </div>
                </summary>
                <div class="mcc-collapse-body mu-mt-03">
                  <div class="[ mcc-alert mcc-alert--primary ] [ mu-mb-00 ]" role="alert">
                    <mcc-icon name="ok" icon-set="fluency-outline" aria-hidden="true"></mcc-icon>
                    <div class="mu-d-flex mu-flex-column">
                      <div class="mu-fw-semi-bold">Information title</div>
                      <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
                    </div>
                  </div>
                </div>
              </details>
        name: As default
        modifiers: []
        attributes:
          - name: Open
            selector: .mcc-collapse
            attribute: open
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
