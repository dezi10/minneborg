//
// Denne filen inneholder all JavaScript for nettsiden, inkludert tilgjengelighetsfunksjoner, tema, og interaktivitet.
//

// Initialiser EmailJS med public key – bare på kontaktsiden
if (typeof emailjs !== 'undefined') {
	emailjs.init('V78SaFZYJYRnB1NWc');
}

// ===== TILGJENGELIGHETSMODUS =====
function initAccessibilityMode() {
	// Tekststørrelse
	const textSizeIncrease = localStorage.getItem('textSizeIncrease') || '100';
	const boldText = localStorage.getItem('boldText') === 'true';
	const hackerMode = localStorage.getItem('hackerMode') === 'true';

	applyTextSize(parseInt(textSizeIncrease));
	if (boldText) applyBoldText();
	if (hackerMode) applyHackerMode();
}

function applyTextSize(percentage) {
	// Zoom kun main-innholdet, ikke header
	const main = document.querySelector('main');
	if (main) {
		main.style.zoom = (percentage / 100);
	}
	localStorage.setItem('textSizeIncrease', percentage);
}

function increaseTextSize() {
	let current = parseInt(localStorage.getItem('textSizeIncrease') || '100');
	if (current < 200) {
		current += 25;
		applyTextSize(current);
		updateTextSizeButton();
	}
}

function decreaseTextSize() {
	let current = parseInt(localStorage.getItem('textSizeIncrease') || '100');
	if (current > 75) {
		current -= 25;
		applyTextSize(current);
		updateTextSizeButton();
	}
}

function updateTextSizeButton() {
	const current = parseInt(localStorage.getItem('textSizeIncrease') || '100');
	const textSizeBtn = document.getElementById('text-size-value');
	if (textSizeBtn) {
		textSizeBtn.textContent = current + '%';
	}
}

function applyBoldText() {
	document.body.style.fontWeight = '600';
	localStorage.setItem('boldText', 'true');
	updateBoldButton();
}

function removeBoldText() {
	document.body.style.fontWeight = '400';
	localStorage.setItem('boldText', 'false');
	updateBoldButton();
}

function toggleBoldText() {
	const isBold = localStorage.getItem('boldText') === 'true';
	if (isBold) {
		removeBoldText();
	} else {
		applyBoldText();
	}
}

function updateBoldButton() {
	const boldBtn = document.getElementById('bold-text-btn');
	if (boldBtn) {
		const isBold = localStorage.getItem('boldText') === 'true';
		boldBtn.classList.toggle('active', isBold);
	}
}

// ===== HACKER-MODUS (NATTMODUS) =====
function applyHackerMode() {
	document.documentElement.setAttribute('data-theme', 'hacker');
	localStorage.setItem('hackerMode', 'true');
	updateHackerModeButton();
}

function removeHackerMode() {
	document.documentElement.removeAttribute('data-theme');
	localStorage.setItem('hackerMode', 'false');
	updateHackerModeButton();
}

function toggleHackerMode() {
	const isHacker = localStorage.getItem('hackerMode') === 'true';
	if (isHacker) {
		removeHackerMode();
	} else {
		applyHackerMode();
	}
}

function updateHackerModeButton() {
	const hackerBtn = document.getElementById('hacker-mode-btn');
	if (hackerBtn) {
		const isHacker = localStorage.getItem('hackerMode') === 'true';
		hackerBtn.classList.toggle('active', isHacker);
	}
}

// Kontakt skjema EmailJS-integrasjon
document.addEventListener('DOMContentLoaded', function () {
	// Initialiser tilgjengelighetsmodus
	initAccessibilityMode();

	var form = document.getElementById('contact-form');
	if (form && typeof emailjs !== 'undefined') {
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
