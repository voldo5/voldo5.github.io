function get_anchorTag() {    
    let markup = `
<h3>Anchor Tag</h3>
<p>The anchor tag defines a hyperlink, which is used to link from one page to another.</p>
<fieldset>
	<legend>HTML</legend>
	<script type="text/plain" class="language-markup">				
        <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
	</script>	
</fieldset>
<h5>Call javascript function from anchor tag:</h5>
<fieldset>
	<legend>HTML</legend>
	<script type="text/plain" class="language-markup">				
    <a href="javascript:someFunction()">your text</a>
	</script>	
</fieldset>

<h5>Examples from project:</h5>
<ul>
<li>Call javascript function in ... Issue: <a href="javascript:booklet.navigateRegularPages('get_highlightRow', 'Highlight selected row');">
To do.</a></li>
</ul>
`;
return markup;
} 