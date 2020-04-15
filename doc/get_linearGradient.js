
function get_linearGradient() {    
    let markup = `
<h3>linear-gradient</h3>
<p>CSS gradients let you display smooth transitions between two or more specified colors.</p>
<h5>linear-gradient(direction, color-stop1, color-stop2, ...);</h5>

<h5>Examples.</h5>
<ul>
<li>Simple gradient.</a>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
#grad {
    background-image: linear-gradient(red, yellow, green);
}
</code></pre>
</fieldset>
</li>
<li>Free online tool - <a href="https://html-css-js.com/css/generator/gradient/">
Gradient generator.</a>
<img src="\\assets\\picsDoc\\doc_gradientGenerator.jpg" alt="Gradient Generator."
 class="img-responsive" width="600" height="400"> 
</li>
</ul>

<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
#contacts .table-container-header{ 
    background-image: linear-gradient(to top, #008080, #00837e, #00867b, #008878, #058b74);    
    min-width: 280px;
    padding: 0.6rem 1.6rem 0.6rem 0.6rem;  
    margin: 0 1px 1px 0;
    text-align: center;
    text-shadow: -1px 0 rgb(233, 231, 231), 0 1px lightblue, 1px 0 #eee, 0 -1px #eee;
    color: teal;
    line-height: 1.9rem;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Lilita One', Roboto, sans-serif;      
}
</code></pre></fieldset>
</ul>
`;
return markup;
}
