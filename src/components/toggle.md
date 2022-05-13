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


      A **Toggle** is useful for when you want to switch on/off settings in an environment. For example in Clear Review, we use a Toggle to turn on 'Giving Feedback anonymously' when a user is giving Feedback.


      - - -


      ## Toggle Types


      All variations allow you to include a subheading


      | Variant                           | Description                                                                                                                |

      | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |

      | **Default**                       | The default **Toggle** has is a standard looking **Toggle** that is grey when toggled 'off' and green when toggled 'on'.   |

      | **With on/off**\

      \

      **With label** | The same as the default toggle but with labels for when it is toggled 'on' and 'off'.\

      \

      \

      A label to the right hand side. |


      \[[Code up some examples here]]


      - - -


      ## Using a Toggle


      **Toggles** are a great way for a user to quickly switch on/off one or a number of settings. In order for this to be effective we must insure (unlike tick boxes) that the label is on the right hand side of the **Toggle**. Labels should be in sentence case and both the **Toggle** and the label should be contained within the same columns.


      **Toggles** should not be used for yes/no responses. **Toggles** should only be used for turning things on/off.
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
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
