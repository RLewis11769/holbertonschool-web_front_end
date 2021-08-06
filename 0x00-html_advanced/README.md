# Advanced HTML

## Structure

### Final
- index.html
- styleguide.html

### Building a basic website
- #-index.html

### Building a reference guide
- #-styleguide.html

## Tasks

#### 0-index.html
- Add **DOCTYPE**
- Add **html** tag with language and direction attributes

#### 1-index.html
- Add **head** and **body** tags
    - Adds onto:
        - 0-index.html

#### 2-index.html
- Add **meta** tags to define metadata (always in head)
- Add **title** tag to define text in title bar
- Add images and **link** tags for images in head
    - Adds onto:
        - 1-index.html

#### 3-index.html
- Add **header** and **footer** tags
- Add **main** tag
    - Adds onto:
        - 2-index.html

#### article.html
- Add **aside** tag to separate indirectly-related content
    - Does not do anything special - used for organizational purposes
    - Adds onto:
        - 3-index.html

#### 5-index.html
- Add **section** tags
    - Thematic grouping of related content usually with header rather than generic container (as opposed to div)
    - Does not do anything special - used for organizational purposes
    - Adds onto:
        - 3-index.html

#### 6-index.html
- Add **article** tags for self-contained content
    - Does not do anything special - used for organizational purposes
    - Adds onto:
        - 5-index.html

#### 7-index.html
- Add **nav** tag to define set of navigation links
    - Does not do anything special - used for organizational purposes
    - Adds onto:
        - 6-index.html

#### 8-index.html
- Add **h1** tag
    - Adds onto:
        - 7-index.html

#### 9-index.html
- Add **h2** tags
    - Adds onto:
        - 8-index.html

#### 10-index.html
- Add **h3** tags
    - Adds onto:
        - 9-index.html

#### 11-styleguide.html
- Reference for h1 through h6 tags
    - Adds onto:
        - 3-index.html

#### 12-index.html
- Add **p** tags
    - Adds onto:
        - 10-index.html

#### 13-styleguide.html
- Reference for paragraphs
    - Adds onto:
        - 11-styleguide.html

#### 14-index.html
- Add **span** tag to separate/group elements (similar to div tag but for inline elements)
    - Does not do anything special - used for organizational purposes
    - Adds onto:
        - 12-index.html

#### 15-index.html
- Add **div** tags to separate/group elements (similar to span tag but for block elements)
    - Generic container rather than thematic grouping (as opposed to section)
    - Does not do anything special - used for organizational purposes
    - Adds onto:
        - 14-index.html

#### 16-index.html
- Add header/div tags to organize sections
    - Adds onto:
        - 15-index.html

#### 17-index.html
- Add comments
    - Adds onto:
        - 16-index.html

#### 18-index.html
- Add anchor to span to redirect to root folder (wrap span in '/' link)
    - a href='/' indicates path on different page relative to root directory
    - Adds onto:
        - 17-index.html

#### 19
- Copy data into additional files with different titles (Add links to these files in 22)
    - Files:
        - about.html
        - latest_news.html
        - contact.html
    - Copied:
        - 18-index.html

#### 20-index.html
- Add anchor to section of same page
    - a href='#id' indicates id on same page (this page doesn't include ids so doesn't do anything)
    - Adds onto:
        - 18-index.html

#### 21-index.html
- Add anchor to different websites
    - a href='https://website' indicates path to outside website
    - Adds onto:
        - 20-index.html

#### 22-index.html
- Add anchor to different pages within website
    - a href='page.html' indicates path to subpage/content page
    - Adds onto:
        - 21-index.html

#### 23-index.html
- Add anchor to top of page
    - a href='#' indicates top of current page
    - Adds onto:
        - 22-index.html

#### 24-index.html
- Add unordered list for navigation to nav and footer (for vertical list of elements)
    - Adds onto:
        - 23-index.html

#### 25-index.html
- Add unordered list for terms of use to footer
    - Adds onto:
        - 24-index.html

#### 26-styleguide.html
- Reference for lists
    - **Unordered list**: ul li
    - **Ordered list**: ol li
    - **Definition list**: dl dt-dd
    - Adds onto:
        - 13-styleguide.html

#### 27-index.html
- Add horizontal rule to draw dividing line/thematic break
    - Adds onto:
        - 25-index.html

#### 28-styleguide.html
- Reference for horizontal rule hr
    - Adds onto:
        - 26-styleguide.html

#### 29-index.html
- Add **blockquote** and **cite** tags for quotes and citations
    - Adds onto:
        - 27-index.html

#### 30-styleguide.html
- Add reference for quotes
    - **q**: inline quotations with included ""
    - **blockquote**: block level quotations
    - Adds onto:
        - 28-styleguide.html

#### 31-index.html
- Add **address** tag to indicate italicized contact information
- Add **small** tag to indicate italicized side comment one font size smaller
    - Adds onto:
        - 29-index.html

#### 32-styleguide.html
- Reference for formatted text
    - **address**: contact information
    - **pre**: preformatted text that preserves spaces and line breaks (written in fixed-width font)
    - **code**: piece of computer code (written in default monospace font)
    - **mark**: inline highlighting
    - Adds onto:
        - 30-styleguide.html

#### 33-styleguide.html
- Reference for table tags
    - **table**: define table
    - **caption**: define table caption
    - **thead**: group table header content
    - **tbody**: group table body/data content
    - **tr**: define table row (encompassing all elements in row)
    - **th**: define bolded table header cell (name of specific row/column)
        - **scope: specify if th is column in thead or row in tbody
    - **td**: define table cell
    - Adds onto:
        - 32-styleguide.html

#### 34-styleguide.html
- Reference for **details** tag with clickable arrow that user can open and close
    - **summary**: define visible text next to arrow
    - Adds onto:
        - 33-styleguide.html

#### 35-index.html
- Add **img** tags to embed/link image
    - Requires **src** and **alt** attributes
    - Adds onto:
        - 31-index.html

#### 36-index.html
- Add images and img tags
    - Adds onto:
        - 35-index.html

### index.html
- **Final website file**
- Add **svg** tags to describe 2D graphic (in this case image)
    - Requires **viewbox** attribute to define size
    - Requires **xmlns** attribute to specify XML dialect
    - **title**: description of SVG element displayed when hovered over
    - **path**: defines shape to be created (with **d** attribute)
    - Adds onto:
        - 36-index.html

#### 38-styleguide.html
- Reference for **video** tag to embed/link video content natively
    - Adds onto:
        - 34-styleguide.html

#### 39-styleguide.html
- Reference for **audio** tag to embed/link audio content natively
    - Adds onto:
        - 38-styleguide.html

### styleguide.html
- **Final reference file**
- Reference for **iframe** tag to display web page within web page (in this case, YouTube video)
    - Load source hosted on another site onto page
    - Adds onto:
        - 39-styleguide.html

## Learning Objectives
- Which guidelines to follow for HTML
- How to create the skeleton of an HTML5 page
- How to use semantic HTML tags to structure a web page
- When to usee div vs span
- Semantic values of header, main, footer, article, nav, section, aside
- How to use headings (and why it’s important to follow the hierarchical order)
- How to make lists in HTML
- The differences between medias (SVG, GIF, PNG, JPG)
- How to structure data in a table
- How to integrate a video in a webpage
- How to integrate an audio file in a webpage
- How to embed external content
- How to correctly structure an HTML page
