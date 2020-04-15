
function get_scrollbar() {    
    let markup = `
<h3>Custom scrollbar</h3>
<p>Webkit browsers, such as Chrome, Safari and Opera, supports the non-standard ::-webkit-scrollbar pseudo element,
which allows us to modify the look of the browser's scrollbar.</p>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
/* width */
::-webkit-scrollbar {
  width: 20px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
} 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</code></pre></fieldset>

<h5>Examples from project:</h5>
<ul>
<li>Customize scrollbar. Issue:
<a href="javascript:booklet.navigateRegularPages('get_customizeScrollbar', 'Customize scrollbar');">
Scrollbar customization.</a></li>
</ul>
`;
return markup;
} 
