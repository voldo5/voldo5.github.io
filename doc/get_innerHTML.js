
function get_innerHTML() {    
    let markup = `
<h3>innerHTML</h3>
<p>The innerHTML property is used to get or set the HTML content of an element node.
innerHTML is a property of every element.</p>
<h5><i>document.getElementById(id).innerHTML = another HTML</i></h5>
<h4><u>innerHTML security issues</u>.</h4>
<p>"Safe-ness" of the .innerHTML property is debatable and depends on its use.
It's a security issue if it inserts user-provided values,
but if you use it to insert static data, or something generated without
including any inputs from the user, it's not a security concern.
If you’re adding content to a page that you didn’t write, 
you should sanitize it to protect yourself from XSS attacks.
To best ensure security it is always a good practice to encode
or "sanitize" any user data on a page.
The best way to prevent .innerHTML XSS is with validating
user input or encoding it and using innerText instead of .innerHTML when able.
HTML5 specifies that a script tag inserted with innerHTML should not execute. </p>

<h5>Example. InnerHTML risk. </h5>
<fieldset>
	<legend>HTML</legend>
	<script type="text/plain" class="language-markup">				
    <div id="texter"></div>
    <textarea id="textarea"></textarea>    
    <button onclick="upper()">Go</button>
	</script>	
</fieldset>
<fieldset>
	<legend>JavaScript</legend>
	<script type="text/plain" class="language-markup">				
    function upper(){
        var message = "<p>" + document.getElementById("textarea").value + "</p>";    
        document.getElementById("texter").innerHTML += message;    
    }
	</script>	
</fieldset>
<p>HTML5 specifies that a script tag inserted with innerHTML should not execute.
So next input will not execute.</p>
<fieldset>
<legend>JavaScript</legend>
<script type="text/plain" class="language-markup">
value = '<script>alert("XSS Attack");&lt;/script&gt;';
document.getElementById("texter").innerHTML += value;
</script>
</fieldset>
<p>But still the next input will execute</p>
<fieldset>
<legend>JavaScript</legend>
<script type="text/plain" class="language-markup">
value = '<script deferred>alert("XSS Attack");&lt;/script&gt;';
document.getElementById("texter").innerHTML += value;
</script>
</fieldset>
<p>and next input will execute</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-markup">
value = '&lt;img src=x onerror="alert(\'XSS Attack\')"&gt;';
document.getElementById("texter").innerHTML += value;
</code></pre></fieldset>
<p>So is always a good practice to encode
or "sanitize" any user data on a page.</p>
`;
return markup;
} 
