function get_audit() {    
    let markup = `
<h3>Issue. Audit the web app.</h3>
<p>Audit the web app performance, quality, and correctness 
by running Google Lighthouse in Chrome DevTools.</p>

<h3>Results.</h3>
<p>Lighthouse runs a barrage of tests against the page,
and then generates a report on how well the page did.
SEO shows how your page is optimized for search engine results ranking.</p>
<h5>Result of running Lighthouse against the 
web app deployed on https://voldo5.github.io/:</h5>
     
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


    