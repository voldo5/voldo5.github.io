function get_docOverview() {    
    let markup = `
    <h3>Issue. Documentation overview.</h3>
    <p>Display documentation as a booklet, side by side with the table.
    The booklet has menu that serves as content of the booklet. When the user
    clicks on a menu item, than the correspondive page of the booklet is opened.
    <img src="\\assets\\picsDoc\\doc_docMenuOpened1.jpg" 
    class="img-responsive" width="180" height="200">

    <h4>Code.</p>
    <h5><strong>Keywords: </strong></h5>               
   
    <h5>1. Source data for the documentation.</h5>
    <p>The source data for the documentation are JavaScript files - one file for 
    one item. See folder 'doc'. For example: the file 'get_hover.js' for documentation page
    <a href="javascript:booklet.navigateRegularPages('get_hover',':hover');">:hover.</a></p>

  <fieldset>
  <legend>JavaScript</legend>
  <div class="legend2">get_hover.js</div>
  <script type="text/plain" class="language-markup">
    function get_hover() {    
      let markup =\`
  <h3>:hover</h3>
  <p>The :hover is CSS pseudo-class. The :hover selector is used to select the element
  when we move the mouse over this element.</p>
  <fieldset>
  <legend>CSS</legend>
  <pre><code class="language-css">
  p:hover, h1:hover, a:hover {
      background-color: yellow;
  }
  </code></pre></fieldset>  
  <h5>Examples from project:</h5>
  <ul>
  <li>Issue:
  <a href="javascript:booklet.navigateRegularPages('get_highlightMouseRow', 'Highlight row under the mouse');">
  Highlight row under the mouse.</a></li>
  </ul>
  <fieldset>
  <legend>CSS</legend>
  <div class="legend2">table.css</div>
  <pre><code class="language-css">
  .table-tr-data:hover {    
      background-color: #d5ebe9 !important;
  }
  </code></pre></fieldset>
  \`;
  return markup;
  }  
</script></fieldset>    
  
<h5>2. Booklet Menu.</h5>
<p>Menu is a html code with css styling and JavaScript handling the events.</p>    
<fieldset>
<legend>HTML</legend>
<div class="legend2">index.html</div>
<script type="text/plain" class="language-markup">
...				
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
  <a href="#get_tableHeader1stRow">Table Header 1st Row</a>
  <a href="#get_tableHeader2ndRow">Table Header 2nd Row</a>
  <a href="#get_tableSort">Table Sort</a>						
  <a href="#get_tableSearch">Table Search</a>
  ...
</script>	
</fieldset>

<h5>3. Booklet JavaScript class.</h5>
<p>Booklet JavaScript class supply the booklet object and contains
methods to handle the operations with documentation.</p>

<h5>4. Booklet CSS file - booklet.css.</h5>
<p>Booklet CSS file contains css code for display documentation.</p>
`;
  return markup;
}
    