function get_tableHeader2ndRow() {    
    let markup = `
<h3>Issue. Table Header 2nd Row.</h3>
<p>Add the table header 2nd row and style it as in Fig.1.
The row should be in place when the table scrolls.
The row has one cell only, which contains clickable icons
and input for entering a search string.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_tableHeader2ndRow.jpg" alt="Table Header 2nd Row"
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: flex, innerHTML</strong></h5>
<h5>1. Create table header 2nd row.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
displayTable = () => {
// ...
this.createTableHeaderSecondRow();
// ...
}
</code></pre></fieldset>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
createTableHeaderSecondRow() {
    let row = this.table.tHead.insertRow(1);
    row.classList.add('table-tr-head2');		
    let cell = document.createElement('th');
    row.appendChild(cell);		
    cell.innerHTML = this.getInnerHtmlForHeaderSecondRowCell();

    let iconFilter = new IconFilter("container-iconFilter", "icon-filter", "fa fa-filter");
    let flexContainer = cell.querySelector(".icon-flex-container");		
    flexContainer.appendChild(iconFilter.span);	
    cell.colSpan = this.table.rows[0].cells.length;	
    cell.classList.add('table-tr2-head-cell');			
}	
</code></pre></fieldset>

<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table-tr-head,
.table-tr-head2  {
  display: table-row; 
  position: relative;    
  z-index: 9999;
  width: 100%;
  margin: 0; 
  font-size: 1.1em !important;
  font-weight: bold;
  color: #eee !important;
  cursor: pointer;
}
.table-tr-head2 { 
    font-size: 1em !important; 
}
.table-tr2-head-cell {
    position: sticky;
    /* second row stick exactly under row 1 */
    top: 42px;        
    z-index: 9999;
    width:100%;   
    background:#ecf0f1;      
    border: solid #eee;
    border-bottom-color: white !important;
    border-width: 0 1px 1px 0;
}
.icon-flex-container {
    display: flex;
    width: 100%;
    min-height: 44px;
    align-items: center;     
    text-align: center; 
}
</code></pre></fieldset>
<h5>About icons AddContact, EditContact, DeleteContact, Search, Filter see next:</h5>
<ul>
<li>Icon Filter - Issue link</li>
<li>Icons AddContact, EditContact, DeleteContact, Search - Issue link </li>
</ul>
`;
return markup;
}


    