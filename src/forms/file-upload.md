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


      A **File upload** is used to let users to upload files from their device onto your application.


      - - -


      ### When, and why?


      **File upload** components are useful when you want to allow the user to upload multiple files at once by dragging and dropping the desired files. Letting the users drag and drop is a more interactive way of uploading files, when compared to a simple input with a "browse" button. Sometimes, the user may need to upload files from multiple locations, and a drag and drop from their own file system may be easier than selecting a browse button multiple times.


      The user places their files into a dedicated "drop zone" in the application, which then automatically starts uploading the files.


      - - -


      ## File upload types


      The following **File upload** types are available:


      | **Type**          | **Description**                                                                                                            |

      | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |

      | Default           | A File upload component ready for files to be uploaded, either by dragging and dropping into the "drop zone" or browsed in |

      | With progress bar | A File upload that contains a progress bar to show that an upload is in progress                                           |

      | With thumbnails   | A File upload that contains thumbnails of each file that has been uploaded                                                 |


      - - -


      ## Using a File upload


      Usually, a **File upload** component is incorporated into a form, however it may be used stand alone. When one or more files are dropped inside the "drop zone", marked with a dotted line, a thumbnail of each one is displayed once they are uploaded. It is important to show the process of uploading, so that users can see the what's happening. Any file in the "drop zone" can be deleted by clicking the appropriate remove icon.


      It is also possible to use the File upload component as a native file input. By clicking the "drop zone", a dialog box opens, which allows users to upload files by browsing their device.


      Although File inputs offer a better user experience for uploading files, there are a number of considerations that should be taken into account:


      * Always consider where files that are uploaded are stored, as they need to be stored somewhere where they can be easily accessed and potentially resurfaced elsewhere in your application.

      * Be very clear on what type of file you are expecting to avoid confusion. By default, any file type is accepted, but you could add parameters yourself to validate a specific file type. You can also use the help text to explain which file types are accepted.

      * Only use if it's absolutely necessary, to prevent issues with network security.

      * Make sure that clear instructions are given to users so they know what is expected. The easiest way to do this is to include a line of text inside the "drop zone" that briefly explains what to do, e.g. "Drop files here to upload or click to choose files".

      * If using a File upload in a dialog, consider that when multiple files are uploaded, you could end up with multiple rows of thumbnails. Therefore, the dialog will need to increase in height to accommodate these. If you are expecting a large number of files to be uploaded, consider using a side Drawer, as this offers more vertical space and a scrollbar can be introduced if necessary.
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