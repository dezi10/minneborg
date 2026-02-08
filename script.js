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
