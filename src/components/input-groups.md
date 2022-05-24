---
title: Input groups
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
tabs:
  - title: Usage
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
    icon: file_invoice
  - title: Code
    hook: ""
    icon: source_code
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
  - title: Status
    hook: status
code:
  example: null
  body: >-
    ## Live demo

    Below, you can find a live demo for an Input group component. Use the drop-down menus and radio buttons to view the different Input group Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mds-input-group-demo" style="max-width: 400px; width:
            100%">
              <div class="mfc-input-wrapper">
                <label for="inputGroupDefault1">Text input</label>
                <div class="mfc-input-group">
                  <span>Text</span>
                  <input id="inputGroupDefault1" name="inputGroupDefault1" type="text">
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
              <div class="mfc-input-wrapper">
                <label for="inputGroupDefault2">Text input</label>
                <div class="mfc-input-group">
                  <input id="inputGroupDefault2" name="inputGroupDefault2" type="text">
                  <span>Text</span>
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
              <div class="mfc-input-wrapper">
                <label for="inputGroupDefault3">Text input</label>
                <div class="mfc-input-group">
                  <span>Text</span>
                  <input id="inputGroupDefault3" name="inputGroupDefault3" type="text">
                  <span>Text</span>
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
            </div> <style>
              .mds-input-group-demo .mfc-input-wrapper {
                display: none;
              }
              .mds-input-group-demo.start > .mfc-input-wrapper:nth-child(1) {
                display: block;
              }
              .mds-input-group-demo.end > .mfc-input-wrapper:nth-child(2) {
                display: block;
              }
              .mds-input-group-demo.both > .mfc-input-wrapper:nth-child(3) {
                display: block;
              }
            </style>
        name: With text
        modifiers:
          - name: Position
            selector: .mds-input-group-demo
            classes:
              - name: Start
                value: start
                default: true
              - name: End
                value: end
              - name: Both
                value: both
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mds-input-group-demo" style="max-width: 400px; width:
            100%">
              <div class="mfc-input-wrapper">
                <label for="inputGroupIcon1">Text input</label>
                <div class="mfc-input-group">
                  <span>
                    <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  </span>
                  <input id="inputGroupIcon1" name="inputGroupIcon1" type="text">
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
              <div class="mfc-input-wrapper">
                <label for="inputGroupIcon2">Text input</label>
                <div class="mfc-input-group">
                  <input id="inputGroupIcon2" name="inputGroupIcon2" type="text">
                  <span>
                    <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  </span>
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
              <div class="mfc-input-wrapper">
                <label for="inputGroupIcon3">Text input</label>
                <div class="mfc-input-group">
                  <span>
                    <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  </span>
                  <input id="inputGroupIcon3" name="inputGroupIcon3" type="text">
                  <span>
                    <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  </span>
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
            </div> <style>
              .mds-input-group-demo .mfc-input-wrapper {
                display: none;
              }
              .mds-input-group-demo.start > .mfc-input-wrapper:nth-child(1) {
                display: block;
              }
              .mds-input-group-demo.end > .mfc-input-wrapper:nth-child(2) {
                display: block;
              }
              .mds-input-group-demo.both > .mfc-input-wrapper:nth-child(3) {
                display: block;
              }
            </style>
        name: With icons
        modifiers:
          - name: Position
            selector: .mds-input-group-demo
            classes:
              - name: Start
                value: start
                default: true
              - name: End
                value: end
              - name: Both
                value: both
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mds-input-group-demo" style="max-width: 400px; width:
            100%">
              <div class="mfc-select-wrapper">
                <label for="inputGroupSelect1">Select input</label>
                <div class="mfc-input-group">
                  <span>Text</span>
                  <select id="inputGroupSelect1" name="inputGroupSelect1">
                    <option value=""></option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                  </select>
                  <div class="mfc-help-text">Select help text</div>
                </div>
              </div>
              <div class="mfc-select-wrapper">
                <label for="inputGroupSelect2">Select input</label>
                <div class="mfc-input-group">
                  <select id="inputGroupSelect2" name="inputGroupSelect2">
                    <option value=""></option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                  </select>
                  <span>Text</span>
                  <div class="mfc-help-text">Select help text</div>
                </div>
              </div>
              <div class="mfc-select-wrapper">
                <label for="inputGroupSelect3">Select input</label>
                <div class="mfc-input-group">
                  <span>Text</span>
                  <select id="inputGroupSelect3" name="inputGroupSelect3">
                    <option value=""></option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                  </select>
                  <span>Text</span>
                  <div class="mfc-help-text">Select help text</div>
                </div>
              </div>
            </div> <style>
              .mds-input-group-demo .mfc-select-wrapper {
                display: none;
              }
              .mds-input-group-demo.start > .mfc-select-wrapper:nth-child(1) {
                display: block;
              }
              .mds-input-group-demo.end > .mfc-select-wrapper:nth-child(2) {
                display: block;
              }
              .mds-input-group-demo.both > .mfc-select-wrapper:nth-child(3) {
                display: block;
              }
            </style>
        name: With select
        modifiers:
          - name: Position
            selector: .mds-input-group-demo
            classes:
              - name: Start
                value: start
                default: true
              - name: End
                value: end
              - name: Both
                value: both
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mds-input-group-demo" style="max-width: 400px; width:
            100%">
              <div class="mfc-textarea-wrapper">
                <label for="inputGroupTextarea1">Text input</label>
                <div class="mfc-input-group">
                  <span>Text</span>
                  <textarea id="inputGroupTextarea1" name="inputGroupTextarea1"></textarea>
                  <div class="mfc-help-text">Textarea help text</div>
                </div>
              </div>
              <div class="mfc-textarea-wrapper">
                <label for="inputGroupTextarea2">Text input</label>
                <div class="mfc-input-group">
                  <textarea id="inputGroupTextarea2" name="inputGroupTextarea2"></textarea>
                  <span>Text</span>
                  <div class="mfc-help-text">Textarea help text</div>
                </div>
              </div>
              <div class="mfc-textarea-wrapper">
                <label for="inputGroupTextarea3">Text input</label>
                <div class="mfc-input-group">
                  <span>Text</span>
                  <textarea id="inputGroupTextarea3" name="inputGroupTextarea3"></textarea>
                  <span>Text</span>
                  <div class="mfc-help-text">Textarea help text</div>
                </div>
              </div>
            </div> <style>
              .mds-input-group-demo .mfc-textarea-wrapper {
                display: none;
              }
              .mds-input-group-demo.start > .mfc-textarea-wrapper:nth-child(1) {
                display: block;
              }
              .mds-input-group-demo.end > .mfc-textarea-wrapper:nth-child(2) {
                display: block;
              }
              .mds-input-group-demo.both > .mfc-textarea-wrapper:nth-child(3) {
                display: block;
              }
            </style>
        name: With textarea
        modifiers:
          - name: Position
            selector: .mds-input-group-demo
            classes:
              - name: Start
                value: start
                default: true
              - name: End
                value: end
              - name: Both
                value: both
            type: class
            select_multiple: false
      - template:
          lang: html
          code: >-
            <div class="mds-input-group-demo" style="max-width: 400px; width:
            100%">
              <div class="mfc-input-wrapper">
                <label for="inputGroupButtons1">Text input</label>
                <div class="mfc-input-group">
                  <button class="mcc-button mcc-button--primary">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <input id="inputGroupButtons1" name="inputGroupButtons1" type="text">
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
              <div class="mfc-input-wrapper">
                <label for="inputGroupButtons2">Text input</label>
                <div class="mfc-input-group">
                  <input id="inputGroupButtons2" name="inputGroupButtons2" type="text">
                  <button class="mcc-button mcc-button--primary">
                    <span class="mcc-button__label">Button</span>
                  </button>
                  <div class="mfc-help-text">Text input help text</div>
                </div>
              </div>
            </div> <style>
              .mds-input-group-demo .mfc-input-wrapper {
                display: none;
              }
              .mds-input-group-demo.start > .mfc-input-wrapper:nth-child(1) {
                display: block;
              }
              .mds-input-group-demo.end > .mfc-input-wrapper:nth-child(2) {
                display: block;
              }
            </style>
        name: With buttons
        modifiers:
          - name: Position
            selector: .mds-input-group-demo
            classes:
              - name: Start
                value: start
                default: true
              - name: End
                value: end
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: In queue
---
