function get_preloader() {    
    let markup = `
<h3>Issue. Preloader.</h3>
<p>Add preloader to web application. We should see the screen as in Fig.1
with spinner while the rest of the page’s content is still loading.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_preloader.jpg" 
class="img-responsive" width="600" height="400">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. Add spinner to html code and set display:none for the table div.</h5>
<fieldset>
    <legend>HTML</legend>
    <div class="legend2">index.html</div>
	<script type="text/plain" class="language-markup">
<body>
	<div class="loader-container">
		<h2>Address Book</h2>
		<h3>Loading ...</h3>
		<div class="loader">			
		</div>
		<h3>'Oh My Contacts Tabelo' is an address book front-end web applications with plain JavaScript.</h3>		
	</div>
    <div class="main-сontainer">
    ...
        <div id="contacts" style="display: none;"></div>
    ...
    </div>
    ...
</body>	
</script>
</fieldset>

<h5>2. Add css to index.html before 'head' tag.</h5>
<fieldset>
<legend>CSS</legend>
<div class="legend2">index.html</div>
<pre><code class="language-css">
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;	  
    color: teal;
    background-color: #eee;
    font-family: Arial, Helvetica, sans-serif;
  }
  .loader {
    border: 8px solid #fdfdfd;	  
    border-radius: 50%;	 
    border-top: 8px solid teal; 	  
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;	  
  }	
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }	
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </code></pre></fieldset>
  <p>The 'loader' class create spinner and the 'loader-container' class put the 
  loader in the center of screen</p>

<h5>3. Stop showing the preloader screen after loading the table.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
...
// append table to container
this.container.appendChild(tableContainerHeader);
this.container.appendChild(this.table);

// stop display the loader - start display the table
document.querySelector('.loader-container').style.display = 'none';
document.querySelector('#contacts').style.display = 'initial';
...
</code></pre></fieldset>
`;
return markup;
}


    