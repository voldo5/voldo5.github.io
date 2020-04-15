function get_addSkype() {    
    let markup = `
<h3>Issue. Add Skype.</h3>  
<p>Add Skype icon to the cells in 'phone' column.
If a user click on the icon, then Skype is opened.</p>     
<img src="\\assets\\picsDoc\\doc_skype.jpg" alt="Skype"
class="img-responsive" width="233" height="272">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Add skype icon to the 'phone' cell and
add to icon the onclick function to open Skype.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
PopulateTable() {		
    //....
    else if (this.tableHeaderContext.cellContexts[i].name === "phone") {  // phone
        cell.innerHTML = this.getInnerHtmlForCellPhone(cellValue);
    }
    //....
}

getInnerHtmlForCellPhone(cellValue) {

    let innerHtml = "";
    if (cellValue != null && String(cellValue) !== ' ') {

        let onClickSkype =\`(function(){	
                            window.location.href = 'skype:\${cellValue}call';
                        })()\`;
        
        innerHtml = (new td("", []))
            .iconContainer("span", \`tooltip fade shiftSkype\`, "data-tooltip", "Call Skype", onClickSkype)
            .addIcon("skypeIcon fa fa-skype")
            .textContainer('span', 'searchble-txt', cellValue)
            .toHtml();
    }
    
    return innerHtml;
};
</code></pre></fieldset>

<p>This works if Skype is installed on user computer.</p>

<fieldset>
    <legend>CSS</legend>
    <div class="legend2">table.css</div>
    <pre><code class="language-css">
    .skypeIcon {
        display:inline;
        color:#00aff0;
        font-size: 1.0rem;
        font-weight: bold;
        cursor: pointer; 
        margin: 0 0.4rem 0 0rem; 
    }
 </code></pre>
</fieldset>
`;
return markup;
}


    