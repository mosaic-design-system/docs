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


      A Dialog is a container or box used to display content in a layer that sits above the main application. They are an interaction between the application and the user.


      - - -


      ### When, and why?


      Use Dialogs to prompt users for information relating to the current task or to display messaging which helps them to make decisions about the current workflow. A Dialog is typically used when a particular action has to be performed and interrupts the user's workflow until its content has been reviewed, interacted with or dismissed.


      There are two types of Dialogs; the first is used for messages and the second is used for forms. Use a messaging Dialog when you want to present the user with advisory, warnings, or system critical information and use a form Dialog when you want to capture additional data using a collection of form inputs.


      - - -


      ## Dialog types


      The following types of Dialog are available:


      | **Name** | **Description**                                                                                       | **Behaviour**                          | **Example** |

      | -------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |

      | Default  | A Dialog used for presenting users with messages                                                      | Persists. Can be dismissed or actioned |             |

      | As form  | A Dialog used when user input is required                                                             | Persists. Can be dismissed or actioned |             |

      | As sized | Allows a Dialog to use one of the following sizes; Extra small, Small, Medium, Large, and Full-screen |                                        |             |


      - - -


      ## Dialog contexts


      Context helps convey the information being communicated. Dialog contexts correspond to a colour to provide a consistent experience for users. For more information, refer to Colours \[link to Colours page].


      | **Name** | **Description**                                                                                                              | **Behaviour**                                                            | **Examples** |

      | -------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------ |

      | Success  | Indicates actions were completed successfully. The Success colour is green                                                   | Does not require user interaction, but persists until the user dismisses |              |

      | Danger   | Indicates errors and, optionally, prevents users from proceeding until the issue has been resolved. The Danger colour is red | Always persists until the user dismisses or resolves the issue           |              |

      | Warning  | Indicates that actions are not desirable or might have unexpected results. The Warning colour is yellow                      | Persists until the user dismisses or continues regardless                |              |

      | Info     | Indicates neutral or advisory information that may not be related to the current action. The info colour is teal             | Does not require user interaction, but persists until user dismisses     |              |


      - - -


      ## Using a Dialog


      tbc


      The following rules apply to all types of Dialogs:


      * Always use a descriptive title

      * Always provide the following methods for users to close a Dialog; Cancel, Close icon, Escape key. The Escape key is important for keyboard users

      * Always make button labels short and concise, ideally one or two words

      * Avoid using "OK" as a button label. Always be specific about a button's action, e.g. "Save changes" or "Delete user"

      * Avoid using a scroll bar in Dialogs

      * Avoid making Dialogs take up a whole screen. Consider creating a new page instead

      * Dialogs must only be used for short forms
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
