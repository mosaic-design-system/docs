---
title: Back to top
toc: true
chips:
  - "HTML/CSS: Available"
tabs:
  - title: Usage
    body: >-
      ## What is a Back to top?


      The **Back to top** component is a button that fades in when the user has scrolled beyond a specific point on the page, and allows the user to easily navigate back to the top of the page when interacted with. 


      You can find a **Back to top** component on this page - scroll further down and then you'll see it pop up in the corner


      - - -


      ### When, and why?


      The **Back to top** component allows users to scroll smoothly back to the top of the page with a single interaction. It enhances the navigation experience for users on pages with lots of content, and lets them get back to the top of the page. It is especially useful when a page has lots of content and reduces the amount of scrolling a user needs to do.


      - - -


      ## Using a Back to top


      ### Page size

      A **Back to top** should only be used for pages with lots of content - they shouldn't be used on pages with a small amount content that doesn't need much scrolling, as this will add too much visual clutter to the page with minimal return on usability.


      ### Back to top placement

      The **Back to top** component should always appear in the bottom right-hand corner of the page in order to prevent it covering the page's information. 


      ### Back to top trigger

      You should consider how quickly you want the **Back to top** button to appear when the user scrolls. The number of pixels the user has to scroll before the button appears can be specified using the "scroll-y" attribute.
    hook: ""
    toc: true
  - title: Code
    hook: ""
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
    toc: false
  - title: "Accessibility "
    hook: ""
    toc: false
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with an **Back to top**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Back to top** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      **Back to top** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Back to top**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      **Back to top** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
  - title: Status
    hook: status
    toc: false
code:
  body: >
    ## Live demo


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
status:
  design: Yes
  documentation: No
  html_css: In queue
  web_component: In queue
---
