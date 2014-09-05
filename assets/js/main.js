var xhr = require('xhr');

var map = new L.mapbox.Map('map-container', 'grafa.jdib780o');
L.control.locate().addTo(map);

var geojson_layer_options = {
  pointToLayer: L.mapbox.marker.style,
  onEachFeature: function (feature, layer) {
    var html = '<h3>' + feature.properties.title + '</h3>';
    if (feature.properties.description) {
      html += '<p>' + feature.properties.description + '</p>' +
      '<p><a href="'+ feature.properties.web + '">Link</p>';
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
