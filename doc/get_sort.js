function get_sort() {
    //let markup = ``;
let markup = `
<h3>sort array</h3>
<p>The sort() method sorts the elements of an array in place
and returns the sorted array. The default sort order is ascending,
built upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values.</p>
<h5>arr.sort([compareFunction])</h5>
<p>If compareFunction is not supplied, all non-undefined array 
elements are sorted by converting them to strings and comparing 
strings in UTF-16 code units order. If compareFunction is supplied, 
all non-undefined array elements are sorted according to the return 
value of the compare function</p>
<h5>Example. Objects sorted by the value of one of their properties.</h5>

<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
</code></pre>
</fieldset>

<h5>Examples from project:</h5> 
<ul>
<li>Sort table by several columns using recursive comparing function.
Issue: <a href="javascript:booklet.navigateRegularPages('get_tableSort', 'Table Sort');">
Table Sort.</a></li>
</ul>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">data.js</div>
<pre><code class="language-javascript">
static sortByRule(sortRule, users) {     
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
</code></pre>
</fieldset>
`;  
return markup;
}

