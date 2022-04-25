---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Snackbar
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-snackbar--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Snackbar?


      A **Snackbar** is a short message that appear at the bottom centre of the screen. They are a great way of showing updates about the progress of an operation without being intrusive.


      - - -


      ### When, and why?


      Snackbars inform users of something that has or will be performed  


      - - -


      ## Types of Snackbars


      In Mosaic, there are 4 types of Snackbars, each represents a different contextual message


      | Button Type       | Description                                                                                                 | Example                                                                                                  |

      | ----------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |

      | **Informational** | This can be used for things that are largely inconsequential but necessary |   |

      | **Success** | Used for confirmation messages, such as complete, saved or sent. | |

      | **Warning** | Not used very often, but can be useful when you want to show caution with a particular action. | |

      | **Danger** | Should be used for dangerous or irreversible activity, like deleting or removing something from the system. |  |


      - - -


      ## Snackbar Variants


      In addition to the contextal **Type**, each snackbar also has an option between 2 **Variants**. 


      | Variant      | Description                                                                                                                           | Example                                                                                                                                                          |

      | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**  | This will cover use cases where the a simple message covers the update and no further action is required.                             | <button class="mcc-button mcc-button--primary" disabled> <span class="mcc-button__label">Disabled</span> </button>                                               |

      | **With CTA** | Cases where you may want to give the user an opinunity  to take another single action you would use the snackbar with a CTA attached. | <button class="mcc-button mcc-button--primary"><mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon><span class="mcc-button__label">Icon</span></button |


      - - -


      ## Using a Snackbar


      Snackbars appear when the system has a contextual message for the user.  They don’t interrupt the user experience as disappear automatically after maximum of ten seconds without user interaction. 

      \

      A snackbar can contain an optional single action such as "Undo", "Retry" or "Reload" clicking or tapping the action performs the action and closes the Snackbar.

      Snackbars must be displayed one at a time and be placed at the bottom centre of a screen, in front of page content but avoiding any navigation components. They are never stacked and only contain a single or town-mine messages. 


      Never used as a loading or progress indicator.
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


    Below, you can find a live demo for a Snackbar component. Use the drop-down menus and radio buttons to view the different Snackbar Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-snackbar mcc-snackbar--primary" style="width: 100%">
              <div class="[ mcc-snackbar__content ] [ mu-d-flex mu-flex-row mu-justify-content-between mu-align-items-center mu-p-04 mu-px-05 ]">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <div class="mu-mr-05">Snackbar</div>
                <button class="[ mcc-button mcc-button--sm mcc-button--icon-only ] [ mu-ml-auto ]">
                  <mcc-icon name="close" aria-hidden="true" icon-set="fluency-outline"></mcc-icon>
                  <span class="mcc-button__label">Button</span>
                </button>
              </div>
            </div>
        name: As default
        modifiers:
          - name: Colour
            selector: .mcc-snackbar
            classes:
              - name: Primary
                value: mcc-snackbar--primary
                default: true
              - name: Secondary
                value: mcc-snackbar--secondary
              - name: Success
                value: mcc-snackbar--success
              - name: Danger
                value: mcc-snackbar--danger
              - name: Warning
                value: mcc-snackbar--warning
              - name: Info
                value: mcc-snackbar--info
            type: class
            select_multiple: false
          - name: Left
            selector: .mcc-snackbar
            classes:
              - name: Left
                value: mcc-snackbar--left
            type: class
            select_multiple: false
          - name: Right
            selector: .mcc-snackbar
            classes:
              - name: Right
                value: mcc-snackbar--right
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
