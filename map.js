// var MY_MAPTYPE_ID = 'custom_style';
var coordinates = [
  {
    lat: 52.2360592,
    lng: 21.002903599999968
  },
  {
    lat: 52.2179967,
    lng: 21.222655600000053
  },
  {
    lat: 52.2166692,
    lng: 20.993677599999955
  },
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
  {
    lat: 52.2360592,
    lng: 21.002903599999968
  },
  {
    lat: 52.2179967,
    lng: 21.222655600000053
  },
  {
    lat: 52.2166692,
    lng: 20.993677599999955
  }
];

function initMap() {
  var map = new google.maps.Map(document.getElementById("mapsContainer"), {
    zoom: 1,
    center: { lat: 40, lng: 20 },
    mapTypeId: "terrain"
  });

  var flightPath = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 1
  });

  flightPath.setMap(map);
}
