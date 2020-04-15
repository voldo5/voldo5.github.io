class Data {  
    
  // Async fetch data to be certain that the response has resolved before proceeding
  async fetchDataIntoTable(url, containerDivId, columnsNames, callbackCreateTable) {
    try {
      let response = await fetch(url);
      let items = await response.json();
      callbackCreateTable(containerDivId, columnsNames, items);
    } catch (e) {
      console.log('Error during fetch: ' + e.message);
    }
  }

  LoadTestDataIntoTable(containerDivId, callbackDisplayTable) {
    let items = Data.addTestJsonData();
    callbackDisplayTable(containerDivId, items);
  } 

  static sortByRule(sortRule, users) { 
    //console.log("-------------sortRule = ", sortRule);   
    users.sort(Data.compareByMultipleKey(sortRule));
    return users;
  }

  static compareByMultipleKey(sortRule) {     
    return function (a, b) {
      if (sortRule.length == 0) return 0; // force to quit if keys run out

      let key = sortRule[0].name; // take out the first key
      let direction = sortRule[0].sortDirection;       
      
      // using eval
      // let x = eval("a." + key);
      // let y = eval("b." + key); 

      // without using eval
      let x = Data.getDescendantProp(a, key);
      let y = Data.getDescendantProp(b, key);

      if (direction === "sort-ascending") {        
        if (x < y) return -1;
        else if (x > y) return 1;
        else return Data.compareByMultipleKey(sortRule.slice(1))(a, b);
      } else { //"sort-descending"
        if (x < y) return 1;
        else if (x > y) return -1;
        else return Data.compareByMultipleKey(sortRule.slice(1))(a, b);
      }
    }
  }

  static getDescendantProp(obj, key) {
    var arr = key.split('.');
    while (arr.length) {
      obj = obj[arr.shift()];
    }
    return obj;
  }

  // static compareByMultipleKey(sortRule) {     
  //   return function (a, b) {
  //     if (sortRule.length == 0) return 0; // force to quit if keys run out

  //     let key = sortRule[0].name; // take out the first key
  //     let direction = sortRule[0].sortDirection;       
      
  //     let x = eval("a." + key);
  //     let y = eval("b." + key); 

  //     if (direction === "sort-ascending") {        
  //       if (x < y) return -1;
  //       else if (x > y) return 1;
  //       else return Data.compareByMultipleKey(sortRule.slice(1))(a, b);
  //     } else { //"sort-descending"
  //       if (x < y) return 1;
  //       else if (x > y) return -1;
  //       else return Data.compareByMultipleKey(sortRule.slice(1))(a, b);
  //     }
  //   }
  // }   

  static addTestJsonData() {
    // JSON string
    var users = `[
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

      {
        "id": 2,        
        "name": {
          "firstName": "Ervin",
          "lastName": "Howell",
          "photo": ""
        },        
        "username": {
          "username": "Antonette",         
          "avatar": ""
        },
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "102 Oak St",
          "suite": "Suite 879",
          "city": "Hartford",
          "zipcode": "CT 06106",
          "geo": {
            "lat": "41.760328",  
            "lng": "-72.684444"
          },
          "photo": "Hartford.jpg"
        },
        "phone": "+1-860-466-4278",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "In thy light we shall see light",
          "bs": "To attract diverse students"
        }
      },

      {
        "id": 3,        
        "name": {
          "firstName": "Clementine",
          "lastName": "Bauch",
          "photo": "Samantha.png"
        },        
        "username": {
          "username": "Samantha",         
          "avatar": "Super-Hero.jpg"
        },
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Elm St",
          "suite": "Suite 149",
          "city": "New Haven",
          "zipcode": "CT 06511",
          "geo": {
            "lat": "41.309065",  
            "lng": "-72.925785"
          },
          "photo": "New Haven.jpg"
        },
        "phone": "1-203-432-2300",
        "website": "visitorcenter.yale.edu",
        "company": {
          "name": "Yale University",
          "catchPhrase": "Light and Truth",
          "bs": "To improve the world today "
        }
      },

      {
        "id": 4,        
        "name": {
          "firstName": "Patricia",
          "lastName": "Lebsack",
          "photo": "Karianne.png"
        },        
        "username": {
          "username": "Karianne",         
          "avatar": "Witch.jpg"
        },
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Chapman Pkwy",
          "suite": "Apt. 1",
          "city": "Stony Brook",
          "zipcode": "NY 11790",
          "geo": {
            "lat": "40.922",
            "lng": "-73.129"
          },
          "photo": "Stony Brook-big.jpg"
        },
        "phone": "1-631-751-1800",
        "website": "stonybrookschool.org",
        "company": {
          "name": "The Stony Brook School",
          "catchPhrase": "Character Before Career",
          "bs": "Serve the world through character and leadership"
        }
      },

      {
        "id": 5,        
        "name": {
          "firstName": "Chelsey",
          "lastName": "Dietrich",
          "photo": "Kamren.png"
        },        
        "username": {
          "username": "Kamren",         
          "avatar": "EnchantmentFairy.jpg"
        },
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "30 Hudson St",
          "suite": "30",
          "city": "Jersey City",
          "zipcode": "NJ 07302",
          "geo": {
            "lat": "40.713241",  
            "lng": "-74.033189"
          },
          "photo": "Goldman Sachs-big.jpg"
        },
        "phone": "1-212-902-1000",
        "website": "https://www.goldmansachs.com/",
        "company": {
          "name": "Goldman Sachs & Co",
          "catchPhrase": "Improving lives",
          "bs": "Bringing people capital and ideas together"
        }
      },

      {
        "id": 6,        
        "name": {
          "firstName": "Mrs. Dennis",
          "lastName": "Schulist",
          "photo": "Dennis.jpg"
        },        
        "username": {
          "username": "Leopoldo_Corkery",         
          "avatar": "WizardOwl.jpg"
        },
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Nassau",
          "suite": "Apt. 950",
          "city": "Princeton",
          "zipcode": "NJ 08544",
          "geo": {
            "lat": "40.344061",
            "lng": "-74.655293"
          },
          "photo": "Prinseton2.jpg"
        },
        "phone": "1-477-935-8478 x6430",
        "website": "https://www.princeton.edu/",
        "company": {
          "name": "Princeton University",
          "catchPhrase": "Under God's Power, She Flourishes",
          "bs": "In the Nation’s Service and the Service of Humanity"
        }
      },

      {
        "id": 7,        
        "name": {
          "firstName": "Kurtis",
          "lastName": "Weissnat",
          "photo": "Kurtis.jpg"
        },        
        "username": {
          "username": "Elwyn.Skiles",         
          "avatar": "LouisDeFunes.jpg"
        },
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "450 Serra Mall",
          "suite": "Suite 280",
          "city": "Stanford",
          "zipcode": "94305–2004",
          "geo": {
            "lat": "37.426765",
            "lng": "-122.169724"
          },
          "photo": "Stanford-big.jpg"
        },
        "phone": "+1-650-725-3335",
        "website": " https://www.stanford.edu/",
        "company": {
          "name": "Stanford University",
          "catchPhrase": "The wind of freedom blows",
          "bs": "To serve as a place of enlightenment and freedom"
        }
      },

      {
        "id": 8,        
        "name": {
          "firstName": "Nicholas",
          "lastName": "Runolfsdottir V",
          "photo": "Nicholas.jpg"
        },        
        "username": {
          "username": "Maxime_Nienow",         
          "avatar": "CuteLittleMonk.jpg"
        },
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "5th Avenue",  
          "suite": "Suite 530",
          "city": "New York",
          "zipcode": "10036",
          "geo": {
            "lat": "40.755109", 
            "lng": "-73.979727"
          },
          "photo": "530-5thAvenue.jpg"          
        },
        "phone": "586.493.6943 x140",
        "website": "https://abernathygroupfamilyoffice.com/",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Organizing each family’s asset",
          "bs": "Improve portfolios by reducing capital at risk"
        }
      },

      {
        "id": 9,        
        "name": {
          "firstName": "Glenna",
          "lastName": "Reichert",
          "photo": "Delphine.png"
        },        
        "username": {
          "username": "Delphine",         
          "avatar": "ClementinaAvatar.jpg"
        },
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Massachusetts Ave",
          "suite": "77",
          "city": "Cambridge",
          "zipcode": "02139",
          "geo": {
            "lat": "42.357911",
            "lng": "-71.090931"
          },
        "photo": "MIT.jpg"
        },
        "phone": "+1 617-253-1000",
        "website": "http://web.mit.edu/",
        "company": {
          "name": "The MIT Corporation",
          "catchPhrase": "Mind and hand",
          "bs": "Make a better world through education"
        }
      },

      {
        "id": 10,        
        "name": {
          "firstName": "Clementina",
          "lastName": "DuBuque",
          "photo": "Clementina.png"
        },        
        "username": {
          "username": "Moriah.Stanton",         
          "avatar": "Moriah.jpg"
        },
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Ellis Ave",
          "suite": "5801",
          "city": "Chicago",
          "zipcode": "IL 60637",
          "geo": {
            "lat": "41.787773",
            "lng": "-87.599481"   
          },
          "photo": "University of Chicago.jpg"          
        },
        "phone": "+1 773-702-1234",
        "website": "https://www.uchicago.edu/",
        "company": {
          "name": "The University of Chicago",
          "catchPhrase": "Let knowledge grow from more to more",
          "bs": "Provide superior client service"
        }
      },

      {
        "id": 11,        
        "name": {
          "firstName": "Chelsey",
          "lastName": "Dietrich",
          "photo": "Jennifer.png"
        },        
        "username": {
          "username": "Jennifer",         
          "avatar": "Serenity.jpg"
        },
        "email": "Jennifer2_Hettinger@annie.ca",
        "address": {
          "street": "State St",
          "suite": "500 S",
          "city": "Ann Arbor",
          "zipcode": "MI 48109",
          "geo": {
            "lat": "42.277200",
            "lng": "-83.734066"
          },
          "photo": "University of Michigan.jpg"       
        },
        "phone": " +1 734-764-1817",
        "website": "https://umich.edu/",
        "company": {
          "name": "University of Michigan",
          "catchPhrase": "Arts, Knowledge, Truth",
          "bs": "To serve the people of Michigan"
        }
      },

      {
        "id": 12,        
        "name": {
          "firstName": "Chelsey",
          "lastName": "Dietrich",
          "photo": "Jennifer.jpg"
        },        
        "username": {
          "username": "Jennifer",         
          "avatar": "JenniferAvatar.jpg"
        },
        "email": "Jennifer1_Hettinger@annie.ca",
        "address": {
          "street": "3400 N. Charles St.",
          "suite": "242 Garland Hall",
          "city": "Baltimore",
          "zipcode": "21218",
          "geo": {
            "lat": "39.329757",
            "lng": "-76.620463"
          },
          "photo": "Johns Hopkins-big.jpg"
        },
        "phone": "(254)954-1289",
        "website": "https://www.jhu.edu/",
        "company": {
          "name": "Johns Hopkins University",
          "catchPhrase": "The truth shall set you free",
          "bs": "To bring the benefits of discovery to the world"
        }
      },

      {
        "id": 13,        
        "name": {
          "firstName": "Chelsey",
          "lastName": "Dietrich",
          "photo": "Anne.jpg"
        },        
        "username": {
          "username": "Anne",         
          "avatar": "ChelseyAvatar.jpg"
        },
        "email": "Anne2_Hettinger@annie.ca",
        "address": {
          "street": "110 Sproul Hall",
          "suite": "Suite 351",
          "city": "Berkeley",
          "zipcode": "94704",
          "geo": {
            "lat": "37.872135",
            "lng": "-122.258400"
          },
          "photo": "Berkeley-big.png"
        },
        "phone": " +1 510-642-6000",
        "website": "https://www.berkeley.edu/",
        "company": {
          "name": "University of California, Berkeley",
          "catchPhrase": "Let there be light",
          "bs": "Discovering new knowledge"
        }
      },

      {
        "id": 14,        
        "name": {
          "firstName": "Chelsey",
          "lastName": "Dietrich",
          "photo": "Anne.jpg"
        },        
        "username": {
          "username": "Anne",         
          "avatar": "AnneAvatar.jpg"
        },
        "email": "Anne1_Hettinger@annie.ca",
        "address": {
          "street": "421 Chapel Drive",
          "suite": "Room 220",
          "city": "Durham",
          "zipcode": "27708",
          "geo": {
            "lat": "36.001112",
            "lng": "-78.938148"
          },
          "photo": "Duke University.jpg"
        },
        "phone": "+1 919-684-8111",
        "website": "https://www.duke.edu/",
        "company": {
          "name": "Duke University",
          "catchPhrase": "Knowledge and Faith",
          "bs": "To provide a superior liberal education"
        }
      }      
    ]`;

    //console.log("addTestJsonData users", users);

    return users;
  }
}