function get_responsiveTable() {    
    let markup = `
<h3>Issue. Responsive Table.</h3>
<p>Make the table responsive and stylized for the big screen as in Fig.1
and for the small screen (less than 600 pixels) as in Fig. 2.
Implementation of the task must be done based on CSS.</p>
<h5>Fig.1</h5>        
 <img src="\\assets\\picsDoc\\doc_mainScreen1.jpg" alt="Big monitor. General view."
 class="img-responsive" width="600" height="400">
 <br><br> 
 <h5>Fig.2</h5>        
 <img src="\\assets\\picsDoc\\doc_mainScreen2.jpg" alt="Small monitor. General view."
class="img-small-responsive" width="400" height="600">

<h4>Code.</p>
<h5><strong>Keywords: :before, &lt;caption&gt;, data attribute, data-th, @media.</strong></h5>
<h5>1. Responsive data rows.</h5>
<h5>1.1. Set data rows for small screen table.</h5>
<p>Add data-th attribute with column name to every data cell of the table.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
this.contacts.forEach(item => {    
    let row = this.table.insertRow();    
    for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
        let cell = row.insertCell();
        cell.setAttribute("data-th", this.tableHeaderContext.cellContexts[i].caption);        
    }
}
</code></pre></fieldset>
<p>Here, we add row for every contact and caption means column name.
For example, the first data row of the table:</p>
<fieldset>
<legend>HTML</legend>
<script type="text/plain" class="language-markup">
     <td class="table-tr-data-cell cell-odd" data-th="Name">
</script>	
</fieldset>

<h5>1.2. CSS part.</h5>
<p>Display the table as one column table when widht less than 600px</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
@media screen and (max-width: 600px) {
    .table tbody td {
        display: block;
        padding: .6rem;
    }
    .table tbody td:first-child {      
        text-align: left;
    }
    .table tbody td:before {
        content: attr(data-th);
        font-weight: 700;
        display: inline-block;
        width: 6rem; 
        color: teal;
    } 
}
</code></pre></fieldset>
<h5>2. Set header for small screen table.</h5>
<p>If we had a table with one row header, then the task would be completed.
But we have a table with a heading of two rows, and the second row
is a special row with one cell with icons(buttons) and search input.
So, let use table caption to transfer header 2-nd row 
from big table to small screen table.</p>
<h5>2.1. Add table caption.</h5> 
<p>Add table caption, when creating a table and do not show it for media > 600px.
In the small screen table we will use table caption as second header row.</p> 
<fieldset>
<legend>Javascript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
var tableCaption = table.table.createCaption();	
tableCaption.classList.add("table-caption");
</code></pre></fieldset>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table-caption{
    display: none;
}
</code></pre></fieldset>
<h5>2.2. Show table caption for small screen table.</h5> 
<p>And do not show first and second table header row.</p> 
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
@media screen and (max-width: 600px) {
    .table-caption{      
        display:table-caption;      
        position: sticky;
        top:0; 
        z-index: 9999;
        background: #eee;
        border-right: 1px solid #eee;
    }
    .table-tr-head {
        display: none;      
    }
    .table-tr-head2 { 
        display: none;      
    }
</code></pre></fieldset>

<h5>2.3. Relocate table second row to table caption (and back) when media resize.</h5> 
<fieldset>
<legend>Javascript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
window.addEventListener("resize", () => {
// relocate table second header row with buttons to table caption,
// when table became one column table
// (if we made copy - we lost icon(as button) listeners)
var x = window.matchMedia("(max-width: 600px)");	
relocateTableCommandRow(x);
});

function relocateTableCommandRow(x) {
	let element = document.querySelector(".icon-flex-container");
	let hasIcons = document.querySelector('.table-caption .icon-flex-container');
	// parents of icon-flex-container	
	let tableCaption = document.querySelector('.table-caption');
	let table2ndRow = document.querySelector('.table-tr2-head-cell');
	if (x.matches) { // If media query matches		
		if (!hasIcons) {			
			table2ndRow.removeChild(element);
			tableCaption.appendChild(element);			
		}		
	}
	else {
		if (hasIcons) {		
		tableCaption.removeChild(element);
		table2ndRow.appendChild(element);
		}
	}
}
</code></pre></fieldset> 
<h5>Fig.3. Table header classes.</h5>
 <img src="\\assets\\picsDoc\\doc_tableHeader.jpg" alt="Table header."
 class="img-responsive" width="600" height="400">
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.icon-flex-container {
    display: flex;
    width: 100%;
    min-height: 44px;
    align-items: center;     
    text-align: center; 
}

@media screen and (max-width: 600px) {
    .table-caption{      
        display:table-caption;      
        position: sticky;
        top:0; 
        z-index: 9999;
        background: #eee;
        border-right: 1px solid #eee;
    }
    .table-tr-head {
        display: none;      
    }
    .table-tr-head2 { 
        display: none;      
    }
    .table-tr2-head-cell {
        width: 100%; 
    }
}
</code></pre></fieldset>

<h5>3. Set zebra design for small screen table.</h5>
<p>Add classes "cell-even" or "cell-odd" for every data cell of table.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
this.contacts.forEach(item => {    
    let row = this.table.insertRow();    
    for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
        let cell = row.insertCell();
        i % 2 == 0 ? cell.classList.add("cell-even") : cell.classList.add("cell-odd");      
    }
}
</code></pre></fieldset>

<p>Set background color for cell with classes "cell-even" and "cell-odd" if media with < 600px
and set nothing for big table cells.</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
@media screen and (max-width: 600px) {
    .cell-even {
        background:#F7F7F7; 
    }  
    .cell-odd {
        background:#ecf0f1; 
    }
}
</code></pre></fieldset>
`;
return markup;
}


    