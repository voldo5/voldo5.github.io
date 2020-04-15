class Booklet { 
    bookletCover = document.querySelector("#booklet");
    bookletSpiralBinding = document.querySelector("#bookletSpiralBinding");     
    frontPage = document.querySelector("#frontPage");
    frontPageTitle = document.querySelector(".front-page-title");
    regularPageCover = document.querySelector("#regularPageCover");
    linkList = document.querySelectorAll(".front-page a, .regular-page a");    
    dropdownButtonList = document.querySelectorAll(".dropdown-bt");
    dropdownContainerList = document.querySelectorAll(".dropdown-container");      
    closeButton = document.querySelector(".close-button");
    regularPageContent = document.querySelector(".regular-page-content");
    verticalSeparator = document.querySelector(".vertical-separator");
    isSeparatorDragging = false;    

    constructor() {        
        this.closeButton.addEventListener("click", this.closeDocumentation);

        // add listener for dropdown buttons
        this.dropdownButtonList.forEach((dropdownBt) => {
            dropdownBt.addEventListener("click", function () {
                this.classList.toggle("active");                
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        });
        // add listener for menu links
        this.linkList.forEach((a) => {
            a.addEventListener("click", function () {                            
                if (!currentLinkTextContent) {
                    // show first selected regular page                     
                    booklet.frontPage.classList.remove("booklet-closed");
                    booklet.bookletSpiralBinding.classList.add("image-display-none");                    
                    booklet.bookletCover.classList.remove("booklet-opened");                   
                    booklet.regularPageCover.classList.add("visible"); 
                    booklet.frontPageTitle.textContent = "Contents";
                    booklet.verticalSeparator.classList.add("visible"); 
                    // get name of function with current page markup
                    let fnName = a.href.split("#").slice().pop();
                    booklet.setRegularPageMarkup(fnName);  
                    //let verticalSeparator = document.querySelector('.vertical-separator');
                    booklet.dragVerticalSeparator(booklet.verticalSeparator);
                    currentLinkTextContent = a.textContent;
                }  
                else if(a.textContent === currentLinkTextContent){ 
                    // close selected regular page  
                    console.log("currentLinkTextContent = " , currentLinkTextContent)                 
                    booklet.frontPage.classList.toggle("booklet-closed");                    
                    booklet.bookletCover.classList.toggle("booklet-opened");
                    booklet.bookletSpiralBinding.classList.toggle("image-display-none");
                    booklet.regularPageCover.classList.toggle("visible");
                    booklet.frontPageTitle.textContent = "Tabelo Project";
                    currentLinkTextContent = ' ';
                    booklet.verticalSeparator.classList.remove("visible"); 
                }
                else { 
                        // show next selected regular page 
                        booklet.frontPage.classList.remove("booklet-closed");
                        booklet.bookletCover.classList.add("booklet-opened");
                        booklet.bookletSpiralBinding.classList.add("image-display-none");
                        booklet.regularPageCover.classList.add("visible");
                        booklet.frontPageTitle.textContent = "Contents";
                        booklet.verticalSeparator.classList.add("visible"); 
                        // get markup
                        let fnName = a.href.split("#").slice().pop(); 
                        booklet.setRegularPageMarkup(fnName);  
                        currentLinkTextContent = a.textContent;
                }                   
                
                booklet.linkList.forEach(a => {
                    a.classList.remove('a-active');                    
                });                
                a.classList.add('a-active');                       
            });
        });        
    }

    setRegularPageMarkup(fnName)
    {
        let markup = window[fnName]();
        booklet.regularPageContent.innerHTML = markup;
        Prism.highlightAllUnder(booklet.regularPageContent); 
    }

    openDocumentation() {
        booklet.frontPage.classList.add('booklet-closed');
        booklet.bookletCover.classList.remove("booklet-opened");
        booklet.bookletSpiralBinding.classList.remove("image-display-none");
        booklet.bookletCover.classList.add('visible');
    }
   
    closeDocumentation() {         
        booklet.bookletCover.classList.remove('visible');        
        booklet.regularPageCover.classList.remove("visible"); 
        booklet.verticalSeparator.classList.remove("visible");  
        currentLinkTextContent = '';      
        setTimeout(function () {            
            document.querySelector("#contacts .table-container-header span").style.display = "block";
        }, 400);
    }

    navigateRegularPages(anchor_fnName, anchor_textContent) { 
        booklet.setRegularPageMarkup(anchor_fnName);  
        currentLinkTextContent = anchor_textContent;
        //highlight link
        booklet.linkList.forEach(a => {
            if(a.textContent === anchor_textContent){
                a.classList.add('a-active');
                
                // close all dropdowns 
                this.dropdownButtonList.forEach((dropdownBt) => {                    
                    dropdownBt.classList.remove("active"); 
                }); 
                this.dropdownContainerList.forEach((dropdownContainer) => {                    
                    dropdownContainer.style.display = "none";                    
                }); 

                // open current dropdown
                let aParent = a.closest('div');
                //console.log('aParent.classList = ', aParent.classList);
                if(aParent.classList.contains('dropdown-container'))
                {
                    aParent.style.display = "block";
                    console.log('contains = ', aParent.classList);
                    let dropdownBt = aParent.previousElementSibling;
                    dropdownBt.classList.add("active"); 
                } 
            }
            else{
                a.classList.remove('a-active');      
            }                          
        }); 
        return false;
    }
    
    dragVerticalSeparator(verticalSeparator) {
        wrapper = verticalSeparator.closest('.main-сontainer');
        booklet.isSeparatorDragging = false;
        let boxA = wrapper.querySelector('#regularPageCover');        

        document.addEventListener('mousedown', function (e) {
            // If mousedown event is fired from .vertical-separator, toggle flag to true
            if (e.target === verticalSeparator) {               
                booklet.isSeparatorDragging = true;
            }
        });

        document.addEventListener('mousemove', function (e) {
            // Don't do anything if dragging flag is false
            if (!booklet.isSeparatorDragging) {
                return false;
            }            
            // Get offset
            var containerOffsetLeft = wrapper.offsetLeft;
            var pointerRelativeXpos = e.clientX - containerOffsetLeft;           
            var boxAminWidth = 220;
            boxA.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8 - 220)) + 'px';
            boxA.style.flex = "0 0 auto";
            boxA.style.minWidth = "220px";           
        });

        document.addEventListener('mouseup', function (e) {
            // Turn off dragging flag when user mouse is up
            booklet.isSeparatorDragging = false;           
        });
    }
// ---------------------------------------------------------------------------------------------
    
    // dragVerticalSeparator1(draggableElement) {

    //     let draggableElementLeft = 0;
    //     let draggableElementTop = 0;
    //     let mouseX = 0;
    //     let mouseY = 0;
    //     let mouseShiftX = 0
    //     let mouseShiftY = 0;

    //     let boxBLeft = 0;
    //     let boxBTop = 0;
    //     let boxBWidth = 0;

    //     let wrapper = draggableElement.closest('.main-сontainer');
    //     let boxA = wrapper.querySelector('#regularPageCover');	
    //     let boxB = wrapper.querySelector('#contacts');
    //     var boxBminWidth = 60;
    //     console.log("wrapper.offsetLeft = ", wrapper.offsetLeft);
    //     console.log("wrapper.offsetWidth = ", wrapper.offsetWidth);
    //     console.log("boxA.offsetLeft = ", boxA.offsetLeft);
    //     console.log("draggableElement.offsetLeft = ", draggableElement.offsetLeft);
    //     console.log("boxB.offsetLeft = ", boxB.offsetLeft);
    //     //boxB.style.left = boxB.offsetLeft - wrapper.offsetLeft;
    //     //draggableElement.style.left = draggableElement.offsetLeft - wrapper.offsetLeft;

    //     //boxB.style.left = parseInt(boxB.offsetLeft - wrapper.offsetLeft, 10) + "px";
    //     boxB.style.left = 0;
    //     boxB.style.width = parseInt(boxB.offsetWidth, 10) + "px";
    //     console.log("boxB.offsetWidth = ", boxB.offsetWidth);
    //     console.log("boxB.style.width = ", boxB.style.width);
    //     //boxB.style.left = parseInt(boxB.offsetLeft - wrapper.offsetLeft, 10) + "px";
    //     draggableElement.style.left = 0;
    //     //draggableElement.style.left = parseInt(draggableElement.offsetLeft - wrapper.offsetLeft, 10) + "px";       
        
    //     console.log("boxB.style.left = ", boxB.style.left);
    //     console.log("draggableElement.style.left = ", draggableElement.style.left);   

    //     // console.log("wrapper.left.top = ", wrapper.style.left, wrapper.style.top);
    //     // console.log("boxA.left.top = ", boxA.style.left, boxA.style.top);
    //     // console.log("wrapper.left.top = ", boxB.style.left, boxB.style.top);

    //     //document.querySelector(".modal-header").onmousedown = dragMouseDown;
    //     //console.log("dragElement elementHeaderBar = ", elementHeaderBar);
    //     //elementHeaderBar.onmousedown = dragMouseDown;
    //     draggableElement.onmousedown = dragMouseDown;

    //     function dragMouseDown(e) {
    //         console.log("--------------dragMouseDown");
    //         e = e || window.event;
    //         e.preventDefault();

    //         // get the mouse cursor position at startup
    //         mouseX = e.clientX;
    //         mouseY = e.clientY;
    //         // draggableElementLeft = draggableElement.style.left;
    //         // draggableElementTop = draggableElement.style.top;
    //         draggableElementLeft = draggableElement.style.left;
    //         boxB.style.left = 0;
    //         boxB.style.width = parseInt(boxB.offsetWidth, 10) + "px";
    //         console.log("boxB.offsetWidth = ", boxB.offsetWidth);
    //         console.log("boxB.style.width = ", boxB.style.width);

    //         boxBLeft = boxB.style.left;
    //         boxBWidth = boxB.style.width;

    //         // draggableElementLeft = draggableElement.offsetLeft;            
    //         // boxBLeft = boxB.offsetLeft;
    //         //boxBTop = boxB.offsetTop;
    //         //console.log("draggableElement.left.top = ", draggableElement.offsetLeft, draggableElement.offsetTop);
    //         //console.log("boxB.left.top = ", boxB.offsetLeft, boxB.offsetTop);

    //         document.onmouseup = closeDragElement;

    //         // call a function whenever the cursor moves:
    //         document.onmousemove = elementDrag;
    //     }

    //     function elementDrag(e) {
    //         console.log("--------------elementDrag");
    //         e = e || window.event;
    //         e.preventDefault();

    //         // calculate cursor shift
    //         mouseShiftX = mouseX - e.clientX;
    //         //mouseShiftY = mouseY - e.clientY;

    //         mouseX = e.clientX;
    //         console.log("--mouseX  = ", mouseX);
    //         //mouseY = e.clientY;
            
    //         //boxB.style.flex = "1";  
    //         // calculate element new position           
    //         //draggableElement.style.top = (parseInt(draggableElementTop, 10) - mouseShiftY) + "px";
    //         draggableElement.style.left = (parseInt(draggableElementLeft, 10) - mouseShiftX) + "px";
    //         //boxB.style.top = (parseInt(boxBTop, 10) - mouseShiftY) + "px";
    //         boxB.style.flexGrow = '0';
    //         boxA.style.flexGrow = '1';  
    //         boxB.style.left = (parseInt(boxBLeft, 10) - mouseShiftX) + "px";
    //         boxB.style.width = (parseInt(boxBWidth, 10) + mouseShiftX) + "px";
    //         console.log("--mouseShiftX  = ", mouseShiftX);
    //         console.log("--draggableElement.style.left  = ", draggableElement.style.left);
    //         console.log("--boxB.style.left  = ", boxB.style.left);
    //         console.log("--boxB.style.width  = ", boxB.style.width);

    //         draggableElementLeft = draggableElement.style.left;
    //         //draggableElementTop = draggableElement.style.top;
    //         boxBLeft = boxB.style.left;
    //         boxBWidth = boxB.style.width;
    //         //boxBTop = boxB.style.top;
    //         //boxB.style.flex = "0";  

    //         // console.log("-- boxB.style.width  = ",  boxB.style.width);
    //         // boxB.style.width = (Math.max(boxBminWidth, boxB.style.width - mouseShiftX)) + 'px';
    //         // console.log("-- boxB.style.width  = ",  boxB.style.width);

    //         //boxB.style.width = (Math.max(boxBminWidth, boxB.style.width - mouseShiftX)) + 'px';
    //         // boxB.style.flexGrow = '0'; 
             
                       
            
    //         console.log("--after draggableElementLeft = ", draggableElementLeft);
    //         console.log("--after draggableElement.offsetLeft= ", draggableElement.offsetLeft);

    //         // var containerOffsetRight = wrapper.offsetLeft + wrapper.offsetWidth;            
    //         // var pointerRelativeXpos = e.clientX; 
    //         // // * 8px is the left/right spacing between .handler and its inner pseudo-element
    //         // // * Set flex-grow to 0 to prevent it from growing
    //         // //boxA.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px';
    //         // boxB.style.width = (Math.max(boxBminWidth, containerOffsetRight - pointerRelativeXpos - 8)) + 'px';
    //         // boxB.style.flexGrow = 0;
    //     }

    //     function closeDragElement() {
    //         // stop moving when mouse button is released
    //         document.onmouseup = null;
    //         document.onmousemove = null;
    //     }
    // }
} 