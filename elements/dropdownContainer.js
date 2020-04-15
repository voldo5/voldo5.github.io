class DropdownContainer {
    constructor(dropdownContainerType, dropdownContainerClasses) {
        this.dropdownContainerType = dropdownContainerType;
        this.dropdownContainerClasses = dropdownContainerClasses;
        this.dropdownItems = [];
    }

    addDropdownItem(itemType, itemClass, itemOnClick, itemText, iconClass) {
        const item = new Item_IconText(itemType, itemClass, itemOnClick, itemText, iconClass);
        this.dropdownItems.push(item);
        return this;
    }

    toHtml() {
        return `<${this.dropdownContainerType} class = "${this.dropdownContainerClasses}">
                   ${this.dropdownItems.map(i => i.toHtml()).join('')}                      
            </${this.dropdownContainerType}>`;
    }
}