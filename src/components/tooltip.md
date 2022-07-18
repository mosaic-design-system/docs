---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tooltip
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-tooltip-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Tooltip?


      A **Tooltip** is a pop-up that displays informative text and are triggered by the user hovering over something.


      - - -


      ### When, and why?


      You should use a **Tooltip** when an element on the page needs more explanation than the UI is able to provide. **Tooltips** supplement the UI and ensure the element usage is clear.


      - - -


      ## Tooltip types


      The **Tooltip** can point in 4 different directions, depending on the space available. Choose a direction carefully to make sure the content is always clearly connected to its trigger and is not covered up by the **Tooltip**.


      | **Type**   | **Description**                                                                               |

      | ---------- | --------------------------------------------------------------------------------------------- |

      | As default | A Tooltip can be used when there isn't enough space to show content fully visible on the page |


      ## Tooltip properties


      The following **Tooltip** properties are available:


      | **Property** | **Description**                                                            |

      | ------------ | -------------------------------------------------------------------------- |

      | Pointer      | Sets the location of the Tooltip pointer/arrow; Top, Bottom, Left or Right |


      - - -


      ## Using a Tooltip


      ### Tooltip content


      Users shouldn’t need **Tooltips** to use your product, they are supplementary messages that help to provide more information or context to something. Think of them as helpful nuggets of information that will give users a push in the right direction, rather than something they **need** to read to use your product effectively. If a user needs that information, they won't be able to see it while interacting with another element - thus, they would need to read it, remember it, and hope they don't forget when they move their cursor to interact with the element!


      Similarly, don't use **Tooltips** to reiterate information the user can already see. 


      ### Tooltip triggers


      Although similar to the **[Popover](/components/popover)**, the **Tooltip** is triggered by the user hovering over an element, not by selecting it. For example, they can be triggered by the user hovering over elements such as images, icons, buttons or hyperlinks.  It is important to note that this behaviour can be considered less accessible so be cautious in it's usage.


      ### Tooltips on buttons


      All icon buttons should include a label, but if this isn’t possible **Tooltips** can help distinguish actions between unlabelled icons.
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


      When designing with a **Tooltip**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Accordion** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Tooltip** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Tooltip**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      A **Tooltip** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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

    Below, you can find a live demo for a Tooltip component. Use the drop-down menus and radio buttons to view the different Tooltip Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <span class="mcc-tooltip mcc-tooltip" aria-label="Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.">
              .mcc-tooltip
            </span>
        name: As default
        modifiers:
          - name: Direction
            selector: .mcc-tooltip
            classes:
              - name: North West
                value: mcc-tooltip--nw
                default: true
              - name: North
                value: mcc-tooltip--n
              - name: North East
                value: mcc-tooltip--ne
              - name: South West
                value: mcc-tooltip--sw
              - name: South
                value: mcc-tooltip--s
              - name: South East
                value: mcc-tooltip--se
              - name: East
                value: mcc-tooltip--e
              - name: West
                value: mcc-tooltip--w
            type: class
            select_multiple: false
          - name: Multiple lines
            selector: .mcc-tooltip
            classes:
              - name: Multiple lines
                value: mcc-tooltip--multiline
            type: class
            select_multiple: false
          - name: Delay
            selector: .mcc-tooltip
            classes:
              - name: Delay
                value: mcc-tooltip
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
