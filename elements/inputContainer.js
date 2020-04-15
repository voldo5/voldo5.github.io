class InputContainer {    
        constructor(inputContainerType, inputContainerClasses, onClick, onClickSearch) {
        this.inputContainerType = inputContainerType;        
        this.inputContainerClasses = inputContainerClasses;        
        this.onClick = onClick;  
        this.iconContainers = [];        
        this.inputs = [];
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

    addInput(inputType, placeholder, inputClasses) { 
        const input = new Input(inputType, placeholder, inputClasses);
        this.inputs.push(input);        
        return this;
    }

    toHtml() {        
        return `<${this.inputContainerType} class = "${this.inputContainerClasses}" onkeypress="${this.onClick};">          
                    ${this.inputs.map(ip => ip.toHtml()).join('')} 
                    ${this.iconContainers.map(ic => ic.toHtml()).join('')}                                          
                </${this.inputContainerType}}>`;
    }
}
