document.addEventListener("DOMContentLoaded", function () {

    // Alle Bildergalerien der Seite finden
    const galerien = document.querySelectorAll(".bildgalerie");

    if (galerien.length === 0) return;

    // Eine gemeinsame Lightbox für die gesamte Seite erstellen
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.id = "lightbox";
    lightbox.setAttribute("aria-hidden", "true");

    lightbox.innerHTML = `
        <button class="lightbox-close" type="button"
            aria-label="Schließen">&times;</button>
        <button class="lightbox-prev" type="button"
            aria-label="Vorheriges Bild">&#10094;</button>
        <img class="lightbox-img" id="lightboxImg" src="" alt="">
        <button class="lightbox-next" type="button"
            aria-label="Nächstes Bild">&#10095;</button>
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const prevButton = lightbox.querySelector(".lightbox-prev");
    const nextButton = lightbox.querySelector(".lightbox-next");

    let aktuelleBilder = [];
    let currentIndex = 0;

    // Bild in der Lightbox anzeigen
    function showImage() {
        const image = aktuelleBilder[currentIndex];

        lightboxImg.src = image.dataset.full || image.src;
        lightboxImg.alt = image.alt;
    }

    // Lightbox öffnen
    function openLightbox(bilder, index) {
        aktuelleBilder = bilder;
        currentIndex = index;

        showImage();

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
    }

    // Lightbox schließen
    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImg.src = "";
    }

    // Vorheriges Bild
    function showPrev() {
        if (aktuelleBilder.length === 0) return;

        currentIndex =
            (currentIndex - 1 + aktuelleBilder.length) %
            aktuelleBilder.length;

        showImage();
    }

    // Nächstes Bild
    function showNext() {
        if (aktuelleBilder.length === 0) return;

        currentIndex =
            (currentIndex + 1) % aktuelleBilder.length;

        showImage();
    }

    // Jede Bildergalerie einzeln vorbereiten
    galerien.forEach(function (galerie) {

        const bilder = Array.from(galerie.querySelectorAll("img"));
        const galerieMehr = galerie.querySelector(".galerie-mehr");

        // Anzahl zusätzlicher Bilder anzeigen
        if (galerieMehr) {
            const versteckteBilder = Math.max(0, bilder.length - 2);

            if (versteckteBilder > 0) {
                galerieMehr.setAttribute(
                    "data-count",
                    "+" + versteckteBilder
                );
            } else {
                galerieMehr.classList.remove("galerie-mehr");
            }
        }

        // Bilder anklickbar machen
        bilder.forEach(function (image, index) {
            image.addEventListener("click", function () {
                openLightbox(bilder, index);
            });
        });

    });

    // Buttons
    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", showPrev);
    nextButton.addEventListener("click", showNext);

    // Klick auf Hintergrund
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Tastatursteuerung
    document.addEventListener("keydown", function (event) {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft") showPrev();
        if (event.key === "ArrowRight") showNext();
    });

});
