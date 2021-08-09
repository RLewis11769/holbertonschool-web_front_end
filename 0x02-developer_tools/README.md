# Developer Tools

## Directions

1. Go to https://dev-tools.hbtn.info/
2. Inspect page
3. Indicate answer to question in file (format of task description below)

## File Format

### .png (content: screenshot of website)
- What screenshot should show
    - Steps to get answer in Chrome

### Text file (content: answers to specific questions)
- Question to be answered
    - Steps to get answer in Chrome

## Tasks

#### 0-responsive_device.png
- Show website as seen on "iPhone X"
    1. Click on "toggle device toolbar" at top-left/ctrl-shift-m
    2. Click "Responsive" arrow

#### 1-change_bg_color.png
- Show website with changed background-color on body
    1. Go into "Styles" at bottom of page
    2. Manually change css of element

#### 2-pathways_menu.png
- Show website with "cake" block in hover state
    1. Click on "Select an element in the page to inspect it" (or ctrl-shift-c)
    2. Click on element in page to find HTML
    3. Right-click on "Elements" tab and navigate to "Force state > :hover"

#### 3-button_styles
- Select "Download me!" button and copy all the CSS styling that is applied on this button
    1. Click on "Select an element in the page to inspect it" (or ctrl-shift-c)
    2. Click on element in page to find CSS in "Styles" drawer

#### 4-new_buttons.png
- Show all places in website with changed css on two classes
    1. Find classes targeted in "Styles" drawer
    2. ctrl-shift-f to open search panel and search for text string
    3. Hover over html text to locate

#### 5-deleted_elements.png
- Show website with "cake" div element removed
    1. ctrl-shift-c to find element
    2. Right-click and navigate to "Delete element"

#### 6-declaration_file
- Select the h2 with the text ABOUT. Which file is used in that declaration?
    1. Click on "Computed" drawer
    2. Open css element

#### 7-number_of_listeners
- How many times are click events referenced in JavaScript files?
    1. Click on "Event Listeners" drawer
    2. Open "click"

#### 8-hsl
- What is the equivalent value of the hexadecimal background-color on the primary button "Send", in HSL?
    1. Click on Settings icon
    2. Under "Preferences", change "Color format"

#### 9-max_width
- What is the max-width for the first .container in the section "About"? (your browser width must be between 1250px and 1440px and with a zoom at 100%)
    1. In "Styles" drawer, find matching @media with max-width

#### 10-moved_around.png
- Show website with "About" and "Portfolio" sections switched
    1. Drag and drop to location marked by blue line

#### 11-coverage
- How many bytes does the freelancer.css file cover?
    1. ctrl-shift-p to open Command Menu
    2. Select "Coverage" to open "Coverage" drawer
    3. Reload page
    4. Total Bytes column

#### 12-print_version.png
- Show website in print version
    1. ctrl-shift-p to open Command Menu (or click on ... at top-right and click "More tools" then "Rendering")
    2. Select "Show Rendering" to open "Rendering" drawer
    3. Scroll down to "Emulate CSS media"
    4. Select print

#### 13-logo_dollar0
- Select the Avatar image in the header and type $0 in the console. Enter. What does it return?
    1. Follow terrible French directions in "Console" tab

#### 14-doc_title
- Write in the console console.log(document.title), what is returned?
    1. Follow terrible French directions in "Console" tab

#### 15-hbtn_framework
- Which front-end framework could we guess this page is using?
    1. C is Bootstrap

#### 16-weight.png
- Show total weight of page with all elements
    1. Click on "Network" tab
    2. Reload page to see size of resources when page is accessed/loaded

#### 17-requests.png
- Show total number of requests when accessing page
    1. Click on "Network" tab
    2. Reload page (make sure Filter set to "All")

#### 18-css_loaded
- How many CSS resources are loaded on this page?
    1. Click on "Network" tab
    2. Reload page
    3. Filter by "CSS" or "Font"

#### 19-images_loaded
- How many image resources are loaded on this page?
    1. Click on "Network" tab
    2. Reload page
    3. Filter by "Img"

#### 20-favicon_type
- What is the type value of the favicon image?
    1. Click on "Network" tab
    2. Reload page
    3. Find favicon.ico file (Filter by "Other")
    4. Click on image and look under "content-type"

#### 21-hbtn_font_lib
- Holberton School website uses a font library for their icons, which one is it?
    1. Click on "Sources" tab
    2. "vendor" appears to show outside sources
    3. Or hover over "Initiator" in "Network" tab

#### 22-xhr_calls
- What is the name of the resource that generates 1 XHR calls?
    1. Click on "Network" tab
    2. Reload page
    3. Click on "Fetch/XHR" to find file associated with making API requests

#### 23-performance_audit.png
- Show notation for Performance for desktop mode with no throttling
    1. Click on "Lighthouse" tab (might need to click ">>" for more options)
    2. Select Performance category and Desktop device
    3. Generate report

#### 24-static_assets_audit.png
- Show how many static assets need better cache policy
    1. Generate Lighthouse report for Performance
    2. Issue found under "Diagnostics" as "Serve static assets with an efficient cache policy - 17 resources found"

#### 25-contrast_issue
- When you run an accessibility audit, what is the contrast issue?
    1. Generate Lighthouse report for Accessibility
    2. C is " Background and foreground colors do not have a sufficient contrast ratio"

#### 26-no_alt
- Which classes are on the images that have no alt attribute?
    1. Generate Lighthouse report for SEO
    2. Issue found under "Image elements do not have [alt] attributes"

#### 27-missing_attr
- Which attribute is missing on all the links with the target _blank?
    1. Generate Lighthouse report for Best Practices
    2. Issue found under "Links to cross-origin destinations are unsafe"
    3. C is rel="noopener" AND rel="noreferrer"

#### 28-unclear_desc.png
- Show <a> links that don't have enough text description
    1. Generate Lighthouse report for SEO
    2. Issue found under "Links do not have a discernable name"

#### 29-how_many_colors.png
- Show result of adding snippet to source
    1. Click on "Sources" tab
    2. Click on "Snippets" pane (might need to click ">>" for more options)
    3. Create new snippet allcolors.js with "+ New snippet"
    4. Click on "> Ctrl+Enter" to run snippet

#### 30-no_css.png
- Block all css requests
    1. ctrl-shift-p to open Command Menu
    2. Select "Show Network request blocking" to open Network request blocking drawer
    3. Click "Enable network request blocking" checkbox
    4. Click on css file
    5. Reload page

#### 31-session_storage_key
- What is the only key present in the session storage for this page?
    1. Click on "Application" tab
    2. Open "Session Storage"
    3. key: name, value: Bob Dylan

#### 32-service_workers
- Does this page have any service workers? 
    1. Click on "Application" tab
    2. Click on "Service Workers" to see async proxy servers in form of JS file without DOM access run over HTTPS

#### 33-ssl_cert
- Which organization issued the SSL certificate for this page?
    1. Click on "Security" tab
    2. Certificate - valid and trusted. The connection to this site is using a valid, trusted server certificate issued by Amazon.

#### 34-ssl_expiration.png
- Show when SSL certificate expires
    1. Click on "Security" tab
    2. Click on "View certificate"

## Learning Objectives

- What Developer Tools in your browser are
- How to open the Developer Tools on Chrome, Firefox, Safari, and Edge
- How to use the elements tab to edit HTML and CSS
- How to audit a page according to the tips suggested by Lighthouse
- How to create and run snippets on a page
- How to get information about files and server configurations
- How to block requests
- How to know how much JavaScript or CSS is used on a page
- How to detect 404 issues
- How to move elements on a webpage
