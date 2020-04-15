function get_media() {    
    let markup = `
<h3>@media</h3>
<p>Media queries are useful when you want to modify your site or app depending on a device's
general type (such as print vs. screen) or specific characteristics and parameters
(such as screen resolution or browser viewport width).</p>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
@media (min-height: 680px), screen and (orientation: portrait) { ... }
</code></pre></fieldset>

<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_responsiveTable', 'Responsive Table');">
Responsive Table.</a></li>
</ul>
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
<p>Using media in Javascript.</p>
<fieldset>
<legend>Javascript</legend>
<div class="legend2">index.js</div>
<pre><code class="language-javascript">
window.addEventListener("resize", () => {
// relocate table second header row to table caption
var x = window.matchMedia("(max-width: 600px)");	
relocateTableCommandRow(x);
});
</code></pre></fieldset>
`;
return markup;
} 
