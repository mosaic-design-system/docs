---
title: Avatar
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-avatar--as-default
tabs:
  - title: Usage
    body: >-
      ## What is an Avatar?


      An Avatar is a graphical representation of a user or a user's character. They typically use a photo, but can also use an icon or initials to visually indicate a person.


      - - -


      ### When, and why?


      Avatars can be used to show a thumbnail representation of a logged in user in your applications or, for example, a photo of a user in a Profile page. Avatars are an important part in helping other users form an impression of you and also provide a human presence within an interface.


      Avatars should be used in the top right of a navigation bar to show the logged in user and should provide access to their Profile page. They can also be used in contact cards, chat UIs, and community forums, etc.


      - - -


      ## Avatar types


      The following types of Avatars are available:


      | **Name**      | **Description**                                                                                     | **Example** |

      | ------------- | --------------------------------------------------------------------------------------------------- | ----------- |

      | Default       | An Avatar that contains a photo                                                                     |             |

      | With initials | An Avatar that contains the user's initials                                                         |             |

      | With icon     | An Avatar that contains an icon                                                                     |             |

      | As sized      | Allows an Avatar to use one of the following sizes; 32px, 40px (default size), 48px, 64px, and 96px |             |


      - - -


      ## Using an Avatar


      Avatars can be displayed individually or adjacent to each other on a single row. Although avatars are typically used with photos, they can be used with icons or, where a photo and icon is not available, they can also be used to display a user's initials. When none of these are supplied, a fall-back icon is automatically used. It is also possible to set a limit on the number of avatars that are visible and have any others displayed via a dropdown menu.


      ### Sizes


      Avatars are available in different sizes. However, it is important not to mix sizes. It is also important to remember that small images used in large Avatars will be upscaled, which could lead to distorted images. Always use compressed images and resize images near to the appropriate size. This will help maintain the best results.




      ### Fall-back






      The following rules apply to using Avatars:


      * Do not to mix icon and photo Avatar styles

      * Do not mix Avatar sizes

      * Do not use high resolution photos, as this may impact performance
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
