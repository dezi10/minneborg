# Cybersikkerhet Portefølje - Dejan Zivanovic

En moderne, responsiv portefølje-nettside for cybersikkerhet med åpen kildekode. Prosjektet er bygget med ren HTML, CSS og JavaScript uten rammeverk.

---

## Innholdsfortegnelse

1. [Teknologier](#teknologier)
2. [Filstruktur](#filstruktur)
3. [HTML-dokumentasjon](#html-dokumentasjon)
4. [CSS-dokumentasjon](#css-dokumentasjon)
5. [JavaScript-dokumentasjon](#javascript-dokumentasjon)
6. [EmailJS-oppsett](#emailjs-oppsett)
7. [Slik legger du til nytt innhold](#slik-legger-du-til-nytt-innhold)
8. [Kjøre lokalt](#kjøre-lokalt)

---

## Teknologier

| Teknologi | Versjon | Formål |
|-----------|---------|--------|
| HTML5 | - | Semantisk struktur |
| CSS3 | - | Styling med variabler, Flexbox, Grid |
| JavaScript ES6 | - | Interaktivitet |
| Font Awesome | 6.4.0 | Ikoner |
| Google Fonts | Inter | Typografi |
| EmailJS | v4 | Kontaktskjema |

### Eksterne avhengigheter (CDN)

```html
<!-- Font Awesome ikoner -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts (importert i CSS) -->
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

<!-- EmailJS (kun contact.html) -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

---

## Filstruktur

```
cybermeddejan/
├── index.html              # Hovedside/landingsside
├── about.html              # Om meg-side
├── articles.html           # Artikkeloversikt
├── article-1.html          # Artikkel: Digitale plattformer
├── article-2.html          # Artikkel: CPU, RAM, flaskehalser
├── article-3.html          # Artikkel: OSI-modellen
├── tools-and-websites.html # Verktøy og ressurser
├── contact.html            # Kontaktskjema (EmailJS)
├── styles.css              # Alle CSS-stiler (577 linjer)
├── script.js               # JavaScript (25 linjer)
├── images/                 # Bildemappe
├── svg/                    # SVG-ikoner og logoer
└── README.md               # Denne filen
```

---

## HTML-dokumentasjon

### Grunnstruktur (alle sider)

```html
<!--
Kommentar som beskriver filens formål
-->
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidetittel - Dejan Zivanovic</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <nav>
            <ul class="nav-menu">
                <li><a href="index.html">Hjem</a></li>
                <li><a href="about.html">Om</a></li>
                <li><a href="articles.html">Artikler</a></li>
                <li><a href="tools-and-websites.html">Verktøy</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <!-- Sideinnhold her -->
    </main>
    
    <footer>
        <p>Disse ressursene er samlet for informasjonsformål.</p>
        <p>&copy; Laget av Dejan Zivanovic, 2026</p>
    </footer>
</body>
</html>
```

### Sideforklaringer

| Fil | Formål | Spesielle elementer |
|-----|--------|---------------------|
| `index.html` | Landingsside | `.cards` grid med artikkelkort |
| `about.html` | Personlig info | `<section>` for bakgrunn/interesser |
| `articles.html` | Artikkeloversikt | `.cards` grid med lenker |
| `article-*.html` | Fagartikler | `.article`, `.article-header`, `.article-body`, `.abstract`, `.references` |
| `tools-and-websites.html` | Verktøyliste | `.cards` grid |
| `contact.html` | Kontaktskjema | `#contact-form`, EmailJS-script |

### Artikkelstruktur (article-*.html)

```html
<main>
    <article class="article">
        <div class="article-header">
            <h1>Artikkeltittel</h1>
            <div class="article-meta">
                <span class="author">Forfatter</span>
                <span class="date">Dato</span>
            </div>
        </div>
        
        <div class="abstract">
            <h2>Sammendrag</h2>
            <p>Kort beskrivelse av artikkelen...</p>
        </div>
        
        <div class="article-body">
            <h2>Seksjonstittel</h2>
            <p>Innhold...</p>
        </div>
        
        <div class="references">
            <h2>Referanser</h2>
            <ul>
                <li>Referanse 1</li>
            </ul>
        </div>
        
        <div class="back-link">
            <a href="articles.html">← Tilbake til artikler</a>
        </div>
    </article>
</main>
```

### Kortstruktur (.cards)

```html
<div class="cards">
    <div class="card">
        <h3>Korttittel</h3>
        <p>Beskrivelse av kortet...</p>
        <a href="lenke.html">Les mer</a>
    </div>
</div>
```

---

## CSS-dokumentasjon

### Filstruktur (styles.css - 577 linjer)

| Linjer | Seksjon | Beskrivelse |
|--------|---------|-------------|
| 1-5 | Kommentar | Filbeskrivelse |
| 6-8 | Import | Google Fonts (Inter) |
| 9-30 | `:root` | CSS-variabler |
| 31-55 | Reset/Base | Box-sizing, body-styling |
| 56-105 | Header/Nav | Sticky header, navigasjon |
| 106-150 | Main/Typografi | Innholdsbeholder, overskrifter |
| 151-175 | Hero | Hero-seksjon styling |
| 176-200 | Seksjoner | `<section>` med understrekning |
| 201-280 | Kort (.cards) | Grid-layout, hover-effekter |
| 281-310 | Footer | Bunntekst styling |
| 311-390 | Kontaktskjema | Input, textarea, button |
| 391-500 | Artikler | Artikkelspesifikk styling |
| 501-577 | Responsivitet | Media queries |

### CSS-variabler (alle definert i `:root`)

```css
/* Farger */
--primary-color: #2563eb;        /* Hovedfarge (blå) */
--primary-dark: #1d4ed8;         /* Mørkere variant */
--primary-light: #3b82f6;        /* Lysere variant */
--secondary-color: #f8fafc;      /* Sekundærfarge */
--accent-color: #06b6d4;         /* Aksentfarge (cyan) */

/* Bakgrunner */
--bg-color: #f1f5f9;             /* Hovedbakgrunn */
--bg-secondary: #ffffff;         /* Sekundær bakgrunn (kort) */

/* Tekst */
--text-color: #1e293b;           /* Hovedtekst */
--text-light: #64748b;           /* Lys tekst */
--text-muted: #94a3b8;           /* Dempet tekst */

/* Effekter */
--border-color: #e2e8f0;         /* Kantlinjer */
--card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--card-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

/* Gradienter */
--gradient-primary: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
--gradient-bg: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);

/* Animasjoner */
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;

/* Avrunding */
--border-radius: 12px;
--border-radius-lg: 16px;
```

### Viktige CSS-klasser

| Klasse | Element | Beskrivelse |
|--------|---------|-------------|
| `.nav-menu` | `<ul>` | Flexbox navigasjonsliste |
| `.cards` | `<div>` | CSS Grid container for kort |
| `.card` | `<div>` | Enkeltkort med hover-effekt |
| `.hero` | `<div>` | Sentrert hero-seksjon |
| `.article` | `<article>` | Artikkelcontainer (max-width: 800px) |
| `.article-header` | `<div>` | Sentrert artikkeloverskrift |
| `.article-body` | `<div>` | Artikkeltekst med linjehøyde 1.8 |
| `.abstract` | `<div>` | Sammendragsboks med venstre kant |
| `.references` | `<div>` | Referanseliste |
| `.back-link` | `<div>` | Tilbake-lenke |
| `#contact-form` | `<form>` | Kontaktskjema styling |

### Responsivitet (Media Queries)

```css
/* Tablet (max 900px) */
@media (max-width: 900px) {
    h1 { font-size: 2rem; }
    .cards { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
}

/* Mobil (max 768px) */
@media (max-width: 768px) {
    nav ul { flex-wrap: wrap; }
    .cards { grid-template-columns: 1fr; }
}

/* Liten mobil (max 480px) */
@media (max-width: 480px) {
    main { padding: 1.5rem 0.75rem 2rem; }
}
```

---

## JavaScript-dokumentasjon

### Filstruktur (script.js - 25 linjer)

```javascript
// Initialiser EmailJS med public key
emailjs.init('V78SaFZYJYRnB1NWc');

// Kontaktskjema håndtering
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
```

### Flyt

1. `emailjs.init()` - Initialiserer EmailJS med public key
2. `DOMContentLoaded` - Venter til DOM er lastet
3. Finner `#contact-form` - Bare aktiv på contact.html
4. `submit` event - Forhindrer standard oppførsel
5. `emailjs.sendForm()` - Sender data til EmailJS
6. Promise - Viser suksess/feilmelding

---

## EmailJS-oppsett

### Konfigurasjon

| Parameter | Verdi | Sted |
|-----------|-------|------|
| Public Key | `V78SaFZYJYRnB1NWc` | script.js linje 6 |
| Service ID | `service_p3u90dm` | script.js linje 15 |
| Template ID | `template_asjvvwo` | script.js linje 15 |

### Skjemafelter (må matche EmailJS-mal)

```html
<input name="name">     <!-- {{name}} i malen -->
<input name="email">    <!-- {{email}} i malen -->
<textarea name="message"> <!-- {{message}} i malen -->
```

### EmailJS Dashboard

1. Logg inn på [emailjs.com](https://emailjs.com)
2. **Email Services** → Rediger tjeneste
3. **Email Templates** → Rediger mal med variabler
4. **Account** → API Keys for public key

---

## Slik legger du til nytt innhold

### Ny artikkel

1. Kopier `article-1.html` til `article-4.html`
2. Oppdater:
   - `<title>` tag
   - `.article-header h1`
   - `.article-meta` (forfatter, dato)
   - `.abstract p`
   - `.article-body` innhold
   - `.references` liste
3. Legg til kort i `articles.html`:
```html
<div class="card">
    <h3>Ny artikkel</h3>
    <p>Beskrivelse...</p>
    <a href="article-4.html">Les mer</a>
</div>
```

### Ny side

1. Kopier `about.html`
2. Oppdater `<title>` og `<main>` innhold
3. **Viktig:** Behold identisk `<header>` og `<footer>`

### Endre farger

Rediger CSS-variabler i `styles.css` (linje 10-30):
```css
:root {
    --primary-color: #NY_FARGE;
    /* osv. */
}
```

### Endre navigasjon

Oppdater `<nav>` i **alle** HTML-filer:
- index.html
- about.html
- articles.html
- article-1.html, article-2.html, article-3.html
- tools-and-websites.html
- contact.html

---

## Kjøre lokalt

```bash
# Naviger til mappen
cd cybermeddejan

# Python (innebygd server)
python3 -m http.server 8000

# Node.js
npx serve

# VS Code Live Server
# Installer "Live Server" extension, høyreklikk index.html → "Open with Live Server"
```

Åpne `http://localhost:8000` i nettleseren.

---

## Feilsøking

| Problem | Løsning |
|---------|---------|
| CSS lastes ikke | Sjekk at `href="styles.css"` er riktig |
| EmailJS fungerer ikke | Sjekk konsollen for feilmeldinger, verifiser at nøkler er korrekte |
| Navigasjon broken | Sørg for at alle HTML-filer har identisk `<nav>` |
| Mobil ser rart ut | Test i DevTools → Toggle device toolbar |

---

## Kontakt

**E-post:** dejanzivanovic@outlook.com  
**Nettside:** Se `contact.html`

---

*Sist oppdatert: Februar 2026*
