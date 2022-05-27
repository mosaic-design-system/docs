---
title: Accordion
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/dev/components/?path=/docs/components-accordion-introduction
tabs:
  - title: Usage
    body: >-
      ## What is an Accordion?


      An **Accordion** is a useful tool for splitting out information on a page - if you have a page that contains multiple different pieces of information, an **Accordion** can help reduce the amount of vertical space a page uses.


      **Accordions** can be toggled between a collapsed and expanded state to expose hidden content, which can help the user locate the specific information they need without presenting all of it to them at once. 


      The expanded state pushes the other page content down rather than being overlaying it on top of other content, which helps to maintain the vertical hierarchy of the page.


      - - -


      ### When, and why?


      An **Accordion** is useful when your users need to consume multiple items with specific content in a single page. Allowing users to have control over the content by expanding it, or leaving it collapsed, lets them decide what is relevant to them at that time. 


      For example, in Clear Review **Accordions** are used to section off specific sections of feedback, as you can see below. The user can expand each piece of feedback and interact with the "Reply/Thank" button within. Without the **Accordion**, this page would be quite cluttered and the user wouldn't be able to focus one one specific piece of feedback.


      **Accordions** should only be used when there is enough content to condense - they shouldn't be used as an organisational tool, or for navigation purposes. They are a tool to help reduce visual clutter for a user and should only be used when necessary, not by default.


      Similarly, **critical** information shouldn't be hidden from users. If the content is critical for the page's function, it should always be visible and shouldn't be hidden by an **Accordion**.


      - - -


      ## Accordion types


      The following **Accordion** types are available, and each one allows you to include a subheading:


      | Type          | Description                                                                                                                                                                              |

      | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**       | The default **Accordion** has no actions on it, and simply expands and collapses content.|

      | **With chip**     | Chips in the header of an **Accordion** can be used to signify status, content type, dates, etc.                                                                                         |

      | **With edit**     | An edit button on an **Accordion** allows the user to enter an edit state.                                                                                                               |

      | **With overflow** | Used when there a specific actions linked to each accordion                                                                                                                              |

      | **With icon**     | Icons can be applied to support the content of the heading but should not be used in conjunction with buttons or chips on the right - this will add too much cognitive load to the page. |


      - - -


      ## Using an Accordion


      ### Grouping content

      **Accordions** are a great way to section off content-rich pages, collapsing the sections will also give users an overview of the content available whilst minimising scrolling and make the page appear less daunting. If your page contains multiple different content types, an **Accordion** should be used to separate them out into easy-to-digest sections.


      ### Accordion labels

      Make sure the section headings are clear and concise, but still give the user enough information about what each one contains. Headings should be sentence case and not have the first letter of every word capitalised - you can read more about styling copy like this by reading our [content guidelines](/guidelines/style-guide).


      ### Multiple Accordions

      Always allow the user to expand multiple **Accordions** at a time, and avoid hiding task critical content. If a user can only open one **Accordion** at a time, then it is better to consider a different approach.
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


      When designing with an **Accordion**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Accordion** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      An **Accordion** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on **Accordions**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      An **Accordion** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.


      ### Wording


      Please refer to the standardised text provided to ensure AA compatibility. If this is not possible, please contact accessibility@oneadvanced.com.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    icon: source_code
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion" style="max-width: 400px; width:
            100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card mcc-card--high-emphasis"
            style="max-width: 400px; width: 100%">
              <summary>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With card
        modifiers: []
      - template:
          lang: html
          code: >-
            <details class="mcc-accordion mcc-card" style="max-width: 400px;
            width: 100%">
              <summary>
                <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                <span class="mcc-accordion__label">Accordion item</span>
                <mcc-icon class="mcc-accordion__caret mu-ml-auto" name="angle_down" aria-hidden="true"></mcc-icon>
              </summary>
              <div class="mcc-accordion__body">
                Something small enough to escape casual notice.
              </div>
            </details>
        name: With icon
        modifiers: []
status:
  body: This is some content in relation to the status of this component.
  design: Yes
  documentation: Yes
  html_css: Available
  web_component: Available
---
