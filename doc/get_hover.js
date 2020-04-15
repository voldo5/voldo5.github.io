function get_hover() {    
    let markup = `
<h3>:hover</h3>
<p>The :hover is CSS pseudo-class. The :hover selector is used to select
the element when we move the mouse over this element.</p>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
p:hover, h1:hover, a:hover {
    background-color: yellow;
}
</code></pre></fieldset>

<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_highlightMouseRow', 'Highlight row under the mouse');">
Highlight row under the mouse.</a></li>
</ul>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table-tr-data:hover {    
    background-color: #d5ebe9 !important;
}
</code></pre></fieldset>
`;
return markup;
} 
