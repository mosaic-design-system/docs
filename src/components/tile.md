---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tile
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-tile--as-default
tabs:
  - title: Usage
    body: "## What is a Tile?


      **Tiles** are customisable buttons, with a larger centralised icon
      and title text underneath. Tiles are 150px by 150px with an icon size of
      64px by 64px.


      - - -


      ## When, and why?


      **Tiles** can be used to build a user-friendly interactive screen,
      providing easy to use navigation. You can use **Tiles** to build things
      like home screens and dashboards on both mobile and desktop devices, and
      they are also great for acting as large navigation links elsewhere in the
      application.


      - - -


      ## Tile types


      The following **Tile** types are available:\ 


      | Type | Description |

      | --- | --- |

      | Default  |  Used for data visualisation and assembling a dashboard
      - the default type has an icon and text that can be used for desktop and
      other larger devices |

      | Title Tile  | These are similar to the standard Tile, but they
      don't have an icon and require less space - perfect for users that are
      using a device with a smaller amount of space  |


      \r

      - - -


      ## Using a Tile


      ### Tile labels


      All **Tiles** should have a label, **just like Buttons**. Make sure
      you use an informative label that describes where it will take the user,
      and be mindful of keeping it concise. You can check out the
      [Structure](/guidelines/style-guide/#structure) section of the Style Guide
      for more help on creating appropriate headings and labels.


      Labels in the **Tile** should also be centrally aligned.


      ### Tile icons


      Similarly, the icon in a **Tile** should be centrally aligned.\ 


      The icons are set to a height and width of 48px, and should use the
      icons from the [Icons8 icon
      library](https://mosaic-icon-search.oneadvanced.io/).


      ### Number of Tiles


      We do not have rules governing the number of **Tiles** that you
      include on a page. However, do keep in mind that an overuse of **Tiles**
      will make it hard for users to locate the content they are looking for.
      For example, 16 or more **Tiles** would be harder to navigate than an
      application that uses an effective navigation system, such as a
      [**Navigation bar**](/components/navigation-bar) component."
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


    Below, you can find a live demo for a Tile component. Use the drop-down menus and radio buttons to view the different Tile Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button type="button" class="mcc-tile">
              <span>Tile</span>
            </button>
        name: As default
        modifiers: []
      - template:
          lang: html
          code: |-
            <button type="button" class="mcc-tile">
              <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
              <span>Tile</span>
            </button>
        name: With icon
        modifiers: []
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Not applicable
navigation: button
---
