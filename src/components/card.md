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
      ## What is a Card


      *<a href="[http://example.com/"](http://example.com/%22 "http\://example.com/%22") target="_blank">Hello, world! <mcc-icon class="mcc-icon--primary" name="home" icon-set="" width="24" height="24"></mcc-icon></a>*


      Cards form the backbone of all content areas. They should surround and group your content into meaningful 'boxes' of functionality, and can be used alongside columns and rows to lay out your application in a variety of ways.


      Cards are used frequently throughout all of our reference applications and examples.


      - - -


      ### When and why


      All over the place! Cards should surround all components in your content-container, either the whole page or subdivided into separate cards per functional area.  Within a card you can have other nested cards to help with grouping of components/information. 


      - - -


      ## Card types


      | **Variant**           | **description**                                                                                                                                                                                |

      | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | Non-interactable      | General white Card to display or capture content, used for a lot of things!                                                                                                                    |

      | Interactable          | A Card that a user can click to interact with, for example to select or act as a button to perform an action/navigation.                                                                       |

      | Interactable active   | The active state of an interactable Card (while clicking)                                                                                                                                      |

      | Grouping              | A grey Card to group components together to indicate their relationship to each other.                                                                                                         |

      | Selected              | To show a Card is selected, user might click the whole card or a checkbox on the card to select it as part of a workflow.                                                                      |

      | Selected active       | Active state of a selected card - when the card is clicked to be selected or the card is being dragged.                                                                                        |

      | Selected with context | A contextual colour border and tick to indicated meaning of selection.  This could be to indicate that items are going to be removed or added.                                                 |

      | Contextual            | Styled to indicate the context of the Card.  This should be used to represent the contents of the Card.  Eg a danger context Card could be used to show information about issues in the system |


      ## Card contexts


      Context helps convey the information being communicated. **Card** contexts correspond to a colour to provide a consistent experience for users. For more information, refer to the [Colours](/guidelines/colours) guidelines.


      | **Name** | **Description**                                                                                                               | **Examples**                                                                                          |

      | -------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |

      | Success  | Indicates a Card with positive information or selected for a positive action. The Success colour is green.                    | To highlight target that have been met. The user selects a Card(s) to be added as part of an action.  |

      | Danger   | Indicates errors and, optionally, prevents users from proceeding until the issue has been resolved. The Danger colour is red. | The user inputs an invalid configuration for a record                                                 |

      | Warning  | Indicates that actions are not desirable or might have unexpected results. The Warning colour is yellow.                      | The user enters a record that will overwrite another non-critical record                              |

      | Info     | Indicates neutral or advisory information that may not be related to the current action. The info colour is teal.             | A dialog that gives a tip to the user about another related feature                                   |


      - - -


      ## Using a Card


      **Cards** are used to display all content with the application.  On a page you could have just one card, or hundreds of cards, depending on what you are needing to do.  Cards can be laid out in grids, but the grids should be responsive so that cards tend to stay a similar size and more vertical space is used on smaller screens by decreasing the number of columns. 


      ### Nested cards


      Cards can be nested within another Card to aid the users understanding of what is grouped together.  As with any card these can be organised in columns an rows to best suit the data being displayed, however in forms they should always be in only a single column.  Nested cards are when you might want to use the Grouping type to help separate it from the parent card. 


      ### Headers


      A Card may have a header section which could contain a title, subtitle and other inputs (eg Buttons or Selects) for additional actions related to the card.  The header section should always be used for items that relate to the whole card


      ### Footers


      The footer section of a Card is there for actions on the card in the form of buttons.  This is where the call to action button would live for example.  On forms this can also be used to show additional information to the user, eg All fields are required.
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
