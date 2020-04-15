function get_arrowFunction() {    
    let markup = `
<h3>Arrow function (fat arrow function)</h3>
<p>Arrow functions allows us to write shorter function syntax.
It works like Lambdas in C#. The benefit of using arrow functions
is that it reduces the confusion the 'this' keyword. In regular functions
the 'this' keyword represented the object that called the function,
which could be the window, the document, a button or whatever.
With arrow functions the this keyword always represents the object
that defined the arrow function.</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
hello = () => {
    return "Hello World!";
}
</code></pre></fieldset>
<h5>Examples from project:</h5>
<ul>
<li>Arrow function in addEventListener. Issue: <a href="javascript:booklet.navigateRegularPages('get_highlightRow', 'Highlight selected row');">
Highlight selected row.</a></li>
</ul>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">  
	let row = this.table.insertRow();	    
	row.addEventListener("click", () => {		
	this.highlightRow(this.iSelectedRow.row);
    });
</code></pre></fieldset>
`;
return markup;
} 
