---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Placeholder
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-placeholder--with-sizes-and-shapes
tabs:
  - title: Usage
    body: >-
      ## What is a Placeholder?


      **Placeholders** are indicators of how the page content will look once data has fully loaded - they give a quick preview of what the page will end up looking like, but without specific details. You can think of them like small loading screens for each individual component.


      They only appear while a page is loading, and are **not** permanent stand-ins for pages that aren't ready for the user to use.


      - - -


      ### When, and why?


      **Placeholders** can be used when a page is initially loading, as long as it has more than one element. They should also only be used when a page typically takes more than 0.3s to load on an average connection. Using a **Placeholder** will give a perception of a shorter wait time, and let the user know that the system is busy loading the content and hasn't frozen.


      - - -


      ## Placeholder types


      The following types of **Placeholder** are available:


      | **Types**           | **Description**                                   |

      | ------------------- | ------------------------------------------------- |

      | **Paragraph**       | Use this to indicate text heavy text data loading |

      | **Image**           | This should be used when you are loading imagery  |

      | **Image with text** | This can be used to show a mix of text and imagery |


      - - -


      ## Using a Placeholder


      ### Loading times


      Only apply a **Placeholder** to your loading screen if the average load time is longer than 0.3seconds. You should only use a **Placeholder** when the page has more than one item to load at a time. Using them on smaller pages with little content will be arbitrary and are unlikely to impact the user's perception of load times.


      ### Placeholder transitions

      **Placeholders** should be replaced with content as soon as it's available for loading, rather than waiting until all content is available and showing everything at once. If the page gradually loads in, the page looks like it's loading faster. It makes little sense to make the user wait for all pieces of content to be available at once - after all, they may only be looking for the piece of content that loads first.


      ### Loading bars

      A **Placeholder** shouldn’t be used for long-running processes or background processes (e.g. importing data or exporting reports). Use a [**Progress indicator**](/components/progress-indicator) for that instead.
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
