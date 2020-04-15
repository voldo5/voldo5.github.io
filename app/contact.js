class Contact
{
  getClassFromObject(obj)
  {
    return Object.assign(this, obj);
  }

  getEmptyContact() {
    let defaultContact = 
    {
      "id": 1,
        "name": {
          "firstName": "",
          "lastName": "",
          "photo": "",
        },        
        "username": {
          "username": "",         
          "avatar": "",
        },
        "email": "",
        "address": {
          "street": "",
          "suite": "",
          "city": "",
          "zipcode": "",
          "geo": {
            "lat": "",
            "lng": ""
          },
          "photo": "",
        },
        "phone": "",
        "website": "",
        "company": {
          "name": "",
          "catchPhrase": "",
          "bs": ""
        }
    };

  // getEmptyContact() {
  //   let defaultContact = 
  //   {
  //     "id": -1,
  //     "name": "",
  //     "username": "",
  //     "email": "",
  //     "address": {
  //       "street": "",
  //       "suite": "",
  //       "city": "",
  //       "zipcode": "",
  //       "geo": {
  //         "lat": "",
  //         "lng": ""
  //       },
  //       "photo": "",
  //     },
  //     "phone": "",
  //     "website": "",
  //     "company": {
  //       "name": "",
  //       "catchPhrase": "",
  //       "bs": ""
  //     }
  //   };

    // return Object.assign(this, Contact.defaultContact); 
    // return Object.assign(this, defaultContact);  
    return defaultContact;        
  }  

  getTestContact() {
    let defaultContact =
    {
      "id": 1,
        "name": {
          "firstName": "Michelle",
          "lastName": "Vilms",
          "photo": "Vilms-portrait.jpg",
        },        
        "username": {
          "username": "Vilma",         
          "avatar": "Vilms-avatar5.jpg",
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
          "photo": "Vilms-building.jpg",
        },
        "phone": "1-617-416-0113",
        "website": "http://www.vilmsconsulting.com/",
        "company": {
          "name": "Vilms Consulting",
          "catchPhrase": "Partnering with small businesses since 2008",
          "bs": "Bring the expertise to help the clients grow their business."
        }
    };
    
    return defaultContact;
  }  
}
