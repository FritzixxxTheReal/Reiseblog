document.addEventListener("DOMContentLoaded", function () {
		
		        // Hero-Banner: Bilder automatisch wechseln
		        const heroImages = document.querySelectorAll(".hero-image");
		        let currentImageIndex = 0;
		
		        if (heroImages.length > 1) {
		            setInterval(function () {
		
		                // Aktuelles Bild ausblenden
		                heroImages[currentImageIndex].classList.remove("active");
		
		                // Zum nächsten Bild wechseln
		                currentImageIndex++;
		
		                // Nach dem letzten Bild wieder von vorne beginnen
		                if (currentImageIndex >= heroImages.length) {
		                    currentImageIndex = 0;
		                }
		
		                // Neues Bild einblenden
		                heroImages[currentImageIndex].classList.add("active");
		
		            }, 5000);
		        }
		
		    });
