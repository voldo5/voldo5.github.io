function get_dataAttribute() {    
    let markup = `
<h3>data attribute</h3>
<p>Any attribute on any element whose attribute name starts with data- is a data attribute.
The data-* attribute is used to store custom data. The stored (custom) data can then be used
 in the page's JavaScript (without any Ajax calls or server-side database queries).</p>

<h5>Examples from project: data attribute 'data-th'</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_responsiveTable', 'Responsive Table');">
Responsive Table.</a></li>
</ul>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
    let cell = row.insertCell();
    cell.setAttribute("data-th", this.tableHeaderContext.cellContexts[i].caption);
</code></pre></fieldset>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
@media screen and (max-width: 600px) {
    .table tbody td:before {
        content: attr(data-th);       
    } 
}
</code></pre></fieldset>
`;
return markup;
} 
