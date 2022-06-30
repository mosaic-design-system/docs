---
title: Rich text editor
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
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
    hook: ""
    icon: source_code
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  - title: Accessibility
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with a **Rich text editor**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Rich text editor** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Rich text editor** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the elements within the **Rich text editor**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      A **Rich text editor** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
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
