function get_bookletClass() {    
    let markup = `
<h3>Issue. Booklet Class.</h3>
<p>Create the Booklet class to handle the booklet object with id = 'booklet'.
See Issue:
<a href="javascript:booklet.navigateRegularPages('get_docHtml', 'Booklet html code');">
Booklet html code.</a> </p>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Booklet class.</h5>
<h5>1.1. Variables.</h5>
<p>First of all, we define variables for booklet elements.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">booklet.js</div>
<pre><code class="language-javascript">
class Booklet { 
    bookletCover = document.querySelector("#booklet");
    bookletSpiralBinding = document.querySelector("#bookletSpiralBinding");     
    frontPage = document.querySelector("#frontPage");
    frontPageTitle = document.querySelector(".front-page-title");
    regularPageCover = document.querySelector("#regularPageCover");
    linkList = document.querySelectorAll(".front-page a, .regular-page a");    
    dropdownButtonList = document.querySelectorAll(".dropdown-bt");    
    closeButton = document.querySelector(".close-button");
    regularPageContent = document.querySelector(".regular-page-content"); 
    handler = document.querySelector(".handler");     
    //...
}
</code></pre></fieldset>

<h5>1.2. Constructor</h5>
<p>In the contstructor we add listeners for 'close' button, for menu dropdowns and 
for all anchor elements, that are links to the documentation pages.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">booklet.js</div>
<pre><code class="language-javascript">
class Booklet { 
    //...
    constructor() { 
        // add listener for 'close' button       
        this.closeButton.addEventListener("click", this.closeDocumentation);
        // add listener for dropdowns
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
                    booklet.handler.classList.add("visible"); 
                    // get name of function with current page markup
                    let fnName = a.href.split("#").slice().pop();                    
                    let markup = window[fnName]();
                    booklet.regularPageContent.innerHTML = markup;    
                    Prism.highlightAllUnder(booklet.regularPageContent);   
                    let verticalSeparator = document.querySelector('.handler');
                    booklet.dragVerticalSeparator(verticalSeparator);
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
                    booklet.handler.classList.remove("visible"); 
                }
                else { 
                        // show next selected regular page 
                        booklet.frontPage.classList.remove("booklet-closed");
                        booklet.bookletCover.classList.add("booklet-opened");
                        booklet.bookletSpiralBinding.classList.add("image-display-none");
                        booklet.regularPageCover.classList.add("visible");
                        booklet.frontPageTitle.textContent = "Contents";
                        booklet.handler.classList.add("visible"); 
                        // get markup
                        let fnName = a.href.split("#").slice().pop();                        
                        let markup = window[fnName]();                         
                        booklet.regularPageContent.innerHTML = markup;                        
                        Prism.highlightAllUnder(booklet.regularPageContent);
                        currentLinkTextContent = a.textContent;
                }                   
                
                booklet.linkList.forEach(a => {
                    a.classList.remove('a-active');                    
                });                
                a.classList.add('a-active');                       
            });
        });        
    }
    //...
</code></pre></fieldset>
<p>In the anchor listener we get from href the name of js file  
that contains the page markup.</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let fnName = a.href.split("#").slice().pop(); 
</code></pre></fieldset>

<p>Then we get markup from the file.</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let markup = window[fnName]();
</code></pre></fieldset>

<p>And put the markup in the booklet regular page.</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
booklet.regularPageContent.innerHTML = markup;  
</code></pre></fieldset> 

<h5>1.3. Methods.</h5>
<p>Class contains several methods.</p>
<ul>
<li>openDocumentation(), closeDocumentation()</li>
<p>Mehods to display and hide documentation.</p>
<li>navigateRegularPages()</li>
<p>Mehods to highlight menu and change page content.</p>
<li>dragVerticalSeparator()</li>
<p>Mehods to change page width.</p>
</ul>

<h5>2. Booklet object.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
function init() {
    //...	
    booklet = new Booklet();
    //...
}
</code></pre></fieldset>
`;
return markup;
}
    