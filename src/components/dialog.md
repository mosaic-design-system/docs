---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Dialog
toc: true
chips:
  - "Web Component: In development"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-dialog-introduction
tabs:
  - title: Usage
    body: >
      ## What is a Dialog?


      A **Dialog** is a container or box used to display content in a layer that sits above the main application. You can think of them like "pop-up" windows (but they're significantly less irritating!). They're normally used convey information to the user, or provide the opportunity for the user to perform an action in the middle of their workflow.


      - - -


      ### When, and why?


      Use **Dialogs** to prompt users for information relating to the current task, or to display messaging which helps them to make decisions about the current workflow. A **Dialog** is typically used when a particular action **has** to be performed and interrupts the user's workflow until its content has been reviewed, interacted with or dismissed.


      There are two types of **Dialogs**:


      - A messaging **Dialog** allows you to present the user with advisory information, warnings, or system critical information 

      - A form **Dialog** is used when you want to capture additional data using a collection of form inputs


      For more information, please read the [System messaging guidelines](/guidelines/system-messaging) to learn how and when **Dialogs** should be used.


      - - -


      ## Dialog types


      The following **Dialog** types are available:


      | **Type**   | **Description**                                                                                          | **Behaviour**                          | **Example**              |

      | ---------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------ |

      | As default    | A neutral Dialog with no styling or context, used as a simple container for content, e.g. images & videos | Persists. Can be dismissed or actioned | Showing a video tutorial |

      | As message | A Dialog used for presenting users with messages                                                         | Persists. Can be dismissed or actioned | Warning a user about an action they are about to take  |

      | As form    | A Dialog used when user input is required                                                                | Persists. Can be dismissed or actioned | Creating a new record |


      - - -


      ## Dialog contexts


      Context helps convey the information being communicated. **Dialog** contexts correspond to a colour to provide a consistent experience for users. For more information, refer to the [Colours](/guidelines/colours) guidelines.


      **Note**: Contexts only apply to message **Dialogs**. Form **Dialogs** do not have a context and are styled differently.


      | **Context** | **Description**                                                                                                              | **Behaviour**                                                            | **Examples** |

      | -------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------ |

      | Success  | Indicates actions were completed successfully. The Success colour is green.                                                   | Does not require user interaction, but persists until the user dismisses |  The user finishes a work flow successfully            |

      | Danger   | Indicates errors and, optionally, prevents users from proceeding until the issue has been resolved. The Danger colour is red. | Always persists until the user dismisses or resolves the issue           |  The user inputs an invalid configuration for a record             |

      | Warning  | Indicates that actions are not desirable or might have unexpected results. The Warning colour is yellow.                      | Persists until the user dismisses or continues regardless                |  The user enters a record that will overwrite another non-critical record             |

      | Info     | Indicates neutral or advisory information that may not be related to the current action. The info colour is teal.             | Does not require user interaction, but persists until user dismisses     |  A dialog that gives a tip to the user about another related feature         |


      - - -


      ## Using a Dialog



      ## Using the right Dialog

      **Dialogs** are triggered by user actions. They should interrupt a user’s current task to grab their attention. The key to usage is to ensure that the correct type and context (if a message) of **Dialog** is used. For example, if you want to show an informational message use an **Info Dialog**, but if you want to present the user with a short form then use a **Form Dialog**. This will help users become familiar with the nature of the **Dialog** and understand what is being asked of them.


      ## Dialog messaging


      As always when writing copy, please refer to the [Tone of coice](/guidelines/tone-of-voice) and [Content](/guidelines/content) guidelines when writing copy within a product.


      However, specifically for **Dialogs**, it is important to get the messaging absolutely correct. You are interrupting a user's workflow, and they need to quickly switch contexts. 


      A descriptive title for the **Dialog** is a good start. Make sure it's not too long, and gives a good overview of what the message is about. In the body text of the **Dialog**, be respectful of the user's time. Without sacrificing quality of copy and losing the gravity of the message, try and be as succinct as possible.


      Similarly, the labels for [Buttons](/guidelines/button) in your **Dialog** should be short and concise, ideally one or two words. Their function should be obvious and clear, and follow similar conventions to other **Buttons** in your product. **Buttons** should be clear in their use - for example, a **Button** should say "Save" instead of "OK" in a form **Dialog** that is creating a new record.


      ## Dialog sizes

      The size of a **Dialog** should be appropriate to its content and, where possible, they should be consistent wherever they are used. If the height or width means that the **Dialog** looks out of proportion, or the amount of inputs force a scroll bar, then consider a different approach. 


      ## Dialog forms

      If you are using a **Form Dialog**, then the fields must stack vertically to avoid making the **Dialog** too wide. You should avoid the use of columns entirely, as space will begin to feel cramped within the **Dialog**.


      Be mindful of the length of a **Form Dialog**. With too many fields, the user's flow may be completely interrupted and the user will completely lose their focus on the task they actually wanted to originally complete. If there are more than three or four fields in a **Form Dialog**, the form may be more suited to its own separate page.


      ### Closing a Dialog


      **Dialogs** should always be closable, regardless of the content inside. Each **Dialog** needs to include the following three methods of exit:


      - A "cancel" **Button** at the bottom of the **Dialog** that allows them to close the message or exit the process early. This **Button** does not necessarily need to be labelled "cancel", but it should follow the same conventions as similar buttons in the rest of your product.

      - A close icon in the top right-hand corner that functions similarly to the cancel **Button**.

      - The **Dialog** must be able to be closed with the escape key. This is crucial for users that are keyboard-only.
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


      When designing with a **Dialog**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Dialog** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Dialog** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on any components within the **Dialog**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Dialog** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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


    Below, you can find a live demo for a Dialog component. Use the drop-down menus and radio buttons to view the different Dialog Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-dialog-overlay">
              <dialog class="mcc-dialog" id="default-dialog">
                <section>
                  <div class="mcc-dialog__header">
                    <h2 class="h4">Title</h2>
                  </div>
                  <div class="mcc-dialog__body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p class="mu-mb-00">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                  <div class="mcc-dialog__footer">
                    <button type="button" class="mcc-button mcc-button--outline" onclick="closeDialog()">Close</button>
                  </div>
                </section>
              </mcc-dialog>
            </div>

            <button class="mcc-button mcc-button--primary" onclick="showDialog()">Show dialog</button>

            <script src="https://cdn.svc.oneadvanced.com/dialog-polyfill/0.5.6/dialog-polyfill.js" type="module"></script>

            <script>
              function showDialog() {
                var dialog = document.querySelector('dialog');
                dialogPolyfill.registerDialog(dialog);
                dialog.parentElement.classList.add('mu-visible')
                dialog.showModal();
              }
              function closeDialog() {
                const dialog = document.getElementById('default-dialog')
                dialogPolyfill.registerDialog(dialog);
                dialog.parentElement.classList.remove('mu-visible')
                dialog.close()
              }
            </script> <script>
              
            </script>
        name: As default
        modifiers:
          - name: Size
            selector: .mcc-dialog
            classes:
              - name: Extra small
                value: mcc-dialog--xs
              - name: Small
                value: mcc-dialog--sm
              - name: Medium (default)
                value: mcc-dialog--md
                default: true
              - name: Large
                value: mcc-dialog--lg
              - name: Full
                value: mcc-dialog--full
            type: class
            select_multiple: false
          - name: Type
            selector: .mcc-dialog
            classes:
              - name: Default
                value: mcc-dialog
                default: true
              - name: Primary
                value: mcc-dialog--primary
              - name: Secondary
                value: mcc-dialog--secondary
              - name: Success
                value: mcc-dialog--success
              - name: Danger
                value: mcc-dialog--danger
              - name: Warning
                value: mcc-dialog--warning
              - name: Info
                value: mcc-dialog--info
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
