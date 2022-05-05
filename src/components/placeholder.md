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


      Placeholders are indicators of the layout of how the page content will look once data has fully loaded.


      - - -


      ### When, and why?


      Use a placeholder on an initial page load that that has more than 1 element, and takes more than 0.3s to load on an average connection. Using a placeholder will give a perception of shorter wait time.


      - - -


      ## Placeholder Types


      We have 3 types of placeholders to help give a truer representation of the content


      | Types                   | Description                                                                                                                                                          |

      | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Paragraph** | Use this to indicate text heavy text data loading                                                                       |

      | **Image**   | This should be used when you are loading imagery |

      | **Image with text**   | This can be used to show a mix of data I loading |


      \[[Code up some examples here]]


      - - -


      ## Using a Placeholder


      Only apply a placeholder to your loading screen if the average load time is longer than 0.3seconds. Consider using a place holder when the page has more than 1 item to load at a time. When using a placeholder you should start displaying the data as it loads, rather than waiting for the all the data to load.


      A placeholder shouldn’t be used for long-running processes or background processes (e.g. importing data or exporting reports). Use a progress indicator \[link to progress indicator] for this instead.
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


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
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
