var xhr = require('xhr');

var map = new L.mapbox.Map('map-container', 'grafa.jdib780o', {
        // remove the 'i'
        infoControl: false,
        // create a new attribution control
        attributionControl: true
    });

L.control.locate().addTo(map);

// Credit Foursquare for their wonderful data
map.attributionControl
    .addAttribution('Credits: <a href="https://github.com/JasonSanford/foss4g-map">Jason Sanford</a>');

var geojson_layer_options = {
  pointToLayer: L.mapbox.marker.style,
  onEachFeature: function (feature, layer) {
    var html = '';
    if (feature.properties.web) {
      html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
    } else {
      html += '<h3>' + feature.properties.title + '</h3>';
    }
    if (feature.properties.description) {
      html += '<p>' + feature.properties.description + '</p>';
    }
    if (feature.properties.address) {
      html += '<p>'+ feature.properties.address + '</p>';
    }
    html += '<div class="put"></div>';
    layer.bindPopup(html);
  }
};
var geojson_layer = new L.GeoJSON(null, geojson_layer_options);
geojson_layer.addTo(map);

var xhr_options = {
  uri:    'things.geojson',
  json:   true,
  method: 'get'
};
function callback(error, resp, geojson) {
  if (error) {
    console.log(error);
    return;
  }
  geojson_layer.addData(geojson);
}

xhr(xhr_options, callback);

module.exports = {
  map: map
};
