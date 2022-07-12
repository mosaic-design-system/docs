---
title: Ratings
toc: true
chips:
  - "HTML/CSS: Available"
storybook: ""
tabs:
  - title: Usage
    body: >+
      ## What is a Rating?


      **Ratings** provide a way for users to evaluate or assess content. User-submitted **Ratings** can help users evaluate whether or not something is fit for purpose.


      - - -


      ### When, and why?


      A **Ratings** system is useful when you need users to engage with your product to express their emotion towards a particular item, or make more complex decisions by using other users' feedback. **Ratings** are an invaluable source of feedback that can help surface issues with products and inform innovation.


      - - -


      ## Rating types


      The following **Rating** types are available:


      | **Variant** | **Description**                                                               |

      | ----------- | ----------------------------------------------------------------------------- |

      | **Star**    | The stars give a 1-5 scale rating                                             |

      | **Thumbs**  | The thumbs up and down rating collects a binary positive or negative response |

      | **Heart**   | Using the heart allows you collect and count only positive responses          |

      | **Faces**   | This scale collects a satisfaction or emotion rating                          |


      - - -


      ## Using Ratings


      ### Rating Types


      The star (1-5 scale) type works well when you want feedback on a new feature or if the rating is to be shared with other users e.g. '145 rated ‘X’ 4/5. 


      The Faces (satisfaction scale) are directly liked the user emotion and would be best suited when you are asking the user about their overall experience on a product or workflow.


      Thumbs (like or dislike) and hearts should be seen as reactional feedback and given in direct response to something intending to give instant results. For example, a blog post, a help document, a diagram, or image. This type of feedback can be used to promote content or help get high-level insights


      Once you have chosen a **Rating** type, you should stick to that type throughout your product. Comparing data from different source types can be difficult, and mixing different sources of data collection can lead to poor quality data.


      ### Rating frequency


      **Ratings** are an excellent source of quantifiable feedback, but user uptake can generally be harmed by bombarding the user with constant requests for feedback. If you make use of the **Ratings** component, take care not to use it too frequently. Remember that there are other sources of user feedback, such as /\[User Research](link to user research guideline).


      **Ratings** can be used in multiple ways to either collect or present different types of data. There are no hard set rules on using the **Ratings** components, except that you should keep it consistent throughout your product and do not bombard the user with too many on the screen at one given time.

    icon: file_invoice
    toc: true
  - title: Code
    hook: ""
    icon: source_code
    toc: false
  - title: Accessibility
    body: >-
      ### Component accessibility


      This component has been built to meet the current WCAG AA 2.1 guidelines. We also test these components against the guidelines before release.


      ### Aria tags


      Every component in Mosaic requires an appropriate Aria tag to ensure that screen readers can effectively parse the page. Aria tags are provided as part of Mosaic. Please do not override these without good reason.


      Ensure that Aria tags are used as appropriate signposts throughout the product.


      ### Colour Combinations


      When designing with **Ratings**, you should be mindful of the colour combinations you are using. The components have been designed with this in mind, but if you are using colours that are not part of the default component, please ensure that there is a clear colour contrast within the parts of the component and between the **Ratings** and the background it is on. To check the contrast, please use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).


      ### Focus state


      **Ratings** needs to have a focus state - a focus state is when you tab into an element to interact with it. Ensure that users can use their keyboard to focus on the **Ratings**.


      ### Icons


      An icon needs to have underlying code that describes what action the icon takes. the labels should be specific - for example, a 'bin' icon for delete should be labelled 'delete' not 'bin'.


      ### Key Binding


      **Ratings** needs to be able to be interacted with via a keyboard. Where possible we will provide key-binds within our Mosaic component or there will be default HTML ones. If this isn't the case then please implement logical key-binds for all intractable components.


      ### Movement/Animation


      Please refer to the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=129%2C131%2C133%2C136%2C141%2C145%2C147%2C1412%2C211%2C212%2C231%2C241%2C245%2C251%2C254%2C312%2C322%2C332%2C411%2C412%2C413#three-flashes-or-below-threshold) for the time-based considerations for animations.
    icon: web_accessibility_1
    toc: true
  - title: Status
    hook: status
    toc: false
code:
  example: <button class="mcc-button">Button text</button>
  body: >-
    ### Uh-oh! Looks like we haven't finished building this page yet.


    Come back soon, and we'll have more exciting content to share.


    ![Drawing of a person building a progress bar with blocks.](/assets/img/downloading.svg "Just a few more pieces to go before it is ready...")
  preview:
    variants: []
status:
  design: Yes
  documentation: No
  html_css: In queue
  web_component: In queue
---
