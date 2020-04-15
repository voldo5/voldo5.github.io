class Table {
	contactId = -1;

	constructor(contacts, container) {
		this.tableHeaderContext = null;
		this.tableDataContext = new TableDataRowsContext(-1);
		this.table = null;
		this.contacts = contacts;
		this.container = container;
		this.defaultSelectedRow = { row: -1 };
		this.iSelectedRow = new Proxy(this.defaultSelectedRow, this.highlightIcon);		
	}

	highlightIcon = {
		set(target, property, value) {
			if (property === 'row') {				
				// activate/deactivate the edit icon depends on whether there is a selected line or not
				if (document.querySelector(".updateRowIconContainer")) {
					let element = document.querySelector('.updateRowIconContainer'); //.fa-pencil 				
					if (value < 0) {
						element.style.pointerEvents = "none";
						element.style.opacity = 0.5;
					}
					else {
						element.style.pointerEvents = "auto";
						element.style.opacity = 1;
					}
				}
				// activate/deactivate delete icon depend of it is there a selected row or not	
				if (document.querySelector(".deleteRowIconContainer")) {
					let element = document.querySelector('.deleteRowIconContainer'); 
					if (value < 0) {
						element.style.pointerEvents = "none";
						element.style.opacity = 0.5;						
					}
					else {
						element.style.pointerEvents = "auto";
						element.style.opacity = 1;						
					}
				}
			}		

			target[property] = value;
			
			return true;
		}
	}
	
	testFunction(name) {
		console.log(`testFunction = ${name} started`);
	}
	
	displayTable = () => {
		this.tableHeaderContext = this.setTableHeaderContext();

		// emptify the container that contains the old table		
		this.container.innerHTML = "";

		// create container header (not a part of table)
		let tableContainerHeader = this.CreateTableContainerHeader();
		// create table 		
		this.table = document.createElement('table');
		this.table.classList.add('table');
		
		// populate the table with contacts 
		this.PopulateTable();		
		
		// create rest parts of table
		this.table.createCaption().classList.add("table-caption");
		this.table.createTHead().classList.add('table-header');
		this.createTableHeaderFirstRow();
		this.createTableHeaderSecondRow();
		this.createTableFooter();		

		// append table to container
		this.container.appendChild(tableContainerHeader);
		this.container.appendChild(this.table);
		
		// unselect rows		
		this.iSelectedRow.row = -1;	
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

	createTableHeaderFirstRow() {		

		let row = this.table.tHead.insertRow(0);
		row.classList.add('table-tr-head');

		// add cells to header row		
		for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {

			var cell = document.createElement('th');			
			row.appendChild(cell)
			
			cell.innerHTML = this.tableHeaderContext.cellContexts[i].caption;
			cell.classList.add('table-tr-head-cell');	
			cell.classList.add('table-tr1-head-cell');			

			this.tableHeaderContext.cellContexts[i].cssClassList.forEach(item => {
				cell.classList.add(item);
			});

			// sort indication
			var span = document.createElement('span');
			span.classList.add('table-sortind');
			cell.appendChild(span);
		}

		// add listeners to row cells: click on the column header
		// of the table causes the table to be sorted by column
		for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
			if (!this.table.rows[0].cells[i].classList.contains("notsorted")) {
				this.table.rows[0].cells[i].
					addEventListener("click", () => {
						var isShiftKeyPressed = event.shiftKey;
						this.updateTable(i, isShiftKeyPressed, this.tableHeaderContext, this.table);
					});
			}
		}
	}

	createTableHeaderSecondRow() {
		let row = this.table.tHead.insertRow(1);
		row.classList.add('table-tr-head2');		
		let cell = document.createElement('th');
		row.appendChild(cell);		
		cell.innerHTML = this.getInnerHtmlForHeaderSecondRowCell();

		//let iconFilter = new IconFilter("container-iconFilter", "icon-filter", "fa fa-filter");
		icon_Filter = new IconFilter("container-iconFilter", "icon-filter", "fa fa-filter");
		//icon_Filter = iconFilter;
		let flexContainer = cell.querySelector(".icon-flex-container");		
		//flexContainer.appendChild(iconFilter.span);	
		flexContainer.appendChild(icon_Filter.span);	
		cell.colSpan = this.table.rows[0].cells.length;	
		cell.classList.add('table-tr2-head-cell');			
	}	

	createTableFooter(){
		let footer = table.table.createTFoot();
		let row = footer.insertRow(0);
		row.classList.add('footer');
		let cell = row.insertCell(0);
		cell.colSpan = this.table.rows[0].cells.length;			
		let div = document.createElement('div');
		div.classList.add('banner');
		div.classList.add('banner-footer');
		let span = document.createElement('span');
		span.classList.add('footer-text');
		span.innerHTML = "&copy;&nbsp;2020&nbsp;BouncingBits";
		let span1 = document.createElement('span');
		span1.innerHTML = "&nbsp;&nbsp;not-for-profit company";
		span.appendChild(span1);
		div.appendChild(span);
		cell.appendChild(div);		
	}
	
	updateTable(iLatestClickedCell, isShiftKeyPressed, tableHeaderContext, table) {	
		
		let updatedSortContext = this.updateTableHeaderSortContext(iLatestClickedCell,
			tableHeaderContext.sortContext, isShiftKeyPressed);
		tableHeaderContext.sortContext = updatedSortContext;

		let updatedCellContexts = this.updateTableHeaderCellContexts(tableHeaderContext);
		tableHeaderContext.cellContexts = updatedCellContexts;

		let sortRule = this.extractSortRule(tableHeaderContext);		
		this.contacts = Data.sortByRule(sortRule, this.contacts);		
			
		this.updateTableHeaderRow(tableHeaderContext.cellContexts, table);
		this.PopulateTable();		
	}

	updateTableHeaderCellContexts(tableHeaderContext) {		

		let sortContext = tableHeaderContext.sortContext;
		let cellContexts = tableHeaderContext.cellContexts;
		let iClicked = sortContext.iLatestClickedCell;

		// toggle column header css classes to display column sort order on nothing
		for (let i = 0; i < cellContexts.length; i++) {

			let list = cellContexts[i].cssClassList;
			let iUnsorted = list.indexOf("unsorted"); // no icon
			let iAscending = list.indexOf("sort-ascending");  // icon ascending
			let iDescending = list.indexOf("sort-descending");  // icon descending

			if (i === iClicked) {
				// toggle classes
				if (iUnsorted > -1) { list.splice(iUnsorted, 1, 'sort-ascending'); }
				else if (iAscending > -1) { list.splice(iAscending, 1, 'sort-descending'); }
				else if (iDescending > -1) { list.splice(iDescending, 1, 'sort-ascending'); }
			} else {
				if (sortContext.iClickedCells.includes(i)) { continue; }
				else if (iAscending > -1) { list.splice(iAscending, 1, 'unsorted'); }
				else if (iDescending > -1) { list.splice(iDescending, 1, 'unsorted'); }
			}

			tableHeaderContext.cellContexts[i].cssClassList = list.slice();
		}

		return tableHeaderContext.cellContexts;
	}
	
	setTableHeaderContext = () => {

		let item0 = this.contacts[0];
		// get keys from first contact record		
		let itemKeys = Object.keys(item0);		
		let headerCellContexts = [];
		let sortContext = new TableSortContext(-1, []);
		let defaltHeaderCellCssClassList = ['unsorted', 'checked']; //, 'unchecked'

		itemKeys.forEach(key => {
			let cssClassList = defaltHeaderCellCssClassList;
			let caption = this.getCaption(key);
			let cellsContext = new TableHeaderCellContext(key, caption, cssClassList);
			headerCellContexts.push(cellsContext);
		});

		let tableHeaderContext = new TableHeaderContext(headerCellContexts, sortContext, "false");

		return tableHeaderContext;
	}

	getCaption(key) {
		return key[0].toUpperCase() + key.slice(1);
	}
	
	updateTableHeaderSortContext(i, sortContext, isShiftKeyPressed) {		

		sortContext.iLatestClickedCell = i;

		if (isShiftKeyPressed) {
			if (!sortContext.iClickedCells.includes(i)) {
				sortContext.iClickedCells.push(i);
			}
			else { } //do nothing;									
		}
		else {
			sortContext.iClickedCell = i;
			sortContext.iClickedCells = [];
			sortContext.iClickedCells.push(i);
		}
		return sortContext;
	}

	extractSortRule(tableHeaderContext) {		

		let sortRule = [];

		tableHeaderContext.sortContext.iClickedCells.forEach(i => {

			let list = tableHeaderContext.cellContexts[i].cssClassList;
			let sortDirection = "unsorted";

			if (list.indexOf("sort-ascending") > -1) {
				sortDirection = "sort-ascending";
			}
			else if (list.indexOf("sort-descending") > -1) {
				sortDirection = "sort-descending";
			}

			let name = tableHeaderContext.cellContexts[i].name;

			// name sort by first name
			if(name === "name"){
               name = "name.firstName";
			}
			// user name sort by username
			if(name === "username"){
				name = "username.username";
			}
			// address sort by username
			if(name === "address"){
				name = "address.city";
			 }
			// company sort by name
			if(name === "company"){
				name = "company.name";
			}

			sortRule.push({ name, sortDirection });			
		});

		return sortRule;
	}
	
	updateTableHeaderRow(cellContexts, table) {		
		for (var i = 0; i < table.rows[0].cells.length; i++) {

			// merge css classes from cellContext and cell.classList
			cellContexts[i].cssClassList.forEach(item => {

				// to sort by the column - remove "unsorted" 
				if (item.includes("sort-ascending") || item.includes("sort-descending")) {
					table.rows[0].cells[i].classList.remove("unsorted");
				}

				// toggle column sort direction 
				if (item.includes("sort-ascending")) {
					table.rows[0].cells[i].classList.remove("sort-descending");
					table.rows[0].cells[i].classList.add("sort-ascending");
				}
				if (item.includes("sort-descending")) {
					table.rows[0].cells[i].classList.remove("sort-ascending");
					table.rows[0].cells[i].classList.add("sort-descending");
				}

				// class name will be added only if the element does not have it
				table.rows[0].cells[i].classList.add(item);
			});
		}
	}	

	getInnerHtmlForHeaderSecondRowCell(){

		// icon onClick functions		
		let onClickAddContact = `(function(){
			formAddContact.setFormAddContactHeader('#form-header',
			 'New&nbsp;&nbsp;Contact&nbsp;&nbsp;Form', 'form-add-contact', '.addRowIcon');						
		    })()`;

		let onClickEditContact = `(function(){
			formAddContact.setFormAddContactHeader('#form-header',
			'Edit&nbsp;&nbsp;Contact&nbsp;&nbsp;Form', 'form-edit-contact', '.updateRowIcon');						
		    })()`;

		let onClickDeleteContact = `(function(){
			table.deleteSelectedRow();						
			})()`;

		// search on key click
		let onKeyEnterSearch = `(function(){		
			   if (event.keyCode == 13) {				
				  table.filterTable();
			   }						
			})(event)`;

	    // search on mouse click
		let onClickSearch = `(function(){
			   table.filterTable();									
			})()`;

		// let onClickContactsDb = `(function(){			
		// })()`;
		// let onClickContactsDb = `(function(){			
		// return true;})()`;

		let onClickDisplayTestContacts = `(function(){
			table.displayTestContacts();									
		 })()`;

		 let onClickSaveContacts = `(function(){
			table.saveContacts();									
		 })()`;

		 let onClickLoadContacts = `(function(){
			table.loadContacts();									
		 })()`;

		let innerHtml = (new th('table-tr2-head-cell', 'div', 'icon-flex-container'))		
			.iconContainer("div", `dbIconContainer db-dropdown tooltip fade`,
			                "data-tooltip", "Contacts", null)			            
			.addIcon("dbIcon fa fa-database contacts-data")
			.addDropdownContainer("div", "db-dropdown-content")
			.addDropdownItem("p", "db-dropdown-item", onClickLoadContacts, "Load", 'fa fa-upload')
			.addDropdownItem("p", "db-dropdown-item", onClickSaveContacts, "Save", 'fa fa-download')
			.addDropdownItem("p", "db-dropdown-item", onClickDisplayTestContacts, "Test Data", 'fa fa-list-alt')
			.iconContainer("span", `addRowIconContainer tooltip fade`, "data-tooltip",
			               "Add new contact", onClickAddContact)
			.addIcon("addRowIcon fa fa-plus add-row")	
			.iconContainer("span", `updateRowIconContainer tooltip fade`,
			               "data-tooltip", "Edit selected contact", onClickEditContact)
			.addIcon("updateRowIcon fa fa-pencil edit-row")					
			.iconContainer("span", `deleteRowIconContainer tooltip fade`,
			               "data-tooltip", "Delete selected contact", onClickDeleteContact)
			.addIcon("deleteRowIcon fa fa-trash-o delete-row")			
			.inputContainer('span', 'input-searchTable', onKeyEnterSearch)
			.addInput('text', 'Searching ...', 'input-search')
			.addIconContainerWithIcon("span", 'tooltipSearch tooltip fade',
			                "data-tooltip", "Search table", 'fa fa-search', onClickSearch)						
			.toHtml();		

		return innerHtml;
	}	

	displayTestContacts() {
		this.contacts = JSON.parse(Data.addTestJsonData());
		// refresh table
		table.PopulateTable();
		this.closeHoverMenu();
	}

	saveContacts() {		
		localStorage.contacts = JSON.stringify(this.contacts);
		this.closeHoverMenu();		
	}

	loadContacts() {		
		if (localStorage.contacts !== undefined) {
			this.contacts = JSON.parse(localStorage.contacts);
		}
		table.PopulateTable();
		this.closeHoverMenu();
	}	

	closeHoverMenu(){
		let menu = document.querySelector('.db-dropdown-content');
		// add class with display:'none' and override display:'block'
		menu.classList.add('dropdown-content-clicked');
		// give the browser time to execute display:'none' for menu 
		// (so there’s no menu under the mouse) 
		// remove the class		
		setTimeout(function() {
			menu.classList.remove('dropdown-content-clicked');
		}, 10);		
	}

	deleteSelectedRow() {
		table.contacts.splice([table.iSelectedRow.row - 2], 1);
		// unselect row after form submit
		table.iSelectedRow.row = -1;
		// refresh table
		table.PopulateTable();
	}

	filterTable(){
		let input = document.querySelector(".input-search");
		let inputString = input.value;                 
		
		table.removeHighlightfromTextInTable();
		
		if (input.value) {
			let filter = inputString.trim();
			if (inputString.trim().length > 0) { 
				table.filterTableAndHighliteMatchingText(filter);
			}
		} 
	}

	removeHighlightfromTextInTable() {

        for (let i = 2; i < table.table.rows.length; i++) {
            for (var cell of table.table.rows[i].cells) {
                let txtChild = cell.querySelector(".searchble-txt");
                if (txtChild != null) {
                    cell.removeChild(txtChild);
                    let lastChild = document.createElement('span'); //split('dog').join('')
                    lastChild.innerHTML = txtChild.innerHTML.split('<mark>').join('').split('</mark>').join('');                    
                    lastChild.classList.add("searchble-txt");
                    cell.appendChild(lastChild);                    
                }                
            }
            table.table.rows[i].style.display = "";
        }
    }     

    filterTableAndHighliteMatchingText(filterString) {

        let rowList, i;        
        rowList = table.table.getElementsByTagName("tr");
        
        // get checked columns
        let checkedColumns = [];
        table.tableHeaderContext.cellContexts.forEach(cellContext => {
            cellContext.cssClassList.includes("checked") ? checkedColumns.push("checked") : checkedColumns.push(" ");
        });        
        
        for (i = 2; i < rowList.length; i++) {

			let cellList = rowList[i].getElementsByTagName("td");			
            let isHighlightedData = "false";
            
            for (let j = 0; j < cellList.length; j++) {

                let cell = cellList[j];

                if (cell) {
                    // search in checked columns only 
                    if (checkedColumns[j] === "checked") {
                        let isHighlighted =
                         this.handleSearchableContentOfCell(cell, filterString, table.tableHeaderContext.isSencitiveSearch);

                        if (isHighlighted === "true") {
                            isHighlightedData = 'true';
                        };
                    }
                }
            }
            
            // set row visibile if the row has highlighted text
            if (isHighlightedData === 'true') {
                rowList[i].style.display = "";
            } else {
                rowList[i].style.display = "none";
            }
        }
    }

    handleSearchableContentOfCell(cell, filter, isSensitive ){ 
               
        let isHighlighted = "false";
        let content = cell.innerHTML; 
        let searchableContent = "";

        // searchable content located between separator1 and separator2 (in the cell last child)       
        let separator1 = '<span class="searchble-txt">';
        let separator2 = '</span>';

        let pos1 = content.indexOf(separator1, 0);
        let pos2 = content.indexOf(separator2, pos1 + separator1.length);
        
        if( pos1 > -1 && pos2 > 0)
        {            
            searchableContent = content.slice(pos1 + separator1.length, pos2);             

            let highlightedContent = this.highlightFinding(searchableContent, filter, isSensitive);
            
            cell.removeChild(cell.querySelector(".searchble-txt"));            
            let lastChild = document.createElement('span');
            lastChild.classList.add("searchble-txt");
            lastChild.innerHTML = highlightedContent;      				
			cell.appendChild(lastChild);            

            if( highlightedContent !== searchableContent){                
                isHighlighted = "true";
            }
        }
        
        return  isHighlighted;       
    }

    highlightFinding(searchableContent, filter, isSensitive){

        let str = searchableContent;
        let result = searchableContent;
        let flt = filter;
        
        if(isSensitive === "false"){
            str = searchableContent.toUpperCase();
            flt = filter.toUpperCase();
        }

        let sub = "";
        let sub1 = "";        
        let pos0 = 0;
        let pos1 = str.indexOf(flt, pos0);

        while (pos1 > -1) {
            sub1 = sub.concat("", searchableContent.substring(pos0, pos1));

            // highlight selection
            sub = sub1.concat("", `<mark>${searchableContent.substring(pos1, pos1 + flt.length)}</mark>`);

            pos0 = pos1 + flt.length;
            pos1 = str.indexOf(flt, pos0);

            if (pos1 < 0) {
                result = sub.concat("", searchableContent.substring(pos0));
            }
        }
        
        return result;
    }    
			 
	PopulateTable() {		
		// refresh table - remove all rows but 2 header rows		
		for (var i = this.table.rows.length - 1; i > 1; i--) {
			this.table.deleteRow(i);
		}
		
		let iRow = 1;
		// refresh table - copy data from contacts to table rows		
		this.contacts.forEach(item => {
			//console.log("contact = ", item);
			this.contactId = item.id;

			iRow = iRow + 1;
			let row = this.table.insertRow();
			row.classList.add('table-tr-data');
			row.addEventListener("click", () => {
				this.iSelectedRow.row = event.target.closest('tr').rowIndex;
				this.highlightRow(this.iSelectedRow.row);
			});
			
			// put object property value to the table cell
			for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {

				let cellValue = Object.values(item)[i];
				// parse object to text 
				if (typeof (cellValue) === "object"
					&& this.tableHeaderContext.cellContexts[i].name !== "address") {
					let result = [];
					Parser.parseObject(cellValue, result);
					cellValue = result.join(separatorBr);
				}

				let cell = row.insertCell();				

				// fill in the cell								
				if (this.tableHeaderContext.cellContexts[i].name === "id") {  // id
					cell.innerHTML = (new td("", [])).textContainer('span', 'searchble-txt', cellValue).toHtml();
					// cell.classList.add("cell-id");					
				}				
				else if (this.tableHeaderContext.cellContexts[i].name === "name") {  // name
					cell.innerHTML = this.getInnerHtmlForCellName(cellValue, item);					
				}
				else if (this.tableHeaderContext.cellContexts[i].name === "username") {	 // username							
					cell.innerHTML = this.getInnerHtmlForCellUserName(cellValue, item);					
				}				
				else if (this.tableHeaderContext.cellContexts[i].name === "phone") {  // phone
					cell.innerHTML = this.getInnerHtmlForCellPhone(cellValue);
				}						
				else if (this.tableHeaderContext.cellContexts[i].name === "address") {  // address 		
					cell.innerHTML = this.getInnerHtmlForCellAddress(cellValue, item);
				}
				else {	// other				
					cell.innerHTML = (new td("", [])).textContainer('span', 'searchble-txt', cellValue).toHtml();
				}

				cell.classList.add('table-tr-data-cell');

				// table is responsive and for table in one column we need column name in every cell as data attribute
				cell.setAttribute("data-th", this.tableHeaderContext.cellContexts[i].caption);
				// also add class for cell, that we will use to made zebra for thin table 
				i % 2 == 0 ? cell.classList.add("cell-even") : cell.classList.add("cell-odd");				
			}			
		});
	}

	getInnerHtmlForCellAddress(cellValue, item) {

		let innerHtml = "";
		cellValue = this.getAddress(item);
		if (cellValue != null && String(cellValue) !== ' ') {
			//todo default geo
			let mapMarkerText = "";
			let lat = 0;
			let lng = 0;
			if ("geo" in item.address) {
				lat = item.address.geo.lat;
				lng = item.address.geo.lng;
				mapMarkerText = item.address.street + ', '
					+ item.address.city + ', '
					+ item.address.zipcode;
			}

			let name = 'map';
			let cssCellClassName = 'googleMaps-map';
			let onClickGoogleMap = `(function(){	
								let iRowClickedIndex = event.target.closest('tr').rowIndex;													
								let iSupplementalRow = table.putImageToSupplementalRow('${name}', '${cssCellClassName}', iRowClickedIndex);
								if(iSupplementalRow > 0) {
									let cell = table.table.rows[iSupplementalRow].cells[0];
									let map = table.initializeGoogleMaps('${lat}', '${lng}', cell, iSupplementalRow);
									table.googleMapLoad(map);				
								}
								})()`;

			cssCellClassName = 'osm-map';
			let onClickOpenStreetMap = `(function(){	
									let iRowClickedIndex = event.target.closest('tr').rowIndex;													
									let iSupplementalRow = table.putImageToSupplementalRow('${name}', '${cssCellClassName}', iRowClickedIndex);
									if(iSupplementalRow > 0) {
										let cell = table.table.rows[iSupplementalRow].cells[0];
	                        			table.openStreetMapLoad('${lat}', '${lng}', '${mapMarkerText}', cell, iSupplementalRow);														
									}
									})()`;

			let photoName = 'EstatePlaceholder2.jpg';
			if ("photo" in item.name && item.name.photo != "" && item.name.photo != " ") {
				//photoName = item.address.photo;
				photoName = item.id + '\/' + item.address.photo;
				//console.log('photoName = ', photoName);
			}
			cssCellClassName = 'photo';
			let onClickPhotoEstate = `(function(){	
									let iRowClickedIndex = event.target.closest('tr').rowIndex;									
									let iSupplementalRow = table.putImageToSupplementalRow('${photoName}', '${cssCellClassName}', iRowClickedIndex);									
									})()`;

			innerHtml = (new td("", []))
				.iconContainer("span", `tooltip fade shiftGoogle`, "data-tooltip", "Display Google Maps", onClickGoogleMap)
				.addIcon("googleMapsMarkerIcon fa fa-map-marker")
				.iconContainer("span", `tooltip fade shiftOsm`, "data-tooltip", "Display OpenStreet Map", onClickOpenStreetMap)
				.addIcon("openStreetMapMarkerIcon fa fa-map-marker")
				.iconContainer("span", `tooltip fade shiftEstate`, "data-tooltip", "Display Photo Estate", onClickPhotoEstate)
				.addIcon("photoIcon fa fa-picture-o")
				.textContainer('span', 'searchble-txt', cellValue)
				.toHtml();
		}

		return innerHtml;
	}

	getInnerHtmlForCellName(cellValue, item) {

		let innerHtml = "";
		if (cellValue != null && String(cellValue) !== ' ') {

			let cssCellClassName = 'photo-portrait';
			let photoName = 'PortraitPlaceholder.jpg';
			if ("photo" in item.name && item.name.photo != "" && item.name.photo != " ") {
				//photoName = item.name.photo;
				photoName = item.id + '\/' + item.name.photo;
				//console.log('photoName = ', photoName);
			}			

			let onClick = `(function(){	
							let iRowClickedIndex = event.target.closest('tr').rowIndex;													
							table.putImageToSupplementalRow('${photoName}', '${cssCellClassName}', iRowClickedIndex);
							})()`;

			innerHtml = (new td("", []))
				.iconContainer("span", `tooltip fade shiftPortrait`, "data-tooltip", "Display portrait photo", onClick)
				.addIcon("portraitIcon fa fa-user-circle-o")
				.textContainer('span', 'searchble-txt', item.name.firstName + ' ' + item.name.lastName)
				.toHtml();
		}

		return innerHtml;
	}

	getInnerHtmlForCellUserName(cellValue, item) {

		let innerHtml = "";
		if (cellValue != null && String(cellValue) !== ' ') {

			let cssCellClassName = 'photo-avatar';
			let photoName = 'AvatarPlaceholder.jpg';
			if ("avatar" in item.username && item.username.avatar != "" && item.username.avatar != " ") {
				//photoName = item.username.avatar;
				photoName = item.id + '\/' + item.username.avatar;
				//console.log('photoName = ', photoName);
			}

			let onClick = `(function(){	
							let iRowClickedIndex = event.target.closest('tr').rowIndex;													
							table.putImageToSupplementalRow('${photoName}', '${cssCellClassName}', iRowClickedIndex);
							})()`;

			innerHtml = (new td("", []))
				.iconContainer("span", `tooltip fade shiftAvatar`, "data-tooltip", "Display avatar", onClick)
				.addIcon("avatarIcon fa fa-user-circle")
				.textContainer('span', 'searchble-txt', item.username.username)
				.toHtml();
		}
		
		return innerHtml;
	};

	getInnerHtmlForCellPhone(cellValue) {

		let innerHtml = "";
		if (cellValue != null && String(cellValue) !== ' ') {

			let onClickSkype = `(function(){	
				                window.location.href = 'skype:${cellValue}call';
							})()`;

			let onClickLandPhone =  `(function(){
				window.alert('You are trying to call the number: ${cellValue}. Unfortunately, the phone service is not running.');	
				//window.location.href = 'skype:${cellValue}call';
			})()`;
			
			innerHtml = (new td("", []))
				.iconContainer("span", `tooltip fade shiftSkype`, "data-tooltip", "Call Skype", onClickSkype)
				.addIcon("skypeIcon fa fa-skype")
				.iconContainer("span", `tooltip fade shiftLandPhone`, "data-tooltip", "Call Land Line", onClickLandPhone)
				.addIcon("table-phoneind fa fa-skype")				
				.textContainer('span', 'searchble-txt', cellValue)
				.toHtml();
		}
		
		return innerHtml;
	};

	highlightRow(iRowClickedIndex) {
		for (var i = 0; i < this.table.rows.length; i++) {
			this.table.rows[i].classList.remove("tr-selected");
		}
		this.table.rows[iRowClickedIndex].classList.add("tr-selected");		
	}

	getAddress(item) {

		let address = item.address.suite + ', '
			+ item.address.street + ', '
			+ item.address.city + ', '
			+ item.address.zipcode + ', '
			+ '<br>'
			+ item.address.geo.lat + ', '
			+ item.address.geo.lng;

		return address;
	}
	
	getCoordinatesFromCell(cellValue) {
		let coord = { lat: Number(41.51), lng: Number(-0.15) }; //default
		let array = String(cellValue).split("<br>");
		let length = array.length;

		if (length > 2) {
			let coordinations = array[length - 2].split(",");
			coord.lat = coordinations[0];
			coord.lng = coordinations[1];
		}

		return coord;
	}

	// addGoogleMapsButton() {
	// 	let span = document.createElement('span');
	// 	span.id = "googleMapsButton";
	// 	span.innerHTML = '<i id="googleMapsMarkerIcon" class="fa fa-map-marker" aria-hidden="true"></i>';

	// 	return span;
	// }

	// addOpenStreetMapButton() {
	// 	let span = document.createElement('span');
	// 	span.id = "openStreetMapButton";
	// 	span.innerHTML = '<i id="openStreetMapMarkerIcon" class="fa fa-map-marker" aria-hidden="true"></i>';

	// 	return span;
	// }
	
	// addPhotoButton(iconName) {
	// 	let span = document.createElement('span');
	// 	span.id = "photoButton";
	// 	span.innerHTML = '<i id="photoIcon" class="' + iconName + '" aria-hidden="true"></i>';
	// 	return span;
	// }

	getCellChildrenClasses(cell) {
		let container = cell.children[0];
		let childrenClasses = [];

		for (let i = 0; i < container.children.length; i++) {
			let childClasses = Array.from(container.children[i].classList);
			childrenClasses = childrenClasses.concat(childClasses);
		}

		return childrenClasses;
	}

	putImageToFlexContainer(photoName, cssClassName) {

		let div = this.putImageToDiv(photoName, cssClassName);

		let container = document.createElement("div");
		container.classList.add("flex-container");
		container.appendChild(div);

		return container;
	}
	
	putImageToDiv(name, cssClassName){

		let div = document.createElement("div");
		div.classList.add("item");		
		div.classList.add(cssClassName);
		// contactId
		if(name !== 'map'){
			//div.style.backgroundImage = "url('/assets/photos/" + name + "')";
			div.style.backgroundImage = "url('/assets/photos/" + name + "')";
			//console.log('div.style.backgroundImage = ', div.style.backgroundImage);
		}		
		div.style.display = 'block';

		return div;		
	}		
	
	insertSupplementalRow = (iRow) => {		
		let row = this.table.insertRow(iRow);
		let cell = row.insertCell();
		row.classList.add('table-tr-data');
		row.classList.add('table-tr-supplemental');		
		cell.colSpan = this.table.rows[0].cells.length;
		cell.classList.add('table-tr-data-cell');

		return row;
	};

	putImageToSupplementalRow(photoName, cssClassName, iRowClickedIndex) {

		let iRow = iRowClickedIndex + 1;
		let currentRow = this.table.rows[iRow];
		
		if (!currentRow || currentRow.classList.contains('footer')) {
			// make sure we put the supplemental row into the tbody, not in the footer
			// (when iRowClickedIndex is the last row in tbody)
			let tbody = document.querySelector('tbody');
			let supplementalRow = tbody.insertRow(-1);			
			let cell = supplementalRow.insertCell();			
			supplementalRow.classList.add('table-tr-data');
			supplementalRow.classList.add('table-tr-supplemental');
			cell.colSpan = this.table.rows[0].cells.length;
			cell.classList.add('table-tr-data-cell');

			let container = this.putImageToFlexContainer(photoName, cssClassName);			
			supplementalRow.cells[0].appendChild(container);			
			return iRow;
		}
		let rowIndex = currentRow.rowIndex;
		
		if (currentRow.classList.contains("table-tr-supplemental")) {
			let cell = currentRow.cells[0];
			if (cell.children.length > 0) {
				let childrenClasses = this.getCellChildrenClasses(cell);				

				// delete supplemental row (toggle row by click on button)				
				if (childrenClasses.includes(cssClassName)) {					
					this.table.deleteRow(rowIndex);
					return -1;
				}
				else { // put photo to supplemental row
					let div = this.putImageToDiv(photoName, cssClassName);
					currentRow.cells[0].children[0].appendChild(div);
				}
			}
			return iRow;
		}
		else {  // add supplemental row and put photo
			let supplementalRow = this.insertSupplementalRow(iRow);			
			let container = this.putImageToFlexContainer(photoName, cssClassName);
			supplementalRow.cells[0].appendChild(container);
			return iRow;			
		}
	}
	
	// putImageToSupplementalRow(photoName, cssClassName, iRowClickedIndex) {

	// 	let iRow = iRowClickedIndex + 1;
	// 	let currentRow = this.table.rows[iRow];
	// 	// if (!currentRow) {
	// 	// 	let row = this.table.insertRow(iRow);
	// 	// 	row.classList.add('table-tr-data');
	// 	// 	row.classList.add('table-tr-supplemental');
	// 	// 	let cell = row.insertCell();
	// 	// 	cell.colSpan = this.table.rows[0].cells.length;
	// 	// 	cell.classList.add('table-tr-data-cell');
	// 	// 	currentRow = row;
	// 	// 	// this.table.insertRow(iRow);
	// 	// 	// currentRow = this.table.rows[iRow];
	// 	// 	//this.insertSupplementalRow(iRow);
	// 	// 	//currentRow = this.table.rows[iRow];
	// 	// }
	// 	console.log("currentRow = ", currentRow);
		
	// 	let rowIndex = currentRow.rowIndex;
	// 	console.log("currentRow.rowIndex = ", currentRow.rowIndex);
	// 	//console.log("----------------SupplementalRow photoName = ", photoName);
		
	// 	if (currentRow.classList.contains("table-tr-supplemental")) {
	// 		let cell = currentRow.cells[0];
	// 		if (cell.children.length > 0) {
	// 			let childrenClasses = this.getCellChildrenClasses(cell);				

	// 			// delete supplemental row (toggle row by click on button)				
	// 			if (childrenClasses.includes(cssClassName)) {					
	// 				this.table.deleteRow(rowIndex);
	// 				return -1;
	// 			}
	// 			else { // put photo to supplemental row
	// 				let div = this.putImageToDiv(photoName, cssClassName);
	// 				currentRow.cells[0].children[0].appendChild(div);
	// 			}
	// 		}
	// 		return iRow;
	// 	}
	// 	else {  // add supplemental row and put photo
	// 		let supplementalRow = this.insertSupplementalRow(iRow);			
	// 		let container = this.putImageToFlexContainer(photoName, cssClassName);
	// 		supplementalRow.cells[0].appendChild(container);
	// 		return iRow;			
	// 	}
	// }	

	initializeGoogleMaps(lat, lng, cell, iRowMap) {
		var coord = { lat: Number(lat), lng: Number(lng) };
		var prop = {
			center: new google.maps.LatLng(Number(lat), Number(lng)),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		if (cell.children.length < 1)
			return;

		var container = cell.children[0];

		// remove/add div for map update (otherwise instance error)
		for (let i = 0; i < cell.children[0].children.length; i++) {
			let child = cell.children[0].children[i];
			if (child.classList.contains('googleMaps-map')) {
				container.removeChild(child);
			}
		}

		// div for map display
		var div = document.createElement('div');
		let id = 'googleMaps-map' + String(iRowMap);
		div.id = id;
		div.style.display = 'block';
		div.classList.add('googleMaps-map');
		div.classList.add('item');
		container.appendChild(div);

		let map = new google.maps.Map(div, prop);
		let marker = new google.maps.Marker({ position: coord, map: map });
		return map;
	}

	googleMapLoad(map) {		
		google.maps.event.trigger(map, 'resize');
	}

	openStreetMapLoad(lat, lng, mapMarkerText, cell, iRowMap) {
		if (cell.children.length < 1)
			return;

		var container = cell.children[0];

		// remove-add div for map update (otherwise map instance error)
		for (let i = 0; i < cell.children[0].children.length; i++) {
			let child = cell.children[0].children[i];
			if (child.classList.contains('osm-map')) {
				container.removeChild(child);
			}
		}

		// div for map display
		var div = document.createElement('div');
		let id = 'osm-map' + String(iRowMap);
		div.id = id;
		div.style.display = 'block';
		div.classList.add('osm-map');
		div.classList.add('item');
		container.appendChild(div);

		var map = L.map(id).setView([lat, lng], 17);

		// add an OpenStreetMap tile layer  
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		// add a marker and bindPopup('Community College')
		L.marker([lat, lng]).addTo(map).bindPopup(mapMarkerText).openPopup();
	}	
}
