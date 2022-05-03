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
    body: ""
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
