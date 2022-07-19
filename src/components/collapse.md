---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Collapse
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-collapse-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Collapse?


      A **Collapse** component allows you to show and hide content with a button. The button, when selected, toggles whether the user can see the content or not. This component differs from an **[Accordion](/components/accordion)** as the content is not within a self-contained section in and of itself, and a button is used to toggle the content rather than a drop-down style arrow. When the content of a **Collapse** is revealed, the content is pushed below the down button.


      - - -


      ## When, and why?


      A **Collapse** button should be used when you want to initially limit what the user can see, but make additional content available when a button is selected.


      For example, this may be useful where there is lots of content already displayed on a page, such as multiple users' contact details, and the **Collapse** button could be used to show more information about one of the users (without taking the user to another page).


      - - -


      ## Collapse types


      ```
        The following **Collapse** types are available:
      ```


      | **Type**   | **Description**                                |

      | ---------- | ---------------------------------------------- |

      | As default | Toggles between collapsed and expanded states. |


      ## Collapse properties


      The following **Collapse** properties are available:


      | **Property** | **Description**                                                      |

      | ------------ | -------------------------------------------------------------------- |

      | Collapsed    | A default Collapse which expands and collapses to show/hide content. |


      - - -


      ## Using a collapse


      ### Collapse content


      A **Collapse** must always have both a toggle button and some content contained within, e.g. a paragraph of text.


      The contents of a collapse should never include critical information such as important instructions, warnings, etc. Users may not open the collapse, and information that is important may be missed.


      **Note**: Navigation is counted as important information. You should never hide navigation behind a **Collapse**.


      - - -


      ## Collapse types


      The following **Collapse** types are available:


      | **Type**   | **Description**                                                     |

      | ---------- | ------------------------------------------------------------------- |

      | As default | A default Collapse which expands and collapses to show/hide content |


      ![On the right and expand button with placeholder paragraph content. On the left a collapse button with the placeholder paragraph content expanded.](/assets/img/collapsesvglight.svg)


      ## Collapse properties


      The following **Collapse** properties are available:


      | **Property** | **Description**                               |

      | ------------ | --------------------------------------------- |

      | Collapsed    | Toggles between collapsed and expanded states |


      - - -


      ### Collapse vs Accordion


      If you intend to show/hide several instances of related information on a page, then an **[Accordion](/components/accordion)** is the preferred method. The **Accordion** works better for users that wish to choose which information they want to view.


      ![On the right are multiple accordions with the text Use Accordion if intending to show/hide several instances of related information. On the left multiple expand buttons with the text Use collapse if intending to show/hide several instances of related information. ](/assets/img/collapsedosdontssvglight.svg)
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


      When designing with a **Collapse**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Collapse** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Collapse** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on all elements of the **Collapse**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Collapse** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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

    Below, you can find a live demo for a Collapse component. Use the drop-down menus and radio buttons to view the different Collapse Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <details class="mcc-collapse">
                <summary>
                  <div class="mcc-button mcc-button--outline">
                    <span class="mcc-button__label">Collapse</span>
                    <mcc-icon class="mcc-button__dropdown-caret" name="angle_down" aria-hidden="true"></mcc-icon>
                  </div>
                </summary>
                <div class="mcc-collapse-body mu-mt-03">
                  <div class="[ mcc-alert mcc-alert--primary ] [ mu-mb-00 ]" role="alert">
                    <mcc-icon name="ok" icon-set="fluency-outline" aria-hidden="true"></mcc-icon>
                    <div class="mu-d-flex mu-flex-column">
                      <div class="mu-fw-semi-bold">Information title</div>
                      <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
                    </div>
                  </div>
                </div>
              </details>
        name: As default
        modifiers: []
        attributes:
          - name: Open
            selector: .mcc-collapse
            attribute: open
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
