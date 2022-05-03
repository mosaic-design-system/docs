---
title: Ratings
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
tabs:
  - title: Usage
    body: >-
      ## What is a Rating?


      **Ratings** provide a way for users to evaluate or assess content. User-submitted **Ratings** can help users evaluate whether or not something is fit for purpose.


      - - -


      ### When, and why?


      A **Ratings** system is useful when you need users to engage with your product to express their emotion towards a particular item, or make more complex decisions by using other users' feedback. **Ratings** are an invaluable source of feedback that can help surface issues with products and inform innovation.


      - - -


      ## Rating types


      | **Variant** | **Description**                                                               |

      | ----------- | ----------------------------------------------------------------------------- |

      | **Star**    | The stars give a 1-5 scale rating                                             |

      | **Thumbs**  | The thumbs up and down rating collects a binary positive or negative response |

      | **Heart**   | Using the heart allows you collect and count only positive responses          |

      | **Faces**   | This scale collects a satisfaction or emotion rating                          |


      - - -


      ## Using Ratings


      ### Rating Types


      \[Think we definitely need some guidance on what rating to use where - users of MDS aren't necessarily experts in data collection!]


      However, once you have chosen a **Rating** type, you should stick to that type throughout your product. Comparing data from different source types can be difficult, and mixing different sources of data collection can lead to poor quality data.


      ### Rating frequency


      **Ratings** are an excellent source of quantifiable feedback, but user uptake can generally be harmed by bombarding the user with constant requests for feedback. If you make use of the **Ratings** component, take care not to use it too frequently. Remember that there are other sources of user feedback, such as /\[User Research](link to user research guideline).


      ////**Ratings** can be used in multiple ways to either collect or present different types of data. /[There are no hard set rules on using the **Ratings** components], except that you should keep it consistent throughout your product and do not bombard the user with too many on the screen at one given time.////


      The star (1-5 scale) work well when you want feedback on a new feature or if the rating is to be shared with other users e.g. '25145 rated ‘X’ 4/5. The Faces (satisfaction scale) are directly liked the user emotion and would be best suited when you are asking the user about their overall experience on a product or workflow. \

      Thumbs (Like or dislike) and hearts should be seen as reactional feedback and given in direct response to something intending to give instant results. For example, a blog post, a help document, a diagram, or image. This type of feedback can be used to promote content or help get high-level insights
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: >-
      ## Component accessibility 


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release. 


      ## Colour combinations 


      Please be mindful of colour contrast when using these buttons. Please make sure that the there is a clear colour contrast between the button and the background it is on. Please check this using this colour checker (https://webaim.org/resources/contrastchecker/). 


      ## Key binding 


      You should be able to select, submit data, confirm etc from all buttons via the keyboard ‘enter’ key. 


      ## Aria tags 


      Please ensure that all buttons have aria tags to ensure screen readers can understand that they are focussed on a button. 


      ## Focus state 


      All buttons should have a focus state and be able to have a focus applied to them by tabbing via a keyboard. (See focus state styling). 


      ## Wording  


      Please ensure that wording is as descriptive of the action as possible to help people understand clearly what action they are performing when they select the button. 


      ## Icons  


      Buttons without text should only be used as a last resort to save space on a table etc. 
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Button component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
            </button>
        name: As default
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
                default: false
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
            type: class
            select_multiple: false
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: With icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
              <mcc-icon name="arrows_long_right" aria-hidden="true"></mcc-icon>
            </button>
        name: With trailing icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--outline">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As outline
        modifiers:
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--text">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text
        modifiers:
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
                default: true
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
            type: class
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
                default: true
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
            type: class
          - name: Disabled
            selector: button
            type: attribute
            attribute:
              name: disabled
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
---
