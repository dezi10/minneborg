//
// Denne filen inneholder all JavaScript for nettsiden, inkludert tilgjengelighetsfunksjoner, tema, og interaktivitet.
//


// Kontakt skjema EmailJS-integrasjon
document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			// Sett inn dine EmailJS parametre her:
			emailjs.sendForm('service_xxxxx', 'template_xxxxx', form)
				.then(function () {
					alert('Meldingen ble sendt!');
					form.reset();
				}, function (error) {
					alert('Noe gikk galt. Prøv igjen senere.');
				});
		});
	}
});
