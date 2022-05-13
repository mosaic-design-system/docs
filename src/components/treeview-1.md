---
title: Treeview
toc: true
chips:
  - "Web Component: In development"
tabs:
  - title: Usage
    body: "## What is a Treeview?


      A **Treeview** presents a hierarchical view of information by
      breaking them down into multiple levels of importance. The **Treeview**
      allows for different levels to be opened whilst the rest of the tree can
      remain collapsed, reducing the amount of space required, but maintaining
      the necessary information.


      - - -


      ## When, and why?


      A **Treeview** can be used for large sets of data which can be
      categorised into two or more levels, like a folder structure on a PC. For
      example, in Windows Explorer a file inside a folder would be on the second
      level of hierarchy, but a subsequent folder withi that second level would
      contain the data in the third level of hierarchy. This should be familiar
      to most users, as it is a method used across many different devices and
      provides a logical structure.\ 


      For example, a **Treeview** could be used for a large storage system
      in a application to provide solicitors with a way of managing different
      documents across a number of cases - the 'cases' would be the top level of
      a hierarchy, but the items within those cases would be in the second
      level.


      - - -


      ## Using a Treeview


      ### Not navigation

      \r


      **Treeviews** should not be used as an alterative form of
      navigation. They are purely reserved for the organisation of data - please
      refer to the various navigation components (such as the **Navigation**
      [**Bar**](/components/navigation-bar) or
      [**Header**](/components/navigation-header)) for our recommended
      navigation structure.


      ### Treeview content


      Content within a **Treeview** should have a natural hierarchy. A
      **Treeview** shouldn't be used if there isn't a natural hierarchy to the
      data, i.e. one item is definitively 'under' or a 'part' of another. If you
      simply want to hide certain portions of the data for the user, it would be
      more appropriate to use an [**Accordion**](/components/accordion) or
      [**Collapse**](/components/collapse).

      \r


      ### Expanding items


      You should ensure that the **Treeview** can be expanded to reveal
      the sub-items in the tree. When a level is expanded, then that level
      should be indeted to make it visually clear to the user that it is a
      separate level to the one above it.\ 


      ### Positioning levels


      When deciding the ordering of items in your **Treeview**, you should
      consider which items will be the most important or most accessed -
      especially if those items are multiple levels deep into the tree. These
      important items should be closer to the top of the **Treeview**, to
      prevent the user from spending too much time looking for their desired
      content.


      Similarly, make sure you don't overload the user. If the user has to
      search through too many levels, losing items will be very easy. We suggest
      that a **Treeview** should never have content more than four levels
      deep.\ 


      \r

      \r\n"
  - title: Code
  - title: Accessibility
  - title: Status
status:
  design: Yes
  documentation: Yes
  html_css: Available
  web_component: In development
---
