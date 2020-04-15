class Item_IconText {
    constructor(itemType, itemClass, itemOnClick, itemText, iconClass) {
        this.itemType = itemType;
        this.itemClass = itemClass;
        this.itemOnClick = itemOnClick;
        this.itemText = itemText;
        this.iconClass = iconClass;
        this.emphasis = false;
        
    }
    toHtml() {
        return `<${this.itemType} class = '${this.itemClass}' onClick="${this.itemOnClick};">
        <i class='${this.iconClass}'></i>
        ${this.emphasis ? '<em>' : ''}${this.itemText}${this.emphasis ? '</em>' :
            ''}</${this.itemType}>`;
    }
}
