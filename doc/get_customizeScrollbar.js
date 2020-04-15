function get_customizeScrollbar() {    
    let markup = `
<h3>Scrollbar customization</h3>
<h4>Issue. </h4> <p>Customize the appearance of the scrollbar as in the image below.
The scroll bar should be on the left side of the page.</p>
<br> 
<p>Pic.1.</p>
<img src="\\assets\\picsDoc\\doc_scrollbar.jpg" alt="Scrollbar"
class="img-responsive" width="600" height="400"> 
<br><br> 

<h4>Code.</p>
<h5><strong>Keywords: scrollbar, webkit, direction.</strong></h5>

<h5>1. Customize scrollbar.</h5>
<p>Use Webkit. Webkit is the html/css rendering engine used in Google's Chrome browser,
and in Apple's Safari. See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions">
WebKit CSS extensions.</a></p>

<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
#regularPage::-webkit-scrollbar
{    
    width: 14px;
    height: 18px;
}
#regularPage::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.15);    
}
#regularPage::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
}
#regularPage::-webkit-scrollbar-corner {
    background-color: transparent;
}
</code></pre></fieldset>

<h5>2. Move scroll bar to left side of the page.</h5>
<p>Use direction attribute.</a></p>
<fieldset>
<legend>CSS</legend>
<div class="legend2">booklet.css</div>
<pre><code class="language-css">
#regularPage {
    overflow-y: scroll;
    direction: rtl; 
    text-align: left;
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
</code></pre></fieldset>
`;
return markup;
}
    