---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Card
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-card--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Card?


      **Cards** form the backbone of all content areas. They should surround and group your content into meaningful 'boxes' of functionality, and can be used alongside columns and rows to lay out your application in a variety of ways.


      **Cards** are used frequently throughout all of our reference applications and examples.


      - - -


      ### When, and why?


      All over the place! **Cards** should surround all components in your content-container, either the whole page or subdivided into separate cards per functional area.  Within a **Card** you can have other nested cards to help with grouping of components/information. 


      - - -


      ## Card types


      The following **Card** types are available:


      | **Type**           | **Description**                                                                                                                                                                                |

      | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | Non-interactable      | General white Card to display or capture content, used for a lot of things!                                                                                                                    |

      | Interactable          | A Card that a user can click to interact with, for example to select or act as a button to perform an action/navigation                                                                       |

      | Interactable active   | The active state of an interactable Card (while clicking)                                                                                                                                      |

      | Grouping              | A grey Card to group components together to indicate their relationship to each other                                                                                                          |

      | Selected              | To show a Card is selected, a user might click the whole card or a checkbox on the card to select it as part of a workflow                                                                       |

      | Selected active       | Active state of a selected Card - when the Card is clicked to be selected or the Card is being dragged                                                                                       |

      | Selected with context | A contextual colour border and tick to indicate the meaning of a selection - this could be to indicate that items are going to be removed or added                                                 |

      | Contextual            | Styled to indicate the context of the Card, which is used to represent the contents of the Card - for example, a danger context Card could be used to show information about issues in the system |


      ## Card contexts


      Context helps convey the information being communicated. **Card** contexts correspond to a colour to provide a consistent experience for users. For more information, refer to the [Colours](/guidelines/colour) guidelines.


      | **Context** | **Description**                                                                                              | **Examples**                                                                                                                  |

      | -------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |

      | Success  | Indicates a Card with positive information or selected for a positive action. The Success colour is green.   | On a dashboard to highlight targets have been met. The user selects a Card(s) to be added as part of an action.               |

      | Danger   | Indicates a Card with negative information or selected for a danger action. The Danger colour is red.        | On a dashboard to highlight targets have failed to be met. The user selects a Card(s) to be added as part of a delete action. |

      | Warning  | Indicates a Card with warning information or selected highlighted for issues.  The Warning colour is yellow. | On a dashboard to highlight targets that might fail to be met.  Card(s) are selected that have potential issues.              |

      | Info     | Indicates a Card with advisory information. The info colour is teal.                                         | Advisory information for the user to read as part of completing a task.                                                       |


      - - -


      ## Using a Card


      **Cards** are used to display all content within the application.  On a page you could have just one **Card**, or maybe even hundreds of **Cards**, depending on what you are needing to do.  **Cards** can be laid out in grids, but the grids should be responsive so that **Cards** tend to stay a similar size - on smaller screens, they will resize themselves to use fewer columns and use more vertical space.


      ### Nested Cards


      **Cards** can be nested within another **Card** to aid the users understanding of what is grouped together.  As with any **Card** these can be organised in columns and rows to best suit the data being displayed - however. in forms they should always be in a single column.  Nested **Cards** are when you might want to use the Grouping type to help separate it from the parent **Card**. 


      ### Headers


      A **Card** may have a header section which could contain a title, subtitle and other inputs (e.g. **Buttons** or **Selects**) for additional actions related to the **Card**.  The header section should always be used for items that relate to the whole **Card.**


      ### Footers


      The footer section of a **Card** is there for actions on the **Card** in the form of **Buttons**.  This is where the call to action **Button** would be placed, for example.  On forms this can also be used to show additional information to the user, e.g. "All fields are required".
    icon: file_invoice
    toc: true
  - title: Code
    hook: code
    icon: source_code
    toc: false
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Card component. Use the drop-down menus and radio buttons to view the different Card Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-card">
              <div class="mcc-card__header">
                <h2 class="mcc-card__title">Card title</h2>
                <div class="mcc-card__subtitle">Sub title</div>
              </div>
              <div class="mcc-card__body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat.
              </div>
              <div class="mcc-card__footer">
                <button class="mcc-button mcc-button--outline mcc-button--sm">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  <span class="mcc-button__label">Button</span>
                </button>
              </div>
            </div>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: >-
            <div class="mcc-card mcc-card--primary">
              <div class="mcc-card__header">
                <h2 class="mcc-card__title">Card title</h2>
                <div class="mcc-card__subtitle">Sub title</div>
              </div>
              <div class="mcc-card__body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat.
              </div>
              <div class="mcc-card__footer">
                <button class="mcc-button mcc-button--outline mcc-button--sm">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  <span class="mcc-button__label">Button</span>
                </button>
              </div>
            </div>
        name: With colour
        modifiers:
          - name: Colour
            selector: .mcc-card
            classes:
              - name: Primary
                value: mcc-card--primary
                default: true
              - name: Secondary
                value: mcc-card--secondary
              - name: Success
                value: mcc-card--success
              - name: Danger
                value: mcc-card--danger
              - name: Warning
                value: mcc-card--warning
              - name: Info
                value: mcc-card--info
              - name: Light
                value: mcc-card--light
            select_multiple: true
            type: class
      - template:
          lang: html
          code: >-
            <div class="mcc-card mcc-card--primary">
              <div class="mcc-card__header">
                <h2 class="mcc-card__title">Card title</h2>
                <div class="mcc-card__subtitle">Sub title</div>
              </div>
              <div class="mcc-card__body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat.
              </div>
              <div class="mcc-card__footer">
                <button class="mcc-button mcc-button--outline mcc-button--sm">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  <span class="mcc-button__label">Button</span>
                </button>
              </div>
            </div>
        name: With soft colour
        modifiers:
          - name: Colour
            selector: .mcc-card
            classes:
              - name: Primary
                value: mcc-card--primary-soft
                default: true
              - name: Secondary
                value: mcc-card--primary-soft
              - name: Success
                value: mcc-card--primary-soft
              - name: Danger
                value: mcc-card--primary-soft
              - name: Warning
                value: mcc-card--primary-soft
              - name: Info
                value: mcc-card--primary-soft
              - name: Light
                value: mcc-card--primary-soft
            select_multiple: true
            type: class
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
