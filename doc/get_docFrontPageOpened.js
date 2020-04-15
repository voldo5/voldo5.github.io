function get_docFrontPageOpened() {    
    let markup = `
<h3>Issue. Booklet Front Page Opened.</h3>
<p>Style the booklet front page as in Fig.1.
with 'Close' icon and the contents as menu.</p>
<h5>Fig.1</h5>        
<img src="\\assets\\picsDoc\\doc_docBookletFronPageOpened.jpg" 
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
     front page - booklet opened                           
 ***********************************/
.front-page {
    height: 100%;
    width: 220px;    
    background: linear-gradient(90deg, rgba(232,229,229,1) 0%,
     rgba(253,254,255,1) 84%, rgba(222,223,224,1) 100%);
    overflow-x: hidden;
    overflow-y:scroll;
    border: 2px solid  rgb(186, 190, 192);      
    border-radius:75% 14% 13% 76% / 2% 1% 1% 2%; 
  }
.front-page-header {
    display:flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;   
    position: -webkit-sticky;
    position: sticky;
    top: 0;    
    height: 3rem;    
    z-index: 9999; 
    padding: 0.7rem 0.1rem 0.6rem 0.2rem;  
    background: linear-gradient(90deg, rgb(232,229,229,1) 0%,
    rgba(253,254,255,1) 84%, rgb(235, 232, 232) 100%);
}
.front-page-footer {    
    position: -webkit-sticky;
    position: sticky;    
    bottom: 0;    
    height: 2rem;   
    z-index: 9999;    
    border: 0px solid grey;
    background: linear-gradient(90deg, rgb(232,229,229,1) 0%,
    rgba(253,254,255,1) 84%, rgb(235, 232, 232) 100%);
}
#booklet .dropdown-bt.active{  
    background: linear-gradient(to right, #8b8b8b 0%, #eee 96%, #dbdbdb 100%);  
    color: 	rgb(245, 245, 245);
}

/***********************************
    text formatting                         
 ***********************************/
#booklet {
    text-align: left;    
}
#booklet .front-page-header-text{    
    padding-left: 1rem;
    margin:0;
    line-height: 1.9rem;    
    font-size: 0.9rem; 
    font-family: 'Bookman Old Style', Georgia, Roboto, 'Lilita One', Raleway,'Abril Fatface', sans-serif;
    font-weight: 700;                 
    color: #54585A;
    z-index: 2;  
    display: none;   
} 
#booklet .front-page-title {    
    border-bottom: 1px solid #54585A;
    margin: 0 1rem 1rem 1rem;
    padding: 0; 
    font-family: Roboto, Georgia, 'Bookman Old Style', serif;
    font-size: 1.2rem;
    font-weight: 500;    
    color: #54585A; 
    text-align: center;   
}
#booklet .front-page a,
#booklet .dropdown-bt {    
    /* padding: 0.2rem 1rem 0.3rem 1.6rem;   */
    padding: 0.2rem 0.3rem 0.3rem 1.6rem;     
    text-decoration: none;
    font-family: Roboto, 'Roboto Condensed', Georgia, 'Bookman Old Style', serif;   
    font-size: 0.9rem !important; 
    line-height: 1rem;  
    font-weight: 500;    
    color: #54585A;    
    display: block;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}
#booklet .front-page a{
    word-wrap: break-word;    
}
#booklet .front-page a:hover,
#booklet .dropdown-bt:hover {
    color: rgb(32, 33, 34);
}
#booklet .dropdown-bt.active:hover{ 
    color: white;
}
#booklet .dropdown-container {
    display: none;  
    background: linear-gradient(to right, #D9D9D9 0%, #dbdbdb 80%, #eee 100%);    
} 
#booklet .dropdown-container a {
    padding-left: 32px;
}
#booklet .front-page a.a-active{ 
    background: linear-gradient(to right, #C0C0C0 0%, #dbdbdb 90%, #eee 100%);   
}
#booklet .dropdown-container a:last-child {   
    padding-bottom: 4px;
} 
</code></pre></fieldset>

<h5>2. Booklet border.</h5>
<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
.front-page {
    ...
    border: 2px solid  rgb(186, 190, 192);      
    border-radius:75% 14% 13% 76% / 2% 1% 1% 2%; 
  }
</code></pre></fieldset>
<p>It’s convenient to make a fancy border with
<a href="https://9elements.github.io/fancy-border-radius/" target="_blank">Fancy-Border-Radius</a>
</p>
<img src="\\assets\\picsDoc\\doc_fancy-border-radiusGenerator.jpg" 
 class="img-responsive" width="600" height="400">
`;
return markup;
}


    