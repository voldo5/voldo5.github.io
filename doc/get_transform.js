function get_transform() {    
    let markup = `
<h3>transform</h3>
<p>The transform CSS property lets you rotate, scale, skew, or translate an element.</p>
<h5>transform: none|transform-functions|initial|inherit;</h5>
<h5>Examples.</h5>
<ul>
<li>Scale and translate.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
transform: scale(0.5) translate(-100%, -100%);
</code></pre></fieldset>
</li>
<li>Free online tool - <a href="https://html-css-js.com/css/generator/transform/">
Transform generator.</a>
<img src="\\assets\\picsDoc\\doc_translateGenerator.jpg" alt="Transforme Generator."
 class="img-responsive" width="600" height="400"> 
</li>
</ul>
<h5>Examples from project:</h5>
<ul>
<li>Tooltip appearance. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.tooltip.fade:hover:after,
.tooltip.fade:hover:before {
    opacity: 1;
    transform: translate3d(0,0,0);
    transition-delay: 0.6s;
}
</code></pre></fieldset>
</ul>
`;
return markup;
} 
