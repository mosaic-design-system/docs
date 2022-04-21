---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Spinner
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-spinner--as-default
tabs:
  - title: Usage
    body: >
      ## What is a Spinner

      A Spinner is an animated loading indicator to show the user something is happening.


      ### When and why

      Spinners are used when retrieving data or performing slow calculations, and help to notify users that loading is underway. The waiting experience is a crucial aspect of a design. Although it may not be obvious what is occurring in the background, it is important to communicate clearly that progress is being made.


      - - -

      ## Spinner types

      | **Type** | **Description** | **Example** |

      | -------- | -------- | -------- |

      | Default| Default size and colour | <svg class="mcc-spinner" viewBox="0 0 50 50"><circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle><circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg> |

      | Coloured content | Used when in another component (eg Buttons and Snackbars), automatically applies the appropriate colour to the spinner dependent on the content colour of the component| <button  class="mcc-button mcc-button--primary">  <svg  class="mcc-spinner mcc-spinner--current-color mu-mr-03"  viewBox="0 0 50 50"  style="width: 24px;  height: 24px;"><circle  class="mcc-spinner__track"  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle><circle  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle></svg><span  class="mcc-button__label">Button</span></button> |

      | Size | The size of the spinner can be set to any size in pixels, eg 24px | <svg  class="mcc-spinner"  viewBox="0 0 50 50"  style="width: 24px;  height: 24px;"><circle  class="mcc-spinner__track"  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle><circle  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle></svg> |


      - - -

      ## Using a Spinner

      It is best practice to use a loading spinner whenever the wait time is anticipated to be longer than three seconds.  However, if the wait is potentially going to be longer than 10 seconds then a progress bar should be used instead [link to progress bar page.


      ### Spinner sizes

      To keep spinners consistent throughout the application, our default sizes to be used are 24px, 32px, 48px, 64px.  These fit in with our standard sizing across all components. [Link to sizing guidelines page?]

      When using a Spinner in these specific screnarios then you should use these specific sizes. For Buttons 24px, Snackbars 32px and full page loading 64px (default spinner)


      ### Spinner Colours

      Spinners should always be in the default colour unless they are being used within another component (eg Buttons and Snackbars). When using a spinner in a component use the coloured content variant to ensure the spinner is an accessible colour


      - - - 

      ## References

      https://www.nngroup.com/articles/progress-indicators/
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


    Below, you can find a live demo for a Spinner component. Use the drop-down menus and radio buttons to view the different Spinner Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <svg class="mcc-spinner" viewBox="0 0 50 50">
              <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        name: As default
        modifiers:
          - name: Mono
            selector: .mcc-spinner
            classes:
              - name: Mono
                value: mcc-spinner--mono
            type: class
      - template:
          lang: html
          code: >
            
            <div class="mu-d-flex mu-flex-wrap" style="gap: 0.5rem;">
              <button class="mcc-button mcc-button--primary">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <span class="mcc-button__label">Button</span>
              </button>

              <button class="mcc-button mcc-button--warning">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <span class="mcc-button__label">Button</span>
              </button>

              <button class="mcc-button mcc-button--outline">
                <svg class="mcc-spinner mcc-spinner--current-color mu-mr-03" viewBox="0 0 50 50" style="width: 24px; height: 24px;">
                  <circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <span class="mcc-button__label">Button</span>
              </button>
            </div>
        name: As current color
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
