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

      A **Spinner** is used to show the user that something is currently happening on the application. It is an animated component that **doesn't** show progress (that would be a [**Progress Indicator**](/components/progress-indicator), but provides visual feedback to the user that the application has responded to their input and hasn't frozen.


      ### When and why

      **Spinners** are used when retrieving data or performing slow calculations, and help to notify users that something is underway. The waiting experience is a crucial aspect of a design. Although it may not be obvious what is occurring in the background, it is important to communicate clearly that progress is being made.


      A **Spinner** shouldn't be used for every instance where the application loads data - the vast majority of processes should be quick enough where the user's waiting time is inconsequential. Imagine a loading spinner appearing every time you clicked on something on a website, even if it only appeared for a brief second. That would get annoying quickly.


      - - -

      ## Spinner types

      | **Type** | **Description** | **Example** |

      | -------- | -------- | -------- |

      | **Default** | Default size and colour | <svg class="mcc-spinner" viewBox="0 0 50 50"><circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle><circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg> |

      | **Coloured content** | Used when inside another component (e.g. Buttons and Snackbars). It automatically applies the appropriate colour to the Spinner dependent on the content colour of the component | <button  class="mcc-button mcc-button--primary">  <svg  class="mcc-spinner mcc-spinner--current-color mu-mr-03"  viewBox="0 0 50 50"  style="width: 24px;  height: 24px;"><circle  class="mcc-spinner__track"  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle><circle  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle></svg><span  class="mcc-button__label">Button</span></button> |

      | **Size** | The size of the Spinner can be set to any size in pixels, e.g. 24px | <svg  class="mcc-spinner"  viewBox="0 0 50 50"  style="width: 24px;  height: 24px;"><circle  class="mcc-spinner__track"  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle><circle  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle></svg> |


      - - -

      ## Using a Spinner


      ### Loading times

      You should only use a loading **Spinner** whenever the wait time is likely to be longer than three seconds. However, if the wait is potentially going to be longer than 10 seconds then a (**Progress Bar**)[/components/progress-bar] should be used instead.


      ### Spinner sizes

      To keep **Spinners** consistent throughout the application, our default sizes to be used are 24px, 32px, 48px, 64px.  These fit in with our standard sizing across all components.


      There are recommended sizes when using a **Spinner** in specific scenarios, which should be followed to ensure consistency across products. 


      - **Buttons** 24px

      - **Snackbars** 32px 

      - full page loading 64px (this is the default size for a **Spinner**)


      ### Spinner Colours

      Spinners should always be in the default colour unless they are being used within another component (e.g. **Buttons** and **Snackbars**). When using a **Spinner** in a component, use the coloured content type to ensure the **Spinner** is in an accessible colour


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
