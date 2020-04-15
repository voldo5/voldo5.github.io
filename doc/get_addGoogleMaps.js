
function get_addGoogleMaps() {    
    let markup = `
<h3>Issue. Add Google Maps.</h3>  
<p>Add 'locate' icon(red) to the cells in 'address' column.
If a user click on the icon, then google maps with address location is
displayed in the supplemental Row.</p>     
<img src="\\assets\\picsDoc\\doc_googleMaps.jpg" alt="Google Maps"
class="img-responsive" width="233" height="272">
<br>

<h4>Code.</p>
<h5><strong>Keywords: </strong></h5>

<h5>1. Load the Google Maps JavaScript API to use Google Maps.</h5>
<fieldset>
    <legend>HTML</legend>
    <div class="legend2">index.html</div>
	<script type="text/plain" class="language-markup">				
<!-- google map -->
<script type="text/javascript" async defer
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBv20hgn-XO4eow5hrPJbCTOh3SJ7wYXI">
</script>
</script>
</fieldset>
<p>The key = AIzaSyDBv20hgn-XO4eow5hrPJbCTOh3SJ7wYXI is my google key.
The key can be overused or expired. So, it is the best to get your personal key.
How to get an API key see at
<a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Get an API Key</a></p>

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
        let cssCellClassName = 'googleMaps-map';
        let onClickGoogleMap = \`(function(){	
                            let iRowClickedIndex = event.target.closest('tr').rowIndex;													
                            let iSupplementalRow = table.putImageToSupplementalRow('\${name}', '\${cssCellClassName}', iRowClickedIndex);
                            if(iSupplementalRow > 0) {
                                let cell = table.table.rows[iSupplementalRow].cells[0];
                                let map = table.initializeGoogleMaps('\${lat}', '\${lng}', cell, iSupplementalRow);
                                table.googleMapLoad(map);				
                            }
                            })()\`;
        //...        

        innerHtml = (new td("", []))
            .iconContainer("span", \`tooltip fade shiftGoogle\`, "data-tooltip", "Display Google Maps", onClickGoogleMap)
            .addIcon("googleMapsMarkerIcon fa fa-map-marker")            
            .textContainer('span', 'searchble-txt', cellValue)
            .toHtml();
    }

    return innerHtml;
}
</code></pre></fieldset>

<p>In the listener: the mehod putImageToSupplementalRow() open the supplemental row and
add empty div container to row cell. The method initializeGoogleMaps() get data from google maps
and put them in the div container.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
initializeGoogleMaps(lat, lng, cell, iRowMap) {
    var coord = { lat: Number(lat), lng: Number(lng) };
    var prop = {
        center: new google.maps.LatLng(Number(lat), Number(lng)),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    if (cell.children.length < 1)
        return;

    var container = cell.children[0];

    // remove/add div for map update (otherwise instance error)
    for (let i = 0; i < cell.children[0].children.length; i++) {
        let child = cell.children[0].children[i];
        if (child.classList.contains('googleMaps-map')) {
            container.removeChild(child);
        }
    }

    // div for map display
    var div = document.createElement('div');
    let id = 'googleMaps-map' + String(iRowMap);
    div.id = id;
    div.style.display = 'block';
    div.classList.add('googleMaps-map');
    div.classList.add('item');
    container.appendChild(div);

    let map = new google.maps.Map(div, prop);
    let marker = new google.maps.Marker({ position: coord, map: map });
    return map;
}
</code></pre></fieldset>

<p>We also add method googleMapLoad() to resize map when browser window is resized.</p>
<fieldset>
<legend>JavaScript</legend>
<div class="legend2">table.js</div>
<pre><code class="language-javascript">
googleMapLoad(map) {		
    google.maps.event.trigger(map, 'resize');
}
</code></pre></fieldset>

<fieldset>
    <legend>CSS</legend>
    <div class="legend2">table.css</div>
    <pre><code class="language-css">
    .googleMapsMarkerIcon {
        display:inline; 
        color:red;
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


    