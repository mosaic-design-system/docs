---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Placeholder
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-placeholder--with-sizes-and-shapes
tabs:
  - title: Usage
    body: >-
      ## What is a Placeholder?


      Placeholders are indicators of the layout of how the page content will look once data has fully loaded.

      - - -


      ### When, and why?


      Use a placeholder on an initial page load that that has more than 1 element, and takes more than 0.3s to load on an average connection. Using a placeholder will give a perception of shorter wait time.

      - - -


      ## Placeholder Types


      We have 3 types of placeholders to help give a truer representation of the content

      | Types                   | Description                                                                                                                                                          |

      | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Single content area** | Use this Timeline when the event point is clearly labelled using the right hand content area                                                                         |

      | **Dual content area**   | This should be used when additional information is needed to explain the event point than what is available from a single label, For example Time, date, status etc. |



      \[[Code up some examples here]]


      - - -


      ## Using a Placeholder


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


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <div class="mcc-placeholder" style="max-width: 400px; width: 100%">
              <div></div>
              <div></div>
              <div></div>
            </div>
        name: As default
        modifiers:
          - name: Animated
            selector: .mcc-placeholder
            classes:
              - name: Animated
                value: mcc-placeholder--animation
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-placeholder" style="max-width: 400px; width: 100%">
                <section class="mu-d-flex mu-mb-05">
                    <div style="border-radius: 50%; width: 64px; height: 64px;"></div>
                    <section class="mu-flex-fill">
                      <div style="height: 24px; width: 80%;"></div>
                      <div></div>
                  </section>
                </section>
                <div style="width: 80%;"></div>
                <div></div>
            </div>
        name: With sizes and shapes
        modifiers:
          - name: Animated
            selector: .mcc-placeholder
            classes:
              - name: Animated
                value: mcc-placeholder--animation
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
