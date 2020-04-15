function get_transition() {    
    let markup = `
<h3>transition</h3>
<p>CSS transitions allows you to change property values smoothly, over a given duration.
CSS transitions provide a way to control animation speed when changing CSS properties.
Instead of having property changes take effect immediately, you can cause the changes
in a property to take place over a period of time. For example,
if you change the color of an element from white to black, usually the change
is instantaneous. With CSS transitions enabled, changes occur at time intervals
that follow an acceleration curve, all of which can be customized.</p>
<p>CSS transitions let you decide which properties to animate (by listing them explicitly),
when the animation will start (by setting a delay), how long the transition will last
(by setting a duration), and how the transition will run (by defining a timing function,
e.g. linearly or quick at the beginning, slow at the end).</p>
<h5>Examples.</h5>
<ul>
<li>Four-second font size transition with a two-second delay
between the time the user mouses over the element and the beginning of the animation effect:.</a>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
#delay {
    font-size: 14px;
    transition-property: font-size;
    transition-duration: 4s;
    transition-delay: 2s;
}  
#delay:hover {
    font-size: 36px;
}
</code></pre></fieldset>
</li>
</ul>
<h5>Examples from project:</h5>
<ul>
<li>Tooltip. Issue:
<a href="javascript:booklet.navigateRegularPages('get_tableContainerHeader', 'Table Container Header');">
Table Container Header.</a></li>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.tooltip.fade:after, .tooltip.fade:before {
    transform: translate3d(0,-10px,0);
    transition: all 0.1s ease-in-out;
}
</code></pre></fieldset>
</ul>
`;
return markup;
} 
