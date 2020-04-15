function get_localStorage() {    
    let markup = `
    <h3>Issue. Local Storage.</h3>
    <p>Store user contacts information in the Local Storage in the user browser.
    Add posibility to restore default contacts information.</p>
    
    <h4>Code.</p>
    <h5><strong>Keywords: </strong></h5> 
    <p>In the table command row we have db menu.</p>
    <img src="\\assets\\picsDoc\\doc_dbIconDropdown.png" 
    class="img-fixedsize-inline" width="133" height="136">
    <p>When we click “Save”, the table is saved in local storage.</p>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">table.js</div>
    <pre><code class="language-javascript">			
    saveContacts() {		
		localStorage.contacts = JSON.stringify(this.contacts);
		this.closeHoverMenu();		
	}
    </code></pre></fieldset> 

    <p>When we click "Load", the table is loaded from local storage.</p>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">table.js</div>
    <pre><code class="language-javascript">			
    loadContacts() {		
		if (localStorage.contacts !== undefined) {
			this.contacts = JSON.parse(localStorage.contacts);
		}
		table.PopulateTable();
		this.closeHoverMenu();
	}	
    </code></pre></fieldset> 

    <p>When we click "Test Data", the default data is loaded into the table.</p>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">data.js</div>
    <pre><code class="language-javascript">			
    LoadTestDataIntoTable(containerDivId, callbackDisplayTable) {
        let items = Data.addTestJsonData();
        callbackDisplayTable(containerDivId, items);
    } 
    
    static addTestJsonData() {
        // JSON string
        var users = [
          {
            "id": 1,
            "name": {
              "firstName": "Michelle",
              "lastName": "Vilms",
              "photo": "VilmsPortrait.jpg"
            },        
            "username": {
              "username": "Vilma",         
              "avatar": "Vilms-avatar5.jpg"
            },
            "email": "info@vilmsconsulting.com",
            "address": {
              "street": "3 Arlington St",
              "suite": "Apt.2",
              "city": "Boston",
              "zipcode": "02116",
              "geo": {
                "lat": "42.355101",
                "lng": "-71.072574"
              },
              "photo": "Vilms-building.jpg"
            },
            "phone": "1-617-416-0113",
            "website": "http://www.vilmsconsulting.com/",
            "company": {
              "name": "Vilms Consulting",
              "catchPhrase": "Partnering with small businesses since 2008",
              "bs": "Bring the expertise to help the clients grow their business."
            }
          },
          ...
               
    ];   
    return users;
}  
</code></pre></fieldset>   
`;
return markup;
}
    