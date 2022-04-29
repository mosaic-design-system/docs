---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
title: Tile
toc: true
chips:
  - "HTML/CSS: Available"
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/story/html-tile--as-default
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
  web_component: Available
navigation: button
---
## What is a Tile?

**Tiles** are customisable buttons, with a larger centralised icon and title text underneath. They are great for acting as large navigation links.
- - -

## When, and why?

**Tiles** can be used to build a user-friendly interactive screen providing easy to use navigation such as for home screens and dashboards on both mobile and desktop devices. 

- - -

## Types of Tile
Fixed Tile: Used for data visualisation and assembling a dashboard. The fixed **tile** has a default size for the small set at 140px or 170px for the large set which can be used for desktop and other larger devices.

Block Tile: This provides a fluid layout that adapts will expand to fill the width of its container.

Fixed Tile container: Can be used for navigation on a mobile device or other space is limited to display content. Tiles are fixed at a size of 140px wide however the tile text will truncate if it doesn't fit the width. The container allows multiple tiles to be placed next to each other.


- - -

## Using a Tile

Using tiles

•	Both the icon and label should be centrally aligned

•	Labels should be kept short and precise for speed and ease of use

•	Capital letters should not be used

•	Icons are set to a height and width of 48px and can be found using the Icons8 icon library
