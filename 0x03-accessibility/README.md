# Accessibility

## keyboard/ Task

### 01-index.html, 01-styles.css
- Use "focus" rather than/in addition to "hover"
	- For a visual aid in keyboard tabbing

## skip-links/ Task

### 01-index.html, 01-article.html, 01-styles.css
- Add skip links for nav and main content
	- For screen readers to bypass optional content via internal page links

## fix-a11y Tasks

### 01-index.html
- Elements should have sufficient color contrast
	- For color blindness, other vision issues, readability etc.

### 02-index.html
- Pages should have "title" element in header
	- For identifying page content and purpose (esp. for screen readers)

### 03-index.html
- "html" element in header should have lang attribute
	- For translation prompts and screen readers

### 04-index.html
- Images should have alternate text
	- For screen readers

### 05-index.html
- Form elements should have labels (often visually hidden)
- Update form input attributes
- **Note**: Axe and other accessability tools have minimal requirements, but pay attention to type, autocomplete, required, placeholders, and "a" vs "button" tags
	- For screen readers

### 06-index.html
- Links should have discernible text
- Add "aria-label" attribute to add label text for elements without labels
	- For screen readers

### 07-index.html
- Zooming and scaling should not be disabled
- "meta" viewport should not include "user-scalable=no" for example
	- For low vision and screen magnifiers
	- Best practice is to support resize up to 5x zoom

### 08-index.html
- Heading levels should only increase by one
- "h1" then "h2" for example (CSS style for intended sizing)
	- Header tags should be used for intended purpose of providing structural hierarchy info

### 09-index.html
- Document should have one main landmark
- Use "header", "main", "nav", "section", and "footer" content sectioning tags
- Semantic HTML tags describe meaning to browser, developers, and users
	- Yet another "allow for proper navigation" best practice

### 10-index.html
- More than two elements should be in a list
- Especially nav elements, links, etc.
	- Allow for keyboard tabbing

## Helpful Links

- [Holberton's Accessibility Guide](https://intranet.hbtn.io/concepts/725)
- [ARIA Guide](https://www.w3.org/TR/using-aria/#rule1)
- [Axe my love](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Learning Objectives
- ARIA’s main purpose
- WCAG conformance levels (A, AA and AAA)
- The importance of Web Accessibility
- Tools to use for Web Accessibility
