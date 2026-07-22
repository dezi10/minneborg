//
// Denne filen inneholder all JavaScript for nettsiden, inkludert tilgjengelighetsfunksjoner, tema, og interaktivitet.
//

// Initialiser EmailJS med public key
emailjs.init('V78SaFZYJYRnB1NWc');

// Kontakt skjema EmailJS-integrasjon
document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			// Send skjema via EmailJS
			emailjs.sendForm('service_p3u90dm', 'template_asjvvwo', form)
				.then(function () {
					alert('Meldingen ble sendt!');
					form.reset();
				}, function (error) {
					alert('Noe gikk galt. Prøv igjen senere.');
					console.error('EmailJS error:', error);
				});
		});
	}
});

// Hamburger-meny toggle
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            var isOpen = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen);
        });
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});