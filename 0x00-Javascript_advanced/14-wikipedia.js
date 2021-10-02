function createElement (data) {
  // Adds data to document body via paragraph element

  // Create paragraph element
  let para = document.createElement('p');

  // Create text node
  const node = document.createTextNode(data);

  // Append text node to paragraph element
  para.appendChild(node);

  // Append paragraph element to document body
  const element = document.getElementById('body');

  // Append paragraph element to document body
  element.appendChild(para);
}

function queryWikipedia (callback) {
  // Queries Wikipedia API for data

  // Create XMLHttpRequest object
  let xhttp = new XMLHttpRequest();

  if (this.readyState === 4 && this.status === 200) {
    document.getElementById('body').innerHTML = xhttp.responseText;
  }

  // Set request method, URL, and asynchronous
  xhttp.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);

  // Send request
  xhttp.send();

  // On response
  xhr.onload = () => {
    // Callback function
    callback(xhr.response);
  };
}
