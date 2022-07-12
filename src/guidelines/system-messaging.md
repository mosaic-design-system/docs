---
title: System messaging
order: 22
toc: true
---
## Introduction

Sometimes, you need to communicate directly with a user. Direct communication is different to the normal ways of communicating with a user (labels, icons, buttons, components) - a direct communication is delivered through a system message. These messages are actual chunks of copy that form sentences and paragraphs, where something cannot be communicated easily without essentially 'speaking' to the user.

There are many ways to engage with users through system messaging. It could be a global message to indicate that some essential maintenance to your product has been scheduled, or a simple message to inform a user that a report is now ready. Mosaic employs three primary methods of communicating with its users, that each have their own components and use cases. In Mosaic, you can find:

* **Alerts**
* **Snackbars**
* **Dialogs**

Continue reading to learn about each component, and when you should use them. You can visit the component's page directly to learn about how you should use them. You should also make yourself familiar with Mosaic's [Tone of Voice](/guidelines/tone-of-voice) and review the [Style Guide](/guidelines/style-guide) to learn how to effectively write the copy in these messages.

## Alerts

An **Alert** provides feedback to users which allows them to understand a state that affects the entire system, the page, or an input. They are static messages, which can be dismissed and can also contain a single action. For more information on the component, please refer to **[Alerts](/components/alerts)**.

**Alerts** can come in one of the following forms:

### Banner

A system or product-level message that is not specific to an action. This type persists until and may be actionable. Place across the top of the content area to which it relates or for system-level banners, full width, across the top of the screen above the main navigation bar.

\[example screenshot]

There are a number of places you might use a banner:

* Notifying the user of downtime
* Announcing the latest version release

A banner **Alert** can also be displayed at form or input-level, specific to an action or task. This type persists until the message is resolved and may be actionable. Ensure that these are placed near their related items. **Alerts** at this level must not be confused with form validation, as form validation is tied to individual form fields and use an input’s help text.

\[example screenshot]

This type of **Alert** could be used to:

* Tell a user their new password does not meet the password criteria
* Tell a user that one of their selections in a form conflicts with another, i.e. a chosen date and time is already in use

### Notification

A system or product-level message that informs users that a background activity has been performed. This type persists until dismissed by the user and may be actionable. Notifications must be placed in the top right-hand corner of the screen, but must not obscure navigation or any other important information or actions. 

\[example screenshot]

A notification might be used for:

* Tell a user that a new task has arrived
* Tell a user that an import has finished

## Snackbars

A **Snackbar** informs users of something that **has** or **will be** performed by the software. They appear temporarily and disappear automatically without user interaction. **Snackbars** are a subtle way of providing feedback as to the status of particular actions, without entirely pulling the user's focus. **Snackbars** are always shown as a footer.

The **Snackbar** footer must be positioned at the bottom centre of a page or sheet. In a page a **Snackbar** has a fixed width, but in a side sheet it would occupy the full width. They are short, time-based messages that fade in and out automatically. However, they can be actionable, i.e. contain a button. Where this is the case, they always persist until the user has interacted with them.

For more information on the component, please refer to [Snackbars](/components/snackbar).

\[example]

**Snackbars** can be used for a multitude of reasons, for example:

* Your changes have been successfully saved
* The report has finished running
* X has been deleted (and include an undo button in the **Snackbar**)

## Dialogs

A **Dialog** is used to inform users when a particular action has to be carried out. They interrupt the current workflow until its content is reviewed or interacted with. Dialogs can contain critical messages, require decisions, provide non-critical information, or capture data. For more information on the component, please refer to [Dialogs](/components/dialog).

**Dialogs** can come in one of two ways:

### Message

This type of **Dialog** must always be positioned front and centre of a page. The page is obscured using an overlay, so that the user is focused on the content of the **Dialog**. A user cannot return to their previous workflow until the message has been reviewed or dismissed by the user. The size of the **Dialog** should be appropriate to the content being displayed so that scrolling is not necessary.

\[example]

For example, you could use a message **Dialog** to:

* Warn the user what their action will do
* Ask the user to confirm their choice
* Explain something in detail

### Form

As above, this type of **Dialog** must always be positioned front and centre of a page, but an overlay is not required. A user cannot return to their previous workflow until the information requested has been supplied or dismissed by the user. The size of the **Dialog** should be appropriate to the content being displayed and scrolling should be avoided.

\[example]

A form can be used for things like:

* Enter some information for a record being created
* Ask for some supplementary information