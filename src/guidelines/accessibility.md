---
title: Accessibility
order: 9
toc: true
tabs:
  - title: Overview
    body: "## Accessibility in Mosaic


      The Mosaic team are passionate about making sure every one of our
      products is fully inclusive and offers the very best user experience for
      all of our users.\ 


      A great path to achieving usability across the whole spectrum of our
      users is following the WCAG 2.1 AA guidelines. We are trying our hardest
      to follow these guidelines as closely as we can to ensure Mosaic is as
      accessible as possible, but in some areas this is not currently possible
      due to things like technology limitations. Making content accessible is a
      continual process, and we are working towards making every single
      component, pattern and guideline as accessible possible – as such, if
      something does not currently match these guidelines, you can be sure that
      a plan to achieve that goal is in place across the whole system. Anywhere
      we are not following the guidelines in our products is spelled out in our
      accessibility statements, with a clear plan for how and when we will
      achieve it.


      - - -


      ## Why is accessibility so important?


      By not working to make your product as accessible as possible, you
      are alienating some potential users of your products. WCAG AA 2.1 is a
      worldwide industry standard, and accessibility statements are an
      incredibly useful tool to be transparent about your efforts to be as
      inclusive as possible – as such, we want to make sure that we are ready to
      show the world how accessible we are, and where we are planning to improve
      and when. This feeds into our ethos that every user is important, no
      matter what their accessibility needs are.


      Remember, Web accessibility is **essential** for people with
      disabilities, but it's **useful** for everyone.


      - - -


      ## So, what do we mean by accessible?


      To create accessible products, we must first understand why it's
      important. To Advanced, an accessible product aims to achieve the
      following two principles:


      * We endeavour to try and give every user the same benefits,
      regardless of ability or who they are

      * We want our products to be able to adapt to any type of user in
      any environment, and in any context

      \ \ 

      Accessibility does just encompass people who struggle with vision,
      or can't use a mouse. Often, designers fall into the trap of only thinking
      about permanent physical disabilities when making decisions about their
      designs. It's important to remember there are other forms of disability
      which are not only about someone's physical capabilities, but also their
      environment or situation. Accessibility can also apply to short-term,
      temporary and/or invisible factors.


      The four types of disability that need to be considered are as
      follows:


      | **Type** | **Description** |

      | --- | --- |

      | **Situational** | Examples of this include a brightly lit room or
      area where a person with 'typical' vision is working could affect how easy
      a screen is to view. Similarly, someone in a busy office may not be able
      to listen to audio or have their sound on. |

      | **Temporary** | An injury to a hand or an arm (or even an eye!)
      may prevent someone from using a mouse, keyboard, or screen for a short
      time, but they will be able to use them once they have recovered. |

      | **Permanent** | This is what most of us think of when talking
      about \"disability.\" An accessibility issue that affects how the user can
      interact with our software on a permanent basis. This covers things like
      blindness, dyslexia, and MS. |

      | **Invisible** | Some accessibility issues are not always visible,
      this includes diseases like chrons, colitis, mental health issues, types
      of pain and many more. When looking at someone with an invisible issue,
      you may not be immediately obvious that they have accessibility needs. |


      It is important to note that accessibility issues do not always fall
      into one category. For example, someone recovering from a brain injury
      would have an issue that was both invisible and temporary.


      \r

      Accessible design doesn't just offer a better experience to users
      with accessibility considerations; a truly good user experience is fully
      inclusive for everyone **no matter who they are**.\r\n"
  - title: Keyboards
    body: "For many users, keyboard navigation is essential to their daily use of
      Advanced products. Some users are limited to keyboard-only navigation in
      web products due to a variety of reasons, such as using voice control for
      their device or having poor fine motor control with their hands. This is
      not the only reason, however – some users simply prefer it!\r


      ## Navigation\r


      Keyboards can be both essential to navigation on a website, but also
      can solve some simple UX problems. Imagine a data entry clerk - they may
      need to enter 100+ transactions every single day.  They are using a piece
      of software that means that after every few steps in the data entry, they
      have to stop typing, grab their mouse and move the cursor to a new point
      on the page, or click a button to continue their process.  Not ideal,
      right? This is what's known as \"dual-interaction\" – the user needs to
      use two different devices to interact with the page. On the one hand, this
      is an irritating and repetitive task that the user has to take regardless
      of their accessibility requirements, but on the other hand a user that
      **can't** use a mouse finds themselves stuck – they can't complete the
      task. To rectify these, the solution is a simple step of allowing the user
      to use the tab key to move the focus on the screen and use the enter key
      to function as the click of a mouse.\r


      The Mosaic team are dedicated to ensuring this type of
      dual-interaction is not required, and are making every effort to ensure
      our components and pages are keyboard friendly.\r


      Every navigational element and function should be made accessible
      via the keyboard.  This includes (but is not limited to):


      \r

      - Making sure everything can be accessed using the tab (or arrow)
      keys

      \r

      - Setting the tab sequence to be logical and correct

      \r

      - Setting events on actions that can be triggered using the keyboard
      (onClicks etc.)\r

      - Making sure you can skip repetitive elements on the page (for
      example the navigation).\r


      ## Focus\r


      It is vital that a clear focus indicator is made available to all
      navigable content so that when the user is using a keyboard to move around
      the page or product, a clear indication of where they are is necessary. \r


      Mosaic components have this feature built in to ensure all
      components have an obvious focus indicator - in our case, a change in
      border colour.\r


      ## Key Binding\r


      Throughout the Mosaic Design System, we aim to provide a standard
      suggestion for key binding in each component – however, it will be down to
      you and how you implement each component to ensure correct tab sequences
      and page layouts. We cannot cater for every eventuality, and this will
      require some use of good old common sense.\r


      The use of other keyboard shortcuts can be used - such as something
      like Ctrl+K to trigger other actions, but it should never use 'common'
      keyboard commands to do something other than its common use. For example,
      you should not use Ctrl+P to trigger an action when this is more commonly
      used Print or Print screen.\r

      \r


      ## Keyboard traps\r


      Another key aspect to consider for keyboard users is the 'keyboard
      trap'. A keyboard trap is when a user's focus (i.e. what is currently 'in
      focus' while navigating with a keyboard) cannot be moved with a keyboard.
      To move the focus, the user will **have** to use another method, like a
      mouse.\r


      You must ensure that if focus can be moved to a component using the
      keyboard, then it must **also** allow focus to be moved away using the
      keyboard.  If the method of moving away requires anything more than simple
      arrow or tab navigation, then the user must be informed of this method.
      However, you should try your hardest to avoid any such situations. They
      should be a last resort.\r\n"
---
