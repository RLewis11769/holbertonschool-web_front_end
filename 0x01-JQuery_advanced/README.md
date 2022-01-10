# Advanced jQuery

## Standalone Tasks

### 0-index.html
- Add jQuery script and basic printing to console when document ready

### 1-index.html
- Add function to append paragraph to "body" when document ready

### 2-index.html
- Add function to append table to DOM body when document ready

### 3-index.html
- Add function to append table to DOM in individual elements and text to table elements when document ready
	- Chaining

### 4-index.html
- Add to code in 3-index.html with added function to replace all content of table with new HTML content when document ready

### 5-index.html
- Add nested functions to add table to DOM when document ready, and remove table elements on click

### 6-index.html
- Add function to add form to DOM when document ready, and append or prepend table based on input value on click

## Wikipedia Tasks

### 7-index.html
- Use Wikipedia API and Ajax
- Add function to submit GET method to Wikipedia API via Ajax based on search form input value
- Create list including data from Wikipedia

### 8-index.html
- Add pagination with offset based on current page and total pages
- Add CSS styling via jQuery
	- Adds onto:
		- 7-index.html

### 9-index.html
- Add opacity on loading by wrapping/unwrapping with "loading" class
	- Adds onto:
		- 8-index.html

## JSON-Server Tasks

**Note**: View on port 3000 with:
```
node_modules/.bin/json-server --watch db.json
json-server --watch db.json
```

### 10-index.html
- Add GET method to query local server for existing posts in db.json
- Add text to DOM to view results
	- Used with:
		- db.json

### 11-index.html
- Add form to DOM with "submit" button to send POST request to local server
- After adding to db.json, data is displayed on DOM via GET request
	- Adds onto:
		- 10-index.html
	- Used with:
		- db.json

### 12-index.html
- Modify form on DOM with "delete" span to send DELETE request to local server
- After deletion, deleted from DOM and db.json
	- Adds onto:
		- 11-index.html
	- Used with:
		- db.json

## jQuery Script

Add to head (as seen in 0-index.html):

\<script src="ht<span>tps://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>

OR found at:\
[jQuery CDN](code.jquery.com)

## JSON-Server Installation

### Install

To install globally, run:
```
sudo npm install -g json-server
```

### Run

1. Make sure port 3000 is open

2. Each time you want to run the server, run:
```
json-server --watch db.json
```

3. Enter ctrl-C to end the server
