function get_tableContainer() {    
    let markup = `
<h3>Issue. Table Class.</h3>
<p>Create the Table class to manipulate a javascript table object.</p>

<h4>Code.</p>
<h5><strong>Keywords: class</strong></h5>

<h4>1. Table class.</h4>
<ul>
<li>Add constructor</li>
<li>Add displayTable() method</li>
<li>Create table and append caption, head rows, data rows and footer</li>
<li>Create container header with icon and table name</li>
<li>Append table and container header to container</li>
</ul>
<h5>Constructor and displayTable() method</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
class Table {
  constructor(contacts, container) {		
	this.table = null;
	this.contacts = contacts;
	this.container = container;		
  }

  displayTable = () => {

    // create container header (not a part of table)
    let tableContainerHeader = this.CreateTableContainerHeader();
    // create table 		
    this.table = document.createElement('table');
    this.table.classList.add('table');
    
    // populate the table with contacts 
    this.PopulateTable();		
    
    // create the rest of the table
    this.table.createCaption().classList.add("table-caption");
    this.table.createTHead().classList.add('table-header');
    this.createTableHeaderFirstRow();
    this.createTableHeaderSecondRow();
    this.createTableFooter();		

    // append table to container
    this.container.appendChild(tableContainerHeader);
    this.container.appendChild(this.table);
  }
}
</code></pre></fieldset>

<h4>2. Table object.</h4>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
function init() {	
	// create table object 
    table = new Table(contacts, tableContainer);
    //display table
    table.displayTable();
}
</code></pre></fieldset>
`;
return markup;
}
    