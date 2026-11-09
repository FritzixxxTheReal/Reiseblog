window.reiseMarkerHinzufuegen = function (
    unterkuenfte,
    wasserquellen,
    zeltIcon,
    wasserIcon
) {
    // Unterkünfte zur Gruppe hinzufügen
				L.marker([54.9743565, 8.6734505], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup('<b>Digevejens shelter</b><br>Buchbar über <a href="https://bookenshelter.dk/vadehavet/shelterplads/digevejen-shelter/" target="_blank">bookenshelter.dk</a><br>Preis: ca. 4 €');
				L.marker([55.5984, 8.2883], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Zeltplatz im Wald</b><br>Sauberer kleiner Zeltplatz mit Picknicktisch<br>Wasser an der Straße erhätlich");
				L.marker([56.1430, 8.1765], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter und Zeltwiese am See</b><br>Direkt an einem kleinen Hafen am See<br>Mit sauberer Toilette");
				L.marker([56.8447, 8.3638], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter im Ort</b><br>Toilette und Wasser an Tankstelle 50m weiter nutzbar, Strom vorhanden<br>Mit Parkbänken und kleinem Teich");
				L.marker([57.1334, 9.1294], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter am Spielplatz</b><br>Saubere Toilette und Strom vor Ort<br>Mit Hütte für Feiern, Spielplatz mit kleinem Parkour");
				L.marker([57.5409, 9.9148], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>4 Shelter und Zeltwiese</b><br>Toilettenhäuschen mit Trinkwasserhahn über Trampelpfad erreichbar<br>Sehr nette Betreiber");
				L.marker([57.5442, 10.4384], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter am Strand</b><br>Zwei Shelter, Wiese mit Platz für Zelt<br>Toilettenhäuschen mit Trinkwasserhahn und Außendusche");
				L.marker([57.3379, 10.2361], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter mit Strom</b><br>Strom in kleinen Schließfächern<br>Bankkarte zur Nutzung erforderlich, aber kostenlos");
				L.marker([57.2943, 10.2025], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter bei Pfadfindern</b><br>am Rand des Platzes der Pfadfinder<br>Nachmittags/abends Pfadfindertreffen vor Ort, Toilette im Haupthaus");
				L.marker([57.1508, 10.2702], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Shelter im Unterholz</b><br>Zwei Shelter über Trampelpfad erreichbar<br>Toilette und Trinkwasser bei Kiosk in der Nähe");
				L.marker([56.6902, 9.7450], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Zwei Shelter</b><br>An einem kleinen Spielplatz; mit Toilettenhäuschen<br>Wasser bei Bedarf am Friedhof 300m weiter erhältlich");
				L.marker([53.6987, 7.8050], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Campingplatz Boyungs</b><br>Günstiger und sauberer Campingplatz<br>Sehr nette Betreiber");
				L.marker([53.4502, 8.1178], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Campingplatz Rennweide Dangast</b><br>Günstiger und sauberer Campingplatz<br>Sehr schöne Aussicht auf den Jadebusen");
				L.marker([53.5975, 8.3567], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Campingplatz Fischerdorf</b><br>Günstiger und sauberer Campingplatz");
				L.marker([53.7657, 8.5446], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Campingplatz Cappel Neufeld</b><br>Günstiger und sauberer Campingplatz<br>Aufenthaltsraum und Küche für Zeltende");
				L.marker([53.6250, 9.2029], { icon: zeltIcon })
					.addTo(unterkuenfte)
					.bindPopup("<b>Freizeit-und Campingpark Geesthof</b><br>Günstiger und sauberer Campingplatz<br>Sehr familienfreundlich");
				
				// Wasserquellen zur Gruppe hinzufügen
				L.marker([51.94, 4.50], { icon: wasserIcon })
					.addTo(wasserquellen)
				 	.bindPopup("<b>Wasserquelle</b>");
};
