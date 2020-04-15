
function get_proxy() {
    //let markup = ``;
let markup = `
<h3>proxy</h3>
<p>Proxy is an object in javascript which wraps an object or a function
and monitors it via something called target. Proxies enable you to intercept
and customize operations performed on objects.</p>
<fieldset>
<legend>JavaScript</legend>
<pre><code class="language-javascript">
let proxied = new Proxy(target, handler);
</code></pre>
</fieldset>
<p><strong>target</strong> - The target object, actions on <strong>this</strong> object 
 (getting, setting, etc...) will be routed trough the handler.</p>
 <p><strong>handler</strong> -  An object that can define "traps" for intercepting 
 actions on the target object (getting, setting, etc...).</p>  
<h5>Examples from project:</h5> 
<ul>
<li>Proxy variable iSelectedRow. Issue: <a href="javascript:booklet.navigateRegularPages('get_activateIcon', 'Activate Edit Icon');">
Activate Edit icon.</a></li>
</ul>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
class Table {
constructor() {		
	this.defaultSelectedRow = { row: -1 };
	this.iSelectedRow = new Proxy(this.defaultSelectedRow, this.activateIcon);
  }
</code></pre>
</fieldset>
`;  
return markup;
}

