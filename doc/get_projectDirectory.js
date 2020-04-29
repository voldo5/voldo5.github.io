function get_projectDirectory() {    
    let markup = `
<h3>Issue. Project Directory Structure.</h3>
<p>Project Directory contains <b>root directory voldo5.github.io</b>
<br/>with index.html file and next subforlders:</p>
<ul>
<li><b>app</b></li>
<p>Folder with the js and css application files. 
Because, we adhere to the class paradigm, so almost each of our JS files
contains some class.</p>
<li>elements</li>
<p>Folder with the js files of reusable UI elements.</p>
<li>doc</li>
<p>Folder with the js files of the project documentation.</p>
<li>assets</li>
<p>Folder with the project assets: app pictures and font-awesome css,
 and prizm css.</p>
</ul>
<img src="\\assets\\picsDoc\\doc_projectDirectory.jpg" 
class="img-responsive" width="600" height="400">
`;
return markup;
}


    