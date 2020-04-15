function get_addContactForm() {    
    let markup = `
<h3>Issue. Add Contact Form.</h3>
<p>Create a modal contact form to add a new contact to the table.
Add an icon (plus sign) to the table to open the contact form. 
Style the contact form as in Fig.1.</p> 
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_addContactForm.jpg" alt="Add contact form"
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<p>Add Contact Form is not fully dynamic. The code part relative to the form
contains html part, css part and FormAddContact JavaScript class for manipulating of the form.</p> 

<h5>1. Create Add Contact Form.</h5>
<h5>1.1. Html part of the form.</h5>
<fieldset>
    <legend>HTML</legend>
    <div class="legend2">index.html</div>
	<script type="text/plain" class="language-markup">				
    <div id="dialogAddContact" class="modal">
		<div class="modal-content">
			<form action="/" id="formAddContact" class="visible-scrollbar">				
				<div class="banner banner-header">
					<h2 id="form-header" class="banner-text">Add Contact Form</h2>
					<span class="close-button">
						<div>&times;</div>
					</span>
				</div>				
				<div class="content-box">
					<div class="dacItem">
						<p>Name<span class="required">*</span></p>
						<div class="name-item">
							<input type="text" name="firstName" placeholder="First" required />
							<input type="text" name="lastName" placeholder="Last" required />
						</div>
					</div>
					<div class="dacItem">
						<p>Upload Photo</p>
						<input id="portrait" type="file" />
					</div>
					<div class="dacItem">
						<p>Username<span class="required">*</span></p>
						<input id="username" type="text" name="userName" placeholder="Username" required />
					</div>
					<div class="dacItem">
						<p>Email<span class="required">*</span></p>
						<input type="text" name="email" required />
					</div>
					<div class="dacItem">
						<p>Mailing Address<span class="required">*</span></p>
						<input type="text" name="apartment" placeholder="Apartment" required />
						<input type="text" name="streetAddress" placeholder="Street address" required />
						<div class="city-item">
							<input type="text" name="city" placeholder="City" required />
							<input type="text" name="zipCode" placeholder="Postal / Zip code" required />
						</div>
						<div class="city-item">
							<select name="country" required>
								<option value="">Country</option>
								<option value="1">Ukraine</option>
								<option value="2">Germany</option>
								<option value="3">France</option>
								<option value="4">Armenia</option>
								<option value="5">USA</option>
							</select>
						</div>
						<p>Building Photo</p>
						<input type="text" name="photo" placeholder="Link to Building Photo" required />
					</div>
					<div class="dacItem">
						<p>Geo Coordinates</p>
						<div class="name-item">
							<input type="text" name="latitude" placeholder="Latitude" />
							<input type="text" name="longitude" placeholder="Longitude" />
						</div>
					</div>
					<div class="dacItem">
						<p>Phone<span class="required">*</span></p>
						<input type="text" name="phone" required />
					</div>
					<div class="dacItem">
						<p>Website<span class="required">*</span></p>
						<input type="text" name="website" required />
					</div>

					<div class="dacItem">
						<p>Company<span class="required">*</span></p>
						<input type="text" name="companyName" placeholder="Company Name" required />
						<input type="text" name="catchPhrase" placeholder="Catch Phrase" required />
						<input type="text" name="bs" placeholder="BS" required />
					</div>
				</div>
				<div class="btn-block">
					<button type="submit" class="submit" href="/">Add Contact</button>
				</div>

				<div class="banner banner-footer">
					<span class="footer-text">&copy;&nbsp;2020&nbsp;BouncingBits<span>
							&nbsp;&nbsp;not-for-profit company</span></span>
				</div>
			</form>
		</div>
	</div>
    </script>
</fieldset>

<h5>1.2. CSS part of the form.</h5>
<fieldset>
    <legend>CSS</legend>
    <div class="legend2">form_addContact.css</div>
    <pre><code class="language-css">
form {      
    width: 100%;
    min-width: 300px; 
    min-height: 208px; 
    padding: 0;
    background-color: #eee;
    height: 400px;      
    overflow-y:auto;
    resize: both;
    box-shadow: inset 25px 0px 25px -25px rgba(73, 73, 73, 0.45),
                inset -25px 0px 25px -10px rgba(73, 73, 73, 0.45);      
}
...
<p>See full form_addContact.css file in project source.</p> 
 </code></pre>
</fieldset>

<h5>1.3. JavaScript FormAddContact class.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">form_addContact.js</div>
<pre><code class="language-javascript">
class FormAddContact {

    modal = document.querySelector(".modal");
    form = document.querySelector('#formAddContact');
        
    constructor(){
        document.querySelector("#dialogAddContact .close-button")
                .addEventListener("click", this.onclickCloseButton);

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            // get contact from form
            let contact = this.handleFormSubmit();
            
            if (table.iSelectedRow.row < 1) {               
                // set new id for contact           
                let maxId = Math.max.apply(Math, table.contacts.map(function (o) { return o.id; }));
                contact.id = maxId + 1;
                table.contacts.unshift(contact);                             
            }
            //...  
            this.toggleModal(0, 0);
            table.PopulateTable();
        });
    }
</code></pre></fieldset>

<h5>2. Add icon 'Add new contact'.</h5>
<h5>2.1. Adding the icon is described in issue
<a href="javascript:booklet.navigateRegularPages('get_tableHeader2ndRow', 'Table Header 2nd Row');">
Table Header 2nd Row.</a></h5>
<p>When we added icon we also added listener to the icon</p> 
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
getInnerHtmlForHeaderSecondRowCell(){
//...    	
    let onClickAddContact = \`(function(){
        formAddContact.setFormAddContactHeader('#form-header',
         'New&nbsp;&nbsp;Contact&nbsp;&nbsp;Form', 'form-add-contact', '.addRowIcon');						
        })()\`;
//...
}
</code></pre></fieldset>
<p> When user clicked on the icon, then in the mehod setFormAddContactHeader()
css class 'form-add-contact' is toggled and the the form opened/closed.</p> 
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">form_addContact.js</div>
<pre><code class="language-javascript">
setFormAddContactHeader(formHeaderId, formHeaderText, formClass, iconClass) {
    document.querySelector(formHeaderId).innerText = formHeaderText;
    formAddContact.form.classList.remove("form-add-contact");
    formAddContact.form.classList.remove("form-edit-contact");
    formAddContact.form.classList.add(formClass);
    // set form coordinates          
    let iconElement = document.querySelector(iconClass);
    this.coord = formAddContact.SetFormTopLeftCoordinates(iconElement);

    // open/close modal dialog
    formAddContact.toggleModal(this.coord.top, this.coord.left);

    // copy contact data from row to form 
    formAddContact.PopulateRowDataToForm(table.iSelectedRow.row);
}
</code></pre></fieldset>

<p> SetFormTopLeftCoordinates() method place the form near 'add form' icon.</p> 
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">form_addContact.js</div>
<pre><code class="language-javascript">
SetFormTopLeftCoordinates(element){
    var rect = element.getBoundingClientRect();
    let coord = {top: rect.bottom + 7, left: rect.left + 8};    
    return coord;      
}   
</code></pre></fieldset>

<p> toggleModal() method, besides the toggling the form visibility,
also stop scrolling when window is modal and set height of the form
depends on browser window height.</p> 
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">form_addContact.js</div>
<pre><code class="language-javascript">
toggleModal(top, left) {
    // Prevent Page Scrolling When a Modal is Open
    let html = document.querySelector("html");
    if (!this.modal.classList.contains("show-modal")) {
        // When the modal is hidden, we add invisible scroll bar
        html.classList.remove("html-hide-scrollbar");
        html.classList.add("html-overflow-hidden");                   
    }
    else {
        // When the modal is shown, we do not want a scrolling	
        html.classList.add("html-hide-scrollbar");
        html.classList.remove("html-overflow-hidden");    
    }
    
    // set left top corner of modal dialog		
    this.modal.style.top = 0;
    this.modal.style.left = 0;
    let mc = document.querySelector(".modal-content");     
    mc.style.top = top + 'px';
    mc.style.left = left + 'px';       

    // set form height depend of height of browser window
    // and resize it when browser resize
    this.form.style.height = window.innerHeight - top - 40 + 'px';	  
    //this.form.style.height = window.innerHeight - top - 180 + 'px';	       
    this.modal.classList.toggle("show-modal");		
}
</code></pre></fieldset>

<h5>3. Remarks.</h5>
<h5>3.1. We create the form and FormAddContact class when application is loaded.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
let formAddContact;
function init() {
//...	
    formAddContact = new FormAddContact();
//...
}
</code></pre></fieldset>

<h5>3.2. How to set modal window.</h5>
<p> We set the form as modal through css: set form container 
transparent and fixed with width and heigh 100%. Form in conainer also set fixed 
with some coordinates. More detail see in css code: container has class 'modal',
form has class 'modal-content' and visibility is toggled by adding/reming
of class 'show-modal'.</p> 
<fieldset>
<legend>CSS</legend>
<div class="legend2">form_addContact.css</div>
<pre><code class="language-css">
.modal {           
    display: none;
    position: fixed;
    z-index: 9999;     
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(235, 227, 227, 0);
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
}
.modal-content {  
    position: absolute;           
    top: 0;
    left: 0; 
    background-color: #eeeeee; 
    padding: 0;  
    margin: 0; 
    border: 1px solid  silver;    
}
.show-modal {
    opacity: 1;
    visibility: visible;
    display: block;
    transform: scale(1.0);    
}     
</code></pre></fieldset>

<p> Problems with the browser window scrolling is solved through
javascript (see p.2.1) and classes 'html-hide-scrollbar'
and 'html-overflow-hidden' in html tag.</p> 
<fieldset>
    <legend>HTML</legend>
    <div class="legend2">index.html</div>
	<script type="text/plain" class="language-markup">				
    <html lang="en" class="html-hide-scrollbar">
    </script>
</fieldset>
<fieldset>
<legend>CSS</legend>
<div class="legend2">style.css</div>
<pre><code class="language-css">
.html-hide-scrollbar::-webkit-scrollbar {
    display: none;  
}
.html-overflow-hidden {
    overflow-y: hidden; 
}     
</code></pre></fieldset>

<fieldset>
<legend>JavaScript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
toggleModal(top, left) {
    // Prevent Page Scrolling When a Modal is Open
    let html = document.querySelector("html"); 
    if (!this.modal.classList.contains("show-modal")) {
        // When the modal is hidden, we add invisible scroll bar
        html.classList.remove("html-hide-scrollbar");
        html.classList.add("html-overflow-hidden");                   
    }
    else {
        // When the modal is shown, we do not want a scrolling	
        html.classList.add("html-hide-scrollbar");
        html.classList.remove("html-overflow-hidden");    
    }
    
    // set left top corner of modal dialog		
    this.modal.style.top = 0;
    this.modal.style.left = 0;
    let mc = document.querySelector(".modal-content"); ;
    console.log(" toggleModal this.modalContent = ", mc);
    mc.style.top = top + 'px';
    mc.style.left = left + 'px'; 
    //...
}
</code></pre></fieldset>
<p> We set the position of the form depending on the position
of the icon "Add Contact" (parameters top and left).</p> 
`;
return markup;
}


    