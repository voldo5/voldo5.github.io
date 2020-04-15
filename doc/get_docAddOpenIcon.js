function get_docAddOpenIcon() {    
    let markup = `
<h3>Issue. Add Open Doc Icon.</h3>
<p>Add 'humburger' icon to the table header as in Fig.1.
The booklet is displayed side by side with the table, after click on the icon.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_docOpenDocIcon.jpg" 
class="img-fixedsize-small" width="529" height="56">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Add the icon with tooltip and event listener to the table header.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
CreateTableContainerHeader(){
    let tableContainerHeader = document.createElement("div");
    //...
    // hamburger icon	
    let span = document.createElement('span');
    span.classList.add("shiftHamburger");
    span.classList.add("tooltip");
    span.classList.add("fade");
    span.setAttribute('data-tooltip', 'Open documentation');
    span.addEventListener('click', function(){
        // remove icon from header			
        document.querySelector("#contacts .table-container-header span").style.display = "none";  
    });
    // open documantation onclick event
    span.addEventListener('click', booklet.openDocumentation, false);		
    span.innerHTML = "&#9776;";  // humburger icon code
    tableContainerHeader.insertBefore(span, tableContainerHeader.firstChild);
    //...
}
</code></pre></fieldset>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">booklet.js</div>
<pre><code class="language-javascript">
openDocumentation() {
    booklet.frontPage.classList.add('booklet-closed');
    booklet.bookletCover.classList.remove('booklet-opened');
    booklet.bookletSpiralBinding.classList.remove("image-display-none");
    booklet.bookletCover.classList.add('visible');
}
</code></pre></fieldset>

<p>In the mehod we added css class 'booklet-closed' and removed 
class 'booklet-opened', so, the appearence of the 
booklet front page we changed from opened to closed.</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
.front-page.booklet-closed {
    width: 220px;
    border-radius: 0; 
    margin-right: 8px;
    border-top: 2px solid silver;
    background: linear-gradient(#eee,#eee,#eee, #eee);
    box-shadow: 5px 5px 6px 0px rgba(186,182,186,1);
    /* transition: 0.5s;   */
}
.front-page.booklet-closed .front-page-header,
.front-page.booklet-closed .front-page-footer
{  
    background: #eee;
}
#booklet .booklet-closed .front-page-header-text  {
    color: teal; 
    display: block;    
}
#booklet .booklet-closed .front-page-title{     
    color: teal;
    border-bottom: 2px solid teal; 
    font-weight: 500; 
}
#booklet .front-page.booklet-closed  a,
#booklet .front-page.booklet-closed .dropdown-bt{
    /* padding: 0.2rem 1rem 0.3rem  0.3rem; */
    padding: 0.2rem 0.3rem 0.3rem  0.3rem;
    margin-left: 0.3rem;
    color: teal;
    background: none;
}
#booklet .booklet-closed a:hover,
#booklet .booklet-closed .dropdown-bt:hover{    
    color: deepskyblue;
}
...
</code></pre></fieldset>

<p>CSS class 'shiftHamburger' shift the 'hamburger' icon tooltip
from the default place of tooltip. We should remember that
for two sibling classes - the second class win - so, 'shiftHamburger' class
outperforms 'tooltip' class.</p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">

.tooltip.shiftHamburger:before {  
    top: -4px;
    left: 36px;    
    font-weight: 200;  
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: #eee;
    line-height: 22px;  
}
.tooltip.shiftHamburger:after {
    top: 8px;    
    left: 30px;
    border-left: 0px solid transparent;
    border-right: 6px solid #67C8EA;  
    border-bottom: 6px solid transparent;  
    border-top: 6px solid transparent;
} 
</code></pre></fieldset>
`;
return markup;
}


    