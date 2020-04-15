function get_highlightMouseRow() {    
    let markup = `
<h3>Highlight row under the mouse</h3>
<h4>Issue. </h4> <p>Change the color of the table row on mouse hover.</p>
<h4>Code.</p>
<h5><strong>Keywords: hover</strong></h5>
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
    