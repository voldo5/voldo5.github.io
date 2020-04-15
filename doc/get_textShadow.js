function get_textShadow() {    
    let markup = `
<h3>text-shadow</h3>
<p>The text-shadow property adds shadow to text.</p>
<h5>text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;</h5>
<h5>Examples.</h5>
<ul>
<li>Text-shadow with a red neon glow.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
h1 {
    text-shadow: 0 0 3px #FF0000;
}
</code></pre></fieldset>
</li>
<li>Free online tool - <a href="https://html-css-js.com/css/generator/text-shadow/">
Text-shadow generator.</a>
<img src="\\assets\\picsDoc\\doc_textShadowGenerator.jpg" alt="Text Shadow Generator."
 class="img-responsive" width="600" height="400"> 
</li>
</ul>
<h5>Examples from project:</h5>
<ul>
<li>Table name in table header. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<p><img src="\\assets\\picsDoc\\doc_docOpenDocIcon.jpg" 
class="img-responsive" width="600" height="400"></p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
#contacts .table-container-header{ 
    text-shadow: -1px 0 rgb(233, 231, 231), 0 1px lightblue, 1px 0 #eee, 0 -1px #eee;
    min-width: 280px;
    padding: 0.6rem 1.6rem 0.6rem 0.6rem;  
    margin: 0 1px 1px 0;
    text-align: center;    
    color: teal;
    line-height: 1.9rem;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Lilita One', Roboto, sans-serif;
    background-image: linear-gradient(to top, #008080, #00837e, #00867b, #008878, #058b74);      
}
</code></pre></fieldset>
</ul>
`;
return markup;
} 
