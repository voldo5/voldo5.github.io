class DropdownFilter {
    // dropdown_filter - container for dropdown 
    dropdown_filter = document.querySelector('.filter-container');
        
    constructor(){        
        let ul = document.querySelector('.filter-ul'); 
        table.tableHeaderContext.cellContexts.forEach(cellContext => { 
            let li = document.createElement('li'); 
            li.classList.add("filter-li");                             
            let input = document.createElement('input');
            input.type = "checkbox";
            input.id = cellContext.name + '_column';
            input.classList.add("filter-checkbox");            
            cellContext.cssClassList.includes("checked") ? input.checked = true : input.checked = false;            
            li.appendChild(input);            
            let span = document.createElement('span');
            span.innerHTML = cellContext.caption;            
            li.appendChild(span); 
            ul.appendChild(li);
        }); 
    }
}