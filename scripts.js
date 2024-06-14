document.addEventListener('DOMContentLoaded', function() {
    // Hantera klick på länkar i navigationsmenyn
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Hämta mål-ID från länken
            const targetSection = document.getElementById(targetId); // Hämta mål-sektionen

            // Scrolla till sektionen med mjuk nedscrollning
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Lägg till flash-effekt på bakgrundsfärgen för länken
            this.classList.add('flash');

            // Ta bort flash-effekten efter en viss tidsfördröjning (1 sekund)
            setTimeout(() => {
                this.classList.remove('flash');
            }, 1000);
        });
    });
});