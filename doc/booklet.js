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
} 