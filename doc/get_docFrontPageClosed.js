function get_docFrontPageClosed() {    
    let markup = `
<h3>Issue. Booklet Front Page Closed.</h3>
<p>Style the booklet front page as in Fig.1.
with 'Close' icon and the contents as menu.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_docBookletFronPageClosed.jpg" 
class="img-fixedsize-small" width="256" height="440">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. CSS styling.</h5>

<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
/***********************************
     front page - booklet closed                            
 ***********************************/
 .front-page.booklet-closed {
    width: 220px;
    border-radius: 0; 
    margin-right: 8px;
    border-top: 2px solid silver;
    background: linear-gradient(#eee,#eee,#eee, #eee);
    box-shadow: 5px 5px 6px 0px rgba(186,182,186,1);    
}
.front-page.booklet-closed .front-page-header,
.front-page.booklet-closed .front-page-footer
{  
    background: #eee;
}
#booklet .booklet-closed .front-page-header-text  {
    color: teal; 
    display: block;    
}
#booklet .booklet-closed .front-page-title{     
    color: teal;
    border-bottom: 2px solid teal; 
    font-weight: 500; 
}
#booklet .front-page.booklet-closed  a,
#booklet .front-page.booklet-closed .dropdown-bt{    
    padding: 0.2rem 0.3rem 0.3rem  0.3rem;
    margin-left: 0.3rem;
    color: teal;
    background: none;
}
#booklet .booklet-closed a:hover,
#booklet .booklet-closed .dropdown-bt:hover{    
    color: deepskyblue;
}
#booklet .booklet-closed .dropdown-bt.active{
    background-color: teal;  
    color: #eee;   
}
#booklet .booklet-closed .dropdown-bt.active:hover{ 
    color: white;
}
#booklet .booklet-closed .dropdown-container { 
    margin-left: 0.3rem; 
    padding-right: 0;
    background: #d1d6d1;
}
#booklet .front-page.booklet-closed a.a-active{ 
    background: #b8beb8;    
    padding: 0.2rem 1rem 0.3rem 0.6rem;
    margin-left: 0; 
    font-weight: 500;
} 
</code></pre></fieldset>

<h5>2. Booklet shadow.</h5>
<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
.front-page.booklet-closed {
    ...
    box-shadow: 5px 5px 6px 0px rgba(186,182,186,1);    
}
</code></pre></fieldset>
<p>It’s convenient to make a shadow with
<a href="https://html-css-js.com/css/generator/box-shadow/" target="_blank">Box-Shadow CSS Generator</a>
</p>
<img src="\\assets\\picsDoc\\doc_boxShadowGenerator.jpg" 
 class="img-responsive" width="600" height="400">
`;
return markup;
}


    