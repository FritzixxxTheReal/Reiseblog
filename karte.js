document.addEventListener("DOMContentLoaded", function () {

    // Prüfen, ob auf der Seite eine Karte existiert
    const mapElement = document.getElementById("map");

    if (!mapElement) return;

    // Individuelle Karteneinstellungen aus HTML lesen
    const lat = Number(mapElement.dataset.lat);
    const lon = Number(mapElement.dataset.lon);
    const zoom = Number(mapElement.dataset.zoom);

    // Leaflet-Karte erstellen
    const map = L.map("map").setView([lat, lon], zoom);

    // OpenStreetMap-Hintergrundkarte
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: '&copy; OpenStreetMap-Mitwirkende',
            maxZoom: 19
        }
    ).addTo(map);

});
