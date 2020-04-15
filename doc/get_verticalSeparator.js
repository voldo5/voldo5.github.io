function get_verticalSeparator() {    
    let markup = `
<h3>Issue. Vertical Separator.</h3>
<p>Add the vertical separator between the booklet and the table as in Fig.1.
The user can drag the separator and set the width of the document page.
The problem is that the booklet, separator and table are
in a flexible box for responsiveness purposes.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_verticalSeparator.jpg" alt="Table Header 1st Row"
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Add the separator to html.</h5>
<fieldset>
	<legend>HTML</legend>
	<div class="legend2">index.html</div>
    <script type="text/plain" class="language-markup">
    <body>
        <div class="main-сontainer">
            ...				
            <div class="vertical-separator">
            </div>
            ....
        </div>
    </body>
	</script>	
</fieldset>

<h5>1. Add the listeners to the separator for mouse 'mousedown' and 'mousemove' events.</h5>
<p>When separator is move, we calculate new width of the regular page cover
and set style of regular page cover to style.flex = "0 0 auto" - the page lost responsivness. 
The table remains flex.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">booklet.js</div>
<pre><code class="language-javascript">
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
</code></pre></fieldset>

<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.main-сontainer{
    display: flex;
    flex-direction: row;  
    flex-wrap: nowrap;
    ...
}
.booklet-cover.visible {  
    ...
    flex: 1;
    min-width: 230px; 
    max-width: 230px; 
    ...   
}
#regularPageCover {    
    flex: 1 0 400px;    
    min-width: 220px;    
    max-width: 800px;    
    ...
}
.vertical-separator {
    cursor: ew-resize;
    flex: 0 0 auto;
    ...
}
/* table container */
#contacts {  
    position: relative;
    max-width: 100%;
    max-height: 100%;
    min-width: 120px;    
    ...
}
</code></pre></fieldset>
<p>Flexbox '.main-сontainer' contains 4 childrens:
<strong>1.</strong> '.booklet-cover' with const width.
<strong>2.</strong> '#regularPageCover' with style: flex: 1 0 400px; - it has min width 400px and
it growing as flexbox growing.
<strong>3.</strong> '.vertical-separator' with const width.
<strong>4.</strong> The table container '#contacts'. It growing as flexbox growing.</p>
`;
return markup;
}


    