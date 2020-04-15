class Input {
    constructor(inputType, placeholder, inputClasses) {        
        this.inputType = inputType;
        this.placeholder = placeholder;
        this.inputClasses = inputClasses;
    }
    toHtml() {
        //return `<i class = "${this.inputClasses}"></i>`;
        return `<input class = '${this.inputClasses}' type = '${this.inputType}' placeholder = '${this.placeholder}'>
                </input>`;
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
//         return `<${this.type} class = '${this.itemClass}' >${this.emphasis ? '<em>' : ''}${this.text}${this.emphasis ? '</em>' :
//             ''}</${this.type}>`;
//     }
// }
// class InputSearchTable {
//     span = document.createElement('span');
            
//         constructor(){ 
    
//             let inputElement = document.createElement('input');
//             inputElement.type = "text";
//             inputElement.placeholder = "Searching ...";
//             inputElement.classList.add("input-search");
//             this.span.appendChild(inputElement);       
    
//             // icon container  
//             let span0 = document.createElement('span');
//             // tooltip 
//             let iconToolTip = "Search table";
//             span0.classList.add("tooltip");
//             span0.classList.add("fade");
//             span0.id = "tooltipSearch";
//             span0.setAttribute("data-tooltip", iconToolTip);
//             // icon
//             let icon = document.createElement('i');
//             icon.classList.add("fa");
//             icon.classList.add("fa-search");        
//             span0.appendChild(icon);
            
//             this.span.appendChild(span0);
//             this.span.classList.add("input-searchTable");        
            
//             this.span.addEventListener("keyup", () => {
//                 if (event.keyCode === 13) {  // Enter 
//                     let input = document.querySelector(".input-search");
//                     let inputString = input.value;                 
                    
//                     this.removeHighlightfromTextInTable();
                    
//                     if (input.value) {
//                         let filter = inputString.trim();
//                         if (inputString.trim().length > 0) { 
//                             this.filterTableAndHighliteMatchingText(filter);
//                         }
//                     }               
//                 }
//             });
//         } 
//     }
  