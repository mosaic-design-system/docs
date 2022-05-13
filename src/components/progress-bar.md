---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Progress indicator
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-progress-bar--as-default
tabs:
  - title: Usage
    body: "## What is a Progress indicator?     \r

      \r

      \ A **Progress indicator** shows the user how far through a process
      they are with a visual cue, providing a quick estimation of a task's
      remaining length.\r

      - - -\r

      ### When, and why?\r

      A **Progress indicator** can be used when the process is more than
      10 seconds and the system can estimate the completion of an operation.
      Setting a visual expectation of wait time encourages the user to stay
      until completion.\r

      - - -\r

      \r

      ## Progress indicator types\r

      There are 2 types of progress indicator\r

      1. **Determinate** - Used when the system can indicate how long an
      operation will take. Using a 0-100% scale in sync with the operation
      progress.\r

      2. **Indeterminate** - Used when the system cannot give an estimated
      time or track progression with a percentage scale. A looped animation
      shows the user the system is working. \r

      All progress bars are available in 3 different sizes large, regular
      and small\r


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
      when the system estimate how long it will take until completion and track
      operation progress      |\r

      | **With label** (Indeterminate)                       | Use this
      when the system cannot track
      progression                                                          |\r

      | **Bar only** (Indeterminate & determinate)           | Only use
      when the other elements on the screen to information the user what
      operation/task is underway     |\r

      - - -\r

      ## Using an progress indicator\r

      **Progress** indicators are a great way to visually inform your
      users the system is processing an operation and if possible how long it
      will take to complete.\\\r

      Use progress bars sparingly, only when an operation takes over
      10seconds. Over use will make it seem like the application is slow and
      constantly requires the user to wait. For actions that take less than
      10seconds consider using the spinner component.


      \r

      Progress indicators are suitable for operations such as, submitting
      a form, uploading a file or saving updates to the system settings"
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
