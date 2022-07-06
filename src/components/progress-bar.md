---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Progress indicator
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-progress-introduction
tabs:
  - title: Usage
    body: "## What is a Progress indicator?     \r

      \r

      \ A **Progress indicator** shows the user how far through a process
      they are with a visual cue, providing a quick estimation of a task's
      remaining length.\r

      - - -\r

      ### When, and why?\r

      A **Progress indicator** should be used when the process will
      typically take more than 10 seconds, and some types can tell the user the
      estimated time until completion of an operation. Use of a **Progress
      indicator** gives a visual expectation of wait time, which will encourage
      the user to stay until the process has finished, or simply reassure the
      user that something is happening and the system hasn't frozen.\r

      \r


      Good examples of where they would be helpful are when the user is
      submitting a large form, uploading a file or saving updates to the system
      settings.\r

      - - -\r

      \r

      ## Progress indicator types\r

      \r

      There are two different use cases for a **Progress indicator**:\r

      1. **Determinate Progress indicators** are used when the system can
      estimate how long an operation will take. They use a 0-100% scale to
      display the operation progress.\r

      2. **Indeterminate Progress indicators** are used when the system
      cannot give an estimated time or track progression with a percentage
      scale. A looped animation reassures the user that the system is working,
      but with no indication of the remaining progress. \r

      \r

      All **Progress indicators** are available in large, regular and
      small sizes. The following types of **Progress indicators** are available,
      separated between determinate and indeterminate **Progress indicators**:\r

      \r

      | Types                                                |
      Description                                                                                              \
      |\r

      | ---------------------------------------------------- |
      -------------------------------------------------------------------------\
      --------------------------------- |\r

      | **With percentage** (Determinate)                    | Use this
      when the system can track operation progress but cannot indicate how long
      the operation will take |\r

      | **With percentage and estimated time** (Determinate) | Use this
      when the system can estimate how long it will take until completion and
      track operation progress      |\r

      | **With label** (Indeterminate)                       | Use this
      when the system cannot track
      progression                                                          |\r

      | **Bar only** (Indeterminate & determinate)           | Only use
      when there are other elements on the screen to inform the user what
      operation/task is underway     |\r

      - - -\r

      ## Using a Progress indicator\r

      \r

      ### Progress indicator frequency\r

      **Progress** indicators are a great way to visually inform your
      users the system is processing an operation and if possible how long it
      will take to complete. However, you should use **Progress indicators**
      sparingly, and only when an operation is likely to take over 10 seconds.
      Overuse will make it seem like the application is slow and constantly
      requires the user to wait. For actions that take less than 10 seconds,
      consider using the [**Spinner**](/components/spinner) component."
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


      When designing with a **Progress indicator**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Progress indicator** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Progress indicator** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Progress indicator** and get a correct reading of progress when using a screen reader.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Progress indicator** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-progress-bar" style="mx-width: 500px; width: 100%;">
              <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
            </div>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-progress-bar
            classes:
              - name: Primary
                value: mcc-progress-bar--primary
                default: true
              - name: Secondary
                value: mcc-progress-bar--secondary
              - name: Success
                value: mcc-progress-bar--success
              - name: Danger
                value: mcc-progress-bar--danger
              - name: Warning
                value: mcc-progress-bar--warning
              - name: Info
                value: mcc-progress-bar--info
            type: class
            select_multiple: false
          - name: Height
            selector: .mcc-progress-bar
            classes:
              - name: Extra small
                value: mcc-progress-bar--xs
              - name: Small
                value: mcc-progress-bar--sm
              - name: Medium (default)
                value: mcc-progress-bar
                default: true
              - name: Large
                value: mcc-progress-bar--lg
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-progress-bar mcc-progress-bar--striped"
            style="mx-width: 500px; width: 100%;">
              <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
            </div>
        name: As striped
        modifiers:
          - name: Colours
            selector: .mcc-progress-bar
            classes:
              - name: Primary
                value: mcc-progress-bar--primary
                default: true
              - name: Secondary
                value: mcc-progress-bar--secondary
              - name: Success
                value: mcc-progress-bar--success
              - name: Danger
                value: mcc-progress-bar--danger
              - name: Warning
                value: mcc-progress-bar--warning
              - name: Info
                value: mcc-progress-bar--info
            type: class
            select_multiple: false
          - name: Height
            selector: .mcc-progress-bar
            classes:
              - name: Extra small
                value: mcc-progress-bar--xs
              - name: Small
                value: mcc-progress-bar--sm
              - name: Medium (default)
                value: mcc-progress-bar
                default: true
              - name: Large
                value: mcc-progress-bar--lg
            type: class
            select_multiple: false
          - name: Animated
            selector: .mcc-progress-bar
            classes:
              - name: Animated
                value: mcc-progress-bar--animated
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
