---
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo

    Below, you can find a live demo for a Drawer component. Use the drop-down menus and radio buttons to view the different Drawer Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <mcc-drawer id="modal-drawer" class="mcc-drawer mcc-drawer--start"
            type="modal"></mcc-drawer>

            <button class="mcc-button mcc-button--primary" onclick="showDrawer()">Show drawer</button>

            <script>
              function showDrawer() {
                const drawer = document.getElementById('modal-drawer')
                drawer.open()
              }
            </script>
        name: As default
        modifiers:
          - name: Position
            selector: .mcc-drawer
            classes:
              - name: Top
                value: mcc-drawer--top
              - name: Bottom
                value: mcc-drawer--bottom
              - name: Start
                value: mcc-drawer--start
                default: true
              - name: End
                value: mcc-drawer--end
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
navigation: button
title: Drawer
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/custom-elements-drawer--as-dismissible-start
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
---
