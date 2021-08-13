# SASS and SCSS

## Description

- No tasks on SASS, just SCSS
- Based on compiled CSS (printed to terminal)
    - Run with:
        - sass taskfile
    - Run without visible comments:
        - sass taskfile | tail -n +2
    - Note: To compile/generate .css file
        - sass input.scss output.css

## Mandatory

#### 0-debug_log.scss
- Print to debug outlet using debug rule
    - Can print variable/expression with @debug #{$variable} and will show on first line

#### 1-color_variable.scss
- Assign/use variable

#### 2-color_variables.scss
- Assign/use 2 variables

#### 3-nested_tag.scss
- Nest declarations

#### 4-nested_class.scss
- Nest declarations with a class

#### 5-nested_child.scss
- Nest declarations with child elements/selectors

#### 6-nested_hover.scss
- Nest declaration with hover selector

#### 7-nested_deeper.scss
- Nest more than one declaration

#### 8-mixin_margins.scss
- Assign/use mixin
    - Mixin:
        - Copies code block to be used more than once
        - Physically duplicates code
        - Declare with @mixin, use with @include
        - Can pass parameters and use variables
    - Placeholder:
        - Inheritance
        - Creates classes that aren't actually output/don't get written
        - Extracts shared code - saves code/uses less memory
        - Declare with %, use with @extend
        - Can't pass parameters or use variables
    - Function:
        - Returns value based on reusable logic
        - Reuses or calculates values
        - Declare with @function, use like normal function
        - Must use @return
        - Can pass parameters and use variables

#### 9-extend_list.scss
- Extend style of class (inherit/use placeholder)

#### 10-import_colors.scss
- Import variables from different file

#### 11-loop_photos.scss
- Import array from different file
- Create class for each name in array and assign background image based on name
    - Must use @each loop (used like a for...each loop)

#### 12-loop_header.scss
- Create h tags where font-size changes based on which tag
    - As in: h1 has font-size: 1px
    - Must use @for loop (used like a for...in loop)

## Advanced

#### 100-loop_col.scss
- Create classes where width changes based on calculation
    - As in: col-3 has width: 33.333%
    - Must use @for loop

#### 101-media_query.scss
- Nest declaration with media query

#### 102-media_query.scss
- Nest multiple declarations with multiple media queries
