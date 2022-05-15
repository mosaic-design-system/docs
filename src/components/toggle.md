---
title: Toggle
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-accordion--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Toggle?


      A **Toggle** is a useful tool for when you require an instant response or to turn different settings on/off.


      - - -


      ### When, and why?


      A **Toggle** is useful for when you want to switch something on or off in a given context. For example, in Clear Review, we use a **Toggle** to turn on 'Giving Feedback anonymously' when a user is giving Feedback.


      - - -


      ## Toggle types


      The following **Toggle** types are available:


      | Type        | Description                                                                                                      |

      | --------------- | ---------------------------------------------------------------------------------------------------------------- |

      | **Default**     | The default Toggle is a standard looking Toggle that is grey when toggled 'off' and green when toggled 'on' |

      | **With on/off** | The same as the default Toggle but with labels for when it is toggled 'on' and 'off'                            |

      | **With label**  | A Toggle with a label to the right hand side                                                                                  |


      - - -


      ## Using a Toggle


      ### Toggle labels

      Labels should be on the right-hand side of the **Toggle**. They should also be in sentence case and both the **Toggle** and the label should be contained within the same columns.


      ### Toggle placement

      **Toggles** should not be used for yes or no responses - they should only be used for turning things on or off. If you want a yes or no response, you should consider something like a [**Select**](/forms/select) or [**Radio button**](/form/radio)
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
    ## Uh-oh! Looks like we haven't finished building this page yet.


    Come back soon, and we'll have more exciting content to share.


    ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
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
