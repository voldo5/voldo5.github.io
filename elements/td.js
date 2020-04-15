class td {
    constructor(cellClases, textItems) {
        this.cellClases = cellClases;
        this.textItems = textItems;        
        this.iconContainers = [];
        this.icons = [];       
    }
    //new tableCell("", [], [])

    // class IconContainer {    
    //     constructor(iconContainerType, iconContainerClasses, dataAttrib, tooltipText, onClick) {
    // iconContainer(iconContainerType, iconContainerId, tooltipClasses, dataAttrib, tooltipText, icons) {
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

    textContainer(type, itemClass, text) {
        const textItem = new Item(type, itemClass, text);
        this.textItems.push(textItem);
        this.lastItem = textItem;          
        return this;
    }    

    toHtml() {
        return `<td class = "${this.cellClases}">
                    ${this.iconContainers.map(ic => ic.toHtml()).join('')} 
                    ${this.textItems.map(it => it.toHtml()).join('')}                       
                </td}>`;
    }
}    
