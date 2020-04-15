function get_position() {    
    let markup = `
<h3>position</h3>
<p>The position property specifies the type of positioning method used
for an element (static, relative, fixed, absolute or sticky).
Get data for header from table context.</p>
<ul>
<li>position: <u>static</u> - elements is positioned according to the normal flow of the page.
Static positioned elements are not affected by the top, bottom, left, and right properties.
</li>
<li>position: <u>relative</u> - elements is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned
element will cause it to be adjusted away from its normal position.
</li>
<li>position: <u>fixed</u> - elements is positioned relative to the viewport,
which means it always stays in the same place even if the page is scrolled.
</li>
<li>position: <u>absolute</u> - elements is positioned relative to the nearest
 positioned ancestor (instead of positioned relative to the viewport, like fixed).
</li>
<li>position: <u>sticky</u> - elements is positioned based on the user's scroll position.
It is positioned relative until a given offset position is met in the viewport - 
then it "sticks" in place (like position:fixed)..
</li>
</ul>

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
<p>It is interesting, that we should made th (table header cell) sticky but not tr (table row).</p>
`;
return markup;
} 
