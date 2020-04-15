function get_before() {    
    let markup = `
<h3>::before</h3>
<p>In CSS, ::before creates a pseudo-element that is the first
child of the selected element.</p>

<fieldset>
<legend>HTML</legend>
<script type="text/plain" class="language-markup">
<q>Some quotes,</q> he said, <q>are better than none.</q>
</script>	
</fieldset>

<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
q::before { 
    content: "«";    
}  
q::after { 
    content: "»";    
}
</code></pre></fieldset>

<p>Result.</p>
<p>«Some quotes,» he said, «are better than none.»</p>

<h5>Examples from project:</h5>
<ul>
<li>Issue:
<a href="javascript:booklet.navigateRegularPages('get_responsiveTable', 'Responsive Table');">
Responsive Table.</a></li>
</ul>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.table tbody td:before {
    content: attr(data-th);
    font-weight: 700;
    display: inline-block;
    width: 6rem;
    color: teal;
}
</code></pre></fieldset>
`;
return markup;
} 
