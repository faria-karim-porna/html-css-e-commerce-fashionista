// Initialize and add the map
function initMap() {
  // The location of Uluru
  const dhaka = { lat: 23.8103, lng: 90.399452 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 4,
    center: dhaka,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: dhaka,
    map: map,
  });
}

window.initMap = initMap;
