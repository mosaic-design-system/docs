---
title: Forms
order: 55
toc: true
tabs:
  - toc: true
    title: Overview
    body: >-
      ## Introduction


      A form is a group of related fields that allow users to provide data or configure options. They are used for submitting data to a server. They are an online representation of traditional paper forms.


      ## Anatomy of forms


      All forms contain these elements:


      * **Form fields** – Allows you to capture data from users. They appear in forms, presented in dialogs, drawers, or pages.

      * **Actions** – Allows users to submit a form.

      * **Validation** – Ensures the data submitted by the user conforms to acceptable parameters. For more information, refer to Validation \[link to Validation tab].


      \[example]


      ## Anatomy of form fields


      Form fields contain these elements:


      * **Labels** – Inform users what the corresponding input fields mean.

      * **Inputs or controls** – Enable users to provide information. This can be captured through a variety of different methods such as text inputs, checkboxes, etc.

      * **Help text** – Provides assistance on how to fill out a field. Helper text is optional.

      * **Placeholder text** – Hints at what goes into a field. Placeholder text is optional.

      * **Mandatory indicator** – Indicates that fields are required.


      \[example]


      ## Using forms


      ### Keep it simple


      When creating form, only ask for what’s really needed. Every extra field you add to a form will affect the success to completion. Always consider why you are requesting certain information from the user and how you will use it.


      ### Single columns


      Forms must be displayed in single columns. One of the problems with form fields in multiple columns is that your users are likely to interpret the fields inconsistently. If a form has horizontally adjacent fields, the user must scan in Z patterns, slowing the speed of comprehension and muddying the clear path to completion. But if a form is in a single column, the path to completion is a straight line down the page.


      Fields must be stacked vertically, and it must be clear when looking at a form field what the expected input should be. This is known as Field affordance. For more information, refer to Field affordance \[link to Field affordance tab]. The only exception to stacking vertically is when there are related fields such as Forename and Surname. When there is a clear and obvious connection, then it is acceptable to place them adjacent to each other.


      ### Presenting forms


      Forms can be presented to users in a dialog, a side drawer, or a full page. Each method has its own use case, which is explained below.


      * **Dialog forms** - A dialog should only be used for short forms, where a limited amount of information is required. Never use a scroll bar in a dialog.

      * **Drawer forms** – A side drawer should only be used for medium-sized forms, where the amount of information you want to capture exceeds the recommendation for a dialog. Drawers can also have scroll bars, so vertical scrolling means more fields can be presented.

      * **Page forms** – A page should only be used for long forms or where forms are split into multiple sections. Where this is the case, a tabbed UI can be used to separate the data collection.

      * **Multiple step forms** – A form where the primary action takes the user a step forward in a process, like a wizard. This type of form can be presented as a dialog, drawer, or page.


      ### Mandatory fields


      When fields are mandatory, they show an asterisk next to the field label. Where this is the case, we must also include a footnote labelled “*Required field(s)” to explain what the asterisk means. This should be shown in the form footer, adjacent to the action buttons. The following rules apply to showing the required fields footnote:


      * **No required fields** - A form that has no required fields. No footnote required.

      * **Minimal required fields** - A form where only a small number of fields are required. Typically 1 or 2. In this instance the required fields footnote must be present.

      * **Majority required fields** - A form where most of the fields are required. In this instance only the optional fields would be indicated.

      * **All required fields** - A form where all fields are required. In this instance the required fields footnote must be present.


      ### Keyboard friendly


      Make sure forms are keyboard friendly. Users should be able to focus on and edit every field using only the keyboard. Many users will also want to tab through each field, without leaving their keyboard, so it’s important that tab orders are logical.


      ### Action buttons


      Form action buttons must always be shown in a consistent position across all forms. They must also be ordered with the primary action positioned on the right, then the secondary or negative actions with the most negative on the left, and finally the Cancel or Close actions positioned in the leftmost position. The following rules also apply depending on how a form is being presented:


      * **Dialog forms** – Buttons must always appear in the bottom right-hand corner of the dialog footer and must be sized according to their label and icon.

      * **Drawer forms** – Buttons must always appear in the drawer footer and must be sized to fit the available space.

      * **Page forms** – Buttons must always appear in the right-hand side of the page header and must be sized according to their label and icon.


      ### Disabled fields vs. read-only fields


      There has always been confusion when it comes to disabled fields and read-only fields. What's the difference? When do we use them?


      * **Disabled** – Fields that are not editable initially, but are enabled when users interact with the screen. They have a grey background to differentiate them from editable fields. This changes to white once they are enabled.

      * **Read-only** –  Fields that are not editable, but their data is visible and can be copied. In terms of style, they look the same as editable fields.


      ### Field sizes


      Some form fields are available in a more compact size so that they can be used where space is limited or next to small buttons. For example, in table or Applet headers. Please consult the [UX team](mailto:ux@oneadvanced.com) when considering the use of small fields.
  - toc: true
    title: Field affordance
    body: >-
      ### Uh-oh! Looks like we haven't finished building this page yet.


      Come back soon, and we'll have more exciting content to share.


      ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  - toc: true
    title: Validation
    body: >-
      ## What is Validation?


      **Validation** is when a user enters data, the form checks to see that the data is correct. If correct, the form notifies the application that the data can be submitted to the server; if not, it gives you an error message explaining what corrections need to be made.


      - - -


      ### When, and why?


      **Validation** is useful when you have a form where a particular criterion needs to be met (for example the amount of characters or specific fields that need to be filled out) in order for that data be submitted or in order to progress to the next step.


      For example, when you are logging into a product and you don't fill out the email field, then the **Validation** will show an error message explaining that you need to fill out the email field in order to continue.


      **Validation** isn't just to show people when they haven't completed something incorrectly, but in some cases to show them that they have completed something correctly.


      - - -


      ## Validation types


      The following **Validation** types are available, all of which allow you to include a subheading:


      | **Variant**                              | **Description**                                                           |

      | ---------------------------------------- | ------------------------------------------------------------------------- |

      | Form with red asterisk               | Shows that the form is mandatory and has Validation applied to it            |

      | Form with help text below                | Shows the user what form criteria they will have to complete to continue |

      | Form with red highlight                  | Shows the user which forms have failed Validation.                        |

      | Generic page error                       | Generic page errors will show if the data can't be submitted and why     |

      | Validation in sheet and/or applet footer | Shows validation within that sheet/applet before submitting information |


      - - -


      ## Using Validation


      ### Text validation


      Invalid text is **essential** for form fields as it helps the user to understand if something isn't right and gives them the opportunity to correct it.


      Where possible, you must show **Validation** (invalid) as soon as the user has completed an input so that they can correct as they go.


      Where necessary, showing the valid text is the most useful for fields that require special inputs, such as a password field.  Most other times you would not show valid text.



      ### Help text


      Help text should be considered part of your **Validation**. Giving help text below an input can provide useful additional information about what a field expects the user to enter. This type of information should be given as early as possible in the process. For example, if an input requires specific characters or length to be entered.


      The required or optional **Validation** should be considered part of your **Validation**.  If the majority of fields on the form are required (mandatory) then it is better to just show the optional ones. Similarly, if the majority of fields are optional, just show the required ones.
---
