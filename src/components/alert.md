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


      An Alert is a method of communicating a contextual message. They provide users with important feedback, which allows them to understand a state that affects the entire system, the page, feature, or input.


      - - -


      ### When, and why?


      Use Alerts to draw a user's attention to information of special importance, such as status changes and updates. They should announce an event that has significance to the user and should always be relevant. Alerts can be generated in response to user actions (e.g. while performing a task) or automatically by your application. This depends on whether you want to give immediate feedback or messaging that provides updates on system activities.


      Alerts can require an action or can simple be informational. When an action is required, Alerts should interrupt the user’s flow, but if not, then they should be less intrusive.


      - - -


      ## Alerts types


      The following types of Alerts are available:


      | **Name**    | **Description**                                   | **Behaviour**                                      | **Example** |

      | ----------- | ------------------------------------------------- | -------------------------------------------------- | ----------- |

      | Default     | An Alert that contains an icon and a line of text | Persists. Cannot be dismissed or actioned          |             |

      | Dismissible | An Alert that can be dismissed                    | Persists, but can be dismissed. Cannot be actioned |             |

      | Actionable  | An Alert that contains an action                  | Persists, but can be actioned. Cannot be dismissed |             |


      - - -


      ## Alert contexts 


      Context helps convey the information being communicated. Alert contexts correspond to a colour and an icon to provide a consistent experience for users.


      | **Name** | **Description**                                                                                    | **Behaviour**                                                                     | **Examples**                                          |

      | -------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------- |

      | Success  | Indicates actions were completed successfully                                                      | Does not require user interaction, as disappears automatically after a short time | A new record saved or preferences have been updated   |

      | Danger   | Indicates errors and, optionally, prevents users from proceeding until the issue has been resolved | Always persists until the user dismisses or resolves the issue                    | Credentials cannot be found or access is denied       |

      | Warning  | Indicates that actions are not desirable or might have unexpected results                          | Persists until the user dismisses or continues regardless                         | A file is too big or a file already exists            |

      | Info     | Indicates neutral or advisory information that may not be related to the current action            | Does not require user interaction, but persists until user dismisses              | Scheduled system maintenance or a new report is ready |


      - - -


      ## Using an Alert


      Although Alerts are great for communicating, we recommend that they are used sparingly. If users are continually being interrupted, then this can become frustrating and impact their productivity. Also, overuse may quickly see their importance fade and users may decide to ignore them.


      Alerts should always communicate a single, succinct message, which provide clear instructions and optionally offer actions a user can take. Alerts should not stack vertically. Only one Alert should be shown at a time.


      In terms of placement, each Alert type has its own distinct region in which it should be displayed. For consistency, these locations should not be ignored.


      The following rules apply to all types of Alerts:


      * Do not place Alerts outside their intended region

      * Do not cover other content with an Alert 

      * Keep messages to no more than two lines

      * Keep messages descriptive, but concise

      * Only show one action per Alert

      * Only show one Alert at a time

      * Do not use automatically dismiss Alerts for critical or emergency messages. Some users with disabilities need more time to read or interact with messages
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
