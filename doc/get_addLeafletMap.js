function get_addLeafletMap() {    
    let markup = `
<h3>Issue. Add Leaflet API for Open Street Map.</h3>  
<p>Add 'locate' icon(blue) to the cells in 'address' column.
If a user click on the icon, then Open Street Map with address location is
displayed in the supplemental Row.</p>     
<img src="\\assets\\picsDoc\\doc_leafletMap.jpg" alt="Leaflet Open Street Map"
class="img-responsive" width="233" height="272">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Load the Leaflet JavaScript API to use Open Street Map.</h5>
<p>OpenStreetMap is a map of the world that is free to use under an open license.
Leaflet is a open-source JavaScript library for iteraction with OpenStreetMap.</p> 
<fieldset>
    <legend>HTML</legend>
    <div class="legend2">index.html</div>
	<script type="text/plain" class="language-markup">				
<!-- leaflet map -->
<script integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
	src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" crossorigin="" async defer>
</script>	
</script>
</fieldset>
<p>See at
<a href="https://leafletjs.com/" target="_blank">Leaflet JavaScript library.</a></p>

<h5>2. Add map to the supplemental row: add icon to the 'address' cell,
add the onclick function to insert the map in the supplemental row.</h5>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
PopulateTable() {		
    //....
    else if (this.tableHeaderContext.cellContexts[i].name === "address") {  // address 		
        cell.innerHTML = this.getInnerHtmlForCellAddress(cellValue, item);
    }
    //....
}

getInnerHtmlForCellAddress(cellValue, item) {

    let innerHtml = "";
    cellValue = this.getAddress(item);
    if (cellValue != null && String(cellValue) !== ' ') {
        //todo default geo
        let mapMarkerText = "";
        let lat = 0;
        let lng = 0;
        if ("geo" in item.address) {
            lat = item.address.geo.lat;
            lng = item.address.geo.lng;
            mapMarkerText = item.address.street + ', '
                + item.address.city + ', '
                + item.address.zipcode;
        }

        let name = 'map';
        //...
        cssCellClassName = 'osm-map';
        let onClickOpenStreetMap = \`(function(){	
                                let iRowClickedIndex = event.target.closest('tr').rowIndex;													
                                let iSupplementalRow = table.putImageToSupplementalRow('\${name}', '\${cssCellClassName}', iRowClickedIndex);
                                if(iSupplementalRow > 0) {
                                    let cell = table.table.rows[iSupplementalRow].cells[0];
                                    table.openStreetMapLoad('\${lat}', '\${lng}', '\${mapMarkerText}', cell, iSupplementalRow);														
                                }
                                })()\`;
        //...        

        innerHtml = (new td("", []))
            .iconContainer("span", \`tooltip fade shiftOsm\`, "data-tooltip", "Display OpenStreet Map", onClickOpenStreetMap)
            .addIcon("openStreetMapMarkerIcon fa fa-map-marker")          
            .textContainer('span', 'searchble-txt', cellValue)
            .toHtml();
    }

    return innerHtml;
}
</code></pre></fieldset>

<p>In the listener: the mehod putImageToSupplementalRow() open the supplemental row and
add empty div container to row cell. The method openStreetMapLoad() get data from ops map
and put them in the div container.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
openStreetMapLoad(lat, lng, mapMarkerText, cell, iRowMap) {
    if (cell.children.length < 1)
        return;

    var container = cell.children[0];

    // remove-add div for map update (otherwise map instance error)
    for (let i = 0; i < cell.children[0].children.length; i++) {
        let child = cell.children[0].children[i];
        if (child.classList.contains('osm-map')) {
            container.removeChild(child);
        }
    }

    // div for map display
    var div = document.createElement('div');
    let id = 'osm-map' + String(iRowMap);
    div.id = id;
    div.style.display = 'block';
    div.classList.add('osm-map');
    div.classList.add('item');
    container.appendChild(div);

    var map = L.map(id).setView([lat, lng], 17);

    // add an OpenStreetMap tile layer  
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // add a marker and bindPopup('some information')
    L.marker([lat, lng]).addTo(map).bindPopup(mapMarkerText).openPopup();
}
</code></pre></fieldset>

<fieldset>
    <legend>CSS</legend>
    <div class="legend2">table.css</div>
    <pre><code class="language-css">
    .openStreetMapMarkerIcon { 
        display:inline;  
        color:#00aff0;
        font-size: 1.0rem;
        font-weight: bold;
        cursor: pointer; 
        margin: 0 0.4rem 0 0rem; 
    } 
 </code></pre>
</fieldset>
`;
return markup;
}


    