---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Snackbar
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-snackbar-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Snackbar?


      A **Snackbar** is a short message that appears at the bottom centre of the user's screen. They are a great way of showing updates about the progress of an operation without being intrusive.


      - - -


      ### When, and why?


      **Snackbars** inform users of something that has been, or will be, performed by the system. They are a small message that appears at the bottom of the page that lets the user know that something has or hasn't been completed, or provides further context to an action.


      For example, if a user has requested a report that takes some time to generate, and then moves to another area of the product, a **Snackbar** would appear at the bottom of the screen to notify them when the report has finished generating.   


      - - -


      ## Snackbar types


      In addition to the context, each **Snackbar** also has an option between two types: 


      | Type      | Description                                                                                                                           | Example                                                                                                                                                          |

      | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**  | This will cover use cases where the a simple message covers the update and no further action is required. | |

      | **With CTA** | Cases where you may want to give the user an opportunity to take another single action, you would use the **Snackbar with a CTA**. | |


      - - -


      ## Snackbar contexts


      Context helps convey the information being communicated. **Snackbar** contexts correspond to a colour and an icon to provide a consistent experience for users. For more information, please refer to [Colours](/guidelines/colour/).


      | **Context** | **Description**                                                                                                              | **Behaviour**                                                                     | **Examples**                                          |

      | -------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------- |

      | **Success**  | Indicates actions were completed successfully. The Success colour is green.                                                   | Does not require user interaction, as disappears automatically after a short time | A new record saved or preferences have been updated   |

      | **Danger**   | Indicates errors and, optionally, prevents users from proceeding until the issue has been resolved. The Danger colour is red. | Always persists until the user dismisses or resolves the issue                    | Credentials cannot be found or access is denied       |

      | **Warning**  | Indicates that actions are not desirable or might have unexpected results. The Warning colour is yellow.                      | Persists until the user dismisses or continues regardless                         | A file is too big or a file already exists            |

      | **Info**     | Indicates neutral or advisory information that may not be related to the current action. The info colour is teal.             | Does not require user interaction, but persists until user dismisses              | Scheduled system maintenance or a new report is ready |


      - - -


      ## Using a Snackbar


      ### Auto-dismiss

      **Snackbars** don’t interrupt the user experience, and should disappear automatically after maximum of ten seconds without user interaction. Interrupting the user's workflow by forcing them to interact with a **Snackbar** will add unnecessary complications - a **Snackbar** should be a quick "we thought you should know this!" message, and do not need to be acknowledged by the user.


      ### Snackbars with CTA's

      A **Snackbar** can contain an optional single action, such as "Undo", "Retry" or "Reload". Selecting the action performs the action and closes the **Snackbar**. 


      If your **Snackbar** contains multiple CTA's, then you may be providing too much for the user to read in the ten second timeframe - you could instead use the **Snackbar** to notify the user that something requires their attention, and the CTA takes them to a different page with more options.


      ### Snackbar placement

      **Snackbars** must be displayed one at a time. Multiple **Snackbars** at once will overwhelm a user. They must be placed at the bottom centre of a screen, in front of any page content, but they should avoid covering up any navigational components. Similarly, **Snackbars** shouldn't stack on top of one another. 


      ### Snackbar length

      **Snackbars** should only contain one or two lines of text. We must consider the amount of attention and time it takes for a user to absorb the message.


      In addition to using text to convey meaning, you can make use of the different colours and icons available on a **Snackbar** - an ideal scenario would have a user being able to tell at a glance if something was a failure or a success. 


      ### Snackbars are not progress indicators

      A **Snackbar** is never used as a loading or progress indicator. They are messages about finite results (i.e. completion or incompletion), and shouldn't be used as reminders that something is ongoing.
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


      When designing with a **Snackbar**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Snackbar** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Snackbar** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Snackbar** and the contents within it.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Snackbar** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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
