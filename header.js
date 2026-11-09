document.addEventListener("DOMContentLoaded", async function () {

    // Zentralen Header laden
    const placeholder = document.getElementById("header-placeholder");

    if (!placeholder) return;

    try {
        const response = await fetch("header.html");

        if (!response.ok) {
            throw new Error("Header konnte nicht geladen werden");
        }

        placeholder.innerHTML = await response.text();

        // Burger-Menü
        const menuButton = placeholder.querySelector(".menu-toggle");
        const nav = placeholder.querySelector("#mainNav");

        if (menuButton && nav) {
            menuButton.addEventListener("click", function () {
                const isOpen = nav.classList.toggle("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            });
        }

        // Untermenüs
        placeholder.querySelectorAll("#mainNav .has-submenu > a")
            .forEach(function (link) {

                link.addEventListener("click", function (event) {
                    event.preventDefault();

                    link.parentElement.classList.toggle("open");
                });

            });

    } catch (error) {
        console.error("Fehler beim Laden des Headers:", error);
    }

});
