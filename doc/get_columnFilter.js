function get_columnFilter() {    
    let markup = `
<h3>Issue. Column Filter.</h3>
<p>Add column filter to table second header row as on Fig.1</h5>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_columnFilter.jpg" alt="Column Filter"
class="img-small-responsive" width="600" height="400">
<p>Open the dropdown menu if the user clicks on the filter icon.
Close the dropdown menu if the user clicks in a location other than the menu.
Add the ability to select the columns of the table in which you want to search
and the ability to select what search should be: case sensitive or not.</p5>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Add filter icon.</h5>
<p>For some icons we used fluent API. But for filter icon we will use
straightforward approach: create container for filter icon, add filter icon
to container, add container to header second row cell. After that in p.2,
we also add dropdown menu to icon container.</h5>
<h5>1.1. Create IconFilter class for filter icon in container.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">icon-filter.js</div>
<pre><code class="language-javascript">
class IconFilter {
    // span - icon container
    span = document.createElement('span');        
    constructor(containerClassName, iconId, iconClass) {
        this.span.classList.add(containerClassName);
        this.span.id = "containerIconFilter";
        // add tooltip  
        this.span.classList.add("tooltip");
        this.span.classList.add("fade");
        let iconToolTip = "Filter table by columns";
        this.span.setAttribute("data-tooltip", iconToolTip);      
        // add icon    
        let iElement = document.createElement('i');
        iElement.id = iconId;
        let iconClassList = iconClass.split(" ");
        iconClassList.forEach(item => iElement.classList.add(item));
        this.span.appendChild(iElement);
        // put dropdown into container
        let dropdownFilter = new DropdownFilter();
        this.span.appendChild(dropdownFilter.dropdown_filter);
        // add listener to icon
        iElement.addEventListener("click", () => {
            this.toggleVisibility(dropdownFilter.dropdown_filter);
        });
    }
    // ...
}
</code></pre></fieldset>
<h5>1.2. Add css for elements created by IconFilter object.</h5>
<fieldset>
    <legend>CSS</legend>
    <div class="legend2">icon_filter.css</div>
    <pre><code class="language-css">
    .container-iconFilter {    
        margin-left: 2.1rem;
        position: relative;    
    }
    .container-iconFilter:before { 
      top: -48px;
      left: -96px;
    }
    .container-iconFilter .fa-filter {
        color: seagreen;
        font-size: 1.3rem;
        margin: 0.2rem;
        padding: 0.2rem;    
        cursor: pointer;
        font-weight: lighter ;
      } 
      .container-iconFilter .fa-filter:hover {
       color: #00aff0;
       /* color: #02729b; */  
       font-size: 1.3rem;
       margin: 0.2rem;
       padding: 0.2rem;  
       cursor: pointer;
       font-weight: lighter ;
     } 
     .container-iconFilter .fa-filter:after {
       content: "007C";   
       color:  teal;
       font-size: 1.3rem;
       font-weight: bold;   
       margin: 0 0 0 0.6rem;
       padding:0;
      }  
    </code></pre>
</fieldset>

<h5>2. Add dropdown menu.</h5>
<p>Dropdown menu is not fully dynamic - it has some html</p>
<h5>2.1. Create html and css parts of dropdown filter.</h5>
<fieldset>
	<legend>HTML</legend>
	<script type="text/plain" class="language-markup">				
    <div id="filterContainer" class="filter-container">
		<div class="filter-hdr1">Search Columns</div>
		<ul class="filter-ul">
		</ul>
		<div class="filter-hdr1">Search Case</div>
		<ul class="filter-ul">
			<li class="filter-li">
				<input type="radio" id="radio1" name="searchType" class="filter-radio" value="insensitive" checked />
				<label for="insensitive">Insensitive</label>
			</li>
			<li class="filter-li">
				<input type="radio" id="radio2" name="searchType" class="filter-radio" value="sensitive" />
				<label for="insensitive">Sensitive</label>
			</li>
		</ul>
	</div>
    </script>
</fieldset>

<fieldset>
    <legend>CSS</legend>
    <div class="legend2">icon_filter.css</div>
    <pre><code class="language-css">
    .filter-container {
        left: -6.6rem;
        top: 1.7rem;
        border: 1px solid rgb(191, 191, 248);
        position: absolute; 
        padding: 0 0.4rem;
        z-index: 12;
        /* z-index: 12000000000; */
        background-color: #fff; 
        background: #fff; 
        /* background-color: rgba(255, 0, 0, 0.5);  */
        /* opacity: 0.5; */
        /* background: red; */
        border-radius: 4px;
        border: 1px solid lightblue; 
        display: none;    
      }
      .filter-container.visible{ 
        display: block;  
      }  
      .filter-container .filter-hdr1 {
        padding: 6px 6px 0 6px;
        margin-bottom: 0;
        border-bottom: 2px solid teal ;
        color: teal;
        font-weight: 500;
      }
      .filter-container .filter-ul {
        display: inline-block;  
        padding: 6px;
        margin: 0; 
        /* z-index: 12; */
      }
      .filter-container .filter-li {  
        padding: 0;
        list-style: none; 
        text-align: left;
        font-weight: normal; 
        /* z-index: 12; */
      }
      .filter-container label {  
        margin: 0;  
      }
      .filter-container .filter-checkbox,
      .filter-container .filter-radio  {
        margin-right: 4px;
      }  
    </code></pre>
</fieldset>
    
<h5>2.2. Create class DropdownFilter.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">icon-filter.js</div>
<pre><code class="language-javascript">
class IconFilter {
    // span for icon
    span = document.createElement('span');
        
    constructor(containerClassName, iconId, iconClass) {
        
        // put icon into container         
        this.span.classList.add(containerClassName);
        this.span.id = "containerIconFilter";
        // tooltip  
        this.span.classList.add("tooltip");
        this.span.classList.add("fade");
        let iconToolTip = "Filter table by columns";
        this.span.setAttribute("data-tooltip", iconToolTip);      
        // icon    
        let iElement = document.createElement('i');
        iElement.id = iconId;
        let iconClassList = iconClass.split(" ");
        iconClassList.forEach(item => iElement.classList.add(item));
        this.span.appendChild(iElement);        

        // put dropdown into container
        let dropdownFilter = new DropdownFilter();
        this.span.appendChild(dropdownFilter.dropdown_filter);

        iElement.addEventListener("click", () => {
            this.toggleVisibility(dropdownFilter.dropdown_filter);
        });
    }
    // ...
}
</code></pre></fieldset>

<h5>2.3. Add dropdown menu to filter icon container. See p.1.1.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">icon-filter.js</div>
<pre><code class="language-javascript">
class IconFilter {
        // ...
        // put dropdown into container
        let dropdownFilter = new DropdownFilter();
        this.span.appendChild(dropdownFilter.dropdown_filter);

        iElement.addEventListener("click", () => {
            this.toggleVisibility(dropdownFilter.dropdown_filter);
        });
    }
    // ...
}
</code></pre></fieldset>

<h5>2.4. Add methods that toggle visibility of dropdown menu and update the search filter,
when user clicked on filter icon.  We need update, because between open/close dropdown menu,
user can check/uncheck columns.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">icon-filter.js</div>
<pre><code class="language-javascript">
toggleVisibility(dropdown){
    if(dropdown.classList.contains("visible")){
        dropdown.classList.remove("visible");
        this.updateSearchFilter();        
    }
    else{
        dropdown.classList.add("visible"); 
    }                
}

updateSearchFilter() {
    var checkboxes = document.querySelectorAll(".filter-checkbox");
    // remove class "checked" from all cells 
    table.tableHeaderContext.cellContexts.forEach(context => {
        context.cssClassList = this.removeClassFromArray(context.cssClassList, "checked");
    });
    
    // add css class "checked" to the cell context css class list
    // if in search filter dropdown the column name in checked         
    for (var i = 0; i < checkboxes.length; i++) {            
        let caption = checkboxes[i].parentElement.textContent; 
        
        table.tableHeaderContext.cellContexts.forEach(context => {
            let newContext = [];
            if(caption === context.caption && checkboxes[i].checked)
            {
                newContext = JSON.parse(JSON.stringify(context.cssClassList));                    
                context.cssClassList = this.addClassToArray(newContext, "checked");                   
            } 
                          
        });
    }

    let radio = document.querySelector("#radio1");
    radio.checked ? table.tableHeaderContext.isSencitiveSearch = "false" :
                    table.tableHeaderContext.isSencitiveSearch = "true";
}
</code></pre></fieldset>
<p>Check/uncheck boxes in dropdown menu is css/html matter. So we need function that copy
information about checked boxes from dropdown menu to table context, because we recriate table
after every change accordingly to the table context.</p>

<h5>3. Add column filter icon to table header second row cell.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
createTableHeaderSecondRow() {
    // ...
    let iconFilter = new IconFilter("container-iconFilter", "icon-filter", "fa fa-filter");
    let flexContainer = cell.querySelector(".icon-flex-container");		
    flexContainer.appendChild(iconFilter.span);	
    // ...		
}	
</code></pre></fieldset>

<h5>4. Close dropdown menu when user clicked outside dropdown menu.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
window.addEventListener('load', () => {
    // ...
	// close filter dropdown if user clicked outside of filter dropdown
	let filterContainer = document.querySelector('#filterContainer');	
	document.onclick = function (e) {
		if (!document.getElementById('containerIconFilter').contains(e.target)) {
			// Clicked outside the box
			filterContainer.classList.remove("visible");
		}
	};
});	
</code></pre></fieldset>
`;
return markup;
}


    
