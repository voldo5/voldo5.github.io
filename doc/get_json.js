function get_json() {    
    let markup = `
<h3>JSON</h3>
<p>JSON — short for JavaScript Object Notation — is a format for sharing data.
A json object is a key-value data format that is typically rendered in curly braces. </p>
<h5>Terminology</h5>
<ul>
<li>Javascript object - a collection of properties, and a property
is an association between a name (or key) and a value.
<fieldset>
<legend>Javascript object</legend>
<pre><code class="language-javascript">
var obj = {type:"Fiat", model:"500", color:"white"};

Data is accessed through dot notation:  obj.type, obj.model...
</code></pre></fieldset>
</li>
<li>JSON object - javascript object of a certain kind
<fieldset>
<legend>JSON object</legend>
<pre><code class="language-javascript">
var jsonObj = {"type":"Fiat", "model":"500", "color":"white"};

Data is accessed through dot notation:  obj.type, obj.model...
</code></pre></fieldset>
</li>
<li>JSON string - string of a certain kind
<fieldset>
<legend>JSON string</legend>
<pre><code class="language-javascript">
"{"type":"Fiat", "model":"500", "color":"white"}"
</code></pre></fieldset>
</li>
</ul>

<h5>Using</h5>
<ul>
<li>Storing data in local storage - stringify(), parse(), localStorage
<fieldset>
<legend>Storing data</legend>
<pre><code class="language-javascript">
// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
</code></pre></fieldset>
</li>

<li>Sending Data - fetch(), stringify()
<fieldset>
<legend>Sending Data</legend>
<pre><code class="language-javascript">
var myObj = {name: "John", age: 31, city: "New York"};

(async () => {
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myObj)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();
</code></pre></fieldset>
</li>
<li>Receiving Data - fetch(), parse()
<fieldset>
<legend>Receiving Data</legend>
<pre><code class="language-javascript">
var data = '{"name":"John", "age":31, "city":"New York"}';

fetch('./users.json').then(response => {
    return response.json();
  }).then(data => {
    var myObj = JSON.parse(data);
    // Work with your JSON data here..
    console.log(data);
  }).catch(err => {
    // What do when the request fails
    console.log('The request failed!'); 
  });
</code></pre></fieldset>
</li>
</ul>

<h5>Examples from project:</h5>
<ul>
<li>Issue: 
<a href="javascript:booklet.navigateRegularPages('get_tableOverview', 'Table overview');">
Table overview.</a>
<h5>Json table data.</h5>
<fieldset>
<legend>JSON</legend>
<div class="legend2">data.js</div>
<pre><code class="language-json">			
{
  "id": 1,
  "name": {
    "firstName": "Michelle",
    "lastName": "Vilms",
    "photo": "VilmsPortrait.jpg"
  },        
  "username": {
    "username": "Vilma",         
    "avatar": "Vilms-avatar5.jpg"
  },
  "email": "info@vilmsconsulting.com",
  "address": {
    "street": "3 Arlington St",
    "suite": "Apt.2",
    "city": "Boston",
    "zipcode": "02116",
    "geo": {
      "lat": "42.355101",
      "lng": "-71.072574"
    },
    "photo": "Vilms-building.jpg"
  },
  "phone": "1-617-416-0113",
  "website": "http://www.vilmsconsulting.com/",
  "company": {
    "name": "Vilms Consulting",
    "catchPhrase": "Partnering with small businesses since 2008",
    "bs": "Bring the expertise to help the clients grow their business."
  }
}
</code></pre></fieldset>
</li>

<li>Fetch data.
<fieldset>
<legend>Javascript</legend>
<div class="legend2">data.js</div>
<pre><code class="language-javascript">	
  // Async fetch data to be certain that the response has resolved before proceeding
  async fetchDataIntoTable(url, containerDivId, columnsNames, callbackCreateTable) {
    try {
      let response = await fetch(url);
      let items = await response.json();
      callbackCreateTable(containerDivId, columnsNames, items);
    } catch (e) {
      console.log('Error during fetch: ' + e.message);
    }
  }
</li>
</ul>
</code></pre></fieldset>
`;
return markup;
} 