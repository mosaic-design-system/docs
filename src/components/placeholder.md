---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Placeholder
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-placeholder-introduction
tabs:
  - title: Usage
    body: >-
      ## What is a Placeholder?


      **Placeholders** are indicators of how the page content will look once data has fully loaded - they give a quick preview of what the page will end up looking like, but without specific details. You can think of them like small loading screens for each individual component.


      They only appear while a page is loading, and are **not** permanent stand-ins for pages that aren't ready for the user to use.


      ![](/assets/img/placeholdersvglight.svg)


      - - -


      ### When, and why?


      **Placeholders** can be used when a page is initially loading, as long as it has more than one element. They should also only be used when a page typically takes more than 0.3s to load on an average connection. Using a **Placeholder** will give a perception of a shorter wait time, and let the user know that the system is busy loading the content and hasn't frozen.


      - - -


      ## Placeholder types


      The following **Placeholder** types are available:


      | **Types**  | **Description**                                               |

      | ---------- | ------------------------------------------------------------- |

      | As default | A skeleton Placeholder for showing that text is being loaded. |


      ## Placeholder properties


      The following **Placeholder** properties are available:


      | **Property** | **Description**                          |

      | ------------ | ---------------------------------------- |

      | Header       | Shows/hides the placeholder header       |

      | Header image | Shows/hides the placeholder header image |

      | Header title | Shows/hides the placeholder header title |

      | Body         | Shows/hides the placeholder body         |


      - - -


      ## Using a Placeholder


      ### Loading times


      Only apply a **Placeholder** to your loading screen if the average load time is longer than 0.3seconds. You should only use a **Placeholder** when the page has more than one item to load at a time. Using them on smaller pages with little content will be arbitrary and are unlikely to impact the user's perception of load times.


      ### Placeholder transitions


      **Placeholders** should be replaced with content as soon as it's available for loading, rather than waiting until all content is available and showing everything at once. If the page gradually loads in, the page looks like it's loading faster. It makes little sense to make the user wait for all pieces of content to be available at once - after all, they may only be looking for the piece of content that loads first.


      ### Loading bars


      A **Placeholder** shouldn’t be used for long-running processes or background processes (e.g. importing data or exporting reports). Use a **[Progress indicator](/components/progress-bar)** for that instead.
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


      When designing with a **Placeholder**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Placeholder** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Placeholder** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Placeholder**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      An **Placeholder** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Placeholder component. Use the drop-down menus and radio buttons to view the different types and modifiers.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <div class="mcc-placeholder" style="max-width: 400px; width: 100%">
              <div></div>
              <div></div>
              <div></div>
            </div>
        name: As default
        modifiers:
          - name: Animated
            selector: .mcc-placeholder
            classes:
              - name: Animated
                value: mcc-placeholder--animation
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-placeholder" style="max-width: 400px; width: 100%">
                <section class="mu-d-flex mu-mb-05">
                    <div style="border-radius: 50%; width: 64px; height: 64px;"></div>
                    <section class="mu-flex-fill">
                      <div style="height: 24px; width: 80%;"></div>
                      <div></div>
                  </section>
                </section>
                <div style="width: 80%;"></div>
                <div></div>
            </div>
        name: With sizes and shapes
        modifiers:
          - name: Animated
            selector: .mcc-placeholder
            classes:
              - name: Animated
                value: mcc-placeholder--animation
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
