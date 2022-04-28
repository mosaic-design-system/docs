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

      | Default      | default **Picklist**               |

      | With filters | adds filters to each **Picklist** |


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
    body: BLAH
  - title: Accessibility
  - title: Status
    hook: status
status:
  design: Yes
  documentation: Yes
  html_css: Not applicable
  web_component: In queue
---
