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


      A **File upload** enables users to upload files from their device into your application.


      - - -


      ### When, and why?


      There may be occasions where a you want to enrich the import experience by allowing users to upload files by dragging and dropping. This is a more interactive way to attach files than using an input with a Browse button, where users are prompted to manually browse their file system. With the File upload component, files can simply be dragged and dropped into a dedicated "drop zone" and the upload starts automatically.


      Usually, a File upload component is incorporated into a form, however it may be used stand alone. When one or more files are dropped inside the "drop zone", marked with a dotted line, a thumbnail of each one is displayed.


      - - -


      ## File upload types


      The following types of File upload are available:


      | **Name**          | **Description**                                                                                                            |

      | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |

      | Default           | A File upload component ready for files to be uploaded, either by dragging and dropping into the "drop zone" or browsed in |

      | With progress bar | A File upload that contains a progress bar to show that an upload is in progress                                           |

      | With thumbnails   | A File upload that contains thumbnails of each file that has been uploaded                                                 |


      - - -


      ## Using a File upload


      Showing the process of uploading.


      It is also possible to use the File upload component as a native file input - just click the dropzone and the Open dialog box appears. This allows users to still upload files by browsing for them.


      Only use if it's absolutely necessary, to prevent issues with network security.


      Be very clear on what type of file you are expecting to avoid confusion. By default, any file type is accepted, but you could add parameters yourself to validate a specific file type.


      Users can select one or more files to upload at a time.


      Default text must always be present, e.g. Drop stuff here!


      Consider where files that are uploaded are going to be stored, as they need to be stored somewhere where they can be easily accessed and potentially resurfaced elsewhere in your application. 


      Do not use upload in a modal when multiple files are uploaded, as uploaded files stack vertically.
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
