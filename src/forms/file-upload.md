---
title: File upload
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-select-examples--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a File upload?


      A **File upload** is...


      - - -


      ### When, and why?


      Text


      - - -


      ## File upload types


      The following types of File upload are available:


      | **Name**          | **Description**                                                                                                          |

      | ----------------- | ------------------------------------------------------------------------------------------------------------------------ |

      | Default           | A File upload component ready for files to be uploaded, either by dragging and dropping into the drop zone or browsed in |

      | With progress bar | A File upload that contains a progress bar to show that an upload is in progress                                         |

      | With thumbnails   | A File upload that contains thumbnails of each file that has been uploaded                                               |


      - - -


      ## Using a File upload


      Text
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
  example: null
  body: >-
    ## Live demo


    Below, you can find a live demo for a File upload component. Use the drop-down menus and radio buttons to view the different types.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <div class="mfc-input-wrapper">
               <label>
                    File upload label
               </label>
                <div class="mfc-file-upload">
                <div class="dz-default dz-message">
                  <mcc-icon name="upload_2" aria-hidden="true"></mcc-icon>
                  <span>
                    Click to upload a file or drag and drop here
                  </span>
                </div>
              </div>
                <div aria-live="polite" class="mfc-invalid-feedback">
                  <span></span>
                </div>
                <div class="mfc-help-text">File upload help text</div>
              </div>
        name: As default
        modifiers:
          - name: Size
            selector: .mfc-select-wrapper
            classes: []
            type: class
            select_multiple: false
          - name: Disabled
            selector: select
            type: attribute
            attribute:
              name: disabled
          - name: Invalid
            selector: select
            classes:
              - name: Invalid
                value: ms-is-invalid
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
