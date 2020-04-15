function get_caption() {    
    let markup = `
<h3>&lt;caption&gt;</h3>
<p>The &lt;caption&gt; tag defines a table caption.
By default, a table caption will be center-aligned above a table.</p>
<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_responsiveTable', 'Responsive Table');">
Responsive Table.</a></li>
</ul>
<fieldset>
<legend>Javascript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
var tableCaption = table.table.createCaption();	
tableCaption.classList.add("table-caption");
</code></pre></fieldset>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table-caption{
    display: none;
}
</code></pre></fieldset>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
@media screen and (max-width: 600px) {
    .table-caption{
        display:table-caption;
        position: sticky;
        top:0;
        z-index: 9999;
        background: #eee;
        border-right: 1px solid #eee;
    }
}
</code></pre></fieldset>
`;
return markup;
} 
