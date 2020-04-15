class Icon {
    constructor(iconClasses) {
        this.iconClasses = iconClasses;
    }
    toHtml() {
        return `<i class = "${this.iconClasses}"></i>`;
    }
}
    