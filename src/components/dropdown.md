---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Dropdown
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-dropdown--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Dropdown?


      A **Dropdown** is a component that overlays a list of links or options for the user to choose over the page. They're usually opened from a **Button**. The options might navigate the user to another place or perform an action.


      ### When, and why?


      **Dropdowns** are most commonly used with a **Button**, but can be triggered from other components. When the triggering component is selected, an overlay (often a **[Card](/components/card)**) will be shown with a list of items. Usually, these items navigate to another area of the application, or perform an action in context to the current page. Very common examples of **Dropdowns** are overflow menus. 


      #### Dropdown or a Select?


      **Dropdowns** and **[Select](/forms/select)** components can appear to be very similar, and sometimes it is hard to chose the appropriate one. As a general rule of thumb, the component triggering the **Dropdown** doesn't change when an item is selected, e.g. if the trigger is a **Button**, then **Button's** label should not change. On the other hand, if you want the selection to be shown when the overlay is hidden, then you should use the Select component. 


      [Read more on the **Select** page](/forms/select/).


      - - -


      ## Dropdown types


      The following **Dropdown** types are available. First, there are two types of **Dropdown** for alignment, and then you can choose a different type for each line item within the **Dropdown** overlay:


      ### Dropdown positioning


      **Dropsdowns** can either be manually positioned, or use their default positioning:


      | **Type**       | **Description**                                                                      |

      | -------------- | ------------------------------------------------------------------------------------ |

      | Default        | Dropdown card displayed as an overlay, with a list of selectable line items          |

      | With alignment | Used to set the position of the Dropdown in relation to the component that opened it |


      ### Dropdown line item types


      A line item is one item in the list that is displayed in the **Dropdown**.  Each line item is interactable and when clicked will perform some kind of action, much like a **Button** would. The exception to this is when they are a heading or divider, which are non-interactable visual elements to provide structure to the **Dropdown** overlay:


      | **Type**  | **Description**                                                                                     |

      | --------- | --------------------------------------------------------------------------------------------------- |

      | Default   | Text-only line item                                                                                 |

      | Header    | Used to split the line items in to groups with heading text                                         |

      | Divider   | Used to split the line items in to groups but where a header description is not needed              |

      | With icon | Adds an icon inline with the text to help identify it, these can be on left or right but never both |


      - - -


      ## Using a Dropdown


      ### Alignment


      Where the **Dropdown** opens in relation to the triggering component is an important consideration.  The **Dropdown** should always be next to the component, but might need to open on a specific side to allow it to be easily interacted with.  For example, if you have a **Button** on the right-hand side of the screen you would need the **Dropdown** to open below and to the left so it doesn't go off the screen. 


      ### Triggering component


      Your triggering component should be accurately labelled to describe what is in the **Dropdown** list, and inform users what to expect.


      ### Dropdown line items


      Even though line items can have any content to best meet their needs, they should stick to the types outlined here.  If there is a use case that differs, then speak to your UX Designer first. 


      Each line item should be short and concise, limited to a single line of text. If necessary, two lines and an ellipsis can be used for longer line items that do not need the whole text - for example, a "recent documents" **Dropdown** could truncate the document names if they are excessively long.


      Display your options in alphabetical order, unless there is good reason to show in another order - for example, a "recent items" **Dropdown** could be shown in descending date order. 


      #### Icons


      These can be positioned on the left or right of each list item.  If every list item has an icon then they should be positioned to the left of the label. If you just want to emphasis one item using an icon (e.g. a delete item action), then the icon should be positioned to the right of the label. You should never have an icon on both the left and right of the label. 


      Icons should be used to help the user identify the item in the list quicker than reading every item - if it doesn't help the user, then they shouldn't be used. For example, having the same icon on every list item will actually hinder the user in finding what they need.  [Find out more in the Iconography guidelines](/guidelines/icons-1)
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


    Below, you can find a live demo for an Dropdown component. Use the drop-down menus and radio buttons to view the different Dropdown Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: As default
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With alignment
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li class="mcc-dropdown__header">Dropdown header</li>
                <div class="mcc-dropdown__divider"></div>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With header
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <div class="mcc-dropdown__divider"></div>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With divider
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button" disabled>Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button class="mu-is-disabled" type="button">Button</button>
                </li>
              </ul>
            </details>
        name: With disabled button
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">
                    <mcc-icon name="does-not-exist"></mcc-icon>
                    <div>Button</div>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <mcc-icon name="does-not-exist"></mcc-icon>
                    <div>Button</div>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <mcc-icon name="does-not-exist"></mcc-icon>
                    <div>Button</div>
                  </button>
                </li>
              </ul>
            </details>
        name: With icon
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">
                    <span>Button</span>
                    <mcc-icon class="mu-ml-auto mu-mr-00" name="does-not-exist"></mcc-icon>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <span>Button</span>
                    <mcc-icon class="mu-ml-auto mu-mr-00" name="does-not-exist"></mcc-icon>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <span>Button</span>
                    <mcc-icon class="mu-ml-auto mu-mr-00" name="does-not-exist"></mcc-icon>
                  </button>
                </li>
              </ul>
            </details>
        name: With trailing icon
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--primary">
                  <span class="mcc-button__label">Dropdown</span>
                  <mcc-icon class="mcc-dropdown__toggle-icon" name="angle_down" aria-hidden="true"></mcc-icon>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <label class="[ mcc-dropdown__item mfc-checkbox-wrapper ] [ mu-d-flex mu-justify-content-between mu-flex-nowrap ]">
                  <span>Checkbox item</span>
                  <span>
                    <input type="checkbox" value="">
                  </span>
                </label>
              </ul>
            </details>
        name: With checkbox item
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <details class="mcc-dropdown">
              <summary aria-haspopup="true">
                <div class="mcc-button mcc-button--outline mcc-button--icon-only">
                  <mcc-icon name="menu_2" aria-hidden="true"></mcc-icon>
                  <span class="mcc-button__label">Dropdown</span>
                </div>
              </summary>
              <ul class="mcc-dropdown__menu">
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
                <li>
                  <button type="button">Button</button>
                </li>
              </ul>
            </details>
        name: As overflow menu
        modifiers:
          - name: Alignment
            selector: .mcc-dropdown
            classes:
              - name: North West
                value: mcc-dropdown--nw
                default: true
              - name: North
                value: mcc-dropdown--n
              - name: North East
                value: mcc-dropdown--ne
              - name: South West
                value: mcc-dropdown--sw
              - name: South
                value: mcc-dropdown--s
                default: true
              - name: South East
                value: mcc-dropdown--se
              - name: East
                value: mcc-dropdown--e
              - name: West
                value: mcc-dropdown--w
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
