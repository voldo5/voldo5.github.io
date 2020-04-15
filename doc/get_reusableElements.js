function get_reusableElements() {    
    let markup = `
<h3>Issue. Reusable Elements.</h3>  
<h5>Create a next group of reusable elements that appear in the table.</h5>
<ul>
<li>item - item element to display text</li>
<li>item with icon - item element to display text with icon</li>
<li>icon container - container for icons</li>
<li>icon - icon element</li>
<li>input container - container for inputs and icons</li>
<li>input - input element</li>
<li>dropdown container - container for dropdown</li>
<li>th - table header cell</li>
</ul>
<p>The elements must be JavaScript classes, and the classes
must allow elements to be used in a fluent API style.</p>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<p>Let's explain the idea in an example.</p> 
<p>Suppose, we need to add the db icon <br>
<img src="\\assets\\picsDoc\\doc_dbIcon.jpg"
class="img-fixedsize-inline" width="39" height="42">
<br>with the tooltip <br>
<img src="\\assets\\picsDoc\\doc_dbIconTooltip.png"
class="img-fixedsize-inline" width="92" height="69">
<br>to the table header, <br>
<img src="\\assets\\picsDoc\\doc_dbHeader.jpg"
class="img-fixedsize-inline" width="472" height="132"></p>
<p>and, when the mouse hover over the icon, the dropdown menu appear,
<img src="\\assets\\picsDoc\\doc_dbIconDropdown.png"
class="img-fixedsize-inline" width="133" height="136"></p>
<p>mouse click on the menu item calls the function.</p>
<p>So, we can describe our steps as following</p>
<ul>
<li>1.1. Create icon container.</li>
<li>1.2. Сreate icon and put the icon in the icon container.</li>
<li>2.1. Create dropdown container and put the dropdown container in the icon container.</li>
<li>2.2. Create 3 items with icons and put the items in the dropdown container.</li>
<li>3. Put the icon container into the th (table header cell).</li>
</ul>
                
<p>The JavaScript code will look like this.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForHeaderSecondRowCell(){
  //...
  let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))		
    .iconContainer("div", 'dbIconContainer db-dropdown tooltip fade',
                   "data-tooltip", "Contacts", null)
    .addIcon("dbIcon fa fa-database contacts-data")
    .addDropdownContainer("div", "db-dropdown-content")
    .addDropdownItem("p", "db-dropdown-item", onClickLoadContacts, "Load", 'fa fa-upload')
    .addDropdownItem("p", "db-dropdown-item", onClickSaveContacts, "Save", 'fa fa-download')
    .addDropdownItem("p", "db-dropdown-item", onClickDisplayTestContacts, "Test Data", 'fa fa-list-alt')
    .toHtml();  
}	
</code></pre></fieldset>
<p>Or in more detail.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">

createTableHeaderSecondRow() {
//...		
  let cell = document.createElement('th');
  row.appendChild(cell);		
  cell.innerHTML = this.getInnerHtmlForHeaderSecondRowCell();
//...			
}

getInnerHtmlForHeaderSecondRowCell(){
  //... 
  let onClickDisplayTestContacts = '(function(){
    table.displayTestContacts();									
  })()';

  let onClickSaveContacts = '(function(){
    table.saveContacts();									
  })()';

  let onClickLoadContacts = '(function(){
    table.loadContacts();									
  })()';

  let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))		
    .iconContainer("div", 'dbIconContainer db-dropdown tooltip fade',
                   "data-tooltip", "Contacts", null)
    .addIcon("dbIcon fa fa-database contacts-data")
    .addDropdownContainer("div", "db-dropdown-content")
    .addDropdownItem("p", "db-dropdown-item", onClickLoadContacts, "Load", 'fa fa-upload')
    .addDropdownItem("p", "db-dropdown-item", onClickSaveContacts, "Save", 'fa fa-download')
    .addDropdownItem("p", "db-dropdown-item", onClickDisplayTestContacts, "Test Data", 'fa fa-list-alt')
    .toHtml();		

  return innerHtml;
}	
</code></pre></fieldset>

<p>Let's make some clarifications.</p>
<p>In this code snippets we create new class 'th' and use the class methods 'iconContainer',
'addIcon', 'addDropdownContainer', 'addDropdownItem', 'toHtml' 
with the relevant parameters to create html code (innerHtml) for table header cell.</p>

<p>Look at the 'th' class now.</p>
<fieldset>
<legend>JavaScript</legend>
<script type="text/plain" class="language-markup">				
class th {
    constructor(cellClases, containerType, containerClasses) {
        this.cellClases = cellClases;
        this.containerType = containerType;
        this.containerClasses = containerClasses;               
        this.iconContainers = [];        
        this.inputContainers = [];
    } 
    
    iconContainer(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick) { 
        const iconContainer = new IconContainer(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick);
        this.iconContainers.push(iconContainer); 
        this.lastIconContainer = iconContainer;       
        return this;
    }

    addIcon(iconClasses) {
        this.lastIconContainer.addIcon(iconClasses);        
        return this;
    }  

    addDropdownContainer(dropdownContainerType, dropdownContainerClasses) {
        this.lastIconContainer.addDropdownContainer(dropdownContainerType, dropdownContainerClasses);
        this.lastDropdownContainer = this.lastIconContainer.lastDropdownContainer; 
        return this;
    }

    addDropdownItem(itemType, itemClass, itemOnClick, itemText, iconClass) {
        this.lastDropdownContainer.addDropdownItem(itemType, itemClass, itemOnClick, itemText, iconClass); 
        return this;
    }
    //...

  toHtml() {
        return <th class = '\${this.cellClases}'>
        <\${this.containerType} class = '\${this.containerClasses}'>
                    \${this.iconContainers.map(ic => ic.toHtml()).join('')}
        </\${this.containerType}>                     
                </th>;
  } 
} 
</script>	
</fieldset>

<p>We see, that the methods return 'this' (i.e. whole class object), so
we can call next class methods after previous method call, using '.' notation, in this way
creating a chain of method calls.</p>
<p>We see, also, that the class contains method toHtml(), which returns element's 
html code. This html code we can dynamically add to the table.</p>
<p>On the other hand, this toHtml() method use a toHtml() method of another object - IconContainer class object,
in order to get innerHtml of iconContainer element. Thus, we can insert one element in another.</p>
<p>All element classes are constructed similarly: constructor with paremeters, some methods
and toHtml() method - to get html code of element.</p> 
<p>See project folder 'elements'.</p>

<h5>Method parameters.</h5>
<p>The class method parameters are mainly css class names, html tags names and
onClick methods.</p> 

<h5>Another examples of fluent API.</h5>
<h5>Name cell.</h5>
<p><img src="\\assets\\picsDoc\\doc_cellName.jpg" 
class="img-fixedsize-inline" width="120" height="41"></p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForCellName(cellValue, item) {
  //...
  innerHtml = (new td("", []))
				.iconContainer("span", 'tooltip fade shiftPortrait', "data-tooltip", "Display portrait photo", onClick)
				.addIcon("portraitIcon fa fa-user-circle-o")
				.textContainer('span', 'searchble-txt', item.name.firstName + ' ' + item.name.lastName)
				.toHtml();
  //...
}
</code></pre></fieldset>

<h5>User Name cell.</h5>
<p><img src="\\assets\\picsDoc\\doc_cellUserName.jpg" 
class="img-fixedsize-inline" width="101" height="30"></p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForCellUserName(cellValue, item) {
  //...
  innerHtml = (new td("", []))
				.iconContainer("span", 'tooltip fade shiftAvatar', "data-tooltip", "Display avatar", onClick)
				.addIcon("avatarIcon fa fa-user-circle")
				.textContainer('span', 'searchble-txt', item.username.username)
				.toHtml();
  //...
}
</code></pre></fieldset>

<h5>Address cell.</h5>
<p><img src="\\assets\\picsDoc\\doc_cellAddress.jpg" 
class="img-fixedsize-inline" width="306" height="46"></p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForCellAddress(cellValue, item) {

  //...
    innerHtml = (new td("", []))
      .iconContainer("span", 'tooltip fade shiftGoogle', "data-tooltip", "Display Google Maps", onClickGoogleMap)
      .addIcon("googleMapsMarkerIcon fa fa-map-marker")
      .iconContainer("span", 'tooltip fade shiftOsm', "data-tooltip", "Display OpenStreet Map", onClickOpenStreetMap)
      .addIcon("openStreetMapMarkerIcon fa fa-map-marker")
      .iconContainer("span", 'tooltip fade shiftEstate', "data-tooltip", "Display Photo Estate", onClickPhotoEstate)
      .addIcon("photoIcon fa fa-picture-o")
      .textContainer('span', 'searchble-txt', cellValue)
      .toHtml();
  //...
}
</code></pre></fieldset>

<h5>Phone cell.</h5>
<p><img src="\\assets\\picsDoc\\doc_cellPhone.jpg" 
class="img-fixedsize-inline" width="110" height="44"></p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForCellPhone(cellValue) {
  //...
  innerHtml = (new td("", []))
  .iconContainer("span", 'tooltip fade shiftSkype', "data-tooltip", "Call Skype", onClickSkype)
  .addIcon("skypeIcon fa fa-skype")
  .iconContainer("span", 'tooltip fade shiftLandPhone', "data-tooltip", "Call Land Line", onClickLandPhone)
  .addIcon("table-phoneind fa fa-skype")				
  .textContainer('span', 'searchble-txt', cellValue)
  .toHtml();
  //...
}
</code></pre></fieldset>

<h5>Table command row.</h5>
<p><img src="\\assets\\picsDoc\\doc_tableHeader2ndRow_a.jpg" 
class="img-responsive" width="600" height="400"></p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForHeaderSecondRowCell(){
  //...
  let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))		
			.iconContainer("div", 'dbIconContainer db-dropdown tooltip fade',
			                "data-tooltip", "Contacts", null)			            
			.addIcon("dbIcon fa fa-database contacts-data")
			.addDropdownContainer("div", "db-dropdown-content")
			.addDropdownItem("p", "db-dropdown-item", onClickLoadContacts, "Load", 'fa fa-upload')
			.addDropdownItem("p", "db-dropdown-item", onClickSaveContacts, "Save", 'fa fa-download')
			.addDropdownItem("p", "db-dropdown-item", onClickDisplayTestContacts, "Test Data", 'fa fa-list-alt')
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
    //...		
}
</code></pre></fieldset>
`;
    return markup;
    }
    