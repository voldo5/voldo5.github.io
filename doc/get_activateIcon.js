function get_activateIcon() {    
    let markup = `
<h3>Activate Edit Icon</h3>
<h4>Issue. </h4> <p>Add the 'Edit' icon (pensil) to the command line of the table.
This icon is disabled when there is no selected row in the table, and becomes active
and clickable when the user selects a some row.
To select a row, the user must click on the row. Clicking on the Edit icon leads
to opening the Edit Contact Form for the contact from the selected line.</p>
<br> 
<p>Pic.1. Edit contact icon disabled when no table row is selected.</p>
<img src="\\assets\\picsDoc\\doc_activateIcon1.jpg" alt="Edit contact icon is not active"
class="img-responsive" width="600" height="400"> 
<br><br> 
<p>Pic.2. Edit contact icon is active and clickable when table row 1 is selected. </p>
<img src="\\assets\\picsDoc\\doc_activateIcon2.jpg" alt="Edit contact icon is not active"
class="img-responsive" width="600" height="400">

<h4>Code.</p>
<h5><strong>Keywords: proxy</strong></h5>

<h5>1. Highlight icon</h5>
<p>Add variable iSelectedRow to Table class constructor as proxy object. 
Add method highlightIcon as handler of proxy. In this mehtod we check the condition 'if number
of clicked row (value) is greater then 0' and change the style of container of Edit icon
(change opacity) everytime when condition is fulfiled.</p>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
class Table {
constructor() {		
	this.defaultSelectedRow = { row: -1 };
	this.iSelectedRow = new Proxy(this.defaultSelectedRow, this.activateIcon);
  }

// Table class method
activateIcon = {
  set(target, property, value) {
	if (property === 'row') {		
		if (document.querySelector(".updateRowIconContainer")) {
			let element = document.querySelector('.updateRowIconContainer'); 
			// highlight the edit icon depending on
		    // whether there is a selected line or not			
			if (value < 0) { //.fa-pencil icon	
				element.style.pointerEvents = "none";
				element.style.opacity = 0.5;
			}
			else {
				element.style.pointerEvents = "auto";
				element.style.opacity = 1;
			}
        }
	target[property] = value;			
	return true;
	}
  }
}
</code></pre></fieldset>
`;
return markup;
}
    