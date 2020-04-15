function get_class() {    
    let markup = `
<h3>Class</h3>
<p>A class is an object template which defines how objects of that type behave.
Class should contain a constructor - a special method for creating and initializing
an object created with a class. Class also can contain instance and static methods,
getters and setters.</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }  
}
  
let user = new User("John");
alert(user.name); // John  
user = new User(""); // Name is too short.
</code></pre></fieldset>
<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainer', 'Table Class');">
Table Class.</a></li>
</ul>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">  
class Table {
    constructor(contacts, container) {		
      this.table = null;
      this.contacts = contacts;
      this.container = container;		
    }
  
    displayTable = () => {  
      // create container header (not a part of table)
      let tableContainerHeader = this.CreateTableContainerHeader();
      // create table 		
      this.table = document.createElement('table');
      this.table.classList.add('table');
    }
}      
</code></pre></fieldset>
`;
return markup;
} 
