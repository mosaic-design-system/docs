---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Timeline
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-timeline-introduction
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


      **Timeline** has "event points" that vary from one another based on the data being viewed. Event points run along the vertical path to create the timeline, and each point can be coloured with a contextual colour and icon to indicate their status. 


      | Type          | Description                                        |

      | ------------- | -------------------------------------------------- |

      | Size          | Sets the size of the event point and padding; S,M. |


      ## Timeline properties


      The following **Timeline** properties are available:


      | **Property** | **Description**                               |

      | ------------ | --------------------------------------------- |

      | Context      | Sets the contextual colour of the event point: None, Primary, Success, Danger, Warning or Info. |

      | Content      | Toggles the content for an event on/off       |

      | Icon         | Toggles an icon on/off within the event point |


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
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **Timeline**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Timeline** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Timeline** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Timeline** for each element of the **Timeline** elements.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Timeline** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
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
