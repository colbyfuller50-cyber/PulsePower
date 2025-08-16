
(function(){
  function ready(fn){ if(document.readyState!=='loading'){fn()} else {document.addEventListener('DOMContentLoaded', fn)} }
  ready(function(){
    var mapEl = document.getElementById('map');
    if(!mapEl) return;
    var map = L.map('map').setView([33.95, -81.0], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var chargeIcon = L.icon({
      iconUrl: 'data:image/svg+xml;base64,CjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHZpZXdCb3g9JzAgMCA2NCA2NCc+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB5MT0nMCcgeDI9JzEnIHkyPScxJz4KICAgICAgPHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPScjMEEyQTY2Jy8+CiAgICAgIDxzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nIzE1M0U5OScvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggZD0nTTMyIDRjLTExIDAtMjAgOS0yMCAyMCAwIDE0IDIwIDM0IDIwIDM0czIwLTIwIDIwLTM0QzUyIDEzIDQzIDQgMzIgNHonIGZpbGw9J3VybCgjZyknLz4KICA8cGF0aCBkPSdNMzYgMThsLTEwIDE0aDhsLTIgMTAgMTAtMTZoLThsMi04eicgZmlsbD0nIzVGRDBGRicvPgo8L3N2Zz4K',
      iconSize: [36,36],
      iconAnchor: [18,36],
      popupAnchor: [0,-30]
    });

    var locations = [["USC Columbia (Main Campus)", 34.00071, -81.034814], ["USC Aiken", 33.560417, -81.719048], ["USC Beaufort (Bluffton/Hilton Head)", 32.237146, -80.860388], ["USC Upstate (Spartanburg)", 34.949567, -81.932048], ["USC Lancaster", 34.72043, -80.7709], ["USC Salkehatchie (Allendale)", 33.0079, -81.3084], ["USC Salkehatchie (Walterboro)", 32.905, -80.666], ["USC Sumter", 33.920435, -80.34147], ["USC Union", 34.71542, -81.6237], ["USC School of Medicine Greenville", 34.836, -82.349]];

    locations.forEach(function(item){
      var name = item[0], lat = item[1], lng = item[2];
      L.marker([lat, lng], {icon: chargeIcon})
        .addTo(map)
        .bindPopup('⚡ ' + name + '<br><small>Pulse Power battery station</small>');
    });
  });
})();
