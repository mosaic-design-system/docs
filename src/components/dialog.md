---
title: Dialog
toc: true
navigation: button
chips:
  - HTML/CSS
  - Web Component
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/custom-elements-dialog--as-default
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
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ## Live demo


    Below, you can find a live demo for a Dialog component. Use the drop-down menus and radio buttons to view the different Dialog Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-dialog-overlay">
              <dialog class="mcc-dialog" id="default-dialog">
                <section>
                  <div class="mcc-dialog__header">
                    <h2 class="h4">Title</h2>
                  </div>
                  <div class="mcc-dialog__body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p class="mu-mb-00">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                  <div class="mcc-dialog__footer">
                    <button type="button" class="mcc-button mcc-button--outline" onclick="closeDialog()">Close</button>
                  </div>
                </section>
              </mcc-dialog>
            </div>

            <button class="mcc-button mcc-button--primary" onclick="showDialog()">Show dialog</button>

            <script src="https://cdn.svc.oneadvanced.com/dialog-polyfill/0.5.6/dialog-polyfill.js" type="module"></script>

            <script>
              function showDialog() {
                var dialog = document.querySelector('dialog');
                dialogPolyfill.registerDialog(dialog);
                dialog.parentElement.classList.add('mu-visible')
                dialog.showModal();
              }
              function closeDialog() {
                const dialog = document.getElementById('default-dialog')
                dialogPolyfill.registerDialog(dialog);
                dialog.parentElement.classList.remove('mu-visible')
                dialog.close()
              }
            </script>
            <script>
              
            </script>
        name: As default
        modifiers:
          - name: Size
            selector: .mcc-dialog
            classes:
              - name: Extra small 
                value: mcc-dialog--xs
              - name: Small
                value: mcc-dialog--sm
              - name: Medium (default)
                value: mcc-dialog--md
                default: true
              - name: Large
                value: mcc-dialog--lg
              - name: Full
                value: mcc-dialog--full
            type: class
            select_multiple: false
          - name: Type
            selector: .mcc-dialog
            classes:
              - name: Default 
                value: mcc-dialog
                default: true
              - name: Primary 
                value: mcc-dialog--primary
              - name: Secondary
                value: mcc-dialog--secondary
              - name: Success
                value: mcc-dialog--success
              - name: Danger
                value: mcc-dialog--danger
              - name: Warning
                value: mcc-dialog--warning
              - name: Info
                value: mcc-dialog--info
            type: class
            select_multiple: false 
---
