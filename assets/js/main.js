var xhr = require('xhr');

var map = new L.mapbox.Map('map-container', 'jcsanford.j25ef8lg');
L.control.locate().addTo(map);

var geojson_layer = new L.GeoJSON(null).addTo(map);

xhr_options = {
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
