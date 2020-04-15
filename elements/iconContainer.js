class IconContainer {    
        constructor(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick) {
        this.iconContainerType = iconContainerType;        
        this.iconContainerClasses = iconContainerClasses;
        this.dataAttrib = dataAttrib;
        this.tooltipText = tooltipText;
        this.onClick = onClick;          
        this.icons = [];
        this.dropdowns = [];
    }    

    addIcon(iconClasses) { 
        const icon = new Icon(iconClasses);
        this.icons.push(icon);        
        return this;
    }

    addDropdownContainer(dropdownContainerType, dropdownContainerClasses) {
        const dropdownContainer = new DropdownContainer(dropdownContainerType, dropdownContainerClasses);
        this.dropdowns.push(dropdownContainer); 
        this.lastDropdownContainer = dropdownContainer;          
        return this;
    }

    toHtml() {
        return `<${this.iconContainerType} class = "${this.iconContainerClasses}"
                   ${this.dataAttrib} = "${this.tooltipText}" onClick="${this.onClick};">
                       ${this.icons.map(i => i.toHtml()).join('')} 
                       ${this.dropdowns.map(i => i.toHtml()).join('')}                                          
                </${this.iconContainerType}>`;
    }
}
