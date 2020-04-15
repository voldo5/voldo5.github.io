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

    inputContainer(inputContainerType, inputContainerClasses, onClick) {
        const inputContainer = new InputContainer(inputContainerType, inputContainerClasses, onClick);        
        this.inputContainers.push(inputContainer); 
        this.lastInputContainer = inputContainer;       
        return this;
    }

    addIconContainerWithIcon(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, iconClasses, onClick) {
        this.lastInputContainer
        .iconContainer(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick)
        .addIcon(iconClasses);        
        return this;
    }

    addInput(inputType, placeholder, inputClasses) {        
        this.lastInputContainer.addInput(inputType, placeholder, inputClasses);        
        return this;
    }
   
    toHtml() {
        return `<th class = "${this.cellClases}">
        <${this.containerType} class = "${this.containerClasses}">
                    ${this.iconContainers.map(ic => ic.toHtml()).join('')}  
                    ${this.inputContainers.map(ip => ip.toHtml()).join('')}
        </${this.containerType}>                     
                </th>`;
    } 
} 
