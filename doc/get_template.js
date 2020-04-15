function get_template() {    
    let markup = `
<h3>header</h3>
<p>description.</p>
<h5>Examples.</h5>
<ul>
<li>example 1.</a>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
let code;
</code></pre></fieldset>
</li>
</ul>

<h5>Examples from project:</h5>
<ul>
<li>'description'. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>

<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
let code;
</code></pre></fieldset>
</ul>

<fieldset>
	<legend>HTML</legend>
	<div class="legend2">table.js</div>
	<script type="text/plain" class="language-markup">				
        <a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a>
	</script>	
</fieldset>

<img src="\\assets\\picsDoc\\doc_docClosed.jpg" 
 class="img-responsive" width="600" height="400">

`;
return markup;
} 
