---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Spinner
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-spinner-introduction
tabs:
  - title: Usage
    body: >
      ## What is a Spinner

      A **Spinner** is used to show the user that something is currently happening on the application. It is an animated component that **doesn't** show progress (that would be a [**Progress Indicator**](/components/progress-bar), but provides visual feedback to the user that the application has responded to their input and hasn't frozen.


      ### When and why

      **Spinners** are used when retrieving data or performing slow calculations, and help to notify users that something is underway. The waiting experience is a crucial aspect of a design. Although it may not be obvious what is occurring in the background, it is important to communicate clearly that progress is being made.


      A **Spinner** shouldn't be used for every instance where the application loads data - the vast majority of processes should be quick enough where the user's waiting time is inconsequential. Imagine a loading spinner appearing every time you clicked on something on a website, even if it only appeared for a brief second. That would get annoying quickly.


      - - -

      ## Spinner types


      The following **Spinner** types are available:


      | **Type** | **Description** | **Example** |

      | -------- | -------- | -------- |

      | **Default** | Default size and colour | <svg class="mcc-spinner" viewBox="0 0 50 50"><circle class="mcc-spinner__track" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle><circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg> |

      | **Coloured content** | Used when inside another component (e.g. Buttons and Snackbars). It automatically applies the appropriate colour to the Spinner dependent on the content colour of the component | <button  class="mcc-button mcc-button--primary">  <svg  class="mcc-spinner mcc-spinner--current-color mu-mr-03"  viewBox="0 0 50 50"  style="width: 24px;  height: 24px;"><circle  class="mcc-spinner__track"  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle><circle  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle></svg><span  class="mcc-button__label">Button</span></button> |

      | **Size** | The size of the Spinner can be set to any size in pixels, e.g. 24px | <svg  class="mcc-spinner"  viewBox="0 0 50 50"  style="width: 24px;  height: 24px;"><circle  class="mcc-spinner__track"  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle><circle  cx="25"  cy="25"  r="20"  fill="none"  stroke-width="5"></circle></svg> |


      - - -

      ## Using a Spinner


      ### Loading times

      You should only use a loading **Spinner** whenever the wait time is likely to be longer than three seconds. However, if the wait is potentially going to be longer than 10 seconds then a [**Progress Bar**](/components/progress-bar) should be used instead.


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


      When designing with a **Spinner**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Spinner** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Spinner** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Spinner**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Spinner** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
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
