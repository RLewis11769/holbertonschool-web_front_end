# CSS

## Tasks

#### 0
- Add 10 high-resolution images to images/ directory

#### 1-style.css
- Add **scroll-behavior** to html
    - Defines scrolling for click navigation not user scrolling

#### 2-style.css
- Set text **color**
- Hide items with **display: none**
    - Adds onto:
        - 1-style.css

#### 3-style.css
- Add custom variables to **:root** and use them
    - Adds onto:
        - 2-style.css

#### 4-style.css
- Set **font-family** to specify font options
    - Adds onto:
        - 3-style.css

#### 5-style.css
- Set **font-size** according to rem
    - Root element is computed relative to font size of html
    - 62.5% makes size computations comparable to px (meaning 1.6rem is roughly 16px)
    - Adds onto:
        - 4-style.css

#### 6-style.css
- Set **font-weight** to customize boldness
    - Adds onto:
        - 5-style.css

#### 7-style.css
- Add Google Fonts (don't need to add anything)
    - Adds onto:
        - 6-style.css

#### 8-style.css
- Set **line-height** to customize distance between lines of text (here, with distance in rem)
    - Adds onto:
        - 7-style.css

#### 9-style.css
- Remove default decorations for links with **text-decoration: none**
    - Adds onto:
        - 8-style.css

#### 10-style.css
- Set  **text-align** to center
    - Adds onto:
        - 9-style.css

#### 11-style.css
- Set **text-transform** to customize capitalization
    - Adds onto:
        - 10-style.css

#### 12-style.css
- Set **margin** to create space around element outside any defined borders
    - 1 value: all
    - 2 values: top/bottom left/right
    - 3 values: top left/right bottom
    - 4 values: top right bottom left
    - Adds onto:
        - 11-style.css

#### 13-style.css
- Add pseudo-classes for anchor elements
    - **:link** - unvisited link
    - **:visited** - link that has been clicked on
    - **:hover** - element as it is being moused over (must be after link and/or visited because it is overridden)
    - **:active** - element as it is being clicked on
    - Adds onto:
        - 12-style.css

#### 14-style.css
- Normalize file to render elements consistently on all browsers according to standards
    - Adds onto:
        - 13-style.css

#### 15-style.css
- Set universal **box-sizing** so width and height aren't affected by padding or borders
    - Should also target :before and :after to cover pseudo elements
    - Adds onto:
        - 14-style.css

#### 16-style.css
- Set **margin-left** and **margin-right** to auto to center margins
    - Adds onto:
        - 15-style.css

#### 17-style.css
- Set **padding** to create space around element inside any defined borders
    - 1 value: all
    - 2 values: top/bottom left/right
    - 3 values: top left/right bottom
    - 4 values: top right bottom left
    - Adds onto:
        - 16-style.css

#### 18-style.css
- Style navigation bar
    - Set item display to inline-block so blocked in horizontal line not vertical
    - Set link display to block so takes up full line width not only necessary width
    - Set **float** so other elements wrap around (float is **how** elements float)
    - Set specified **letter-spacing**
    - Adds onto:
        - 17-style.css

#### 19-style.css
- Style columns and lists in grid
    - Use ul.row selector to select all ul elements with row class
    - Adds onto:
        - 18-style.css

#### 20-style.css
- Add element after every instance of row class with **::after** selector
    - Usually directly after but on next line in this instance because width
    - Requires **content** property (so blank if just want to style)
    - Set display to table to format in tabular manner or add space
    - Set **clear** to both to stop other elements from floating (clear is **which** elements float)
    - Adds onto:
        - 19-style.css

#### 21-style.css
- Select all classes matching pattern with [class^='col-']
    - Adds onto:
        - 20-style.css

#### 22-style.css
- Add theme/dark mode with html[data-theme='dark']
    - Always dark in this case, would typically toggle between light and dark
    - Override :root variables
    - Adds onto:
        - 21-style.css

#### 23-style.css
- Select all svg elements where parent is .social-link element with **> selector**
    - Adds onto:
        - 22-style.css

#### 24-style.css
- Style links/list/grid in section
- Add pseudo-classes for user action on class
    - **:hover** - element as it is being moused over
    - Adds onto:
        - 23-style.css

#### 25-style.css
- Style buttons
    - Adds onto:
        - 24-style.css

#### 26-style.css
- Set **border-radius** to round border edges
- Style HTML tag
    - Adds onto:
        - 25-style.css

#### 27-style.css
- Set **background-size** for image or to fill background with background-color
    - 1 value: width height:auto
    - 2 values: width height
    - Adds onto:
        - 26-style.css

#### 28-style.css
- Set **postion** of elements
    - **relative** - relative to normal position
    - **absolute** - relative to nearest positioned ancestor or document body
    - Adds onto:
        - 27-style.css

#### 29-style.css
- Select element before element with **::before** selector
    - Adds onto:
        - 28-style.css

#### 30-style.css
- Style images
    - Crop/hide content outside of designated area with **overflow: hidden**
    - Set **object-fit** to resize content to fit height/width container (**cover** maintains aspect ratio)
    - Set **z-index** to specify stack order (larger number in front of smaller number as long as positioned/flex)
    - Set opacity of color with rgba(red, green, blue, opacity between 0 and 1)
    - Adds onto:
        - 29-style.css

#### 31-style.css
- Add unicode content to ::before selector
    - Adds onto:
        - 30-style.css

#### 32-style.css
- Add transitions and animations
    - Set **transform** to modify coordinate space (in this case shrink/grow using **scale**)
    - Set **transition** to change property values smoothly rather than instantaneously
        - 4 shorthand values: property duration timing-function delay (in order but don't need all)
    - **transition-property** - properties to affect separated by comma
    - **transition-duration** - length of time of transition
    - **transition-timing-function** - acceleration curve / speed can vary
    - **transition-delay** - length of time before starting
    - Adds onto:
        - 31-style.css

## Learning Objectives

- What are selectors, properties, and values
- What is the difference between block and inline styling
- How to ensure consistency across all browers (CSS reset)
- How to setup CSS variables
- What are the differences between inline, embeded and external CSS
- How grid systems work (with floats)
- What are the differences between icons webfonts and SVG icons
- What are the differences between pseudo-classes and pseudo-elements
- How to make background gradients
- How to animate elements in CSS
- How to transform (2d, 3d) elements
- What vendor prefixes are
