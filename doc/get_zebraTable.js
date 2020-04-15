function get_zebraTable() {    
    let markup = `   
<h3>Zebra Striped Table</h3>
<h4>Issue. </h4> <p>The table has a one background color for the even rows
and another color for the odd ones. </p>
<h4>Code.</h4>
<h5><strong>Keywords: nth-child</strong></h5>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.table tr:nth-child(odd){    
    background:#F7F7F7; 
}  
.table tr:nth-child(even){    
    background:#ecf0f1; 
}
</code></pre></fieldset>
`;
return markup;
} 
