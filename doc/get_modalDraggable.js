function get_modalDraggable() {    
    let markup = `
<h3>Issue. Add drag and resize functionality to Add Contact Form.</h3>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Set modal form as draggable element. The modal form is draggable by header.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
function init() {
	//...	
	formAddContact = new FormAddContact();
	let draggableElement = document.querySelector("#dialogAddContact .modal-content");
	let elementHeaderBar = document.querySelector("#dialogAddContact .banner-header");
	// set modal formAddContact as draggable element		
    formAddContact.dragElement(draggableElement, elementHeaderBar);
    //...
}
</code></pre></fieldset>   

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">form_addContact.js</div>
<pre><code class="language-javascript">
dragElement(draggableElement, elementHeaderBar) {

    let draggableElementLeft = 0;
    let draggableElementTop = 0;
    let mouseX = 0;
    let mouseY = 0;
    let mouseShiftX = 0
    let mouseShiftY = 0;
    elementHeaderBar.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // get the mouse cursor position at startup
        mouseX = e.clientX;
        mouseY = e.clientY;
        draggableElementLeft = draggableElement.style.left;
        draggableElementTop = draggableElement.style.top;

        document.onmouseup = closeDragElement;

        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // calculate cursor shift
        mouseShiftX = mouseX - e.clientX;
        mouseShiftY = mouseY - e.clientY;

        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // calculate element new position           
        draggableElement.style.top = (parseInt(draggableElementTop, 10) - mouseShiftY) + "px";
        draggableElement.style.left = (parseInt(draggableElementLeft, 10) - mouseShiftX) + "px";

        draggableElementLeft = draggableElement.style.left;
        draggableElementTop = draggableElement.style.top;            
    }

    function closeDragElement() {
        // stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
</code></pre></fieldset>

<h5>2. Add resize to the form.</h5>
<fieldset>
    <legend>CSS</legend>
    <div class="legend2">form_addContact.css</div>
    <pre><code class="language-css">
form {      
    ...
    resize: both;
    ...
} 
</code></pre>
</fieldset>
`;
return markup;
}


    
