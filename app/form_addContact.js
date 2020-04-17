class FormAddContact {

    modal = document.querySelector(".modal");
    form = document.querySelector('#formAddContact');
        
    constructor(){
        this.coord = { top: Number(0), left: Number(0) };

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
            else{ 
                // get id from contact                 
                contact.id = table.contacts[table.iSelectedRow.row - 2].id;
                table.contacts[table.iSelectedRow.row - 2] = contact;
                // unselect row after form submit
                table.iSelectedRow.row = -1; 
            }              
            
            this.toggleModal(0, 0);
            table.PopulateTable();
        });
    }
    
    setFormAddContactHeader(formHeaderId, formHeaderText, formClass, iconClass) {
        document.querySelector(formHeaderId).innerText = formHeaderText;
        formAddContact.form.classList.remove("form-add-contact");
        formAddContact.form.classList.remove("form-edit-contact");
        formAddContact.form.classList.add(formClass);
        // set form coordinates          
        let iconElement = document.querySelector(iconClass);
        this.coord = formAddContact.SetFormTopLeftCoordinates(iconElement);

        // open modal dialog
        formAddContact.toggleModal(this.coord.top, this.coord.left);

        // copy contact data from row to form 
        formAddContact.PopulateRowDataToForm(table.iSelectedRow.row);
    }

    onclickCloseButton = (event) => {        
        this.toggleModal(0, 0);
        if(table.iSelectedRow.row > 1) {           
            table.table.rows[table.iSelectedRow.row].classList.remove("tr-selected");
        }        
        table.iSelectedRow.row = -1;  
    };
    
    toggleModal(top, left) {
		// Prevent Page Scrolling When a Modal is Open
        if (!this.modal.classList.contains("show-modal")) {
            // When the modal is hidden, we add invisible scroll bar			
            let html = document.querySelector("html"); 
            html.classList.remove("html-hide-scrollbar");
            html.classList.add("html-overflow-hidden");                   
		}
		else {
			// When the modal is shown, we do not want a scrolling					
            let html = document.querySelector("html"); 
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

		// set form height depend of height browser window
		// and resize it when browser resize
        this.form.style.height = window.innerHeight - top - 40 + 'px';
		this.modal.classList.toggle("show-modal");		
    }
    
    SetFormTopLeftCoordinates(element){
        var rect = element.getBoundingClientRect();
        let coord = {top: rect.bottom + 7, left: rect.left + 8};        
        return coord;      
    }    

    PopulateRowDataToForm(iRow){

        let contact;
        let elements = this.form.elements;
        
        if(iRow > 1){
            contact = table.contacts[iRow - 2];
        }
        else{
            let newContact = new Contact();
            contact = newContact.getTestContact();
        }        

        let  name = contact.name;
        elements.firstName.value = name.firstName;
        elements.lastName.value = name.lastName;

        let  username = contact.username;
        elements.userName.value = username.username;

        elements.email.value = contact.email; 
        
        let address = contact.address;
        elements.streetAddress.value = address.street;
        elements.apartment.value = address.suite;
        elements.city.value = address.city;
        elements.country.value = "1";
        elements.zipCode.value = address.zipcode;
        elements.photo.value = address.photo;        

        let geo = contact.address.geo;
        elements.latitude.value = geo.lat;
        elements.longitude.value = geo.lng;

        elements.phone.value = contact.phone;
        elements.website.value = contact.website;        
               
        let company = contact.company;
        elements.companyName.value = company.name;
        elements.catchPhrase.value = company.catchPhrase;
        elements.bs.value = company.bs;
        
    }
    
    PopulateTestDataToForm(){
        
        let elements = this.form.elements;

        let newContact = new Contact();
        let contact = newContact.getTestContact();

        let  name = contact.name;
        elements.firstName.value = name.firstName;
        elements.lastName.value = name.lastName;

        let  username = contact.username;
        elements.userName.value = username.username;

        elements.email.value = contact.email; 
        
        let address = contact.address;
        elements.streetAddress.value = address.street;
        elements.apartment.value = address.suite;
        elements.city.value = address.city;
        elements.country.value = "1";
        elements.zipCode.value = address.zipcode;
        elements.photo.value = address.photo;        

        let geo = contact.address.geo;
        elements.latitude.value = geo.lat;
        elements.longitude.value = geo.lng;

        elements.phone.value = contact.phone;
        elements.website.value = contact.website;        
               
        let company = contact.company;
        elements.companyName.value = company.name;
        elements.catchPhrase.value = company.catchPhrase;
        elements.bs.value = company.bs;
    }

    handleFormSubmit = () => { 
		// get the form data.
        let elements = this.form.elements;        
        let newContact = new Contact();
        let contact = newContact.getEmptyContact();
        
        let name = contact.name;
        name.firstName = elements.firstName.value; 
        name.lastName = elements.lastName.value;
        
        // get photo name
        let path = elements.portrait.value.split('\\');
        
        name.photo = path[path.length-1];
        
        let username = contact.username;
        username.username = elements.userName.value;

        contact.email = elements.email.value;        

        let address = contact.address;
        address.street = elements.streetAddress.value;
        address.suite = elements.apartment.value;
        address.city = elements.city.value;
        address.zipcode = elements.zipCode.value;
        address.photo = elements.photo.value;

        let geo = contact.address.geo;
        geo.lat = elements.latitude.value;
        geo.lng = elements.longitude.value;

        contact.phone = elements.phone.value;
        contact.website = elements.website.value;        
               
        let company = contact.company;
        company.name = elements.companyName.value;
        company.catchPhrase = elements.catchPhrase.value;
        company.bs = elements.bs.value;        
        
        return contact;
    }    
    
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
}