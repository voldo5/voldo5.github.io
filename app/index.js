// The contact manager as a global variable
let parser;
let table;
let formAddContact;
let icon_Filter;
let booklet;
let currentLinkTextContent;
let columnNames = ['Id', 'Name', 'User Name', 'Email', 'Address', 'Phone', 'Website', 'Company'];

let separatorSpace = " ";
let separatorBr = "<br>";
let separatorComma = ", ";
var containerDivId = "contacts";

//var handler;
var wrapper;
var boxB;

window.addEventListener('load', () => {

	// init() starts as callback function after application scripts are loaded	
	appendAppScripts(() => { init(); });	

	// close filter dropdown if user clicked outside of filter dropdown
	let filterContainer = document.querySelector('#filterContainer');	
	document.onclick = function (e) {
		if (!document.getElementById('containerIconFilter').contains(e.target)) {
			// Clicked outside the box
			filterContainer.classList.remove("visible");
			//toggleVisibility(dropdown);
			icon_Filter.updateSearchFilter();
		}
	};
});

function init() {
	// create class instances 
	data = new Data();
	booklet = new Booklet();
	
	// get contacts	
	let contacts = JSON.parse(Data.addTestJsonData());
	let height = window.innerHeight - 100 + 'px';	
	// set image height	
	let bookletImage = document.querySelector(".spiral-binding");	
	bookletImage.style.height = height;	
	// set booklet height	
	let frontPage = document.querySelector("#frontPage");	
	frontPage.style.height = height;
	// set booklet regular page height	
	let regularPage = document.querySelector("#regularPage");
	regularPage.style.height = height;
	// set table height
	let tableContainer = document.querySelector("#" + containerDivId);	
	tableContainer.style.height = height;
	// create table class instances 
	table = new Table(contacts, tableContainer);
	table.displayTable();

	// relocate table command icons from header 2-nd row to table caption,
	// if table is one column table (otherwise we lost listeners)
	var x = window.matchMedia("(max-width: 600px)");	
	relocateTableCommandRow(x);
	
	formAddContact = new FormAddContact();
	let draggableElement = document.querySelector("#dialogAddContact .modal-content");
	let elementHeaderBar = document.querySelector("#dialogAddContact .banner-header");
	// set modal formAddContact as draggable element		
	formAddContact.dragElement(draggableElement, elementHeaderBar);
}

window.addEventListener("resize", () => {
	// set the table height less than the window height
	let tableContainer = document.querySelector("#contacts");
	let height = window.innerHeight - 100 + 'px';
	tableContainer.style.height = height;

	// set image height	
	let bookletImage = document.querySelector(".spiral-binding");	
	bookletImage.style.height = height;	
	// set booklet height	
	let frontPage = document.querySelector("#frontPage");	
	frontPage.style.height = height;
	// set booklet regular page height	
	let regularPage = document.querySelector("#regularPage");
	regularPage.style.height = height;

	// positioning on screen of the add/edit contact form with the add/edit icon when the window resize
	let iconAddEdit = document.querySelector(".addRowIcon");
	let form = document.querySelector("#formAddContact");      
	if(form.classList.contains("form-edit-contact")){		
		iconAddEdit = document.querySelector(".updateRowIcon");
	}	
	var rectIconAddEdit = iconAddEdit.getBoundingClientRect();
	let formContainer = document.querySelector(".modal-content");
	formContainer.style.top = rectIconAddEdit.bottom + 7 + 'px';
	formContainer.style.left = rectIconAddEdit.left + 8 + 'px';			

	// relocate table command icons from header 2-nd row to table caption,
	// when table became one column table (otherwise we lost listeners)
	var x = window.matchMedia("(max-width: 600px)");	
	relocateTableCommandRow(x);
});

function relocateTableCommandRow(x) {
	let element = document.querySelector(".icon-flex-container");
	let hasIcons = document.querySelector('.table-caption .icon-flex-container');
	// parents of icon-flex-container	
	let tableCaption = document.querySelector('.table-caption');
	let table2ndRow = document.querySelector('.table-tr2-head-cell');
	if (x.matches) { // If media query matches		
		if (!hasIcons) {			
			table2ndRow.removeChild(element);
			tableCaption.appendChild(element);			
		}		
	}
	else {
		if (hasIcons) {		
		tableCaption.removeChild(element);
		table2ndRow.appendChild(element);
		}
	}
}
  