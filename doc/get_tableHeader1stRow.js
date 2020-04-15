function get_tableHeader1stRow() {    
    let markup = `
<h3>Issue. Table Header 1st Row.</h3>
<p>Add the table header 1st row and style it as in Fig.1.
The row should be in place when the table scrolls.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_tableHeader1stRow.jpg" alt="Table Header 1st Row"
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: sticky, z-index.</strong></h5>
<h5>1. Create table header 1st row.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
displayTable = () => {
// ...
    this.createTableHeaderFirstRow();
// ...
}
</code></pre></fieldset>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
createTableHeaderFirstRow() {		

    let row = this.table.tHead.insertRow(0);
    row.classList.add('table-tr-head');

    // add cells to header row		
    for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {

        var cell = document.createElement('th');			
        row.appendChild(cell)
        
        cell.innerHTML = this.tableHeaderContext.cellContexts[i].caption;
        cell.classList.add('table-tr-head-cell');	
        cell.classList.add('table-tr1-head-cell');			

        this.tableHeaderContext.cellContexts[i].cssClassList.forEach(item => {
            cell.classList.add(item);
        });

        // sort indication
        var span = document.createElement('span');
        span.classList.add('table-sortind');
        cell.appendChild(span);
    }

    // add listeners to row cells: click on the column header
    // of the table causes the table to be sorted by column
    for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
        if (!this.table.rows[0].cells[i].classList.contains("notsorted")) {
            this.table.rows[0].cells[i].
                addEventListener("click", () => {
                    var isShiftKeyPressed = event.shiftKey;
                    this.updateTable(i, isShiftKeyPressed, this.tableHeaderContext, this.table);
                });
        }
    }
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
.table-tr-head { 
  font-size: 1.1em !important;
}
.table-tr-head-cell { 
    display: table-cell;    
    padding: 10px 8px; 
    height: 22px;   
    text-align: center;
    white-space: nowrap;  
    border-top-width: 0!important;
    border-bottom-width: 0!important;
    border-left-width: 0 !important;
    border-right-width: 1px !important;  
    border-right-color: white;
    border-style: solid;
    background-image: linear-gradient(to top, #008080, #00837e, #00867b, #008878, #058b74);
}
.table-tr1-head-cell {
    position: sticky;
    top: 0;
    z-index: 9999;         
}
</code></pre></fieldset>
`;
return markup;
}


    