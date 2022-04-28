---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Dialog
toc: true
chips:
  - "Web Component: In development"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/custom-elements-dialog--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Dialog?


      A **Dialog** is a container or box used to display content in a layer that sits above the main application. You can think of them like "pop-up" windows (but they're significantly less irritating!). They're normally used convey information to the user, or provide the opportunity for the user to perform an action in the middle of their workflow.


      - - -


      ### When, and why?


      Use **Dialogs** to prompt users for information relating to the current task, or to display messaging which helps them to make decisions about the current workflow. A **Dialog** is typically used when a particular action **has** to be performed and interrupts the user's workflow until its content has been reviewed, interacted with or dismissed.


      There are two types of **Dialogs**:


      - A messaging **Dialog** allows you to present the user with advisory information, warnings, or system critical information 

      - A form **Dialog** is used when you want to capture additional data using a collection of form inputs


      - - -


      ## Dialog types


      The following types of **Dialog** are available:


      | **Name**   | **Description**                                                                                          | **Behaviour**                          | **Example**              |

      | ---------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------ |

      | Default    | A neutral Dialog with no styling or context, used as a simple container for content, e.g. images & videos | Persists. Can be dismissed or actioned | Showing a video tutorial |

      | As message | A Dialog used for presenting users with messages                                                         | Persists. Can be dismissed or actioned | Warning a user about an action they are about to take  |

      | As form    | A Dialog used when user input is required                                                                | Persists. Can be dismissed or actioned | Creating a new record |

      | As sized   | Allows a Dialog to use one of the following sizes; Extra small, Small, Medium, Large, and Full-screen    |                                        |                          |


      - - -


      ## Dialog contexts


      Context helps convey the information being communicated. **Dialog** contexts correspond to a colour to provide a consistent experience for users. For more information, refer to the [Colours](/guidelines/colours) guidelines.


      **Note**: Contexts only apply to message **Dialogs**. Form **Dialogs** do not have a context and are styled differently.


      | **Name** | **Description**                                                                                                              | **Behaviour**                                                            | **Examples** |

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


      As always when writing copy, please refer to the [Tone of Voice](/guidelines/tone-of-voice) and [Style Guide](/guidelines/style-guide) sections when writing copy within a product.


      However, specifically for **Dialogs**, it is important to get the messaging absolutely correct. You are interrupting a user's workflow, and they need to quickly switch contexts. 


      A descriptive title for the **Dialog** is a good start. Make sure it's not too long, and gives a good overview of what the message is about. In the body text of the **Dialog**, be respectful of the user's time. Without sacrificing quality of copy and losing the gravity of the message, try and be as succinct as possible.


      Similarly, the labels for [Buttons](/guidelines/buttons) in your **Dialog** should be short and concise, ideally one or two words. Their function should be obvious and clear, and follow similar conventions to other **Buttons** in your product. **Buttons** should be clear in their use - for example, a **Button** should say "Save" instead of "OK" in a form **Dialog** that is creating a new record.


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


      The following rules apply to all types of Dialogs:


      * Inputs in form Dialogs must stack vertically. Avoid multiple columns
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
