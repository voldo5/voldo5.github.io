function get_projectDirectory() {    
    let markup = `
<h3>Issue. Project Directory Structure.</h3>
<h4>Project Directory contains root directory voldo5.github.io
with index.html file and next subforlders:</h4>
<ul>
<li><b>app</b> - folder with the js and css application files. 
Because, we adhere to the class paradigm, so almost each of our JS files
contains some class.</li>
<li><b>elements</b> - folder with the js files of reusable UI elements.</li>
<li><b>doc</b> - folder with the js files of the project documentation.</li>
<li><b>assets</b> - folder with the project assets: app pictures and font-awesome css,
 and prizm css.</li>
</ul>

<img src="\\assets\\picsDoc\\doc_auditLighthouse_small.jpg" 
class="img-responsive" width="600" height="400">
<br> 
<img src="\\assets\\picsDoc\\doc_auditLighthouse_performance.jpg" 
class="img-responsive" width="600" height="400">

<h4>Links.</h4>
<ul>
<li><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Google Lighthouse</a></li>
</ul>
`;
return markup;
}


    