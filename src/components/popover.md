---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Popover
toc: true
chips:
  - "HTML/CSS: Available"
tabs:
  - title: Usage
    body: >-
      ## What is a Popover?


      A **Popover** is an overlay that can show additional information to the user - however, it does differ from a **[Tooltip](/components/Tooltip)**. A **Popover** will typically be reserved for information that goes above-and-beyond what would normally be shown in a **Tooltip**. Unlike **Tooltips**, they are dismissed by selecting an icon within the **Popover**, not just when the user moves away from the **Popover**.


      - - -


      ### When, and why?


      **Popovers** should be used sparingly - they should only be used when you need to display non-critical information that will aid the user's decision making. For example, you could add a **Popover** to an **[Avatar](/components/avatar)** to show a user's full name and job title:


      ![An avatar with a Popover displaying some example text](/assets/img/popover_example_1.png)


      Or maybe to show how much stock they have left of a particular item?


      - - -


      ## Popover types


      The following **Popover** types are available:


      | Type        | Description |

      | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**     | A typical **Popover** that includes only text. Select the button to make the **Popover** appear. |

      | **With title**  | A **Popover** can include a title to provide further supporting information to the main body content of the **Popover** - note that a **Popover** can only have a single title. |

      | **Directional** | A **Popover** can be configured to anchor to different parts of the trigger - for example, you could make it appear in the top-left or bottom-right of a button. |


      - - -


      ## Usage


      ### Popover triggers

      Although similar to a **Tooltip**, the major difference is that a **Popover** must be triggered and dismissed by a click. The trigger could be a something like a button or an image, but the **Popover** would never appear by simply hovering over the item.


      A **Popover** should always be triggered when an element is selected (such as when it is tapped on mobile or clicked with a mouse).



      ### Popover content

      A **Popover** can hold more content than a **Tooltip**, although it should never be over-populated or over-used. The content in a **Popover** should be seen as ‘additional information’ and not crucial to the user's decision-making. A **Popover** should only ever *add* to the user's experience, and never be a requirement. They are the cherry that you add on top of the cake, not the batter.


      There are many uses of a **Popover**, ranging from a larger **Tooltip**, to a **Popover** that contains additional HTML content. 


      ### Popover positioning

      **Popovers** can be configured to appear either at the top or bottom and left or right of the trigger using the `placement` attribute. Consider the layout of the page and what content (if any) would be hidden by the **Popover** when designing with one.
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


      When designing with an **Popover**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Popover** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Popover** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Popover**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      A **Popover** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


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

    Below, you can find a live demo for a Popover component. Use the drop-down menus and radio buttons to view the different Popover Types and Variants.
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
  documentation: Yes
  html_css: In queue
  web_component: In queue
navigation: button
---
