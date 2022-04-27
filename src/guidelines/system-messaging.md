---
title: System Messaging
order: 22
toc: true
---
## Introduction

There are many ways to engage with users through system messaging. This might be a global message to indicate that some essentials maintenance to your product has been scheduled or a simple message to inform a user that a report is now ready.

It is important to understand that Mosaic has different components to handle messaging and that each one has its own particular use cases. Messaging is available in the following ways:

* Alerts
* Snackbars
* Dialog

## Alerts

An Alert provides feedback to users which allows them to understand a state that affects the entire system, the page, or an input. They are static messages, which are dismissible and can also contain a single action. Alerts can be implemented using the following methods:

### Banner

A system or product-level message that is not specific to an action. This type persists until dismissed by the user and may be actionable. Place across the top of the content area to which it relates or for system-level banners, full width, across the top of the screen above the main navigation bar.

\[example screenshot]

### Inline

Alerts can also be displayed at form or input-level, specific to an action or task. This type persists until the message is resolved or dismissed by the user and may be actionable. Place near their related items. Alerts at this level must not be confused with form validation. Form validation is tied to individual form fields and use an input’s help text.

\[example screenshot]

For more information, refer to Alerts \[link to Alerts page].

## Snackbars

A Snackbar informs users of something that has or will be performed by the software. They appear temporarily and disappear automatically without user interaction. Snackbars are an unintrusive way of providing feedback as to the status of particular actions. Snackbars are implemented as follows:

### Footer

Snackbars must be positioned at the bottom centre of a page or sheet. In a page a Snackbar has a fixed width, but in a side sheet it would occupy the full width. They are short, time-based messages that fade in and out automatically. However, they can be actionable, i.e. contain a button. Where this is the case, they always persist until the user has interacted with them.

\[example]

For more information, refer to Snackbars \[link to Snackbars page].

## Dialogs

A Dialog is used to inform users when a particular action has to be carried out. They interrupt the current workflow until its content is reviewed or interacted with. Dialogs can contain critical messages, require decisions, provide non-critical information, or capture data. Dialogs are implemented as follows:

### Message

This type of Dialog must always be positioned front and centre of a page. The page is obscured using an overlay, so that the user is focused on the content of the Dialog. A user cannot return to their previous workflow until the message has been reviewed or dismissed by the user. The size of the Dialog should be appropriate to the content being displayed and scrolling should be avoided.

\[example]

### Form

As above, this type of Dialog must always be positioned front and centre of a page, but an overlay is not required. A user cannot return to their previous workflow until the information requested has been supplied or dismissed by the user. The size of the Dialog should be appropriate to the content being displayed and scrolling should be avoided.

\[example]

For more information, refer to Dialogs \[link to Dialogs page].