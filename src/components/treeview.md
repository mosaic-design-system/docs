---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Treeview
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/dev/components/?path=/docs/components-treeview-introduction
tabs:
  - title: Usage
    body: "## What is a Treeview?


      A **Treeview** presents a hierarchical view of information by
      breaking them down into multiple levels of importance. The **Treeview**
      allows for different levels to be opened whilst the rest of the tree can
      remain collapsed, reducing the amount of space required, but maintaining
      the necessary information.


      - - -


      ## When, and why?


      A **Treeview** can be used for large sets of data which can be
      categorised into two or more levels, like a folder structure on a PC. For
      example, in Windows Explorer a file inside a folder would be on the second
      level of hierarchy, but a subsequent folder within that second level would
      contain the data in the third level of hierarchy. This should be familiar
      to most users, as it is a method used across many different devices and
      provides a logical structure.\ 


      For example, a **Treeview** could be used for a large storage system
      in a application to provide solicitors with a way of managing different
      documents across a number of cases - the 'cases' would be the top level of
      a hierarchy, but the items within those cases would be in the second
      level.


      - - -


      ## Using a Treeview


      ### Not navigation

      \r


      **Treeviews** should not be used as an alterative form of
      navigation. They are purely reserved for the organisation of data - please
      refer to the various navigation components (such as the **Navigation**
      [**Bar**](/components/navigation-bar) or
      [**Header**](/components/navigation-header)) for our recommended
      navigation structure.


      ### Treeview content


      Content within a **Treeview** should have a natural hierarchy. A
      **Treeview** shouldn't be used if there isn't a natural hierarchy to the
      data, i.e. one item is definitively 'under' or a 'part' of another. If you
      simply want to hide certain portions of the data for the user, it would be
      more appropriate to use an [**Accordion**](/components/accordion) or
      [**Collapse**](/components/collapse).

      \r


      ### Expanding items


      You should ensure that the **Treeview** can be expanded to reveal
      the sub-items in the tree. When a level is expanded, then that level
      should be indented to make it visually clear to the user that it is a
      separate level to the one above it.\ 


      ### Positioning levels


      When deciding the ordering of items in your **Treeview**, you should
      consider which items will be the most important or most accessed -
      especially if those items are multiple levels deep into the tree. These
      important items should be closer to the top of the **Treeview**, to
      prevent the user from spending too much time looking for their desired
      content.


      Similarly, make sure you don't overload the user. If the user has to
      search through too many levels, losing items will be very easy. We suggest
      that a **Treeview** should never have content more than four levels
      deep.\ 


      \r

      \r\n"
    icon: file_invoice
    toc: true
  - title: Code
    hook: code
    icon: source_code
    toc: false
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Treeview component. Use the drop-down menus and radio buttons to view the different Treeview  Types and Variants.
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
