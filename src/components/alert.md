---
title: Alert
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-alert--as-default
tabs:
  - title: Usage
    body: >-
      ## What is an Alert?


      An **Alert** is a method of communicating a contextual message. They provide users with important feedback, which allows them to understand a state that affects the entire system, the page, feature, or input.


      - - -


      ### When, and why?


      Use Alerts to draw a user's attention to information of special importance, such as status changes and updates. They should announce an event that has significance to the user and should always be relevant. Alerts can be generated in response to user actions (e.g. while performing a task) or automatically by your application. This depends on whether you want to give immediate feedback or messaging that provides updates on system activities.


      Alerts can require an action or can simple be informational. When an action is required, Alerts should interrupt the user’s flow, but if not, then they should be less intrusive.


      - - -


      ## Alerts types


      Depending on the nature of an Alert there are different implementations or types available.


      | **Name**   | **Description**                                                     | **Behaviour**                                              | **Placement**                                                                                                                                                    |

      | ---------- | ------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | Banner     | A system or product-level message that is not specific to an action | Persists until dismissed by the user and may be actionable | Sits across the top of the content area to which it relates, or for system-level messages, full width across the top of the screen above the main navigation bar |

      | Inline     |                                                                     |                                                            |                                                                                                                                                                  |

      | Toast      |                                                                     |                                                            |                                                                                                                                                                  |

      | Snackbar   |                                                                     |                                                            |                                                                                                                                                                  |

      | Actionable |                                                                     |                                                            |                                                                                                                                                                  |


      - - -


      ## Alert contexts


      Text


      - - -


      ## Using an Alert


      Text
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


    Below, you can find a live demo for an Alert component. Use the drop-down menus and radio buttons to view the different Alert Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="[ mcc-alert mcc-alert--primary ] [ mu-mb-00 ]"
            role="alert" style="max-width: 400px; width: 100%">
              <mcc-icon name="ok" aria-hidden="true"></mcc-icon>
              <div class="mu-d-flex mu-flex-column">
                <div class="mu-fw-semi-bold">Information title</div>
                <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
              </div>
            </div>
        name: As default
        modifiers:
          - name: Colour
            selector: .mcc-alert
            classes:
              - name: Primary
                value: mcc-alert--primary
                default: true
              - name: Secondary
                value: mcc-alert--secondary
              - name: Success
                value: mcc-alert--success
              - name: Warning
                value: mcc-alert--warning
              - name: Danger
                value: mcc-alert--danger
              - name: Info
                value: mcc-alert--info
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-alert mcc-alert--primary-solid" role="alert"
            style="max-width: 400px; width: 100%">
              <mcc-icon name="ok" aria-hidden="true"></mcc-icon>
              <div class="mu-d-flex mu-flex-column">
                <div class="mu-fw-semi-bold">Information title</div>
                <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
              </div>
            </div>
        name: With solid background
        modifiers:
          - name: Colours
            selector: .mcc-alert
            classes:
              - name: Primary
                value: mcc-alert--primary-solid
                default: true
              - name: Secondary
                value: mcc-alert--secondary-solid
              - name: Success
                value: mcc-alert--success-solid
              - name: Warning
                value: mcc-alert--warning-solid
              - name: Danger
                value: mcc-alert--danger-solid
              - name: Info
                value: mcc-alert--info-solid
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-alert mcc-alert--compact mcc-alert--primary-solid
            mu-mb-00" role="alert" style="max-width: 400px; width: 100%">
              <mcc-icon name="ok" aria-hidden="true"></mcc-icon>
              <div class="mu-fw-semi-bold">Information title</div>
            </div>
        name: As compact
        modifiers:
          - name: Colour
            selector: .mcc-alert
            classes:
              - name: Primary
                value: mcc-alert--primary-solid
                default: true
              - name: Secondary
                value: mcc-alert--secondary-solid
              - name: Success
                value: mcc-alert--success-solid
              - name: Warning
                value: mcc-alert--warning-solid
              - name: Danger
                value: mcc-alert--danger-solid
              - value: mcc-alert--info-solid
                name: Info
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
