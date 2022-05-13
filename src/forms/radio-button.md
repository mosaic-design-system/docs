---
title: Radio button
toc: true
chips:
  - "HTML/CSS: Available"
  - "Web Component: Available"
tabs:
  - title: Usage
    body: >-
      ## What is a Radio button?


      A **Radio button** is a visual component that indicates if something is selected or not. A **Radio button** differs from a [**Checkbox**](/forms/checkbox) in that only one **Radio button** item can be selected from a list at any time.


      - - -


      ### When, and why?


      A **Radio button** can be used in forms where it is only possible to select one item, but the user has multiple choices.


      - - -


      ## Radio button types


      **Radio buttons** can be unselected or selected. Active, Disabled, Read-only and Focussed states also apply to both of the above.


      | **Type**                   | **Description** |                                                                                                                                                                                                                       

      | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

      | With label                 | This is the default and should be used for multiple choice lists and parent-child multiple choice lists                                                                                                                                        |

      | Without label              | This should only be used within a selector column of a table where the column header becomes the label for the radio button                                                                                                                   |

      | Radio choice button        | This is a container and the Radio button is within the container. This is used where a label isn’t enough information and more text is required. This instead has both a title and subtitle accompanying the Radio button.           |

      | Radio choice button visual | This similar to the radio choice button, however there is an icon positioned to the left-hand side and the Radio button itself is aligned to the right hand side.  This should only be used where the icon helps the user to make a selection |


      - - -


      ## Using a Radio button


      ### Where to use a Radio button


      **Radio buttons** are used when multiple options are available, no matter how they are linked. Only one **Radio button** can be selected from a list at any one time, so if the user selects an option in the list, other options will remain unselected or automatically become unselected.


      Additionally, **Radio buttons** should only be used within forms to collect data. Other areas of your product where you would be tempted to use them (i.e. choosing from a list of settings in a configuration page) should use components such as [**Buttons**](/components/buttons) instead.


      ### Multiple-selects


      Do not use a **Radio button** if a user can select multiple options from a list. In this case, [**Checkboxes**](/forms/checkbox/) or a [**Toggle switch**](/forms/toggle-switch) /[Component guidelines pending] should be used instead. **Radio buttons** only allow the user to select a single item from a set, whereas **Checkboxes** allow the user to select multiple options.
  - title: Code
  - title: "Accessibility "
  - title: Status
status:
  design: Yes
  documentation: Yes
  html_css: Available
  web_component: Available
---
