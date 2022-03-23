---
title: Chip
toc: true
chips:
  - "HTML/CSS: Available"
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-chip--as-default
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


    Below, you can find a live demo for a Chip component. Use the drop-down menus and radio buttons to view the different Chip Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: <span class="mcc-chip">Chip</span>
        name: As default
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--primary
                name: Primary
                default: true
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mds-hide-chip-icon">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: With icon
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - name: Primary
                value: mcc-chip--primary
                default: true
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mcc-chip--primary">
              <span>Chip</span>
              <mcc-icon name="does-not-exist"></mcc-icon>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: With trailing icon
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--primary
                name: Primary
                default: true
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As soft
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--soft-primary
                name: Primary
                default: true
              - value: mcc-chip--soft-secondary
                name: Secondary
              - value: mcc-chip--soft-success
                name: Success
              - value: mcc-chip--soft-danger
                name: Danger
              - value: mcc-chip--soft-warning
                name: Warning
              - value: mcc-chip--soft-info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mcc-chip--outline">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As outline
        modifiers:
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <a href="#" class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </a>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As anchor
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--soft-primary
                name: Primary
                default: true
              - value: mcc-chip--soft-secondary
                name: Secondary
              - value: mcc-chip--soft-success
                name: Success
              - value: mcc-chip--soft-danger
                name: Danger
              - value: mcc-chip--soft-warning
                name: Warning
              - value: mcc-chip--soft-info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
            type: class
      - template:
          lang: html
          code: |-
            <button class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </button>
            <style>.mcc-chip.mcc-chip--xs > mcc-icon {display: none}</style>
        name: As button
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--soft-primary
                name: Primary
                default: true
              - value: mcc-chip--soft-secondary
                name: Secondary
              - value: mcc-chip--soft-success
                name: Success
              - value: mcc-chip--soft-danger
                name: Danger
              - value: mcc-chip--soft-warning
                name: Warning
              - value: mcc-chip--soft-info
                name: Info
            select_multiple: true
            type: class
          - name: Size
            selector: .mcc-chip
            classes:
              - name: Extra small
                value: mcc-chip--xs
              - name: Small
                value: mcc-chip--sm
              - name: Medium
                value: mcc-chip
                default: true
              - name: Large
                value: mcc-chip--lg
            select_multiple: true
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
  web_component: N/A
---
