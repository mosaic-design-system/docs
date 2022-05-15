---
title: Validation
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-accordion--as-default
tabs:
  - title: Usage
    body: >-
      ## What is Validation?


      **Validation** is when a user enters data, the form checks to see that the data is correct. If correct, the form notifies the application that the data can be submitted to the server; if not, it gives you an error message explaining what corrections need to be made.


      - - -


      ### When, and why?


      **Validation** is useful when you have a form where a particular criterion needs to be met (for example the amount of characters or specific fields that need to be filled out) in order for that data be submitted or in order to progress to the next step.


      For example, when you are logging into a product and you don't fill out the email field, then the **Validation** will show an error message explaining that you need to fill out the email field in order to continue.


      **Validation** isn't just to show people when they haven't completed something incorrectly, but in some cases to show them that they have completed something correctly.


      - - -


      ## Validation types


      The following **Validation types are available, all of which allow you to include a subheading:


      | **Variant**                              | **Description**                                                           |

      | ---------------------------------------- | ------------------------------------------------------------------------- |

      | Form with red asterisk               | Shows that the form is mandatory and has Validation applied to it            |

      | Form with help text below                | Shows the user what form criteria they will have to complete to continue |

      | Form with red highlight                  | Shows the user which forms have failed Validation.                        |

      | Generic page error                       | Generic page errors will show if the data can't be submitted and why     |

      | Validation in sheet and/or applet footer | Shows validation within that sheet/applet before submitting information |


      - - -


      ## Using Validation


      ### Text validation


      Invalid text is **essential** for form fields as it helps the user to understand if something isn't right and gives them the opportunity to correct it.


      Where possible, you must show **Validation** (invalid) as soon as the user has completed an input so that they can correct as they go.


      Where necessary, showing the valid text is the most useful for fields that require special inputs, such as a password field.  Most other times you would not show valid text.



      ### Help text


      Help text should be considered part of your **Validation**. Giving help text below an input can provide useful additional information about what a field expects the user to enter. This type of information should be given as early as possible in the process. For example, if an input requires specific characters or length to be entered.


      The required or optional **Validation** should be considered part of your **Validation**.  If the majority of fields on the form are required (mandatory) then it is better to just show the optional ones. Similarly, if the majority of fields are optional, just show the required ones.
    icon: file_invoice
  - title: Code
    hook: ""
    icon: source_code
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
  - title: Status
    hook: status
    icon: source_code
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
            <details class="mcc-accordion" style="max-width: 400px; width:
            100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card mcc-card--high-emphasis"
            style="max-width: 400px; width: 100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With card
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card" style="max-width: 400px;
            width: 100%">
              <summary>
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With icon
        modifiers: []
status:
  body: This is some content in relation to the status of this component.
  design: Yes
  documentation: Yes
  html_css: Available
  web_component: Available
---
