function get_docHtml() {    
    let markup = `
    <h3>Issue. Create html part of booklet.</h3>
    <p>The Html code has two parts:a) Code for the booklet front page with menu.
    b) Code for the booklet regular page with document text.</p>

    <h4>Code.</p>
    <h5><strong>Keywords: </strong></h5>               
   
<h5>1. Booklet front page.</h5>
    <p>The booklet front page is a div container that contains the page
    with header, content and footer. The content, in turn, contains anchor 
    elements as menu items.</p>
      
<fieldset>
<legend>HTML</legend>
<div class="legend2">index.html</div>
<script type="text/plain" class="language-markup">
<div id='booklet' class="booklet-cover">
	<div id="bookletSpiralBinding" class="spiral-binding"></div>
	<div id="frontPage" class="front-page booklet-closed">
		<div class="front-page-header">
			<div class="front-page-header-text">Documentation</div>					
			<span class="close-button close-booklet">
				<div>&times;</div>
			</span>
		</div>
		<div class='front-page-content'>
			<div class='front-page-title'>Tabelo Project</div>
			<a href="#get_overview">Overview</a>
			<a href="#get_userInterface">Table User Interface</a>
			<a href="#get_docUserInterface">Doc User Interface</a>
			<div class="dropdown-bt">Table Issues and Code
				<i class="fa fa-caret-down"></i>
			</div>
			<div class="dropdown-container">
				<a href="#get_tableOverview">Table Overview</a>
				<a href="#get_tableContext">Table Context</a>
				<a href="#get_tableContainer">Table Class</a>
				<a href="#get_tableContainerHeader">Table Container Header</a>
				...
				<a href="#get_customizeScrollbar">Customize scrollbar</a>											
			</div>
			<div class="dropdown-bt">Doc Issues and Code
				<i class="fa fa-caret-down"></i>
			</div>
			<div class="dropdown-container">
				<a href="#get_docOverview">Overview</a>
				<a href="#get_docHtml">Booklet html code</a>		
				<a href="#get_fieldsetTwoLegend">fieldset - two legends</a>	
				<a href="#get_displaySnippets">Display code snippets</a>												
			</div>
			<div class="dropdown-bt">Index JavaScript
				<i class="fa fa-caret-down"></i>
			</div>
			<div class="dropdown-container">
				<a href="#get_anchorTag">anchor tag</a>
				<a href="#get_arrowFunction">arrow function</a>
				...
				<a href="#get_sort">sort array</a> 
			</div>
			<div class="dropdown-bt">Index CSS
				<i class="fa fa-caret-down"></i>
			</div>
			<div class="dropdown-container">
				<a href="#get_arrowFunction">arrow function</a>	
				<a href="#get_before">::before</a>					
				...
				<a href="#get_zIndex">z-index</a> 
			</div>
			<div class="dropdown-bt">Index HTML
				<i class="fa fa-caret-down"></i>
			</div>
			<div class="dropdown-container">
				<a href="#get_caption">caption</a> 
				<a href="#get_dataAttribute">data attribute</a>
				<a href="#get_innerHTML">innerHTML</a>
			</div>					
		</div>
	    <div class="front-page-footer"></div>
	</div>			
</div>	
</script></fieldset>

<h5>2. Booklet regular page.</h5>
    <p>The booklet regular page is a div container that contains the page
    with header, content and footer. The page filling is dynamic.</p>      
<fieldset>
<legend>HTML</legend>
<div class="legend2">index.html</div>
<script type="text/plain" class="language-markup">
<div id="regularPageCover" class="regular-page-cover">
	<div id="regularPage" class="regular-page">
		<div class="regular-page-header"></div>
		<div class='regular-page-content'></div>
	    <div class="regular-page-footer"></div>
	</div>
</div>
</script></fieldset>
`;
  return markup;
}
    