
function get_nthChild() {    
    let markup = `
<h3>nth-child</h3>
<p>The :nth-child() is CSS pseudo-class matches elements based on their position in a group of siblings.</p>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
/* Selects every fourth element among any group of siblings */
:nth-child(4n) {
  color: lime;
}
</code></pre></fieldset>

<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_zebraTable', 'Zebra Striped Table');">
Zebra Striped Table.</a></li>
</ul>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table tr:nth-child(odd){    
    background:#F7F7F7; 
}  
.table tr:nth-child(even){    
    background:#ecf0f1; 
}
</code></pre></fieldset>
`;
return markup;
} 
