function get_fonts() {    
    let markup = `
<h3>Fonts</h3>
<p>Fonts used: Roboto, Roboto Slab, Raleway, Lilita One, sans-serif.</p>

<h5 style="font-size: 1rem">Roboto - table data, doc contents, doc text</h5>
<div style="border: 1px solid rgb(0, 128, 128, 0.75);
border-radius: 8px; margin: 8px 12px; padding: 4px 8px 4px 0px">
<p style="font-family: Roboto; color: rgb(0, 128, 128);">Roboto is the default font on Android. This one is great for body text as it lends itself well
to reading at smaller sizes. The look is also very modern and matches up nicely with more minimalist designs.</p>
</div>

<h5 style="font-size: 1rem">Sans-serif - table header</h5>
<div style="border: 1px solid rgb(0, 128, 128, 0.75);
border-radius: 8px; margin: 8px 12px; padding: 4px 8px 4px 0px">
<h4 style="font-family: sans-serif; color: rgb(0, 128, 128);">This is a headline in <span class="stackname">sans-serif</span></h4>
<p style="font-family: sans-serif; color: rgb(0, 128, 128);">Sans-serif looks good on a dark background and goes well with Roboto.</p>
</div>

<h5 style="font-size: 1rem">Roboto Slab - Doc headers, ordered and unordered lists</h5>
<div style="border: 1px solid rgb(0, 128, 128, 0.75);
border-radius: 8px; margin: 8px 12px; padding: 4px 8px 4px 0px">
<h3 style="font-family: Roboto Slab; color: rgb(0, 128, 128);">This is a headline in <span class="stackname">Roboto Slab</span></h3>
<p style="font-family: Roboto Slab; color: rgb(0, 128, 128);">Roboto Slab is a font with a thick bold Roboto.
Roboto Slab can be used alongside the normal Roboto.</p>
</div>

<h5 style="font-size: 1rem">Raleway - footers</h5>
<div style="border: 1px solid rgb(0, 128, 128, 0.75);
border-radius: 8px; margin: 8px 12px; padding: 4px 8px 4px 0px">
<h3 style="font-family: Raleway; color: rgb(0, 128, 128);">This is a headline in <span class="stackname">Raleway</span></h3>
<p style="font-family: Raleway; color: rgb(0, 128, 128);">Raleway has modern, minimalist style and 
really works pretty well for the body text. Goes well with Roboto.</p>
</div>

<h5 style="font-size: 1rem">Lilita One - Table Caption</h5>
<div style="border: 1px solid rgb(0, 128, 128, 0.75);
border-radius: 8px; margin: 8px 12px; padding: 4px 8px 4px 0px">
<h2 style="font-family: 'Lilita One', sans-serif; color: rgb(0, 128, 128);" >
This headline is in <span class="stackname">'Lilita One'</span></h2>
<p style="font-family: 'Lilita One', sans-serif; color: rgb(0, 128, 128);">
Lilita One is a display typeface with a fat look, ideal for headlines and short texts.
With a slightly condensed structure and some eye-catching details,
it adds personal and soft looks to any page. Popular pairings with Lilita One - Roboto, Raleway.</p>
</div>

<h4>Links.</h4>
<ul>
<li><a href="https://www.cssfontstack.com/" target="_blank">A complete collection of web safe CSS font stacks</a></li>
<li><a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>
<li><a href="https://speckyboy.com/most-popular-google-fonts/" target="_blank">10 Most Popular Google Fonts</a></li>
</ul>

</article>
`;
return markup;
}
