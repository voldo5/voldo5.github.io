function get_gettingStarting() {
    //let markup = ``;  "language-css"
    let markup = `
    <h3>HTML Ipsum Presents - dynamic</h3>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
        libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.
        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,        
        ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis         tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
    <fieldset>
    <legend>JavaScript</legend>
    <pre><code id="code1" class="language-javascript">
function appendAppScripts(finalCallback) {    
  let scriptUrls = [
    { src:'booklet.js', id:'booklet_js' },
    { src:'columnHeader.js', id:'columnHeader_js' },  
    { src:'contact.js', id:'contact_js' },
    { src:'data.js', id:'data_js' },
    // { src:'doc/doc.js', id:'doc_js' },  overview
    { src:'doc/overview.js', id:'overview_js' },
    { src:'dropdown_filter.js', id:'dropdownfilter_js' },
    { src:'elements/icon.js', id:'icon_js' },
    { src:'elements/iconContainer.js', id:'iconContainer_js' },
    { src:'elements/input.js', id:'input_js' },
    { src:'elements/inputContainer.js', id:'inputContainer_js' },
    { src:'elements/item.js', id:'item_js' },
    { src:'elements/td.js', id:'td_js' },
    { src:'elements/th.js', id:'th_js' },
    { src:'icon_filter.js', id:'icon_filter_js' },
    { src:'formAddContact.js', id:'formAddContact_js' },
    { src:'parser.js', id:'parser_js' },
    { src:'table.js', id:'table_js' }        
  ];    
    loadScripts(scriptUrls, finalCallback);   
}
    </code></pre>
    </fieldset>
    
    <pre><code class="language-css">
        p { color: red }
    </code></pre>    `;

    return markup;
}