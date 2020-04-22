function get_colors() {    
    let markup = `
<h3>Colors</h3>
<p>The primary color of the project is Teal.
The color scheme of the project uses Green and Grey main palettes 
and one auxilary palette - Blue.</p>

<div class="w3-half w3-section">
  <h5 style="font-size: 1rem">Palette 1 - Green.</h5>
  <div class="w3-container" style="background-color: teal; color: white !important;">
  <p style="color: #eee;">HEX: #008080 (teal)</p>
  </div>
  <div class="w3-container"
  style="background-image: linear-gradient(to top, #008080, #00837e, #00867b, #008878, #058b74); color:#000">
  <p style="color: #eee;">linear-gradient(to top, #008080, #00837e, #00867b, #008878, #058b74)</p>
  </div> 
  <div class="w3-container" style="background-color:#5f9ea0; color:#000">
  <p style="color: #eee;">HEX: #5F9EA0 (cadetblue)</p>
  </div>
  <div class="w3-container" style="background-color:#B8BEB8;color:#000">
  <p>HEX: #B8BEB8</p>
  </div>
  <div class="w3-container" style="background-color:#d1d6d1;color:#000">
  <p>HEX: #D1D6D1</p>
  </div>
  <div class="w3-container" style="background-color:#b6e9e5;color:#000">
  <p>HEX: #B6E9E5</p>
  </div>
  <div class="w3-container" style="background-color:#d5ebe9;color:#000">
  <p>HEX: #D5EBE9</p>
  </div>
  <div class="w3-container" style="background-color:#F7F7F7;color:#000">
  <p>HEX: #F7F7F7</p>
  </div>
  <br>
  <h5 style="font-size: 1rem">Palette 2 - Grey.</h5>
  <div class="w3-container" style="background-color:#202122;color:#000">
  <p style="color: #eee;">HEX: #202122</p>
  </div>
  <div class="w3-container" style="background-color:#54585A;color:#000">
  <p style="color: #eee;">HEX: #54585A</p>
  </div>
  <div class="w3-container"
  style="background: linear-gradient(to right, #8b8b8b 0%, #eee 96%, #dbdbdb 100%); color:#000">
  <p style="color: #eee;">linear-gradient(to right, #8b8b8b 0%, #eee 96%, #dbdbdb 100%); color:#000"</p>
  </div>
  <div class="w3-container" style="background-color:#c0c0c0; color:#000">
  <p>HEX: #C0C0C0 (silver)</p>
  </div>
  <div class="w3-container" style="background-color:#cccccc; color:#000">
  <p>HEX: #CCCCCC</p>
  </div> 
  <div class="w3-container"
  style="background: linear-gradient(to right, #D9D9D9 0%, #dbdbdb 80%, #eee 100%); color:#000">
  <p>linear-gradient(to right, #D9D9D9 0%, #dbdbdb 80%, #eee 100%); color:#000"</p>
  </div>
  <div class="w3-container" style="background: linear-gradient(90deg, rgb(232,229,229,1) 0%,
  rgba(253,254,255,1) 84%, rgb(235, 232, 232) 100%); color:#000">
  <p>linear-gradient(90deg, rgb(232,229,229,1) 0%,
  rgba(253,254,255,1) 84%, rgb(235, 232, 232) 100%); color:#000"</p>
  </div>
  <div class="w3-container" style="background-color:#eeeeee; color:#000;">
  <p>HEX: #EEEEEE</p>   
  </div>
  <div class="w3-container" style="background-color:#ffffff;color:#000">
  <p>HEX: #FFFFFF (white)</p>
  </div>
  <br>
  <h5 style="font-size: 1rem">Auxilary palette - Blue.</h5>
  <div class="w3-container" style="background-color:#0077aa;color:#000">
  <p style="color: #eee;">HEX: #0077AA</p>
  </div>
  <div class="w3-container" style="background-color:#00aff0;;color:#000">
  <p style="color: #eee;">HEX: #00AFF0 (lightblue)</p>
  </div>
  <div class="w3-container" style="background-color:#00bfff;color:#000">
  <p style="color: #eee;">HEX: #00BFFF (deepskyblue)</p>
  </div>
  <div class="w3-container" style="background-color:#add8e6; color:#000">
  <p style="color: #eee;">HEX: #ADD8E6</p>
  </div>  
  <div class="w3-container" style="background-color:#CFD8DC;color:#000">
  <p style="color: #eee;">HEX: #CFD8DC</p>
  </div>
  <div class="w3-container" style="background-color:#ecf0f1; color:#000">
  <p>HEX: #ECF0F1</p>
  </div> 
</div> 

<h4>Links.</h4>
<ul>
<li><a href="https://www.w3schools.com/colors/colors_palettes.asp" target="_blank">Color Palettes</a></li>
<li><a href="https://coolors.co/" target="_blank">Color schemes generator</a></li>
<li><a href="https://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm" target="_blank">Basic color schemes</a></li>
</ul>

</article>
`;
return markup;
}
