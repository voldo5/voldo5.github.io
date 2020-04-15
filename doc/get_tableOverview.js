function get_tableOverview() {    
let markup = `
<h3>Issue. Table overview.</h3>
<h4>Dynamic table</h4>
<p>Create a table as pure JavaScript dynamic table with CSS styling,
which means everything is handled through JavaScript,
and the HTML only consists of a single line of code.</p>
     <fieldset>
		<legend>index.html</legend>
			<script type="text/plain" class="language-markup">				
            <div id="contacts">					
			</script>	
        </fieldset> 

<h4>Code.</p>
<h5><strong>Keywords: JSON</strong></h5>
            
<h5>1. Table engineering overview.</h5>
<h5>1.1. Source data for the table - JSON.</h5>
<p>The source data for the table must be stored in the JSON data format.
A dynamic table will extract information from JSON not only about contacts,
but also information about the number of columns of the table,
column names, and so on. JSON data may be various - the table will have
number of columns equal to number of the first level nodes of JSON data. 
JSON may have additional data that does not appear in the table.</p>
<h5>Json data example.</h5>
<fieldset>
<legend>JSON</legend>
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

<h5>1.2. Information about the table is storing in Table Context classes.</h5>
<p>We need to store information about the table as a whole - the number of columns, column names, and so on.
We also need to store information about the state of the table - the current table style,
dynamic sorting filter, active icons, and the like. To this end, we add couple classes to the project
to store this information. We will call this information the context of the table
and the corresponding classes — the TableContext classes:</p>
<ul>
<li>TableHeaderContext class </a></li>
<li>TableHeaderCellContext class </a></li>
<li>TableSortContext class </a></li>
<li>TableDataRowsContext class </a></li>
</ul>
<h5>See Issue: 
<a href="javascript:booklet.navigateRegularPages('get_tableContext', 'Table Context');">
Table Context.</a></h5>

<h5>1.3. Table and all other elements are created through JavaScript classes.</h5>
<ul>
<li>table - class Table</li>
<li>th - class th</li>
<li>td - class td</li>
<li>icon - class Icon</li> 
<li>icon container - class IconContainer</li>
<li>input - class Input</li>
<li>input container - class InputContainer</li>
<li>filter - class IconFilter</li>
<li>dropdown for filter - class DropdownFilter</li>
<li>form Add Contact - class FormAddContact</li>
<li>and so on.</li>
</ul>

<h5>1.4. Contacts information, displayed in the table, is searchable.</h5>
<p>Contacts information we get from JSON file. The JSON file contains also supplemental information,
that we do not display in the table.

<fieldset>
<legend>JSON</legend>
<pre><code class="language-json">			
{
  ...
  "name": {
    "firstName": "Michelle",
    "lastName": "Vilms",
    "photo": "VilmsPortrait.jpg"
  }, 
  ...
}
</code></pre></fieldset> 

<p>Here, "Michelle" + "Vilms" is searchable information, and "VilmsPortrait.jpg" 
is supplemental information.</p>

<h5>See Issue: link
`;
return markup;
}
