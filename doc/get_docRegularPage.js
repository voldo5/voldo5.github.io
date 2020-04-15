function get_docRegularPage() {    
    let markup = `
<h3>Issue. Booklet Regular Page.</h3>
<p>Style the booklet regular page as in Fig.1.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_docRegularPage.jpg" 
class="img-responsive" width="256" height="440">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>
<h5>1. CSS styling.</h5>

<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
/***********************************
     regular page                          
 ***********************************/
#regularPage {
    min-width: 220px; 
    max-width: 100%;
    background-color: #eee;    
    overflow-x: hidden; 
    overflow-y: scroll;
    direction: rtl; 
    text-align: left;
    border: 2px solid  rgb(186, 190, 192); 
    border-radius:5% 91% 70% 12% / 1% 3% 3% 1%;
    box-shadow: inset 25px 0px 25px -25px rgba(73, 73, 73, 0.45); 
}
#regularPage .regular-page-header{
    direction: ltr;
}
#regularPage .regular-page-content{
    direction: ltr;     
}
#regularPage .regular-page-footer{
    direction: ltr;
}
#regularPageCover {    
    flex: 1 0 400px;    
    min-width: 220px;    
    max-width: 700px;    
    background:#eee;
    display: none;
}
#regularPageCover.visible {
    display: block;
}
.regular-page-header {    
    position: -webkit-sticky;
    position: sticky;
    top: 0;      
    height: 3rem;
    background-color: #eee; 
    z-index: 0;
    box-shadow: inset 12px 0px 25px -25px rgba(73, 73, 73, 0.45);
}
.regular-page-footer {    
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;    
    height: 2rem;
    background-color: #eee; 
    z-index: 9999;
    box-shadow: inset 12px 0px 25px -25px rgba(73, 73, 73, 0.45);    
} 
/*    text formatting      */
.regular-page {    
    font-weight: normal;    
}
.regular-page p {
    display: block; 
    max-width: 600px;    
    word-wrap: break-word;    
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 2em;
    margin-inline-end: 1.0em;    
    max-height: 700px; 
    color: #54585A;
}
.regular-page q {
    display: block;   
    max-width: 500px;    
    word-wrap: break-word;    
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 4.5em;
    margin-inline-end: 1.0em;    
    max-height: 700px;   
}
.regular-page p a {
    /* color: dodgerblue; */
    /* color:#00aff0; */
    font-weight: 500;   
}
.regular-page h1,
.regular-page h2,
.regular-page h3,
.regular-page h4,
.regular-page h5,
.regular-page h6 {
    font-family: Georgia, serif;
    font-weight: 600;    
    margin: 0.6rem 0px 0.4rem 0px;
    padding-left: 1.4rem;    
}
.regular-page p,
.regular-page dd {
    line-height: 1.4em; 
    margin: 0;
    padding-left: 1.4rem;
    padding-right: 0.4rem;    
}
.regular-page li {
    line-height: 1.4em; 
    margin: 0;
    padding-left: 0.2rem;
    font-family: Georgia, Roboto, 'Roboto Condensed', 'Bookman Old Style', serif;
    font-weight: 600; 
    font-size: 0.9rem !important;   
} 
.regular-page ul {
    margin-block-start: 0;
    margin-block-end:0.4rem;
    padding-inline-start: 2.5rem;
}
.regular-page a { 
    padding: 0.2rem 1rem 0 0.2rem;       
    text-decoration: none;
    font-family: Georgia, Roboto, 'Roboto Condensed', 'Bookman Old Style', serif;    
    /* font-size: 0.9rem !important;  */
    font-size: 1rem !important; 
    line-height: 1rem;
    font-weight: 600; 
    color: #2b6dad;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}
.regular-page a:hover {
    text-decoration: underline ;   
}
</code></pre></fieldset>
`;
return markup;
}


    