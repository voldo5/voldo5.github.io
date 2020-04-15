function get_supplementalRow() {    
    let markup = `
<h3>Issue. Add Supplemental Row to the table.</h3>
<p>Make it possible to display an additional row below the row 
with contact information. In this row we will display additional
information about the person: portrait photo,
avatar, photo of real estate, google address map and so on</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_supplementalRow.jpg" alt="Supplemenatal Row"
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Add Table class method to insert supplemental row.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
insertSupplementalRow = (iRow) => {

    let row = this.table.insertRow(iRow);
    row.classList.add('table-tr-data');
    row.classList.add('table-tr-supplemental');
    let cell = row.insertCell();
    cell.colSpan = this.table.rows[0].cells.length;
    cell.classList.add('table-tr-data-cell');

    return row;
};
</code></pre></fieldset>
<p>We will call this method every time when we need a supplemental row.
Css class 'table-tr-supplemental' is used to distinguish between
a normal data row and an supplemental row.</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table-tr-data {
    display: table-row;
}
.table-tr-data-cell {
    display: table-cell;    
    z-index: 1;
    padding: 0 4px;
    margin: 0;
    border: solid #eee;
    border-width: 0 1px 1px 0;
    border-spacing: 0;
    border-collapse: separate;
    vertical-align: top;
    cursor: default;
    overflow: initial !important;    
    word-break: break-all;    
}
</code></pre></fieldset>

<h5>2. Add method to insert photo in the supplemental row.</h5>
<p>If the user tries to insert the same photo once more time, then
supplemental row will close - row is toggling.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
putImageToSupplementalRow(photoName, cssClassName, iRowClickedIndex) {

    let iRow = iRowClickedIndex + 1;
    let currentRow = this.table.rows[iRow];
    let rowIndex = currentRow.rowIndex;    
    
    if (currentRow.classList.contains("table-tr-supplemental")) {
        let cell = currentRow.cells[0];
        if (cell.children.length > 0) {
            let childrenClasses = this.getCellChildrenClasses(cell);				

            // delete supplemental row (toggle row by click on button)				
            if (childrenClasses.includes(cssClassName)) {					
                this.table.deleteRow(rowIndex);
                return -1;
            }
            else { // put photo to supplemental row
                let div = this.putImageToDiv(photoName, cssClassName);
                currentRow.cells[0].children[0].appendChild(div);
            }
        }
        return iRow;
    }
    else {  // add supplemental row and put photo
        let supplementalRow = this.insertSupplementalRow(iRow);			
        let container = this.putImageToFlexContainer(photoName, cssClassName);
        supplementalRow.cells[0].appendChild(container);
        return iRow;			
    }
}	
</code></pre></fieldset>
<p>We put image to div container and if it the first image in row -
put div container in the flex container.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
putImageToDiv(name, cssClassName){

    let div = document.createElement("div");
    div.classList.add("item");		
    div.classList.add(cssClassName);
    if(name !== 'map'){
        div.style.backgroundImage = "url('/assets/photos/" + name + "')";
    }		
    div.style.display = 'block';

    return div;		
}	
</code></pre></fieldset>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
putImageToFlexContainer(photoName, cssClassName) {

    let div = this.putImageToDiv(photoName, cssClassName);

    let container = document.createElement("div");
    container.classList.add("flex-container");
    container.appendChild(div);

    return container;
}	
</code></pre></fieldset>

<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.flex-container {
    display: flex;      
    flex-direction: column;
    width:100%;
    min-height: 44px;
    align-items: center;     
    text-align: center;    
  }
</code></pre></fieldset>




`;
return markup;
}


    