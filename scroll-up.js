document.addEventListener("DOMContentLoaded", function () {

    // Button erstellen, falls er noch nicht existiert
    let button = document.getElementById("backToTop");

    if (!button) {
        button = document.createElement("button");
        button.id = "backToTop";
        button.type = "button";
        button.title = "Nach oben scrollen";
        button.setAttribute("aria-label", "Nach oben scrollen");
        button.textContent = "⬆";

        document.body.appendChild(button);
    }

    // Sichtbarkeit steuern
    function updateButton() {
        button.style.display = window.scrollY > 0
            ? "block"
            : "none";
    }

    window.addEventListener("scroll", updateButton);

    // Nach oben scrollen
    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateButton();

});
