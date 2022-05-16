---
title: Rich text editor
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-checkbox--default-story
tabs:
  - title: Usage
    body: >-
      ## What is a Rich text editor?


      A **Rich text editor** (RTE) is a form input that allows users to add or edit content in a "what-you-see-is-what-you-get" (WYSIWYG) editing area. Examples of other RTE's are things that you would find on blogging sites and various forums.


      - - -


      ### When, and why?


      RTEs are really useful when you want to provide users with a way of adding or editing content, images, links, and other components, without having to know any code. They also allow content to be styled and formatted using bold, italics, headings, etc. The aim is to reduce the effort for users to enter formatted content directly into forms, as valid HTML.


      Once the user has submitted content into the RTE, HTML will be automatically generated for the user and displayed appropriately.


      - - -


      ## Using a Rich text editor


      ### Sizing

      Similar to [**Textareas**](/forms/textarea), RTEs are taller than regular text inputs and wrap text onto new lines automatically as a user types. They have a fixed height and scroll vertically when text exceeds the bottom of the given area. However, they can also be manually resized to create a bigger space for content, if a user needs it.


      The starting size of an RTE should indicate the amount of content that is expected.


      ### Word processing

      RTEs work in a similar way to a simple word processor, in that they contain many of the formatting options associated with them, they accept carriage returns, and content can be structured using bullets, etc. A big benefit of RTEs is that images or other media files can be uploaded directly into the editing area. It is also possible to create links to other destinations.


      When using an RTE, it is important to consider how the information entered will be stored. Can it store all the uploads, formatting, etc, for later editing or viewing in a different place within the application? Make sure that your application has a method of storing and presenting any content that a user could produce using the RTE. 


      ### Validation

      As with all form inputs, a RTEs can be checked when a form is submitted to make sure its content is valid or, if it is flagged as a mandatory field, that it is completed before continuing. For more information, please refer to [**Form Validation**](/forms/form-validation).
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


    Below, you can find a live demo for a Rich Text Editor component. Use the drop-down menus and radio buttons to view the different Rich Text Editor Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div>
              <label class="mfc-label">Checkbox input</label>
              <div class="mfc-checkbox-wrapper">
                <input id="checkboxInput1" name="checkboxInput1" type="checkbox">
                <label for="checkboxInput1">Checkbox input</label>
                <div class="mfc-help-text">Checkbox input help text</div>
              </div>
            </div>
        name: As default
        modifiers:
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Checked
            selector: input
            type: attribute
            attribute:
              name: checked
          - name: Switch
            selector: input
            classes:
              - name: Switch
                value: mfc-switch
            type: class
            select_multiple: false
status:
  design: Yes
  documentation: No
  html_css: Available
  web_component: Available
---
