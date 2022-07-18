---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Card
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-card-introduction
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


      | **Type** | **Description**                                                                  |

      | -------- | -------------------------------------------------------------------------------- |

      | As empty | An empty card container to display or capture content, used for a lot of things! |


      ![Card example with title, and kebab menu in the header, placeholder body content of three lines, and in the footer two outline buttons.](/assets/img/cardsvglight.svg)


      ## Card properties


      The following **Card** types are available:


      | **Property** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

      | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | State        | Sets the state of the card; Non-interactable, Interactable,  Interactable Active, Selected, Selected Active and Grouping. <br /><br />**Non-interactable** - General white Card to display or capture content, used for a lot of things!<br /><br />**Interactable** - A Card that a user can click to interact with, for example to select or act as a button to perform an action/navigation<br /><br />**Interactable active** -  The active state of an interactable Card (while clicking)<br /><br />**Selected** - To show a Card is selected, a user might click the whole card or a checkbox on the card to select it as part of a workflow<br /><br />**Selected active** - Active state of a selected Card - when the Card is clicked to be selected or the Card is being dragged<br /><br />**Grouping** - A grey Card to group components together to indicate their relationship to each other |


      - - -


      ## Using a Card


      **Cards** are used to display all content within the application.  On a page you could have just one **Card**, or maybe even hundreds of **Cards**, depending on what you are needing to do.  **Cards** can be laid out in grids, but the grids should be responsive so that **Cards** tend to stay a similar size - on smaller screens, they will resize themselves to use fewer columns and use more vertical space.


      ![My workplace wireframe with 8 cards, two rows of four being highlighted by a blue dash outline, showing how cards can be used in groups.](/assets/img/useofcardssvglight.svg)


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
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **Card**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Card** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Card** needs to have a focus state on all of its elements - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on all parts of the **Card**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      The contents of a **Card** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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
