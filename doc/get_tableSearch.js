function get_tableSearch() {    
    let markup = `
<h3>Issue. Table Search.</h3>
<p>Add table phrase search with filtering by columns.</p>
<h5>1. Add search input and filter icon to table header second row as on Fig.1</h5>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_TableSearchInput.jpg" alt="Table Search Input active"
class="img-small-responsive" width="600" height="400">
<h5>When mouse marker enter search input, the search input should be as on Fig.2</h5>
<h5>Fig.2</h5>        
<img src="\\assets\\picsDoc\\doc_TableSearchInputActive.jpg" alt="Table Search Input and filter icon"
class="img-small-responsive" width="600" height="400">
<h5>Do search if user click key Enter and search input is not empty or
click on looking glass icon.</h5>
<h5>2. After phrase search we should get rows which contain the phrase in selected columns.
The way of columns selection see in Issue:  </h5>
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Add search input and filter icon to table header second row using fluent API.</h5>
<p>Search input, filter icon and others icons are added to table with using fluent API.
We define table second row cell as th class. The elements in cell such as icons, inputs and containers
also defined as classes. We add these elements to row cell with th class methods.
JavaScript code will look like below, where addIcon, addInput, addIconContainerWithIcon,
toHtml are the class methods.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForHeaderSecondRowCell(){
    // prepare icon onClick functions		
	let onClickAddContact = \`(function(){
		formAddContact.setFormAddContactHeader('#form-header',
		 'New&nbsp;&nbsp;Contact&nbsp;&nbsp;Form', 'form-add-contact', '.addRowIcon');						
		})()\`;
	let onClickEditContact = \`(function(){
		formAddContact.setFormAddContactHeader('#form-header',
		'Edit&nbsp;&nbsp;Contact&nbsp;&nbsp;Form', 'form-edit-contact', '.updateRowIcon');						
		})()\`;
	let onClickDeleteContact = \`(function(){
		table.deleteSelectedRow();						
		})()\`;
	let onKeyEnterSearch = \`(function(){		
			if (event.keyCode == 13) {				
			  table.filterTable();
			}						
		})(event)\`;
	let onClickSearch = \`(function(){
			table.filterTable();									
        })()\`; 

    // combine the second row cell innerHTML
    let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))			
			.iconContainer("span", 'addRowIconContainer tooltip fade', "data-tooltip",
			               "Add new contact", onClickAddContact)
			.addIcon("addRowIcon fa fa-plus add-row")	
			.iconContainer("span", 'updateRowIconContainer tooltip fade',
			               "data-tooltip", "Edit selected contact", onClickEditContact)
			.addIcon("updateRowIcon fa fa-pencil edit-row")					
			.iconContainer("span", 'deleteRowIconContainer tooltip fade',
			               "data-tooltip", "Delete selected contact", onClickDeleteContact)
			.addIcon("deleteRowIcon fa fa-trash-o delete-row")
			.inputContainer('span', 'input-searchTable', onKeyEnterSearch)
			.addInput('text', 'Searching ...', 'input-search')
			.addIconContainerWithIcon("span", 'tooltipSearch tooltip fade',
			                "data-tooltip", "Search table", 'fa fa-search', onClickSearch)						
            .toHtml();

    return innerHtml;
}	
</code></pre></fieldset>
<p> So innerHTML of table second row cell contains icon "fa-plus" with container,
icon "fa-pencil" with container, icon "fa-trash-o" with container,
input 'Searching ...' with container, icon "fa-search" with container. We indicate 
element tags, css classes and onclick functions as parameters of these chaning methods.
Result we can see on next image.</p>
<img src="\\assets\\picsDoc\\doc_tableHeader2ndRow.jpg" alt="Table Header 2nd Row"
class="img-responsive" width="600" height="400">

<p>Let's take a closer look at how the innerHTML of second row is formed.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))
</code></pre></fieldset>
<p>Here the "th" is new th class. Class th has constructor and 
'table-tr2-head-cell', 'div', 'icon-flex-container' are values of
constructor parameters. In constructor we also provided variables to store css classes, 
icon containers, and input containers.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
class th {
    constructor(cellClases, containerType, containerClasses) {
        this.cellClases = cellClases;
        this.containerType = containerType;
        this.containerClasses = containerClasses;             
        this.iconContainers = [];        
        this.inputContainers = [];
    } 
    // ...
}
</code></pre></fieldset>
<p>So, we defined the header row cell as container with type 'div'.
The container css class is 'icon-flex-container' and cell css class is 
'table-tr2-head-cell'. ( We remember that header second row has only one cell)</p>

<p>In next code line we start chaining.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
.iconContainer("span", \`addRowIconContainer tooltip fade\`, "data-tooltip",
			               "Add new contact", onClickAddContact)
</code></pre></fieldset>

<p> iconContainer() is th class method with parameters. In this method we create new 
icon container (type of container is method paremeter (for example 'div')) and add this
icon container to icon container array. Method has another paremeters also.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
class th {
    // ...
    iconContainer(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick) { 
        const iconContainer = new IconContainer(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick);
        this.iconContainers.push(iconContainer); 
        this.lastIconContainer = iconContainer;       
        return this;
    }
}
</code></pre></fieldset>

<p>In next code line we add icon to the icon container.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
.addIcon("addRowIcon fa fa-plus add-row")
</code></pre></fieldset>

<p>The addIcon() method has one parameter - the icon css clases.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
class th {
    // ...
    addIcon(iconClasses) {
        this.lastIconContainer.addIcon(iconClasses);        
        return this;
    }
}
</code></pre></fieldset>

<p>We can notice, that chaning is possible because every th class method
return 'this', which is referring to class object itself.</p>
<p>In such way we can add arbitrary number elements to container.
We can also create whole library of elements (not only icon and input) and combine them by 
chaining methods.</p>
<p>Last method transform method results to html code.</p>
<fieldset><legend>JavaScript</legend>
<pre><code class="language-javascript">
.toHtml();
</code></pre></fieldset>
<fieldset>
	<legend>JavaScript</legend>
	<script type="text/plain" class="language-markup">				
    toHtml() {
        return <th class = '\${this.cellClases}'>
            <\${this.containerType} class = "\${this.containerClasses}">
                \${this.iconContainers.map(ic => ic.toHtml()).join('')}  
                \${this.inputContainers.map(ip => ip.toHtml()).join('')}
            <\$/{this.containerType}>                     
        </th>;
    }
	</script>	
</fieldset>

<p>CSS part of code.</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">input_SearchTable.css</div>
<pre><code class="language-css">
.input-searchTable{  
    width: 45%;
    max-width: 20rem;
}
.input-searchTable .input-search {
    font-family: FontAwesome !important;  
    min-width: 120px;
    min-height: 24px;  
    font-size: 1.1rem;
    margin: 0 0;
    padding: 2px 0 2px 24px;
    width: 100%;
    background: #ecf0f1;
    border: 1px solid #ccc;
    border-radius: 3px;
}
.input-searchTable input[type="text"]::placeholder {   
    text-align: left;
    opacity: 0.5;  
} 
.input-searchTable:hover input[type="text"]::placeholder {
      opacity: 0; 
}
.input-searchTable input:hover {
      border: 1px solid transparent;
      box-shadow: 0 0 6px 0 #095484;
      color: #095484;
      background-color: #F7F7F7;    
}  
</code></pre></fieldset>

<p>To start search, we added the onKeyEnterSearch event handler to search input element.
This handler execute when the key Enter on keyboard is clicked. If the input phrase in not 
empty, we fulfill table search.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForHeaderSecondRowCell(){
    // prepare icon onClick functions
    // ...
	let onKeyEnterSearch = \`(function(){		
			if (event.keyCode == 13) {				
			  table.filterTable();
			}						
		})(event)\`;
    // ...
    let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))			
            // ...
			.inputContainer('span', 'input-searchTable', onKeyEnterSearch)
			// ...
}	
</code></pre></fieldset>

<p>The onKeyEnterSearch handler call the filterTable() method from table class.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
filterTable(){
    let input = document.querySelector(".input-search");
    let inputString = input.value;                 
    
    table.removeHighlightfromTextInTable();
    
    if (input.value) {
        let filter = inputString.trim();
        if (inputString.trim().length > 0) { 
            table.filterTableAndHighliteMatchingText(filter);
        }
    } 
}	
</code></pre></fieldset>

<h5>2. Code of table search - method filterTableAndHighliteMatchingText(filter).</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
filterTableAndHighliteMatchingText(filterString) {
    let rowList, i;        
    rowList = table.table.getElementsByTagName("tr");    
    // get checked columns
    let checkedColumns = [];
    table.tableHeaderContext.cellContexts.forEach(cellContext => {
        cellContext.cssClassList.includes("checked") ? checkedColumns.push("checked") : checkedColumns.push(" ");
    }); 
    for (i = 2; i < rowList.length; i++) {

        let cellList = rowList[i].getElementsByTagName("td");
        let isHighlightedData = "false";
        
        for (let j = 0; j < cellList.length; j++) {

            let cell = cellList[j];

            if (cell) {
                // search in checked columns only 
                if (checkedColumns[j] === "checked") {                        
                    let isHighlighted =
                     this.handleSearchableContentOfCell(cell, filterString, table.tableHeaderContext.isSencitiveSearch);

                    if (isHighlighted === "true") {
                        isHighlightedData = 'true';
                    };
                }
            }
        }        
        // set row visibile if the row has highlighted text
        if (isHighlightedData === 'true') {
            rowList[i].style.display = "";
        } else {
            rowList[i].style.display = "none";
        }
    }
}	
</code></pre></fieldset>
<p>In this method we select all rows, then select all cells in rows and search the phrase 
in checked columns. After that we set 'visible' to the rows which contain the cells with the phrase.
Since we also highlight the phrase in the cell,
we will therefore continue to look at the search method in
Issue:
<a href="javascript:booklet.navigateRegularPages('get_highlightResult', 'Highlight Search Results');">
Highlight Search Results.</a></p>
`;
return markup;
}


    