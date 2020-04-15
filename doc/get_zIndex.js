
function get_zIndex() {    
    let markup = `
<h3>z-index</h3>
<p>The z-index property specifies the stack order of an element.
An element with greater stack order is always in front of an element with a lower stack order.
z-index only works on positioned elements (position: absolute, position:
relative, position: fixed, or position: sticky).
Elements with non-static positioning will always appear on top of elements with default static positioning.
Also note that nesting plays a big role. If an element B sits on top of element A,
 a child element of element A can never be higher than element B.</p>

<h5>Examples from project:</h5>
<ul>
<li>Sticky table 1st row. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableHeader1stRow', 'Table Header 1st Row');">
Table Header 1st Row.</a>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table-tr1-head-cell {
    position: sticky;
    top: 0;
    z-index: 9999;         
}
</code></pre></fieldset>
</li></ul>
`;
return markup;
} 
