document.addEventListener("DOMContentLoaded", async function () {

    // Platzhalter für den Footer suchen
    const placeholder = document.getElementById("footer-placeholder");

    if (!placeholder) return;

    try {
        // Zentrale Footer-Datei laden
        const response = await fetch("footer.html");

        if (!response.ok) {
            throw new Error("Footer konnte nicht geladen werden");
        }

        // Footer in die Seite einfügen
        placeholder.innerHTML = await response.text();

    } catch (error) {
        console.error("Fehler beim Laden des Footers:", error);
    }

});
