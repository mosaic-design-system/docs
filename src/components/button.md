---
title: Button
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-button-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Button?


      A **Button** should be used when a user is given a possible action – these are usually things like submissions, confirmations, cancellations, etc. They can serve many purposes, and are mostly used to initialise a certain process within the system.


      - - -


      ### When, and why?


      **Buttons** should be used when a Call to Action (CTA) is needed on a page, **Form** or **Card**. Users will recognise that a **Button** must be pressed in order to carry out a specific task. 


      - - -


      ## Button types


      The following **Button** types are available:


      | **Type**   | **Description**                                                                                                                                                                                                |

      | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | As solid   | Default buttons are full-colour buttons and are used for all important actions, such as your primary action (which may or may not use the primary colour)                                                      |

      | As soft    | Soft buttons are medium-emphasis Buttons. They contains actions that are important, but aren't the primary action in an app.                                                                                   |

      | As outline | Outline buttons are not full-colour buttons – instead, they are just a Button outline. This is useful when the Button is on a page that has a coloured background. This is used for all our secondary actions. |

      | As text    | Text buttons appear as text-only buttons in primary blue like a hyperlink.                                                                                                                                     |

      | As ghost   | Ghost buttons are transparent buttons, which have no border or background colour.                                                                                                                              |

      | As split   | Split buttons are a button that contain a dropdown of related actions. For example, a Save button might have Save as its default action, but have Save and Clear, and Save and Exit as its related actions.    |

      | As XS      | Extra small buttons (XS) are the small, icon-only buttons specifically for use in tables, for things like inline actions.                                                                                      |


      ## Button properties


      The following **Button** properties are available:


      | **Property** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

      | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | Context      | Sets the contextual colour of a button; N/A, Primary, Success, Danger, Warning or Info.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

      | State        | Sets the state of a button; Default, Hover, Active, or Disabled. **Note**: The Disabled state limits when a Button can be used. A Disabled Button is always visible to the user, but it will not be interactable until the user has completed a specific task. Once the task in question has been performed, the Disabled Button will be set to active.*                                                                                                                                                                                                                                                                                                                                                                  |

      | Size         | Sets the size of a button; S, M, L.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

      | Icon         | Toggles an icon on/off. Icons can be positioned to the left or right of a button's label, but buttons can also be set with just an icon and no label. Icon-only Buttons are Buttons without a label. These should use universally known icons and actions for common functionality, such as a save, delete or home icon. These are rare and should only be used in specific cases. There is a separate document for Icon-only buttons which you can be found on the Icon only buttons documentation page, and you should Button labels below for the limitations when using this Button. **Note**: Primary buttons should always contain an icon to provide further context. Read more below in the Button icons section. |

      | Style        | (Split and XS buttons only) Sets the style of the button; Solid, Outline, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

      | Collapsed    | (Split buttons only) Toggles whether the button is displayed in its collapsed or expanded state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |


      \*if a user will never be able to use the **Button**, for example if they lack the requisite permissions or security, then a **Button** should just not be visible to them. It is frustrating for a user to see a **Button** and never have the ability to use it.  For disabled buttons that are visible, it should also be clear to the user what they need to do to enable this Button.


      - - -


      ## Button contexts


      Context helps convey the information being communicated. **Button** contexts correspond to a colour to provide a consistent experience for users. For more information, refer to the [Colours guidelines](/guidelines/colour).


      In Mosaic, there are six contexts for **Buttons**. Each has a different function, and the look of the **Button** will signal a different usage to the user. For example, a **Primary button** tends to be the most positive outcome for an action, things like submitting a form or saving a sheet. Conversely, a **Danger button** tends to be something negative, like deleting something. 


      | **Context** | **Description**                                                                                                                                                                                                                                                                                                                      |

      | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

      | Primary     | Used for the main CTA on the screen. This is reserved for actions such as add, or import. There should only ever be one Primary Button on the page, Form or Card                                                                                                                                                                     |

      | Secondary   | Buttons that do not fall into one of the other categories. This can be used for things that are largely inconsequential but necessary, like closing a dialogue box.     The secondary default button is now no longer used, we now use the Outline Button for these types of actions.                                                |

      | Success     | used for positive actions, like saving, confirming accepting or editing. Typically, like the Primary Button, there should only be one Success Button.                                                                                                                                                                                |

      | Warning     | Not used very often, but they can be useful when you want the user to take caution with a particular action. You might want to include a Button to reload some data, for example, but want to warn the user not to do this too often.                                                                                                |

      | Danger      | Should be used for dangerous or destructive activity, like deleting or removing something from the system. Typically this should be the only Danger button available to the user at that time.                                                                                                                                       |

      | Info        | Can be used when the user might require some more context, or for less important actions than the Primary Button. Some examples would be an Info Button that opens a new dialogue box with some additional information, or perform an action that does not leave the page or make any change to data, i.e. print or view guidelines. |


      - - -


      ## Using a Button


      There are many ways to implement **Buttons** in a product, and there are many views to support each of those solutions. After carrying out extensive research, the UX Team have agreed on what we believe to be the best rules governing the usage of **Buttons** across Advanced products. Use these following guidelines when implementing a **Button** into your product.


      ### Ordering of Buttons


      We have a set order for groups of **Buttons** in our products, to encourage user familiarity and build a consistent 'language' around what a user can expect, and where. The ordering is simple: the least positive **Button** is the one furthest to the left (but to the right of any Cancel or Close), and the most positive **Button** is the one to the right. As an example, a form with 'Cancel/Close', 'Delete' and 'Save' would be ordered as such – 'Delete' is the most negative, 'Save' is the most positive, and 'Cancel' is relatively neutral but present in a lot of screens so is always furthest left for consistency. 


      This ordering of the **Buttons** provides a sense of 'moving forward' to the user when they see a **Button** on the right-hand side, whereas a **Button** on the left-hand side feels like 'moving backward'. 


      ### Button labels


      A **Button's label** is as important as the **Button** itself. A set of **Buttons** that are simply a green and a red **Button** might imply 'good' and 'bad' actions, but there is no context for the user. As such, there are a couple of things to keep in mind when labelling a **Button**:


      * **Buttons** require a **Label** in the vast majority of cases. We cannot assume that a user will instinctively know what an icon means on a **Button**. An infamous example of this is the classic floppy disk icon for saving – think about how soon it will be until virtually all of our users will have never seen a floppy disk? 


      > **Note**: there are some very specific use cases for Icon-only buttons, but these are few and far between. We have [guidance](link) on where a **Button** can forgo a label, but the UX Team should be contacted in advance of using an **Icon only button** to ensure that it is appropriate. 


      * **Button labels** should be specific, rather than general. A user should feel confident that they know what a **Button** does. Generic **Buttons** like 'OK' when a user is actually changing something are not informative enough – the user needs to know that the **Button** will 'Confirm changes', which is a much better **Label**.


      Deciding when you should use Cancel or Close as your button label is very important.  Historically many applications used Cancel as a means to leave a screen or page.  However, we would strongly recommend Close is used in this instance.  Cancel should be reserved for instances such as forms where cancelling out of the form discards any changes the user has made.


      If you are unsure about **Labels**, you can take a look at our [Tone of voice](/guidelines/tone-of-voice) guidance or contact the UX Copywriter.


      ### Button icons


      **Icons** can be used to give further meaning to your **Buttons**. By default, all **Buttons** in a page header should have an **Icon**, but occasionally this is not always practical when there is not an obvious **Icon** available for use, or there are space limitations for the **Button**. In cases like these, it is acceptable to forgo an icon.


      When using an **Icon**, the **Icon** should always appear to the left of the **Button's Label**. The **Icon** is describing the **Label**, not the other way around! It also improves readability and is easier to quickly scan the functionality of each **Button** if the **Icons** all appear on the left-hand side.  The one exception to this is when an icon is used to indicate direction of travel.  In this scenario, icons are permitted on the right-hand side of a label, e.g. a Next button.


      ### Button colours


      The colour of your **Button** will be dictated by the **Button context**. For example, a **Success button** is green, whereas a **Danger button** is red. The rationale is simple: green is associated with positive actions (green for go), while red is associated with negative actions (red for stop). However, it should be noted that colour only gives a visual clue if that visual cue is perceptible to the user – screen readers and colour-blind users will get no benefit from **Button colours**. This is why it is important to use a combination of **Button labels** and **Icons** to properly delineate the usage of a **Button**.


      Refer to the **Button contexts** section to read about the different colours for **Button contexts**.


      ### Button spinners


      Where a spinner is used on a button, it should replace the button's default icon, as below. This works fine in the example below, as the landing page would be shown if the login was successful and the button would be reset.


      However, if the button is performing a check, then a third button state would be needed which indicates the success or failure. For example, if we were checking a URL or validate a user, then it might look something like this:


      ### Consistency


      Consistency among your **Buttons** is vital for users. A user needs to feel comfortable, confident and at-home when using our products. **Button** consistency is a really easy way of achieving it – if a user can tell with a quick glance what the **Buttons** do in a new feature, based on their previous experience with the product, then they will adopt it much quicker, and user errors will be minimised. Inconsistent **Buttons** quickly lead to poor adoption of products and rampant confusion. 


      A few ways you can achieve consistency is making sure your **Labels** are identical in all areas – do not switch between using 'close' and 'cancel' on your **Buttons**. Pick one, and stick with it. The same goes for **Icons**. Make sure you review your **Buttons** in comparison to others in the system when making them.
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


      When designing with a **Button**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Alert** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Button** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Button**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Button** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
    icon: web_accessibility_1
    toc: true
  - title: Status
    hook: status
    toc: false
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
