---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Timeline
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-timeline--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Timeline?


      A Timeline is a vertical list of events in chronological order linked using a single path. 


      - - -


      ### When, and why?


      Use a Timeline when you have a multiple events that have independent information and statuses but are link to a single subject. A Timeline can help communicate the order, status and time frames between multiple events


      - - -


      ## Timeline Types


      We have 2 types of timelines, Single content area and Dual content area, both of these have the same variations to each event point. Event points run along the vertical path to create the timeline, each point can be coloured with a contextual colour and icon to indicate thier status. 


      | Type                    | Description                                                                                                                                                          |

      | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Single content area** | Use this Timeline when the event point is clearly labelled using the right hand content area                                                                         |

      | **Dual content area**   | This should be used when additional information is needed to explain the event point than what is available from a single label, For example Time, date, status etc. |


      \[[Code up some examples here]]


      - - -


      ## Using a Timeline


      Every event point on a timeline represents something that happened that is relevant to the subject of the timeline. We suggest focusing on user/system actions and dates secondary information. For example header in the content area is the user action and the date is less prominent below or using the dual content type, the date and time could sit on the right of the timeline.


      When using a time line each event point should be in chronological order, making sure each status is dependent on the previous. If you’ve events can progress independently of each other consider using an Accordion with status chips \[Link to Accordion]. 


      Take a look at our contextual guidance information on how to use the contextual colours and icons to represent statuses.
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
