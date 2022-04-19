---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Snackbar
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-snackbar--as-default
tabs:
  - title: Usage
    body: "## What is a Snackbar?


      Short messages about operation progress that appear bottom of the
      screen\ 


      - - -


      ### When, and why?


      When a user has triggered an operation that you need to commutate a
      message about \ 


      - - -


      ## Types of Snackbars


      In Mosaic, there are six types of **Buttons**. Each **Button Type**
      has a different function, and the look of the button will signal a
      different usage to the user. For example, a **Primary Button** tends to be
      the most positive outcome for an action, things like submitting a form or
      saving a sheet. Conversely, a **Danger Button** tends to be something
      negative, like deleting something.\ 


      | Button Type   |
      Description                                                                                                                                                                                                                                                                                                                                  \
      | Example                                                                                                     \
      |

      | ------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ---------------------------------------- |
      -------------------------------------------------------------------------\
      ---------------------------------- |

      | **Primary**   | Used for the main CTA on the screen. This is
      reserved for actions such as add, import or save. There should only ever
      be one **Primary Button** on the page, **Form** or
      **Card**                                                                                                                                                            \
      | <button class=\"mcc-button mcc-button--primary\"> <span
      class=\"mcc-button__label\">Primary</span> </button>    |

      | **Secondary** | Buttons that do not fall into one of the other
      categories. This can be used for things that are largely inconsequential
      but necessary, like closing a dialogue
      box.                                                                                                                                                                          \
      | <button class=\"mcc-button mcc-button--secondary\"> <span
      class=\"mcc-button__label\">Secondary</span></button> |

      | **Success**   | used for positive actions, like saving, confirming
      accepting or editing. Typically, like the **Primary Button**, there should
      only be one **Success
      Button**.                                                                                                                                                                                \
      | <button class=\"mcc-button mcc-button--success\"> <span
      class=\"mcc-button__label\">Success</span> </button>    |

      | **Warning**   | Not used very often, but they can be useful when
      you want the user to take caution with a particular action. You might want
      to include a **Button** to reload some data, for example, but want to warn
      the user not to do this too
      often.                                                                                                    \
      | <button class=\"mcc-button mcc-button--warning\"> <span
      class=\"mcc-button__label\">Warning</span> </button>    |

      | **Danger**    | Should be used for dangerous or destructive
      activity, like deleting or removing something from the system. Typically
      this should be the only **Danger Button** available to the user at that
      time.                                                                                                                                           \
      | <button class=\"mcc-button mcc-button--danger\"> <span
      class=\"mcc-button__label\">Danger</span> </button>      |

      | **Info**      | Can be used when the user might require some more
      context, or for less important actions than the **Primary Button**. Some
      examples would be an **Info Button** that opens a new dialogue box with
      some additional information, or perform an action that does not leave the
      page or make any change to data, i.e. print or view guidelines. | <button
      class=\"mcc-button mcc-button--info\"> <span
      class=\"mcc-button__label\">Info</span> </button>          |


      - - -


      ## Snackbar Variants


      In addition to the **Button Type**, each **Button** can also have a
      **Button Variant**. A **Variant** can be applied to a **Button** to give
      it some more context, or add some additional functionality to the
      **Button**.


      | Variant           |
      Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \
      | Example                                                                                                                                                                                                                                                                                                        \
      |

      | ----------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ---------- |

      | **Disabled**      | This can be added to limit when a **Button**
      can be used. A **Disabled Button** is always visible to the user, but it
      will not be interactable until the user has completed a specific task.
      Once the task in question has been performed, the **Disabled Button** will
      be set to
      active.*                                                                                                                                                                                                                                                                                  \
      | <button class=\"mcc-button mcc-button--primary\" disabled> <span
      class=\"mcc-button__label\">Disabled</span>
      </button>                                                                                                                                                                                             \
      |

      | **Icon**          | **Buttons** can (and should) be given an icon
      to provide further context. Read below in the **[Button
      Icons](https://mosaic-design-system.herokuapp.com/components/button/#butt\
      on-icons)**
      section.                                                                                                                                                                                                                                                                                                                                                                         \
      | <button class=\"mcc-button mcc-button--primary\"><mcc-icon
      name=\"does-not-exist\" aria-hidden=\"true\"></mcc-icon><span
      class=\"mcc-button__label\">Icon</span></button>                                                                                                                                              \
      |

      | **Trailing Icon** | You can also use **Trailing Icons** in a
      **Button**, which appear after the text rather than
      before.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        \
      | <button class=\"mcc-button mcc-button--primary\"><mcc-icon
      name=\"does-not-exist\" aria-hidden=\"true\"></mcc-icon><span
      class=\"mcc-button__label\">Icon</span><mcc-icon
      name=\"arrows_long_right\"
      aria-hidden=\"true\"></mcc-icon></button>                                                                             \
      |

      | **Spinner**       | **Buttons** that provide tactile feedback to
      the user that something is happening when they interact with it. This can
      be useful for situations where a **Button's** function is not immediately
      carried out, e.g. when the system needs a few moments to save the changes
      the user has made. This type of animation on the **Button** can have a
      positive impression on the user, letting them know that the system has not
      just timed out or is
      unresponsive.                                                                                                             \
      | <button class=\"mcc-button mcc-button--primary\"><svg
      class=\"mcc-spinner\" viewBox=\"0 0 50 50\"><circle
      class=\"mcc-spinner__track\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\"
      stroke-width=\"5\"></circle><circle cx=\"25\" cy=\"25\" r=\"20\"
      fill=\"none\" stroke-width=\"5\"></circle></svg><span
      class=\"mcc-button__label\"></span> |

      | **Outline**       | **Outline Buttons** are not full-colour
      buttons – instead, they are just a **Button** outline. This is useful when
      the **Button** is on a page that has a coloured
      background.                                                                                                                                                                                                                                                                                                                                                                                              \
      | <button class=\"mcc-button mcc-button--outline\"><mcc-icon
      name=\"does-not-exist\" aria-hidden=\"true\"></mcc-icon><span
      class=\"mcc-button__label\">Outline</span>
      </button>                                                                                                                                          \
      |

      | **Anchor**        | **Buttons** that are styled to look like an
      anchor (which in turn looks like a link). This is useful for adding
      emphasis to a link, and you want to encourage the user to interact with it
      as they would any other
      action.                                                                                                                                                                                                                                                                                                                                                  \
      | <button class=\"mcc-button mcc-button--anchor\"> <span
      class=\"mcc-button__label\">Link</span>
      </button>                                                                                                                                                                                                           \
      |

      | **Block**         | **Buttons** that are larger than others, and
      span to fit their container. Normally this is used when you have a single
      action on a page that you need to draw attention to, like a login page or
      a button to register for
      something.                                                                                                                                                                                                                                                                                                                                        \
      | <button class=\"mcc-button mcc-button--primary mcc-button--block\">
      <span class=\"mcc-button__label\">Block</span>
      </button>                                                                                                                                                                                       \
      |

      | **Small**         | **Small Buttons** are the opposite – necessary
      **Buttons** that are small and unobtrusive. These can be used in
      situations where you have limited space, or for situations like a table
      with repeated actions all across it (such as editing and
      deleting).                                                                                                                                                                                                                                                                                                                 \
      | <button class=\"mcc-button mcc-button--primary mcc-button--sm\"> <span
      class=\"mcc-button__label\">Small</span>
      </button>                                                                                                                                                                                          \
      |

      | **Icon-Only**     | **Icon Only Buttons** are **Buttons** without
      a label but containing an icon. These should use universally known icons
      and actions for common functionality, such as a save, delete or home icon.
      These are rare and should only be used in specific cases. There is a
      separate document for **Icon Only Buttons** which you can be found on the
      **Icon Only Buttons** documentation page, and you should read the [entry
      for **Button
      Labels**](https://mosaic-design-system.herokuapp.com/components/button/#b\
      utton-labels) for the limitations on using this **Button**. | <button
      class=\"mcc-button mcc-button--primary mcc-button--icon-only\"><mcc-icon
      name=\"does-not-exist\" aria-hidden=\"true\"></mcc-icon><span
      class=\"mcc-button__label\">Primary</span>
      </button>                                                                                                                    \
      |

      | **Soft**          | **Soft Buttons** are medium-emphasis
      **Buttons**. They contains actions that are important, but aren't the
      primary action in an
      app.                                                                                                                                                                                                                                                                                                                                                                                                                                        \
      | <button class=\"mcc-button mcc-button--soft-primary\"><mcc-icon
      name=\"does-not-exist\" aria-hidden=\"true\"></mcc-icon><span
      class=\"mcc-button__label\">Outline</span>
      </button>                                                                                                                                     \
      |


      > \\*if a user will never be able to use the **Button**, for example
      if they lack the requisite permissions or security, then a **Button**
      should just not be visible to them. It is frustrating for a user to see a
      **Button** and never have the ability to use it. It should also be clear
      to the user what they need to do to enable this Button. \t


      - - -


      ## Using a Snackbar


      Snackbars appear automatically when the system has a contextual
      message for the user. They disappear after maximum of ten seconds. They
      shouldn’t interrupt the user experience, as they don’t require user
      interaction to disappear. A snackbar can contain an optional single action
      such as \"Dismiss\", \"Cancel\" or \"Reload\".\r

      Snackbars should be placed at the bottom of a screen, in front of
      page content but avoiding any navigation components. \r\n"
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
