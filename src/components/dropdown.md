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
      ## What is a dropdown?


      A **Dropdown** is an overlay that displays a lists of links or options for the user to choose, generally opened from a **Button**. The options might navigate the user to another place or perform an action.


      ### When and why


      Dropdowns are most commonly used with a Button, but can be triggered from other components. On selecting the component an overlay (often as a Card) will be shown with a list of items to enable the user to navigate to another area or perform an action in context to the current page. Very common examples of Dropdowns are overflow menus. 


      #### Dropdown or a Select?


      Dropdowns and Select component can appear to be very similar and sometimes it is hard to chose the appropriate component. As general rule of thumb, the component triggering the dropdown doesn't change when an item is selected, eg if trigger from a button, the button text should not change.  If you want the selection to be shown when the overlay is hidden, then you should use the Select component. 

      [Read more on the form Select page](/forms/select/)


      - - -


      ## Dropdown types


      | **Type**       | **Description**                                                                      |

      | -------------- | ------------------------------------------------------------------------------------ |

      | Default        | Dropdown card displayed as an overlay, with a list of selectable line items          |

      | With Alignment | Used to set the position of the Dropdown in relation to the component that opened it |


      ### Dropdown line item types


      A line item is one item in the list that is displayed in the Dropdown.  Each line item is interactable and when clicked will perform some kind of action, much like a Button would. The exception to this is when they are a heading or divider. 


      | **Type**  | **Description**                                                                                     |

      | --------- | --------------------------------------------------------------------------------------------------- |

      | Default   | Text only line item                                                                                 |

      | Header    | Used to split the line items in to groups with heading text                                         |

      | Divider   | Used to split the line items in to groups but where a header description is not needed              |

      | With icon | Adds an icon inline with the text to help identify it, these can be on left or right but never both |


      - - -


      ## Using a Dropdown


      ### Alignment


      Where the Dropdown opens in relation to the triggering component is an important consideration.  The Dropdown should always be next to the component but might need to open on a specific side to allow it to be easily interacted with.  For example if you have a button on the right-hand side of the screen you would need the Dropdown to open below and to the left so it doesn't go off the screen. 


      ### Dropdown line items


      Even though line items can have any content to best meets their needs, they should stick to the types outlined here.  If there is a use case to differ then talk to the UX team \[link to UX email address] first. 


      * Labels should describe what is in the list and inform users what to expect.

      * Keep the labels short and concise, limiting it to a single line of text but if necessary two lines and an ellipsis.

      * Display your options in alphabetical order, unless there is good reason to show in another order - eg recent items would be show in descending date order. 

      * All headings should be sentence case and not have the first letter of every word capitalised. More information in the [text style guide](/guidelines/style-guide/#structure)


      #### Icons


      These can be position on the left or right.  If every list item has an icon then they should be positioned on the left of the label. If you just want to emphasis one item using an icon (eg delete item) then position it to the right of the label. You should never have an icon both left and right of the label. 


      Icons should be used to help the user identify the item in the list quicker than reading every item, if it doesn't help the user then they shouldn't be used. For example having the same icon on every list item will actually hinder the user in finding what they need.  [Find out more in the Iconography guidelines](/guidelines/iconography)
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
