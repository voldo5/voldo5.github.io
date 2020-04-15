function get_displaySnippets() {    
    let markup = `
    <h3>Issue. Style code snippets.</h3>
    <p>Style the code snippets in the documentation as in the following example.</p>
		<fieldset>
			<legend>JavaScript</legend>
			<div class="legend2">Other stuff</div>
			<pre><code class="language-javascript">
function init() {
	// create class instances
	data = new Data();
	booklet = new Booklet();	
	// get contacts
	let contacts = Data.addTestJsonData();
	let height = window.innerHeight - 100 + 'px';
	// set booklet height	
	let frontPage = document.querySelector("#frontPage");	
	frontPage.style.height = height;
	// set booklet regular page height	
	let regularPage = document.querySelector("#regularPage");
	regularPage.style.height = height;	
	// create table class instances 
	table = new Table(contacts, tableContainer);
}
</code></pre>
</fieldset>
<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Document page text formatting.</h5>
<p>The document page is the html markup, so we can format the text
with all resourses of html and css.</p>

<h5>2. Code snippets formatting.</h5>
<p>The problem with formatting a snippet of code is that 
we have to format and highlight the code following the rules of the programming language.
This task is complicated, therefore it is convenient to use js library
<a href="https://prismjs.com/index.html" target="_blank">Prism.</a>
</p>

<h5>2.1. Add Prism to project.</h5>
<p><strong>Step 1.</strong> Download Prism javascript library
<a href="https://prismjs.com/index.html">https://prismjs.com/index.html</a>
with Unescaped Markup and Normalize Whitespace plugins.</p>
<p><strong>Step 2.</strong> Put Prism in the project assets/prism folder.</p>
<p><strong>Step 3.</strong> Add link to prism libraries.</p>
<fieldset>
	<legend>HTML</legend>
	<div class="legend2">index.html</div>
	<script type="text/plain" class="language-markup">				
	<head>
	...
		<link href="/assets/prism/prism.css" rel="preload" as="style"
			onload="this.rel = 'stylesheet'">
	...
	</head>
	<body>
	...
	<skript src="/assets/prism/prism.js"></skript>
	...
	</body>
	</script>	
</fieldset>
<p>See also  
<a href="https://ourcodeworld.com/articles/read/140/top-5-best-code-syntax-highlighter-javascript-plugins">
Top 5 : Best code syntax highlighter javascript plugins.</a></p>

<h5>2.2. How to use Prism for formatting code snippets.</h5>
<p>To display the js code snippet, embrace it
at the next markup</p>
		<fieldset>
			<legend>JavaScript</legend>
			<script type="text/plain" class="language-markup">
				<fieldset>
					<legend>JavaScript</legend>
					<div class="legend2">module.js</div>
					<pre><code class="language-javascript">			
						[ your js code snippet ]
					</code></pre>
				</fieldset>
			 </script>	
		</fieldset>
		<p> or, if your code snippet contains html</p>
		<fieldset>
			<legend>HTML</legend>
			<script type="text/plain" class="language-markup">
				<fieldset>
					<legend>HTML</legend>
					<div class="legend2">module.html</div>
					<script type="text/plain" class="language-markup">			
						[ your code snippet with markup code ]
					<script>
				</fieldset>
			 </script>	
		</fieldset>
		<p> and for css</p>
		<fieldset>
			<legend>HTML</legend>
			<script type="text/plain" class="language-markup">
			<fieldset>
				<legend>CSS</legend>	
				<div class="legend2">module.css</div>		
			        <pre><code class="language-css">		
						<p>[ your css code snippet ]</p>
					</code></pre>
				</fieldset>
			 </script>	
		</fieldset>

<h5>3. Add some styling to higlighted code.</h5>
<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
 <pre><code class="language-css">
.regular-page pre {
	padding: 0;
	margin: 0;
	font-size: 0.8rem;
	font-weight: 800;
	white-space: pre-wrap;
	background: #eee;    
}
.regular-page code {    
	white-space: pre-wrap;
}
fieldset {  
	position: relative;  
    border: 1px rgb(0, 128, 128, 0.75) solid;
    border-bottom: 2px teal solid;
    border-radius: 8px;
    padding:0 1rem;
    margin: 1rem 3rem;    
}
legend, .legend2 {    
    border: 1px rgb(0, 128, 128, 0.75) solid;   
    border-bottom: 2px teal solid;
    border-radius: 4px;
    margin-left: 0rem;
    padding: 0rem 0.4rem;
    color: #b58900;    
    font-size: 0.8rem;
    font-weight: 700;
} 
.legend2 {
    position: absolute;
    top: -0.2em;
    right: 20px;
    background: #eee;
} 
</code></pre>
</fieldset>
    `;
	return markup;
}