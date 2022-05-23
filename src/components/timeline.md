---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Timeline
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/dev/components/?path=/docs/components-timeline-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Timeline?


      A **Timeline** is a vertical list of events in chronological order, linked using a single path. It gives a breakdown of "event points" to give an overview of something like a project which can be used to present a chronological breakdown of key information.


      - - -


      ### When, and why?


      Use a **Timeline** when you have a multiple events that have independent information and statuses, but are linked to a single subject. A **Timeline** can help communicate the order, status and time frames between multiple events


      A good example might be a **Timeline** that tracks a project's completion - the **Timeline** would show the start and end dates for the project, and the different events would be key deliverables and their due dates. The different statuses of the various events could indicate if they're on-track, completed or overdue.


      - - -


      ## Timeline types


      We have 2 types of **Timelines**, Single content area and Dual content area. Both of these also have "event points" that vary from one another based on user input. Event points run along the vertical path to create the timeline, and each point can be coloured with a contextual colour and icon to indicate their status. 


      | Type                    | Description                                                                                                                                                          |

      | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Single content area** | Use this Timeline when the event point is clearly labelled using the right-hand content area                                                                         |

      | **Dual content area**   | This should be used when additional information is needed to explain the event point compared to what is available from a single label. For example Time, date, status etc. could be put into a separate content area. |


      \[[Examples to come]]


      - - -


      ## Using a Timeline


      ### Event points

      Every event point on a **Timeline** represents something that happened that is relevant to the subject of the **Timeline**. We suggest focusing on user/system actions on the event points itself, with the option of having dates and secondary information either as subheadings or in the right-hand side content area. 


      For example, the header in the content area should always be the user action. When adding supplementary information such as a date, it can be less prominent below, you could use the dual content type to display the date and time on the right of the timeline.


      When using a **Timeline** each event point should be in chronological order, making sure each status is dependent on the previous. If you have events that can progress independently of each other, consider using an [Accordion](/guidelines/accordion) with status chips. 


      Take a look at our [contextual colours guidance](guidelines/colour/) for more information on how to use the contextual colours, and similarly you can read our [Icons guidelines](/guidelines/icons) to represent statuses.
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


    Below, you can find a live demo for a Timeline component. Use the drop-down menus and radio buttons to view the different Timeline Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-timeline">
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge"></div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-timeline-item__badge
            classes:
              - value: mcc-timeline-item__badge--primary
                name: Primary
                default: true
              - value: mcc-timeline-item__badge--secondary
                name: Secondary
              - value: mcc-timeline-item__badge--success
                name: Success
              - value: mcc-timeline-item__badge--danger
                name: Danger
              - value: mcc-timeline-item__badge--warning
                name: Warning
              - value: mcc-timeline-item__badge--info
                name: Info
            select_multiple: true
            type: class
          - name: Separator
            selector: .mcc-timeline
            classes:
              - name: Separator
                value: mcc-timeline--separator
            type: class
          - name: Spanned
            selector: .mcc-timeline
            classes:
              - name: Spanned
                value: mcc-timeline--spanned
            type: class
      - template:
          lang: html
          code: >-
            <div class="mcc-timeline">
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
        name: With icon
        modifiers:
          - name: Colours
            selector: .mcc-timeline-item__badge
            classes:
              - value: mcc-timeline-item__badge--primary
                name: Primary
                default: true
              - value: mcc-timeline-item__badge--secondary
                name: Secondary
              - value: mcc-timeline-item__badge--success
                name: Success
              - value: mcc-timeline-item__badge--danger
                name: Danger
              - value: mcc-timeline-item__badge--warning
                name: Warning
              - value: mcc-timeline-item__badge--info
                name: Info
            select_multiple: true
            type: class
          - name: Separator
            selector: .mcc-timeline
            classes:
              - name: Separator
                value: mcc-timeline--separator
            type: class
          - name: Spanned
            selector: .mcc-timeline
            classes:
              - name: Spanned
                value: mcc-timeline--spanned
            type: class
      - template:
          lang: html
          code: |-
            <div class="mcc-timeline mcc-timeline--condensed">
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div class="mcc-timeline-item">
                <div class="mcc-timeline-item__badge">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                </div>
                <div class="mcc-timeline-item__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
        name: As condensed
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
