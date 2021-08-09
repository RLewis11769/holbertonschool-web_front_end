# Responsive Design

## Structure

- Used with:
    - HTML starter file
    - CSS starter file
    - 12 .jpg image files for pictures
    - 2 .png image files for logo

## Tasks

#### 01-styles.css, 01-index.html
- Update banner **background-position**, **background-size**, and **min-height**
    - My background does not look like their rendering but directions were followed
    - Adds onto:
        - HTML starter file
        - CSS starter file

#### 02-styles.css, 02-index.html
- Update **width** to **max-width** so element can shrink when browser window resized
    - Adds onto:
        - 01-index.html (only link rel='stylesheet' href changed)
        - 01-styles.css

#### 02-1-styles.css, 02-1-index.html
- Add media-queries or **@media** rules to apply different styles for different devices/add responsive breakpoints
    - Set **flex-direction** to place items in container while **display: flex**
    - @media sizes:
        - Extra large devices: none needed
        - Desktop/large devices: max-width: 992px
        - Tablet/medium devices: max-width: 767px
        - Mobile/small devices: max-width: 480px
        - **Note**: Should design mobile first meaning using **min-width**
    - Adds onto:
        - 02-index.html (only link rel='stylesheet' href changed)
        - 02-styles.css

#### 03-index.html, 03-styles.css
- Add responsize breakpoints for images
    - Use website to generate breakpoints and add new images for 4 existing .jpg files
    - Replace existing HTML for each image with generated HTML from HTML5 img tag example
    - Adds onto:
        - 02-1-index.html
        - 02-1-styles.css (nothing changed)

#### 04-index.html, 04-styles.css
- Add clickable icon to show/hide navigation using HTML/CSS (as opposed to JavaScript)
    - Add **input** and **label** for **checkbox** in HTML
    - Hide nav bar while mobile
    - Set **flex** to 1 so all elements are length of box
    - Adds onto:
        - 03-index.html
        - 03-styles.css

#### 05-index.html, 05-styles.css
- Add hamburger icon (that currently does nothing)
    - Create block at span for center line
    - Create ::before and ::after for top and bottom lines
    - Adds onto:
        - 04-index.html (only link rel='stylesheet' href changed)
        - 04-styles.css

#### 06-index.html, 06-styles.css
- Change elements based on menu-btn:checked
    - **display: block** and **max-height: 100%** when preceded by checked element using **~ selector**
        - As opposed to no display and max-height of 0 as set up in 04-styles.css
        - **~ selector** "connects" checkbox and .navbar-menu
    - Transform ::before and ::after into x when clicked/displaying for visual cue for checkbox checked or not
    - Adds onto:
        - 05-index.html (only link rel='stylesheet' href changed)
        - 05-styles.css

#### 07-index.html, 07-styles.css
- Update font sizes for different devices
    - Because REM based on 62.5%, can just update percentage
    - This is simplest way but more complex options can have more granular control
    - Adds onto:
        - 06-index.html (only link rel='stylesheet' href changed)
        - 06-styles.css

#### 08-index.html, 08-styles.css
- Update how "Works" section is viewed in mobile
    - Rearranging lost text visibility so need to move text position
    - Adds onto:
        - 07-index.html (only link rel='stylesheet' href changed)
        - 07-styles.css

#### 09-index.html, 09-styles.css
- Update how footer is viewed in mobile
    - Rearranging squished elements so need to update padding
    - Adds onto:
        - 08-index.html (only link rel='stylesheet' href changed)
        - 08-styles.css

#### 10-index.html, 10-styles.css
- Update margin/padding on banner
    - Adds onto:
        - 09-index.html (only link rel='stylesheet' href changed)
        - 09-styles.css

## Learning Objectives

- Why you should use mobile-first design
- What are media-queries and how to use them
- What are the best sizes to use for responsive web design
- How to make a website responsive
- The differences between responsive and adaptive design
- CSS units that are used to make elements flexible
