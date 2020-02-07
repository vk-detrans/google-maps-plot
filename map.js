// var MY_MAPTYPE_ID = 'custom_style';
var coordinates = [
  // MKPZMBE
  { lat: 12.8815123, lng: 77.5164457 },
  {
    lat: 12.8856765,
    lng: 77.516321
  },
  {
    lat: 12.8898744,
    lng: 77.5156266
  },
  {
    lat: 12.8919449,
    lng: 77.5172891
  },
  {
    lat: 12.892333,
    lng: 77.5174521
  },
  {
    lat: 12.892473,
    lng: 77.5214429
  },
  {
    lat: 12.8929444,
    lng: 77.5216037
  },
  {
    lat: 12.8927917,
    lng: 77.5215777
  },
  {
    lat: 12.8927793,
    lng: 77.5216385
  },
  {
    lat: 12.8992655,
    lng: 77.522963
  },
  {
    lat: 12.8927588,
    lng: 77.5296336
  },
  {
    lat: 12.8920253,
    lng: 77.5353011
  },
  {
    lat: 12.8847794,
    lng: 77.5407363
  },
  {
    lat: 12.8815317,
    lng: 77.5433892
  },
  {
    lat: 12.8793976,
    lng: 77.5457359
  },
  {
    lat: 12.8753581,
    lng: 77.5434547
  },
  {
    lat: 12.873141,
    lng: 77.5395008
  },
  {
    lat: 12.8721304,
    lng: 77.539602
  },
  {
    lat: 12.8699463,
    lng: 77.540027
  },
  {
    lat: 12.8694866,
    lng: 77.5399954
  },
  // REYN7QN
  {
    lat: 12.8703533,
    lng: 77.5397192
  },
  {
    lat: 12.8709903,
    lng: 77.5385067
  },
  {
    lat: 12.8752211,
    lng: 77.5414371
  },
  {
    lat: 12.8747259,
    lng: 77.539533
  },
  {
    lat: 12.8750462,
    lng: 77.5365734
  },
  {
    lat: 12.8749433,
    lng: 77.5348676
  },
  {
    lat: 12.8745998,
    lng: 77.5358093
  },
  {
    lat: 12.8758695,
    lng: 77.5346394
  },
  {
    lat: 12.8762326,
    lng: 77.5296806
  },
  {
    lat: 12.8758567,
    lng: 77.5292071
  },
  {
    lat: 12.8771437,
    lng: 77.51863
  },
  {
    lat: 12.8779327,
    lng: 77.5167275
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
