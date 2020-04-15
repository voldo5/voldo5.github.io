function get_flex() {    
    let markup = `
<h3>CSS flexbox layout</h3>
<p>CSS Flexible Box Layout - the children of a flex container can be laid out
in any direction, and can “flex” their sizes, either growing to fill unused space
or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment
of the children can be easily manipulated.</p>
<h5>Typical use cases of Flexbox</h5>
<ul>
<li>Horizontal bar - <u>Space distributed outside the items</u>.
Display the items at their natural size and by using justify-content:
space-between make equal amounts of space between the items.       
<img src="\\assets\\picsDoc\\doc_flex1.jpg"
class="img-responsive" width="600" height="400">
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
nav ul {
    display: flex;
    justify-content: space-between;
}
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
    <script type="text/plain" class="language-markup">
    <nav>
        <ul>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3 is longer</a></li>
            <li><a href="#">Page 4</a></li>
        </ul>
    </nav>			
	</script>	
</fieldset>
</li>

<li>Horizontal bar - <u>Space distributed within the items</u>.
Distribute the available space within the items themselves,
rather than create space between them. In this case we would
use the flex properties to allow items to grow and shrink in
proportion to one another.      
<img src="\\assets\\picsDoc\\doc_flex2.jpg"
class="img-responsive" width="600" height="400">
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
nav ul {
    display: flex;
  }  
  nav li {
    flex: auto ;
  }
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
    <script type="text/plain" class="language-markup">
    <nav>
        <ul>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3 is longer</a></li>
            <li><a href="#">Page 4</a></li>
        </ul>
    </nav>		
	</script>	
</fieldset>
</li>

<li>Horizontal bar - <u>Split navigation</u>.
One group of items are aligned left and another group aligned right.      
<img src="\\assets\\picsDoc\\doc_flex3.jpg"
class="img-responsive" width="600" height="400">
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
nav ul {
    display: flex;
    margin: 0 -10px;
  }
  nav li {
      margin: 0 10px;
  }
  .push-right {
    margin-left: auto;
  }
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
    <script type="text/plain" class="language-markup">
    <nav>
        <ul>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3 is longer</a></li>
            <li class="push-right"><a href="#">Page 4</a></li>
        </ul>
    </nav>		
	</script>	
</fieldset>
</li>

<li><u>Center item</u>.
<img src="\\assets\\picsDoc\\doc_flex4.jpg"
class="img-responsive" width="600" height="400">
<br>
You can play with the alignment, aligning the item to the start with flex-start or end with flex-end.      
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.box {
    display: flex;
    align-items: center;
    justify-content: center;
  }  
.box div {
    width: 100px;
    height: 100px;
  }
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
    <script type="text/plain" class="language-markup">
    <div class="box">
        <div></div>
    </div>
	</script>	
</fieldset>
</li>

<li><u>Card layout pushing footer down</u>.   
<img src="\\assets\\picsDoc\\doc_flex5.jpg"
class="img-responsive" width="600" height="400">
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.card {
    display: flex;
    flex-direction: column;
}
.card .content {
    flex: 1 1 auto;
}
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
<script type="text/plain" class="language-markup">
<div class="cards">
    <div class="card">
        <div class="content">
            <p>This card doesn't have much content.</p>
        </div>
        <footer>Card footer</footer>
    </div>
    <div class="card">
        <div class="content">
            <p>This card has a lot more content which means that it defines
             the height of the container the cards are in. I've laid the cards out 
             using grid layout, so the cards themselves will stretch to the same height.</p>
        </div>
        <footer>Card footer</footer>
    </div>
</div>
</script>	
</fieldset>
</li>

<li><u>Image or other element to one side and text to the right.</u>.   
<img src="\\assets\\picsDoc\\doc_flex6.jpg"
class="img-responsive" width="600" height="400">
To prevent the image growing too large, add a max-width to the image.
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.media {
    display: flex;
    align-items: flex-start;
}
.media .content {
    flex: 1;
    padding: 10px;
}
.image img {
    max-width: 100px;
  }
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
<script type="text/plain" class="language-markup">
<div class="media">
  <div class="image"><img src="https://placehold.it/60x60" alt="placeholder"></div>
    <div class="content">This is the content of my media object.
    Items directly inside the flex container will be aligned to flex-start.</div>
</div>
</script>	
</fieldset>
Controlling ratios of flex items along the main axis.
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.media .content {
    flex: 3;
    padding: 10px;
  }  
  .image {
    flex: 1;
  }
</code></pre></fieldset>
</li>

<li><u>Form controls</u>.
I have contained my button and input field in a wrapper which
I have given a border and set to display: flex. I then use the flex
properties to allow the input field to grow, while the button does 
not grow. This means we have a pair of fields, with the text field
growing and shrinking as the available space changes.   
<img src="\\assets\\picsDoc\\doc_flex7.jpg"
class="img-responsive" width="600" height="400">
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.wrapper {
    display: flex;
}  
.wrapper input[type="text"] {
      flex: 1 1 auto;
}
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
<script type="text/plain" class="language-markup">
<form class="example">
    <div class="wrapper">
        <input type="text" id="text">
        <input type="submit" value="Send">
    </div>
</form>
</script>	
</fieldset>
You could add a label or icon to the left
<img src="\\assets\\picsDoc\\doc_flex7.1.jpg"
class="img-responsive" width="600" height="400">
<br>
<fieldset>
<legend>CSS</legend>
<pre><code class="language-css">
.wrapper {
    display: flex;  
}  
.wrapper input[type="text"] {
    flex: 1 1 auto;
}
</code></pre></fieldset>
<fieldset>
<legend>HTML</legend>
<script type="text/plain" class="language-markup">
<form class="example">
    <div class="wrapper">
        <label for="text">Label</label>
        <input type="text" id="text">
        <input type="submit" value="Send"></div>
</form>
</script>	
</fieldset>
</li>
</ul>

<h5>Examples from project:</h5> 
<ul>
<li>Icons flex container.
Issue: <a href="javascript:booklet.navigateRegularPages('get_tableHeader2ndRow', 'able Header 2nd Row');">
Table Header 2nd Row.</a></li> 
</ul>
<fieldset>
<legend>CSS</legend>
<div class="legend2">table.css</div>
<pre><code class="language-css">
.icon-flex-container {
    display: flex;
    width: 100%;
    min-height: 44px;
    align-items: center;
    text-align: center;
}
</code></pre>
</fieldset>
`;
return markup;
} 