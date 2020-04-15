function get_tableSort() {    
    let markup = `
<h3>Issue. Table Sort.</h3>
<p>Add a multi-column sorting property to the table.
Sort the table by column ascending or descending by mouse clicking on the column header,
sort the table by multi-column by Shift + Click on the required column headers.
Indicate sort direction by icon.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_tableSort.jpg" alt="Table Sort Header icons"
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: array.sort()</strong></h5>
<h5>1. Add sort indication icon and listener to every column header.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
createTableHeaderFirstRow() {
    // ...    	
    for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
        var cell = document.createElement('th');
        // ... 
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
/* sort indication in the column headers  */
.table .table-sortind{
    color: #ccc;
    padding-left: 4px;  
}
.table .sort-descending .table-sortind:after {  
    content: "\\25bc";
}
.table .sort-ascending .table-sortind:after {
    content: "\\25b2";
}
.table .unsorted .table-sortind:after {
    content: " ";
}
</code></pre></fieldset>

<h5>2. Sort data and update the table after click on column header.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
updateTable(iLatestClickedCell, isShiftKeyPressed, tableHeaderContext, table) {		
    let updatedSortContext = this.updateTableHeaderSortContext(iLatestClickedCell,
        tableHeaderContext.sortContext, isShiftKeyPressed);
    tableHeaderContext.sortContext = updatedSortContext;

    let updatedCellContexts = this.updateTableHeaderCellContexts(tableHeaderContext);
    tableHeaderContext.cellContexts = updatedCellContexts;

    let sortRule = this.extractSortRule(tableHeaderContext);		
    this.contacts = Data.sortByRule(sortRule, this.contacts);		
        
    this.updateTableHeaderRow(tableHeaderContext.cellContexts, table);
    this.PopulateTable();		
}
</code></pre></fieldset>

<h5>2.1. Update table sort context (keep in mind the clicked headers).</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
updateTableHeaderSortContext(i, sortContext, isShiftKeyPressed) {
    sortContext.iLatestClickedCell = i;
    if (isShiftKeyPressed) {
        if (!sortContext.iClickedCells.includes(i)) {
            sortContext.iClickedCells.push(i);
        }
        else { } //do nothing;									
    }
    else {
        sortContext.iClickedCell = i;
        sortContext.iClickedCells = [];
        sortContext.iClickedCells.push(i);
    }
    return sortContext;
}
</code></pre></fieldset>

<h5>2.2. Update table header cell contexts (add and toggle header cell css classes).</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
updateTableHeaderCellContexts(tableHeaderContext) {	
    let sortContext = tableHeaderContext.sortContext;
    let cellContexts = tableHeaderContext.cellContexts;
    let iClicked = sortContext.iLatestClickedCell;
    // toggle column header css classes to display column sort order on nothing
    for (let i = 0; i < cellContexts.length; i++) {
        let list = cellContexts[i].cssClassList;
        let iUnsorted = list.indexOf("unsorted"); // no icon
        let iAscending = list.indexOf("sort-ascending");  // icon ascending
        let iDescending = list.indexOf("sort-descending");  // icon descending
        if (i === iClicked) {
            // toggle classes
            if (iUnsorted > -1) { list.splice(iUnsorted, 1, 'sort-ascending'); }
            else if (iAscending > -1) { list.splice(iAscending, 1, 'sort-descending'); }
            else if (iDescending > -1) { list.splice(iDescending, 1, 'sort-ascending'); }
        } else {
            if (sortContext.iClickedCells.includes(i)) { continue; }
            else if (iAscending > -1) { list.splice(iAscending, 1, 'unsorted'); }
            else if (iDescending > -1) { list.splice(iDescending, 1, 'unsorted'); }
        }
        tableHeaderContext.cellContexts[i].cssClassList = list.slice();
    }
    return tableHeaderContext.cellContexts;
}
</code></pre></fieldset>

<h5>2.3. Extract Sort Rule from the table header context.</h5>
<p>Sort Rule is array of { data node key, sort direction}.
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
extractSortRule(tableHeaderContext) {
    let sortRule = [];
    tableHeaderContext.sortContext.iClickedCells.forEach(i => {
        let list = tableHeaderContext.cellContexts[i].cssClassList;
        let sortDirection = "unsorted";
        if (list.indexOf("sort-ascending") > -1) {
            sortDirection = "sort-ascending";
        }
        else if (list.indexOf("sort-descending") > -1) {
            sortDirection = "sort-descending";
        }
        let name = tableHeaderContext.cellContexts[i].name;
        // name sort by first name
        if(name === "name"){
           name = "name.firstName";
        }
        // user name sort by username
        if(name === "username"){
            name = "username.username";
        }
        // address sort by username
        if(name === "address"){
            name = "address.city";
         }
        // company sort by name
        if(name === "company"){
            name = "company.name";
        }
        sortRule.push({ name, sortDirection });			
    });
    return sortRule;
}
</code></pre></fieldset>

<h5>2.4. Sort contacts data by Sort Rule.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
static sortByRule(sortRule, users) {
    users.sort(Data.compareByMultipleKey(sortRule));
    return users;
}
</code></pre></fieldset>
<p>In our case, users is an array of objects. So we can use array in-build sort
function: array.sort(compareFunction).</p>
<br>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
static compareByMultipleKey(sortRule) {     
    return function (a, b) {
      if (sortRule.length == 0) return 0; // force to quit if keys run out

      let key = sortRule[0].name; // take out the first key
      let direction = sortRule[0].sortDirection;       
      
      // using eval
      // let x = eval("a." + key);
      // let y = eval("b." + key); 

      // without using eval
      let x = Data.getDescendantProp(a, key);
      let y = Data.getDescendantProp(b, key);

      if (direction === "sort-ascending") {        
        if (x < y) return -1;
        else if (x > y) return 1;
        else return Data.compareByMultipleKey(sortRule.slice(1))(a, b);
      } else { //"sort-descending"
        if (x < y) return 1;
        else if (x > y) return -1;
        else return Data.compareByMultipleKey(sortRule.slice(1))(a, b);
      }
    }
}

static getDescendantProp(obj, key) {
    var arr = key.split('.');
    while (arr.length) {
      obj = obj[arr.shift()];
    }
    return obj;
}
</code></pre></fieldset>

<h5>2.5. Update Column Headers (toggle sort direction icons).</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
updateTableHeaderRow(cellContexts, table) {		
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        // merge css classes from cellContext and column header cell.classList
        cellContexts[i].cssClassList.forEach(item => {
            // if sort by the column - remove "unsorted" 
            if (item.includes("sort-ascending") || item.includes("sort-descending")) {
                table.rows[0].cells[i].classList.remove("unsorted");
            }
            // toggle column sort direction 
            if (item.includes("sort-ascending")) {
                table.rows[0].cells[i].classList.remove("sort-descending");
                table.rows[0].cells[i].classList.add("sort-ascending");
            }
            if (item.includes("sort-descending")) {
                table.rows[0].cells[i].classList.remove("sort-ascending");
                table.rows[0].cells[i].classList.add("sort-descending");
            }
            // class name will be added only if the element does not have it
            table.rows[0].cells[i].classList.add(item);
        });
    }
}	
</code></pre></fieldset>

<h5>2.6. Populate the table by sorted data.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
PopulateTable() {		
    // ...
    // populate contacts from data to table rows		
    this.contacts.forEach(item => {
        let row = this.table.insertRow();
        row.classList.add('table-tr-data');
        // put property value from data to the table cell
        for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
            let cellValue = Object.values(item)[i];            
            let cell = row.insertCell();
            // fill in the cell	
            cell.innerHTML = this.getInnerHtmlForCell(cellValue, item);								
            // ...
            cell.classList.add('table-tr-data-cell');
            // ...			
        }			
    });
}
</code></pre></fieldset>
`;
return markup;
}


    