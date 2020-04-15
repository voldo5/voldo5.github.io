function get_addPortraitPhoto() {    
    let markup = `
<h3>Issue. Add portrait photo.</h3>  
<p>  Add icon to row cell in 'name' column. If a user click
on the icon, then portrait photo is
displayed in supplemental Row.</p>     
<img src="\\assets\\picsDoc\\doc_portraitPhoto.jpg" alt="Portrait Photo"
class="img-fixedsize-small" width="233" height="272">
<br>
<p>Show placeholder, if photo is not avalable</p>
<img src="\\assets\\picsDoc\\doc_portraitPhotoPlaceholder.jpg" alt="Photo placeholder"
class="img-fixedsize-small" width="233" height="272">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Add portrait to supplemental row: add icon to the 'name' cell, check if photo file exist,
add onclick function to insert photo in supplemental row.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
PopulateTable() {		
    //....
    else if (this.tableHeaderContext.cellContexts[i].name === "name") {  // name
        cell.innerHTML = this.getInnerHtmlForCellName(cellValue, item);					
    }
    //....
}

getInnerHtmlForCellName(cellValue, item) {

    let innerHtml = "";
    if (cellValue != null && String(cellValue) !== ' ') {

        let cssCellClassName = 'photo-portrait';
        let photoName = 'PortraitPlaceholder.jpg';
        // check if photo file exist
        if ("photo" in item.name && item.name.photo != "" && item.name.photo != " ") {
            photoName = item.name.photo;
        }			

        // onclick - insert photo in supplemental row
        let onClick = \`(function(){	
                        let iRowClickedIndex = event.target.closest('tr').rowIndex;													
                        table.putImageToSupplementalRow('\${photoName}', '\${cssCellClassName}', iRowClickedIndex);
                        })()\`;

        // add icon ('fa-user-circle-o')
        innerHtml = (new td("", []))
            .iconContainer("span", \`tooltip fade shiftPortrait\`, "data-tooltip", "Display portrait photo", onClick)
            .addIcon("portraitIcon fa fa-user-circle-o")
            .textContainer('span', 'searchble-txt', item.name.firstName + ' ' + item.name.lastName)
            .toHtml();
    }

    return innerHtml;
}
</code></pre></fieldset>
<p>See also Issue:</li><a href="javascript:booklet.navigateRegularPages('get_supplementalRow', 'Supplemental Row');">
Supplemental Row.</a></li></p>
`;
return markup;
}


    