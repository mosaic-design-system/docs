---
title: Picklist
toc: true
chips:
  - "Web Component: In development"
tabs:
  - title: Usage
    body: >-
      ## What is a Picklist?


      A **Picklist** is multi-select component that displays a list of selectable options, where more than one item can be selected. It is displayed as two boxes side-by-side, where the user can move items across from left to right or right to left. Typically, one of these boxes would be a list of options, and the other box would be a list of 'selected' items.


      - - -


      ### When and why


      A **Picklist** is similar to a multi-select list, in that it allows the user to select multiple items from a list of possible options, however the **Picklist** moves the selected items into a separate list.  This allows the user to clearly see what has been selected, and can potentially give them the ability to reorder the selected items if required. 


      - - -


      ## Picklist types


      | **Type**  | **Description**                |

      | ------------ | ------------------------------ |

      | Default      | Default Picklist              |

      | With filters | Adds filters to each Picklist |


      - - -


      ## Using a picklist


      ### Labels


      A **Picklist** should have a label to describe what the user is selecting. Without a label, the **Picklist** will be confusing for the user, as they require the context to know exactly what they are picking from. Ensure you choose a descriptive label that is appropriate for the desired intention.


      Similarly, each box should have a label. It needs to be clear to the user which side is the list of options, and which side is the list of items that have been selected. As an example, if you were creating a **Picklist** of employees to assign to a specific task, you might label one side 'Employees' and the other side 'Assigned'.


      ### Interactivity


      It is important to consider the functionality of a **Picklist** outside of forming two separate lists. The main usage of it is to clearly define what options have been chosen, and which are available to choose from, but in addition the user will also need to be selecting items from either of the lists to move them from one side to the other.


      Users should be able to choose multiple items from one box and select them using checkboxes, to enable them to move multiple items at once - this reduces the amount of clicks a user needs to make when moving a large number of items between the two lists. If an item has been selected, it should be clearly visible to the user - normally, this would be indicated by the selector being ticked.


      ### Displaying list items


      **Picklists** could potentially include large amounts of data. Special care should be taken to consider what the best ordering of items in a **Picklist** should be - alphabetical is usually a good idea, but sometimes you might consider an alternative sort order if that is more appropriate.


      If there is likely to be a large amount of data (10+ items), for example if you are picking from a number of employees, then the **Picklist** with filters type should be used.


      In addition, an individual item should only appear once between the two boxes - an item is either selected or it is not. The physical movement of an item from one box to the other gives the user a definitive answer as to whether something has been picked or not. Do not leave room for ambiguity in this instance. 


      - - -


      ## References


      https://www.nngroup.com/articles/listbox-dropdown/
  - title: Code
    hook: ""
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


      When designing with a **Picklist**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Picklist** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      A **Picklist** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the elements within the **Picklist**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, 'bin' icon for delete should be labelled 'delete'. not 'bin'.


      ### Key Binding


      An **Picklist** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
  - title: Status
    hook: status
status:
  design: Yes
  documentation: Yes
  html_css: Not applicable
  web_component: In queue
---
