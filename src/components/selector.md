---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Selector
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: ""
tabs:
  - title: Usage
    body: >-
      ## What is a Selector?


      A **Selector** is a visual component that indicates if something is selected or not. They are usually used in lists or tables to highlight to the user what item(s) an action will affect.


      - - -


      ### When, and why?


      A **Selector** must not be confused with a **[Checkbox](/forms/checkbox)**, which includes a text label and are used in forms so that users can choose one or more options. **Selectors** do not have text labels and are used outside forms, for example in tables where multiple rows can be selected in order to perform an action. In this scenario, a **Selector** would be positioned in the left-most column of each row.


      - - -


      ## Selector types


      The following types of Selector are available:


      | **Name**      | **Description**                                                                   | **Behaviour** |

      | ------------- | --------------------------------------------------------------------------------- | ------------- |

      | Default       | When an it is unselected                                                          |               |

      | Selected      | When an item is selected                                                          |               |

      | Indeterminate | When an item is neither selected or unselected and therefore cannot be determined |               |


      - - -


      ## Using a Selector


      ### Selector types


      **Selectors** have three states: selected, unselected, and indeterminate. They also have active, read-only and disabled states. Like **Checkboxes**, **Selectors** are used for multiple choices, not for mutually exclusive choices. Each **Selector** works independently from other **Selectors** in a list, therefore selecting an additional item does not affect any other selections.


      ### Single-selects


      Do not use a **Selector** if a user can select **only** one option from a list. In this case, **[Radio Buttons](</forms/radio buttons>)** should be used instead. **Selectors** allow the user to select multiple items in a set, whereas **Radio Buttons** allow the user to select only one option.


      ### Visual indication


      **Selectors** are easy to scan to see if they are selected and are more visually prominent than unselected items. They also make it easier to compare available items. You should use them when you want it to be clear what has been selected by the user.
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


    Below, you can find a live demo for a Selector component. Use the drop-down menus and radio buttons to view the different Selector Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <ul class="mcc-treeview" role="tree" aria-labelledby="treeview"
            style="max-width: 400px; width: 100%">
              <li>
                <details>
                  <summary>
                    <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                    <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                    <span>Fruits</span>
                  </summary>
                  <ul class="mcc-treeview__group" role="group">
                    <li><button type="button">Oranges</button></li>
                    <li><button type="button">Pineapple</button></li>
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Apples</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Macintosh</button></li>
                          <li><button type="button">Granny Smith</button></li>
                          <li><button type="button">Fuji</button></li>
                        </ul>
                      </details>
                    </li>
                    <li><button type="button">Bananas</button></li>
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Pears</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Anjou</button></li>
                          <li><button type="button">Bartlett</button></li>
                          <li><button type="button">Bosc</button></li>
                          <li><button type="button">Concorde</button></li>
                          <li><button type="button">Seckel</button></li>
                          <li><button type="button">Starkrimson</button></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                    <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                    <span>Vegetables</span>
                  </summary>
                  <ul class="mcc-treeview__group" role="group">
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Podded Vegetables</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Lentil</button></li>
                          <li><button type="button">Pea</button></li>
                          <li><button type="button">Peanut</button></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Bulb and Stem Vegetables</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Asparagus</button></li>
                          <li><button type="button">Celery</button></li>
                          <li><button type="button">Leek</button></li>
                          <li><button type="button">Onion</button></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Root and Tuberous Vegetables</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Carrot</button></li>
                          <li><button type="button">Ginger</button></li>
                          <li><button type="button">Parsnip</button></li>
                          <li><button type="button">Potato</button></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                    <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                    <span>Grains</span>
                  </summary>
                  <ul class="mcc-treeview__group" role="group">
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Cereal Grains</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Barley</button></li>
                          <li><button type="button">Oats</button></li>
                          <li><button type="button">Rice</button></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Pseudocereal Grains</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">Amaranth</button></li>
                          <li><button type="button">Bucketwheat</button></li>
                          <li><button type="button">Chia</button></li>
                          <li><button type="button">Quinoa</button></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <mcc-icon class="mcc-treeview__closed-icon" name="folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <mcc-icon class="mcc-treeview__open-icon" name="opened_folder" icon-set="office" aria-hidden="true"></mcc-icon>
                          <span>Oilseeds</span>
                        </summary>
                        <ul class="mcc-treeview__group" role="group">
                          <li><button type="button">India Mustard</button></li>
                          <li><button type="button">Safflower</button></li>
                          <li><button type="button">Flax Seed</button></li>
                          <li><button type="button">Poppy Seed</button></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
        name: As default
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
---
