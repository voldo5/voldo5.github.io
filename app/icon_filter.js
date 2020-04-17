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
        
        // add class "checked" to the cell context class list
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

    addClassToArray(classArray, name){

        for( var i = 0; i < classArray.length; i++){ 
            if(!classArray.includes(name)){
                classArray.push(name);
            }            
         }

         return classArray;
    }

    removeClassFromArray(classArray, name){

        for( var i = 0; i < classArray.length; i++){ 
            if ( classArray[i] === name) {
                classArray.splice(i, 1); 
            }
         }
         
         return classArray;
    }
}
