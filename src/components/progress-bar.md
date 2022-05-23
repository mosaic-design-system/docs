---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Progress indicator
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/dev/components/?path=/docs/components-progress-introduction
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
