---
title: Avatar
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://refactored-telegram-b90726d9.pages.github.io/release/?path=/docs/components-avatar-introduction
tabs:
  - title: Usage
    body: >-
      ## What is an Avatar?


      An **Avatar** is a graphical representation of a user or a user's character. They typically use a photo, but can also use an icon or initials to visually indicate a person.


      - - -


      ### When, and why?


      Avatars can be used to show a thumbnail representation of a logged in user in your applications or, for example, a photo of a user in a Profile page. **Avatars** are an important part in helping users identify themselves and other users, and also provides a human presence within an interface.


      **Avatars** should be used in the top right of a navigation bar to show the logged in user, and should provide access to their Profile page. They can also be used in contact cards, chat UIs, community forums, etc.


      - - -


      ## Avatar types


      The following **Avatar** types are available:


      | **Type**          | **Description**                                                                                     | **Example**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

      | ----------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | **Default**       | An Avatar that contains a photo                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

      | **With initials** | An Avatar that contains the user's initials                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

      | **With icon**     | An Avatar that contains an icon                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

      | **As sized**      | Allows an Avatar to use one of the following sizes; 32px, 40px (default size), 48px, 64px, and 96px |  |


      - - -


      ## Using an Avatar


      ### Displaying an Avatar


      **Avatars** can be displayed individually or adjacent to each other on a single row. 


      Additionally, **Avatars** are available in different sizes, however it is important not to mix sizes. **Avatars** should only use one picture size across your entire product.


      ### Avatar pictures


      Although **Avatars** are typically used with photos, they can be used with icons. Choose one style to use across your entire product. In both cases, where a photo or icon is not available, they can also be used to display a user's initials.


      When a photo or icon is not available or hasn't been supplied, a fall-back icon is automatically used. This is the generic User icon.


      It is also important to remember that small images used in large **Avatars** will be upscaled, which could lead to distorted images. Always use compressed images and resize images near to the appropriate size. This will help maintain the best results, and reduce the impact on performance by stopping the application from needing to render large image files.
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


      ### Focus state


      An **Avatar** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on **Avatar**.


      ### Key Binding


      An **Avatar** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.
    icon: web_accessibility_1
    toc: false
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for an Avatar component. Use the drop-down menus and radio buttons to view the different Avatar Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-avatar">
              <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="John Doe">
            </div>
        name: With default
        modifiers:
          - name: Size
            selector: .mcc-avatar
            classes:
              - name: Small
                value: mcc-avatar--sm
              - name: Medium
                value: mcc-avatar
                default: true
              - name: Large
                value: mcc-avatar--lg
              - name: Extra large
                value: mcc-avatar--xl
              - name: Extra extra large
                value: mcc-avatar--xxl
            type: class
            select_multiple: false
      - template:
          lang: html
          code: <div class="mcc-avatar">XX</div>
        name: With initials
        modifiers:
          - name: Size
            selector: .mcc-avatar
            classes:
              - name: Small
                value: mcc-avatar--sm
              - name: Medium
                value: mcc-avatar
                default: true
              - name: Large
                value: mcc-avatar--lg
              - name: Extra large
                value: mcc-avatar--xl
              - name: Extra extra large
                value: mcc-avatar--xxl
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mcc-avatar">
              <mcc-icon name="user" icon-set="fluency-outline" aria-hidden="true"></mcc-icon>
            </div>
        name: As icon
        modifiers:
          - name: Size
            selector: .mcc-avatar
            classes:
              - name: Small
                value: mcc-avatar--sm
              - name: Medium
                value: mcc-avatar
                default: true
              - name: Large
                value: mcc-avatar--lg
              - name: Extra large
                value: mcc-avatar--xl
              - name: Extra extra large
                value: mcc-avatar--xxl
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
---
