---
title: Button
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
tabs:
  - title: Usage
    body: "## What is a Button?


      A **Button** should be used when a user is given a possible action –
      these are usually things like submissions, confirmations, cancellations,
      et cetera. They can serve many purposes, and are mostly used to initialise
      a certain process within the system.


      - - -


      ### When, and why?


      **Buttons** should be used when a **Call to Action (CTA)** is needed
      on a page, **Form** or **Card**. Users will recognise that a **Button**
      must be pressed in order to carry out a specific task.\ 


      - - -


      ## Button types


      **Button types** can be applied to a **Button** to give some
      additional functionality to the **Button**.


      | Type              |
      Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \
      |

      | --------------------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ---------------------------------- |

      | **Default**       | **Default Buttons** are full-colour buttons
      and are used for all important actions, such as your primary action (which
      may or may not use the primary
      colour)                                                                                                                                                                                                                                                                                                                                                                                           \
      |

      | **Outline**       | **Outline Buttons** are not full-colour
      buttons – instead, they are just a **Button** outline. This is useful when
      the **Button** is on a page that has a coloured background. This is used
      for all our **secondary**
      actions.                                                                                                                                                                                                                                                                                                                                                                                           \
      |

      | **Soft**          | **Soft Buttons** are medium-emphasis
      **Buttons**. They contains actions that are important, but aren't the
      primary action in an
      app.                                                                                                                                                                                                                                                                                                                                                                                                                                        \
      |

      | **Anchor**        | **Buttons** that are styled to look like an
      anchor (which in turn looks like a link). This is useful for adding
      emphasis to a link, and you want to encourage the user to interact with it
      as they would any other
      action.                                                                                                                                                                                                                                                                                                                                                  \
      |

      | **Block**         | **Buttons** that are larger than others, and
      span to fit their container. Normally this is used when you have a single
      action on a page that you need to draw attention to, like a login page or
      a button to register for
      something.                                                                                                                                                                                                                                                                                                                                        \
      |

      | **Small**         | **Small Buttons** are the opposite – necessary
      **Buttons** that are small and unobtrusive. These can be used in
      situations where you have limited space, or for situations like a table
      with repeated actions all across it (such as editing and
      deleting).                                                                                                                                                                                                                                                                                                                 \
      |

      | **Icon**          | **Buttons** can (and should) be given an icon
      to provide further context. Read below in the **[Button
      Icons](https://mosaic-design-system.herokuapp.com/components/button/#butt\
      on-icons)**
      section.                                                                                                                                                                                                                                                                                                                                                                         \
      |

      | **Trailing Icon** | You can also use **Trailing Icons** in a
      **Button**, which appear after the text rather than
      before.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       \
      |

      | **Icon-Only**     | **Icon Only Buttons** are **Buttons** without
      a label but containing an icon. These should use universally known icons
      and actions for common functionality, such as a save, delete or home icon.
      These are rare and should only be used in specific cases. There is a
      separate document for **Icon Only Buttons** which you can be found on the
      **Icon Only Buttons** documentation page, and you should read the [entry
      for **Button
      Labels**](https://mosaic-design-system.herokuapp.com/components/button/#b\
      utton-labels) for the limitations on using this **Button**. |

      | **Disabled**      | This can be added to limit when a **Button**
      can be used. A **Disabled Button** is always visible to the user, but it
      will not be interactable until the user has completed a specific task.
      Once the task in question has been performed, the **Disabled Button** will
      be set to
      active.*                                                                                                                                                                                                                                                                                  \
      |

      | **Spinner**       | **Buttons** that provide tactile feedback to
      the user that something is happening when they interact with it. This can
      be useful for situations where a **Button's** function is not immediately
      carried out, e.g. when the system needs a few moments to save the changes
      the user has made. This type of animation on the **Button** can have a
      positive impression on the user, letting them know that the system has not
      just timed out or is
      unresponsive.                                                                                                             \
      |


      > \\*if a user will never be able to use the **Button**, for example
      if they lack the requisite permissions or security, then a **Button**
      should just not be visible to them. It is frustrating for a user to see a
      **Button** and never have the ability to use it.  For disabled buttons
      that are visible, it should also be clear to the user what they need to do
      to enable this Button.


      - - -


      ## Button contexts


      Context helps convey the information being communicated. Button
      contexts correspond to a colour to provide a consistent experience for
      users. For more information, refer to the Colours guidelines.


      In Mosaic, there are six contexts for **Buttons**. Each has a
      different function, and the look of the button will signal a different
      usage to the user. For example, a **Primary Button** tends to be the most
      positive outcome for an action, things like submitting a form or saving a
      sheet. Conversely, a **Danger Button** tends to be something negative,
      like deleting something.\ 


      | Button Type   |
      Description                                                                                                                                                                                                                                                                                                                                  \
      |

      | ------------- |
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      -------------------------------------------------------------------------\
      ---------------------------------------- |

      | **Primary**   | Used for the main CTA on the screen. This is
      reserved for actions such as add, or import. There should only ever be one
      **Primary Button** on the page, **Form** or
      **Card**                                                                                                                                                            \
      |

      | **Secondary** | Buttons that do not fall into one of the other
      categories. This can be used for things that are largely inconsequential
      but necessary, like closing a dialogue box. The **Outline** button is used
      for all secondary
      actions.                                                                                                                                                                         \
      |

      | **Success**   | used for positive actions, like saving, confirming
      accepting or editing. Typically, like the **Primary Button**, there should
      only be one **Success
      Button**.                                                                                                                                                                                \
      |

      | **Warning**   | Not used very often, but they can be useful when
      you want the user to take caution with a particular action. You might want
      to include a **Button** to reload some data, for example, but want to warn
      the user not to do this too
      often.                                                                                                    \
      |

      | **Danger**    | Should be used for dangerous or destructive
      activity, like deleting or removing something from the system. Typically
      this should be the only **Danger Button** available to the user at that
      time.                                                                                                                                           \
      |

      | **Info**      | Can be used when the user might require some more
      context, or for less important actions than the **Primary Button**. Some
      examples would be an **Info Button** that opens a new dialogue box with
      some additional information, or perform an action that does not leave the
      page or make any change to data, i.e. print or view guidelines. |



      - - -


      ## Using a Button


      There are many ways to implement **Buttons** in a product, and there
      are many views to support each of those solutions. After carrying out
      extensive research, the UX Team have agreed on what we believe to be the
      best rules governing the usage of **Buttons** across Advanced products.
      Use these following guidelines when implementing a **Button** into your
      product.


      ### Ordering of Buttons


      We have a set order for groups of **Buttons** in our products, to
      encourage user familiarity and build a familiarity around what a user can
      expect, and where. The ordering is simple: the least positive **Button**
      is the one furthest to the left (before any Cancel or Close), and the most
      positive **Button** is the one to the right. As an example, a form with
      'Cancel/Close', 'Delete' and 'Save' would be ordered as such – 'Delete' is
      the most negative, 'Save' is the most positive, and 'Cancel' is relatively
      neutral but present in a lot of screens so is always furthest left for
      consistency.\ 


      This ordering of the **Buttons** provides a sense of 'moving
      forward' to the user when they see a **Button** on the right-hand side,
      whereas a **Button** on the left-hand side feels like 'moving backward'.\ 


      ### Button Labels


      A **Button's Label** is as important as the **Button** itself. A set
      of **Buttons** that are simply a green and a red **Button** might imply
      'good' and 'bad' actions, but there is no context for the user. As such,
      there are a couple of things to keep in mind when labelling a **Button**:


      * **Buttons** require a **Label** in the vast majority of cases. We
      cannot assume that a user will instinctively know what an icon means on a
      **Button**. An infamous example of this is the classic floppy disk icon
      for saving – think about how soon it will be until virtually all of our
      users will have never seen a floppy disk?\ 


      > **Note**: there are some very specific use cases for Icon-only
      Buttons, but these are few and far between. We have [guidance](link) on
      where a **Button** can forgo a label, but the UX Team should be contacted
      in advance of using an **Icon Only Button** to ensure that it is
      appropriate.\ 


      * **Button Labels** should be specific, rather than general. A user
      should feel confident that they know what a **Button** does. Generic
      **Buttons** like 'OK' when a user is actually changing something are not
      informative enough – the user needs to know that the **Button** will
      'Confirm changes', which is a much better **Label**.


      Deciding when you should use Cancel or Close as your button label is
      very important.  Historically many applications used Cancel as a means to
      leave a screen or page.  However, we would strongly recommend Close is
      used in this instance.  Cancel should be reserved for instances such as
      forms where cancelling out of the form discards any changes the user has
      made.


      If you are unsure about **Labels**, please review the [product
      tone-of-voice document](link) or contact the UX Copywriter.


      ### Button Icons


      **Icons** can be used to give further meaning to your **Buttons**.
      By default, all **Buttons** in a page header should have an **Icon**, but
      occasionally this is not always practical when there is not an obvious
      **Icon** available for use, or there are space limitations for the
      **Button**. In cases like these, it is acceptable to forgo an icon.


      When using an **Icon**, the **Icon** should always appear to the
      left of the **Button's Label**. The **Icon** is describing the **Label**,
      not the other way around! It also improves readability and is easier to
      quickly scan the functionality of each **Button** if the **Icons** all
      appear on the left-hand side.  The one exception to this is when an icon
      is used to indicate direction of travel.  In this scenario, icons are
      permitted on the right-hand side of a label, e.g. a Next button.


      ### Button Colours


      The colour of your **Button** will be dictated by the **Button
      Type**. For example, a **Success Button** is green, whereas a **Danger
      Button** is red. The rationale is simple: green is associated with
      positive actions (green for go), while red is associated with negative
      actions (red for stop). However, it should be noted that colour only gives
      a visual clue if that visual cue is perceptible to the user – screen
      readers and colour-blind users will get no benefit from **Button
      Colours**. This is why it is important to use a combination of **Button
      Labels** and **Icons** to properly delineate the usage of a **Button**.


      Refer to the **Button Types** section to read about the different
      colours for **Button Types**.


      ### Button spinners


      Where a spinner is used on a button, it should replace the button's
      default icon, as below. This works fine in the example below, as the
      landing page would be shown if the login was successful and the button
      would be reset.

      [example]


      However, if the button is performing a check, then I think we need a
      third button state which indicates the success or failure. For example, if
      we were checking a URL or validate a user, then it might look something
      like this:\r

      \r

      [example]


      ### Consistency


      Consistency among your **Buttons** is vital for users. A user needs
      to feel comfortable, confident and at-home when using our products.
      **Button** consistency is a really easy way of achieving it – if a user
      can tell with a quick glance what the **Buttons** do in a new feature,
      based on their previous experience with the product, then they will adopt
      it much quicker, and user errors will be minimised. Inconsistent
      **Buttons** quickly lead to poor adoption of products and rampant
      confusion.\ 


      A few ways you can achieve consistency is making sure your
      **Labels** are identical in all areas – do not switch between using
      'close' and 'cancel' on your **Buttons**. Pick one, and stick with it. The
      same goes for **Icons**. Make sure you review your **Buttons** in
      comparison to others in the system when making them."
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: >-
      ## Component accessibility 


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release. 


      ## Colour combinations 


      Please be mindful of colour contrast when using these buttons. Please make sure that the there is a clear colour contrast between the button and the background it is on. Please check this using this colour checker (https://webaim.org/resources/contrastchecker/). 


      ## Key binding 


      You should be able to select, submit data, confirm etc from all buttons via the keyboard ‘enter’ key. 


      ## Aria tags 


      Please ensure that all buttons have aria tags to ensure screen readers can understand that they are focussed on a button. 


      ## Focus state 


      All buttons should have a focus state and be able to have a focus applied to them by tabbing via a keyboard. (See focus state styling). 


      ## Wording  


      Please ensure that wording is as descriptive of the action as possible to help people understand clearly what action they are performing when they select the button. 


      ## Icons  


      Buttons without text should only be used as a last resort to save space on a table etc. 
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Button component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
            </button>
        name: As default
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
                default: false
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
            type: class
            select_multiple: false
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: With icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
              <mcc-icon name="arrows_long_right" aria-hidden="true"></mcc-icon>
            </button>
        name: With trailing icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--outline">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As outline
        modifiers:
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--text">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text
        modifiers:
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
---
