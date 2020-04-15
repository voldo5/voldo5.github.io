function get_tableContainerHeader() {    
    let markup = `
<h3>Issue. Table Container Header.</h3>
<p>Make the header of the table container and style it as in Fig.1.
with icon and table name. Icon is clickable and open documentation on 
click event. Icon has tooltip as on Fig.2. </p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_tableContainerHeader.jpg" alt="Table Container Header"
class="img-responsive" width="600" height="400">
<br>
<h5>Fig.2</h5>        
<img src="\\assets\\picsDoc\\doc_tableContainerHeaderTooltip.jpg" alt="Table Container Header Tooltip"
class="img-fixedsize-small" width="250" height="50">
<br>
<h4>Code.</p>
<h5><strong>Keywords: querySelector(), insertBefore(), linear-gradient, text-shadow, transform, transition, transition-delay.</strong></h5>
<h5>1. Create table container header.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
displayTable = () => {    
  let tableContainerHeader = this.CreateTableContainerHeader();
}

CreateTableContainerHeader(){
    let tableContainerHeader = document.createElement("div");
    tableContainerHeader.classList.add("table-container-header");
    // table name			
    tableContainerHeader.innerHTML = "Oh&nbsp;My&nbsp;&nbsp;&nbsp;Contacts&nbsp;&nbsp;&nbsp;Tabelo";
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

    return tableContainerHeader;
}
</code></pre></fieldset>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">booklet.js</div>
<pre><code class="language-javascript">
class Booklet { 
    openDocumentation() {        
        booklet.frontPage.classList.add('booklet-closed');
        booklet.bookletCover.classList.remove("booklet-opened");
        booklet.bookletSpiralBinding.classList.remove("image-display-none");
        booklet.bookletCover.classList.add('visible');
    }
}
</code></pre></fieldset>

<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
#contacts .table-container-header{ 
    min-width: 280px;
    padding: 0.6rem 1.6rem 0.6rem 0.6rem;  
    margin: 0 1px 1px 0;
    text-align: center;
    text-shadow: -1px 0 rgb(233, 231, 231), 0 1px lightblue, 1px 0 #eee, 0 -1px #eee;
    color: teal;
    line-height: 1.9rem;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Lilita One', Roboto, sans-serif;
    background-image: linear-gradient(to top, #008080, #00837e, #00867b, #008878, #058b74);      
}
#contacts .table-container-header span { 
    float: left; 
    font-size: 1.4rem;    
    text-shadow: none;
    color: #eee;
    cursor: pointer;
}
#contacts .table-container-header span:hover {
    color: white;
} 
</code></pre></fieldset>

<fieldset>
<legend>CSS</legend>
<div class="legend2">tooltip.css</div>
<pre><code class="language-css">
.tooltip {
    position: relative;     
}
.tooltip:before,
.tooltip:after {
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    z-index: 9999;    
} 
.tooltip.fade:after,
.tooltip.fade:before {    
    transform: translate3d(0,-10px,0);
    transition: all 0.1s ease-in-out;
}
.tooltip.fade:hover:after,
.tooltip.fade:hover:before {
    opacity: 1;
    transform: translate3d(0,0,0);
    transition-delay: 0.6s;    
} 
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


    