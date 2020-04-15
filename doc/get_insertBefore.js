function get_insertBefore() {    
    let markup = `
<h3>insertBefore()</h3>
<p>The insertBefore() method inserts a node as a child, right before an
existing child, which you specify.</p>
<h5>node.insertBefore(newnode, existingnode)</h5>
<ul>
<li>Inser child.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
function myFunction() {
    var node = document.getElementById("myList2").lastChild;
    var list = document.getElementById("myList1");
    list.insertBefore(node, list.childNodes[0]);
}
</code></pre></fieldset>
</li>
</ul>
<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.css</div>
<pre><code class="language-javascript">
tableContainerHeader.insertBefore(span, tableContainerHeader.firstChild);
</code></pre></fieldset>
</ul>
`;
return markup;
} 
