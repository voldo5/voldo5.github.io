class Item {
    constructor(type, itemClass, text) {
        this.text = text;
        this.emphasis = false;
        this.type = type;
        this.itemClass = itemClass;
    }
    toHtml() {
        return `<${this.type} class = '${this.itemClass}' >
        ${this.emphasis ? '<em>' : ''}${this.text}${this.emphasis ? '</em>' :
            ''}</${this.type}>`;
    }
}

// class Item {
//     constructor(type, itemClass, text) {
//         this.text = text;
//         this.emphasis = false;
//         this.type = type;
//         this.itemClass = itemClass;
//     }
//     toHtml() {
//         return `<${this.type} class = '${this.itemClass}' >
//         ${this.emphasis ? '<em>' : ''}${this.text}${this.emphasis ? '</em>' :
//             ''}</${this.type}>`;
//     }
// }
// <div class="db-dropdown">
// 		<button class="dropbtn">Dropdown</button>

// 		<div class="db-dropdown-content">
// 		  <p onclick="return theFunction();"><i class='fa fa-upload'></i>Load</p>
// 		  <p onclick="return theFunction();"><i class='fa fa-download'></i>Save</p>
// 		  <p onclick="return theFunction();"><i class='fa fa-list-alt'></i>Test Data</p>
// 		</div>

// 	</div>


//<span class= 'searchble-txt'>" + cellValue + "</span>