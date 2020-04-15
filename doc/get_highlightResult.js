function get_highlightResult() {    
    let markup = `
<h3>Issue. Highlight Search Results.</h3>
<p>Highlight table search results as on Fig.1</h5>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_highlightResult.jpg" alt="Highlight Result"
class="img-responsive" width="600" height="400">

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Extract the searchable information from json file and add it to the table cell.</h5>
<h5>1.1. Put searchable information into span container.</h5>
<p> As the first step, we put information, that we intend to display in the table cell,
to the span container with css class 'searchble-txt'. This container we can use to manipulate
the information.</p>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
PopulateTable() {
// ...
    let cellValue = Object.values(item)[i];

    // put id value in the cell								
    if (this.tableHeaderContext.cellContexts[i].name === "id") {  // id
        cell.innerHTML = (new td("", [])).textContainer('span', 'searchble-txt', cellValue).toHtml();                					
    }     
// ...
}
</code></pre></fieldset>

<p> For each json node, we set rules for text extraction.
For example, for node 'name'.</p>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
PopulateTable() {
// json data 'contacts'
this.contacts.forEach(item => {
//...
// put contact value to the table cell
for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
    let cellValue = Object.values(item)[i];
    // parse object to text 
    if (typeof (cellValue) === "object") {
        let result = [];
        Parser.parseObject(cellValue, result);
        cellValue = result.join(separatorBr);
    }
//...			
    else if (this.tableHeaderContext.cellContexts[i].name === "name") {  // name
        cell.innerHTML = this.getInnerHtmlForCellName(cellValue, item);					
    }
//...
}

getInnerHtmlForCellName(cellValue, item) {
    let innerHtml = "";
    if (cellValue != null && String(cellValue) !== ' ') {  
        // get file name of person foto      
        let photoName = 'PortraitPlaceholder.jpg';
        if ("photo" in item.name && item.name.photo != "" && item.name.photo != " ") {
            photoName = item.name.photo;
        }			

        // add onclick function to portrait icon
        let cssCellClassName = 'photo-portrait';
        let onClick = \`(function(){	
                        let iRowClickedIndex = event.target.closest('tr').rowIndex;													
                        table.putImageToSupplementalRow('\${photoName}', '\${cssCellClassName}', iRowClickedIndex);
                        })()\`;

        // create inner html of table cell with icon and searchable text in span element 
        innerHtml = (new td("", []))
            .iconContainer("span", \`tooltip fade shiftPortrait\`, "data-tooltip", "Display portrait photo", onClick)
            .addIcon("portraitIcon fa fa-user-circle-o")
            .textContainer('span', 'searchble-txt', item.name.firstName + ' ' + item.name.lastName)
            .toHtml();
    }
    return innerHtml;
}
</code></pre></fieldset>

<h5>2. Search matching to user input in the searchable information only.
Put matching text within mark tags.</h5>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
filterTable(){
    //...
    let input = document.querySelector(".input-search");
    let inputString = input.value; 
    if (inputString.trim().length > 0) { 
        table.filterTableAndHighliteMatchingText(filter);
    }  
    //...  
}
</code></pre></fieldset>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
filterTableAndHighliteMatchingText(filterString) {
    //...
    this.handleSearchableContentOfCell(cell, filterString, table.tableHeaderContext.isSencitiveSearch);
    //...
}
</code></pre></fieldset>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
handleSearchableContentOfCell(cell, filter, isSensitive ){ 
               
    let isHighlighted = "false";
    let content = cell.innerHTML; 
    let searchableContent = "";

    // searchable content is located between separator1 and separator2 (in the cell last child)       
    let separator1 = '<span class="searchble-txt">';
    let separator2 = '</span>';

    let pos1 = content.indexOf(separator1, 0);
    let pos2 = content.indexOf(separator2, pos1 + separator1.length);
    
    if( pos1 > -1 && pos2 > 0)
    { 
        // extract searchable content           
        searchableContent = content.slice(pos1 + separator1.length, pos2);             

        let highlightedContent = this.highlightFinding(searchableContent, filter, isSensitive);
        
        // put matching text within mark tags (remove/add child)
        cell.removeChild(cell.querySelector(".searchble-txt"));            
        let lastChild = document.createElement('span');
        lastChild.classList.add("searchble-txt");
        lastChild.innerHTML = highlightedContent;      				
        cell.appendChild(lastChild);            

        if( highlightedContent !== searchableContent){                
            isHighlighted = "true";
        }
    }    
    return  isHighlighted;       
}
</code></pre></fieldset>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
highlightFinding(searchableContent, filter, isSensitive){

    let str = searchableContent;
    let result = searchableContent;
    let flt = filter;
    
    if(isSensitive === "false"){
        str = searchableContent.toUpperCase();
        flt = filter.toUpperCase();
    }

    let sub = "";
    let sub1 = "";        
    let pos0 = 0;
    let pos1 = str.indexOf(flt, pos0);

    // disassemble string - put matching within mark tags - assemble string
    while (pos1 > -1) {
        sub1 = sub.concat("", searchableContent.substring(pos0, pos1));

        // highlight selection
        sub = sub1.concat("", \`<mark>\${searchableContent.substring(pos1, pos1 + flt.length)}</mark>\`);

        pos0 = pos1 + flt.length;
        pos1 = str.indexOf(flt, pos0);

        if (pos1 < 0) {
            result = sub.concat("", searchableContent.substring(pos0));
        }
    }
    
    return result;
}    
</code></pre></fieldset>
`;
return markup;
}


    
