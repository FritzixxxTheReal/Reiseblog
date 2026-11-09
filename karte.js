document.addEventListener("DOMContentLoaded", function () {

    // Prüfen, ob auf der Seite eine Karte vorhanden ist
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    // Individuelle Einstellungen aus dem HTML lesen
    const lat = Number(mapElement.dataset.lat);
    const lon = Number(mapElement.dataset.lon);
    const zoom = Number(mapElement.dataset.zoom);
    const gpxDatei = mapElement.dataset.gpx;
    const fitRoute = mapElement.dataset.fitRoute === "true";

    if (typeof L === "undefined" || typeof L.GPX === "undefined") {
        console.error("Leaflet oder Leaflet-GPX wurde nicht geladen.");
        return;
    }

    // 1. Karte mit Vollbildfunktion erstellen
    const map = L.map("map", {
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: "topleft",
            title: "Karte im Vollbild öffnen",
            titleCancel: "Vollbild schließen"
        }
    }).setView([lat, lon], zoom);

    // 2. OpenStreetMap-Hintergrundkarte
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 3. Eigene Marker-Icons
    function createIcon(url, size = 20) {
        return L.icon({
            iconUrl: url,
            iconSize: [size, size],
            iconAnchor: [size / 2, size],
            popupAnchor: [0, -size]
        });
    }

    const wasserIcon = createIcon("img/icon/wasser.png");
    const zeltIcon = createIcon("img/icon/zelt.png");

    // 4. Ebenen erstellen
    const unterkuenfte = L.layerGroup();
    const wasserquellen = L.layerGroup();
    const route = L.layerGroup();

    // 5. Individuelle Marker der Reise hinzufügen
    if (typeof window.reiseMarkerHinzufuegen === "function") {
        window.reiseMarkerHinzufuegen(
            unterkuenfte,
            wasserquellen,
            zeltIcon,
            wasserIcon
        );
    }

    // 6. GPX-Route laden
    if (gpxDatei) {
        const gpxTrack = new L.GPX(gpxDatei, {
            async: true,

            gpx_options: {
                parseElements: ["track"]
            },

            marker_options: {
                startIconUrl: null,
                endIconUrl: null,
                shadowUrl: null
            },

            polyline_options: {
                color: "#0066cc",
                opacity: 0.85,
                weight: 4,
                lineCap: "round"
            }

        }).on("loaded", function (event) {

            if (fitRoute) {
                map.fitBounds(event.target.getBounds());
            }

        }).on("error", function (event) {
            console.error("GPX-Route konnte nicht geladen werden.", event);
        });

        gpxTrack.addTo(route);
    }

    // 7. Ebenen standardmäßig anzeigen
    unterkuenfte.addTo(map);
    wasserquellen.addTo(map);
    route.addTo(map);

    // 8. Ebenenauswahl hinzufügen
    const overlayMaps = {
        "Unterkünfte": unterkuenfte,
        "Wasserquellen": wasserquellen,
        "Route": route
    };

    L.control.layers(null, overlayMaps, {
        collapsed: true,
        position: "topright"
    }).addTo(map);

});
