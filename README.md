# Cybersikkerhet Portefølje - Dejan Zivanovic

En moderne, responsiv portefølje-nettside for cybersikkerhet med åpen kildekode. Prosjektet er bygget med ren HTML, CSS og JavaScript uten rammeverk.

## Teknologier

- **HTML5** - Semantisk markup
- **CSS3** - CSS-variabler, Flexbox, Grid, animasjoner
- **JavaScript** - Vanilla JS for interaktivitet
- **Font Awesome** - Ikoner
- **Google Fonts** - Inter font-familie
- **EmailJS** - Kontaktskjema

---

## Filstruktur

```
cybermeddejan/
├── index.html           # Hovedside
├── about.html           # Om meg
├── articles.html        # Artikkeloversikt
├── article-1.html       # Artikkel: Digitale plattformer
├── article-2.html       # Artikkel: CPU, RAM, flaskehalser
├── article-3.html       # Artikkel: OSI-modellen
├── tools-and-websites.html  # Verktøy og ressurser
├── contact.html         # Kontaktskjema
├── styles.css           # Alle CSS-stiler
├── script.js            # JavaScript-funksjonalitet
├── images/              # Bildemappe
├── svg/                 # SVG-ikoner og logoer
└── README.md            # Denne filen
```

---

## HTML-filer

Alle HTML-filer følger samme struktur:
```html
<!-- Kommentar som beskriver filens formål -->
<!DOCTYPE html>
<html lang="no">
<head>...</head>
<body>
    <header>        <!-- Navigasjon -->
    <main>          <!-- Hovedinnhold -->
    <footer>        <!-- Bunntekst -->
</body>
</html>
```

### Navigasjon
Alle sider har identisk navigasjonsmeny:
- **Hjem** → `index.html`
- **Om** → `about.html`
- **Artikler** → `articles.html`
- **Verktøy** → `tools-and-websites.html`
- **Kontakt** → `contact.html`

### Sideforklaringer

| Fil | Beskrivelse |
|-----|-------------|
| `index.html` | Landingsside med introduksjon og oversikt over porteføljen |
| `about.html` | Personlig informasjon, bakgrunn, utdanning og interesser |
| `articles.html` | Kortliste over alle fagartikler med lenker |
| `article-1.html` | Fagartikkel om digitale plattformer (akademisk format) |
| `article-2.html` | Fagartikkel om maskinvareytelse og systemflaskehalser |
| `article-3.html` | Fagartikkel om OSI-modellen for nettverksfeilsøking |
| `tools-and-websites.html` | Kuratert liste over cybersikkerhetsverktøy og ressurser |
| `contact.html` | Kontaktskjema med EmailJS-integrasjon |

---

## CSS (styles.css)

Stilarket er organisert i logiske seksjoner:

### 1. CSS-variabler (`:root`)
```css
--primary-color: #2563eb;     /* Hovedfarge (blå) */
--accent-color: #06b6d4;      /* Aksentfarge (cyan) */
--bg-color: #f1f5f9;          /* Bakgrunnsfarge */
--text-color: #1e293b;        /* Tekstfarge */
--border-radius: 12px;        /* Avrundede hjørner */
--transition-normal: 0.3s;    /* Animasjonshastighet */
```

### 2. Seksjoner i CSS-filen

| Linje | Seksjon | Beskrivelse |
|-------|---------|-------------|
| 1-30 | Variabler | Farger, skygger, gradienter, overganger |
| 31-55 | Reset/Base | Box-sizing, scroll-behavior, body-styling |
| 56-105 | Header/Nav | Sticky header med gradient, navigasjonslenker |
| 106-150 | Main/Typografi | Innholdsbeholder, h1-h3, paragrafer |
| 151-230 | Seksjoner/Kort | Grid-layout for artikkelkort med hover-effekter |
| 231-350 | Skjema | Input-felter, knapper, validering |
| 351-450 | Artikler | Artikkelspesifikk styling, referanser |
| 451-500 | Verktøysliste | Kortlayout for verktøy og lenker |
| 501-550 | Footer | Bunntekst med gradient |
| 551-577 | Responsivitet | @media queries for mobil/tablet |

### 3. Nøkkelfunksjoner

- **Gradient-header**: `linear-gradient(135deg, #2563eb, #06b6d4)`
- **Kort med hover**: Transform og box-shadow ved hover
- **Sticky navigasjon**: `position: sticky; top: 0;`
- **Responsiv grid**: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`

---

## JavaScript (script.js)

### Funksjonalitet

```javascript
// EmailJS kontaktskjema
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Send via EmailJS
            emailjs.sendForm('service_id', 'template_id', form)
                .then(success, error);
        });
    }
});
```

### Fremtidige utvidelser
- Tema-bytte (lys/mørk modus)
- Språkvalg (NO/EN)
- Tilgjengelighetsfunksjoner

---

## Slik legger du til nytt innhold

### Ny artikkel
1. Kopier `article-1.html`
2. Oppdater `<title>` og innhold
3. Legg til lenke i `articles.html`

### Ny side
1. Kopier strukturen fra `about.html`
2. Oppdater navigasjon hvis nødvendig
3. Legg til innhold i `<main>`

### Ny stil
1. Legg til CSS i `styles.css` under relevant seksjon
2. Bruk eksisterende CSS-variabler for konsistens

---

## Kjøre lokalt

```bash
# Åpne mappen i terminal
cd cybermeddejan

# Start lokal server (Python)
python3 -m http.server 8000

# Eller med Node.js
npx serve
```

Åpne `http://localhost:8000` i nettleseren.

---

## Lisens

Dette prosjektet er åpen kildekode. Fri bruk for læring og inspirasjon.

**Kontakt:** Se `contact.html` for kontaktinformasjon.
