---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Page Header
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-page-header-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Page Header?


      A **Page Header** is the bar that sits underneath the main navigation header to indicate the name of the currently viewed page. It defines the top of the page.


      - - -


      ### When, and why?


      Every page in your application must have a **Page Header**, as it is a vital part of the overall layout. As well as being a signpost, it also provides access to the primary and secondary actions for the page. It can also be used for inter-page navigation, where navigating back to the previous page is required.


      **Page Headers** contain a page title, which is styled as the main heading (H1). This assists with maintaining semantic code and helps to define the hierarchy of the page. It is also used by screen readers, which is important from an accessibility perspective.


      - - -


      ## Page Header types


      The following **Page Header** types are available:


      | **Type**   | **Description**                                                                                                                                               | **Behaviour**                 |

      | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |

      | As desktop | A Page Header that is designed for desktop applications. It contains a title, an optional subtitle, and up to 4 call to action buttons.                       | Fixed to the top of the page  |

      | As mobile  | A Page Header that is designed for mobile applications. It contains a title, an optional subtitle, and the call to actions are presented in an overflow menu. | As above, but adds a subtitle |


      ## Page Header properties


      The following **Page Header** properties are available:


      | **Property** | **Description**                                                |

      | ------------ | -------------------------------------------------------------- |

      | Buttons      | Specifies the number of buttons to show, up to a maximum of 4* |

      | Subtitle     | Shows/hides a subtitle                                         |

      | Back         | Shows/hides a Back button                                      |


      \

      *Desktop only


      - - -


      ## Using a Page Header


      ### Headings


      **Page Headers** must always include a page title, which should be short, concise, and kept to one line - more guidance for headings can be found in the [Content](/guidelines/style-guide/#structure). 


      Optionally, a **Page Header** can also include a page subtitle which can be useful for adding extra context to the current page. For example, a subtitle could be used for a date, reference number, customer name, etc.


      ### Buttons


      **Page Headers** can include up to a maximum of four **Buttons**. If more actions are required, then the fourth can be a "More" **Button**, with a dropdown menu to display the additional items.


      ### Fixed position


      When scrolling, the **Page Header** should be fixed - a fixed header remains visible at the top of the page regardless of the user's position on that page. This reminds users of the page they are viewing and also allows them to perform any of the actions without having to scroll back the page.


      ### Back button


      If a user navigates to a lower level page, then you should provide a Back **Button** so that they can quickly and easily return to the previous page, using the **With back** type of **Page Header**.


      ### Mobile


      On mobile, the Page Header will collapse the **Buttons** down into an overflow menu, i.e. a single **Button** with a dropdown menu attached. The page title itself will be truncated if it is too long to display in full and an ellipsis is present to indicate this. For more information, please refer to the [Mobile guidelines](/guidelines/mobile).
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


      When designing with a **Page header**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Page header** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Page header** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the contents within the **Page header**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Page header** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Page header component. Use the drop-down menus and radio buttons to view the different Page header Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-page-header" style="width: 100%">
              <section class="mu-d-flex mu-flex-column">
                <h1 class="mu-mb-00">Page header title</h1>
                <span class="mu-text-muted">Subtitle</span>
              </section>
              <section>
                <div class="mcc-button-group mcc-button-group--spaced" role="group" aria-label="Page header buttons">
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <button class="mcc-button mcc-button--primary">
                    <span class="mcc-button__label">Button</span>
                  </button>
                </div>
              </section>
            </div>
        name: As default
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
