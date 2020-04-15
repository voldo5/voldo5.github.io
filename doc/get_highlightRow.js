function get_highlightRow() {    
    let markup = `
<h3>Highlight selected row</h3>
<h4>Issue. </h4> <p>To select a row, the user must click on the row. After clicking on a row,
the row becomes highlighted by changing the background color.</p>
<br> 
<p>Pic.1. No table row highlighted when no table row is clicked.</p>
<img src="\\assets\\picsDoc\\doc_activateIcon1.jpg" alt="Edit contact icon is not active"
class="img-responsive" width="600" height="400"> 
<br><br> 
<p>Pic.2. Row 1 is highlighted after clicking on the row 1.</p>
<img src="\\assets\\picsDoc\\doc_activateIcon2.jpg" alt="Edit contact icon is not active"
class="img-responsive" width="600" height="400">

<h4>Code.</h4>
<h5><strong>Keywords: addEventListener, fat arrow function </strong></h5>
<h5>Highlight selected row</h5>
<p>Add Event Listener to every row when create table.
Get the selected (clicked) row number in the listener and call method to highlight the clicked row.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
  let iRow = 1;
  this.contacts.forEach(item => {
	    iRow = iRow + 1;
	    let row = this.table.insertRow();
	    row.classList.add('table-tr-data');
	    row.addEventListener("click", () => {
		this.iSelectedRow.row = event.target.closest('tr').rowIndex;
		this.highlightRow(this.iSelectedRow.row);
  });
</code></pre></fieldset>
<p>Method to change color row by toggle row css class 'tr-selected'.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
highlightRow(iRowClickedIndex) {
	for (var i = 0; i < this.table.rows.length; i++) {
		this.table.rows[i].classList.remove("tr-selected");
	}
	this.table.rows[iRowClickedIndex].classList.add("tr-selected");		
}
</code></pre>
</fieldset>

<p>Table row css classes.</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table tr:nth-child(odd){    
    background:#F7F7F7; 
}  
.table tr:nth-child(even){    
    background:#ecf0f1; 
}
.table-tr-data:hover {
    background-color: #d5ebe9 !important;
}
.tr-selected {    
    background-color: #b6e9e5 !important;
}
</code></pre></fieldset>
`;
return markup;
}
    