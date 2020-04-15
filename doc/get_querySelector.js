function get_querySelector() {    
    let markup = `
<h3>querySelector()</h3>
<p>The Document method querySelector(selectors) returns the first element within the document
that matches the specified selector.  The selectors string must be a valid CSS selector string.
querySelectorAll(selectors) returns the all elements that matches the specified selector.</p>
<h5>Examples.</h5>
<ul>
<li>Select the first element in the document with the class x.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let element = document.querySelector(".x");
</code></pre></fieldset>
</li>
<li>Select all elements that have classes x, y, and z.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x.y.z");
</code></pre></fieldset>
</li>
<li>Select all elements that have classes x, y or z.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x, .y, .z");
</code></pre></fieldset>
</li>
<li>Select all elements that have class x but not classes y or z.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x:not(.y):not(.z)");
</code></pre></fieldset>
</li>
</li>
<li>Decendant selector. Select all elements that have class y and are descendants of class x.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x .y");
</code></pre></fieldset>
</li>
</li>
<li>Child selector. Select all elements that have class y and are direct children of class x.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x>.y");
</code></pre></fieldset>
</li>
</li>
<li>Sibling selector - Adjacent sibling. Select all elements that have class y and are directly
after another element with class x.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x+.y");
/* Selects all paragraphs that follow another paragraph */
let ps = document.querySelectorAll("p+p");
/* Selects an unordered list that directly follows the element with ID title */
let ps = document.querySelectorAll("#title + ul");
</code></pre></fieldset>
</li>
</li>
<li>Sibling selector - General  sibling. Select all elements that have class y and doesn't need to
immediately succeed the x, but can appear anywhere after it.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let elements = document.querySelectorAll(".x~.y");
</code></pre></fieldset>
</li>
</ul>

<h5>Examples from project:</h5>
<ul>
<li>'.x .y'. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>

<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
#contacts .table-container-header span:hover {
    color: white;
}
</code></pre></fieldset>
<li>'.x, .y, .z'. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.tooltip:before, .tooltip:after {
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    z-index: 9999;
}
</code></pre></fieldset>
<li>'.x.y.z'. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.tooltip.fade:hover:after {
    opacity: 1;
    transform: translate3d(0,0,0);
    transition-delay: 0.6s;
}
</code></pre></fieldset>
</ul>
`;
return markup;
} 
