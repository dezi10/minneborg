// Tilgjengelighet - Skriftstørrelser
const fontButtons = {
    medium: document.getElementById('fontSizeMedium'),
    large: document.getElementById('fontSizeLarge'),
    xlarge: document.getElementById('fontSizeXLarge')
};

function setFontSize(size) {
    document.body.classList.remove('font-medium', 'font-large');
    Object.values(fontButtons).forEach(btn => btn && btn.classList.remove('active'));
    
    if (size === 'medium') {
        document.body.classList.add('font-medium');
        fontButtons.medium && fontButtons.medium.classList.add('active');
    } else if (size === 'large') {
        document.body.classList.add('font-large');
        fontButtons.large && fontButtons.large.classList.add('active');
    } else {
        // Normal size (ingen klasse)
        fontButtons.medium && fontButtons.medium.classList.add('active');
    }
    
    localStorage.setItem('fontSize', size);
}

fontButtons.medium && fontButtons.medium.addEventListener('click', () => setFontSize('normal'));
fontButtons.large && fontButtons.large.addEventListener('click', () => setFontSize('medium'));
fontButtons.xlarge && fontButtons.xlarge.addEventListener('click', () => setFontSize('large'));

// Lesemodus
const readingModeBtn = document.getElementById('readingMode');
readingModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('reading-mode');
    const isActive = document.body.classList.contains('reading-mode');
    localStorage.setItem('readingMode', isActive);
});

// Nattmodus
const darkModeBtn = document.getElementById('darkMode');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isActive = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isActive);
});

// Last inn lagrede innstillinger
window.addEventListener('DOMContentLoaded', () => {
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    setFontSize(savedFontSize);
    
    if (localStorage.getItem('readingMode') === 'true') {
        document.body.classList.add('reading-mode');
    }
    
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    const savedLang = localStorage.getItem('language') || 'no';
    setLanguage(savedLang);
});

// Språkvelger
const translations = {
    no: {
        'subtitle': 'Cybersikkerhet Student',
        'nav-home': 'Hjem',
        'nav-about': 'Om',
        'nav-articles': 'Artikler',
        'nav-work': 'Arbeid',
        'nav-tools': 'Verktøy og nettsider',
        'nav-contact': 'Kontakt',
        'hero-title': 'Velkommen til min portfolio',
        'hero-text': 'Student i cybersikkerhet ved Gokstad Akademiet. Her deler jeg artikler og innsikt fra mitt studiearbeid innen digital sikkerhet, plattformrisiko og IT-infrastruktur.',
        'hero-btn-articles': 'Les mine artikler',
        'hero-btn-contact': 'Ta kontakt',
        'featured-title': 'Utvalgte artikler',
        'read-more': 'Les mer →',
        'article3-title': 'Kommende artikkel',
        'article3-excerpt': 'Flere artikler fra studiet kommer snart...',
        'view-all': 'Se alle →',
        'about-title': 'Om meg',
        'about-text': 'Jeg studerer cybersikkerhet ved Gokstad Akademiet og søker muligheter innen digital sikkerhet. Gjennom mine studier har jeg utviklet kompetanse innen nettverkssikkerhet, risikoanalyse og IT-infrastruktur.',
        'learn-more': 'Les mer om meg →',
        'contact': 'Kontakt',
        'footer-made': 'Laget av',
        // Om-siden
        'about-page-title': 'Om meg',
        'about-intro-title': 'Hvem er jeg?',
        'about-intro-text': 'Jeg er student i cybersikkerhet ved Gokstad Akademiet, hvor jeg studerer online. Mitt fokus ligger på digital sikkerhet, risikoanalyse, og hvordan vi kan bygge sikrere digitale systemer i en stadig mer sammenkoblet verden.',
        'about-study-title': 'Mine studier',
        'about-study-text': 'Gjennom studiet ved Gokstad Akademiet har jeg tilegnet meg omfattende kunnskap innen:',
        'study-1': 'Nettverkssikkerhet og kryptografi',
        'study-2': 'Risikoanalyse og sårbarhetsidentifikasjon',
        'study-3': 'IT-infrastruktur og systemadministrasjon',
        'study-4': 'Digital forensikk og hendelseshåndtering',
        'study-5': 'Plattformsikkerhet og digital samhandling',
        'about-goal-title': 'Mine mål',
        'about-goal-text': 'Jeg søker muligheter innen cybersikkerhet hvor jeg kan bidra til å bygge og vedlikeholde sikre digitale løsninger. Jeg er spesielt interessert i roller som involverer risikoanalyse, sikkerhetstesting, og utviklingen av sikkerhetsstandarder.',
        'about-why-title': 'Hvorfor denne nettsiden?',
        'about-why-text': 'Denne portfolioen er laget for å dele min kunnskap og mine akademiske arbeider med potensielle arbeidsgivere, medstudenter, og lærere. Gjennom bloggartiklene mine kan du få innsikt i hvordan jeg tenker om cybersikkerhet og teknologiske utfordringer.',
        'skills-title': 'Kompetanseområder',
        'skill-1': 'Cybersikkerhet',
        'skill-2': 'Nettverkssikkerhet',
        'skill-3': 'Risikoanalyse',
        'skill-4': 'IT-infrastruktur',
        'skill-5': 'Kryptografi',
        'skill-6': 'Digital forensikk',
        'interested-title': 'Interessert i å samarbeide?',
        'interested-text': 'Ta kontakt for spørsmål, samarbeidsmuligheter eller karrieremuligheter.',
        'contact-btn': 'Ta kontakt',
        // Artikler-siden
        'articles-page-title': 'Mine artikler',
        'articles-page-intro': 'Her finner du en samling av akademiske artikler og blogginnlegg jeg har skrevet som del av mine studier i cybersikkerhet ved Gokstad Akademiet.',
        'read-article': 'Les artikkelen',
        'coming-soon-title': 'Flere artikler kommer snart',
        'coming-soon-text': 'Jeg jobber kontinuerlig med nye artikler og blogginnlegg basert på mine studier og erfaringer innen cybersikkerhet. Hold deg oppdatert ved å følge meg på LinkedIn.',
        'follow-linkedin': 'Følg meg på LinkedIn',
        // Arbeid-siden
        'work-page-title': 'Arbeid',
        'work-page-intro': 'Her finner du en oversikt over prosjekter, arbeidskrav og studiearbeid jeg har gjennomført som del av min utdanning i cybersikkerhet.',
        'work-type-1': 'Forskningsoppgave | 2026',
        'work-type-2': 'Teknisk analyse | 2026',
        'work-type-3': 'Studiearbeid | Pågående',
        'work-type-4': 'Studiearbeid | Pågående',
        'work-type-5': 'Studiearbeid | Pågående',
        'work-type-6': 'Studiearbeid | Pågående',
        'work-3-title': 'Nettverkssikkerhet',
        'work-3-desc': 'Arbeid med nettverksprotokoller, sikkerhetstesting og implementering av sikkerhetsstandarder i nettverksmiljøer.',
        'work-4-title': 'Digital forensikk',
        'work-4-desc': 'Læring om digitale sporundersøkelser, bevisinnsamling og analyseverktøy for hendelseshåndtering.',
        'work-5-title': 'Kryptografi & Datasikkerhet',
        'work-5-desc': 'Studie av kryptografiske metoder, sikre kommunikasjonsprotokoller og datakryptering.',
        'work-6-title': 'Risikoanalyse',
        'work-6-desc': 'Identifikasjon og vurdering av sikkerhetstrusler, samt utvikkling av beredskapsplaner.',
        'work-cta-title': 'Interessert i mitt arbeid?',
        'work-cta-text': 'Se mine artikler for dypere innsikt i disse temaene, eller ta kontakt for å diskutere samarbeidsmuligheter.',
        'view-articles': 'Se alle artikler',
        'contact-me': 'Kontakt meg',
        // Kontakt-siden
        'contact-page-title': 'Ta kontakt',
        'contact-page-intro': 'Har du spørsmål, ønsker å samarbeide, eller er du interessert i å diskutere karrieremuligheter? Send meg en melding, så vil jeg svare deg så snart som mulig.',
        'contact-form-title': 'Send meg en melding',
        'form-name': 'Navn *',
        'form-email': 'E-post *',
        'form-subject': 'Emne *',
        'form-message': 'Melding *',
        'form-submit': 'Send melding',
        'contact-info-title': 'Kontaktinformasjon',
        'institution': 'Institusjon',
        'program': 'Cybersikkerhet (Online)',
        'availability': 'Tilgjengelighet',
        'availability-text': 'Åpen for karrieremuligheter innen cybersikkerhet',
        'connect-title': 'La oss koble sammen!',
        'connect-text': 'Følg meg på LinkedIn for oppdateringer om nye artikler og innsikt innen cybersikkerhet.',
        'visit-linkedin': 'Besøk min LinkedIn-profil',
        // Verktøy-siden
        'tools-page-title': 'Verktøy og nettsider',
        'tools-page-intro': 'En kuratert samling av nyttige verktøy og ressurser for cybersikkerhet. Disse ressursene kan hjelpe bedrifter og enkeltpersoner med å vurdere og forbedre sin digitale sikkerhet.',
        'tools-security-check': 'Sikkerhetssjekk',
        'tools-recommended': 'ANBEFALT',
        'tools-learning': 'Læringsressurser',
        'tools-password': 'Passordadministrasjon',
        'tools-news': 'Nyheter og trusselintelligens',
        'tools-other': 'Andre nyttige verktøy',
        'tools-disclaimer-title': 'Viktig informasjon',
        'tools-disclaimer-text': 'Disse ressursene er samlet for informasjonsformål. Jeg har ikke noen tilknytning til de nevnte tjenestene, men anbefaler dem basert på deres omdømme og nytte innen cybersikkerhet. Husk alltid å gjøre din egen research før du tar i bruk sikkerhetsverktøy.',
        'tools-check-email': 'Sjekk din e-postadresse:',
        'tools-check-btn': 'Sjekk'
    },
    en: {
        'subtitle': 'Cybersecurity Student',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-articles': 'Articles',
        'nav-work': 'Work',
        'nav-tools': 'Tools & Resources',
        'nav-contact': 'Contact',
        'hero-title': 'Welcome to my portfolio',
        'hero-text': 'Cybersecurity student at Gokstad Academy. Here I share articles and insights from my studies in digital security, platform risk, and IT infrastructure.',
        'hero-btn-articles': 'Read My Articles',
        'hero-btn-contact': 'Get in Touch',
        'featured-title': 'Featured Articles',
        'read-more': 'Read more →',
        'article3-title': 'Upcoming Article',
        'article3-excerpt': 'More articles from my studies coming soon...',
        'view-all': 'View all →',
        'about-title': 'About Me',
        'about-text': 'I study cybersecurity at Gokstad Academy and am seeking opportunities in digital security. Through my studies, I have developed expertise in network security, risk analysis, and IT infrastructure.',
        'learn-more': 'Learn more about me →',
        'contact': 'Contact',
        'footer-made': 'Made by',
        // About page
        'about-page-title': 'About Me',
        'about-intro-title': 'Who am I?',
        'about-intro-text': 'I am a cybersecurity student at Gokstad Academy, studying online. My focus is on digital security, risk analysis, and how we can build more secure digital systems in an increasingly interconnected world.',
        'about-study-title': 'My Studies',
        'about-study-text': 'Through my studies at Gokstad Academy, I have acquired comprehensive knowledge in:',
        'study-1': 'Network security and cryptography',
        'study-2': 'Risk analysis and vulnerability identification',
        'study-3': 'IT infrastructure and system administration',
        'study-4': 'Digital forensics and incident response',
        'study-5': 'Platform security and digital collaboration',
        'about-goal-title': 'My Goals',
        'about-goal-text': 'I am seeking opportunities in cybersecurity where I can contribute to building and maintaining secure digital solutions. I am particularly interested in roles involving risk analysis, security testing, and the development of security standards.',
        'about-why-title': 'Why this website?',
        'about-why-text': 'This portfolio was created to share my knowledge and academic work with potential employers, fellow students, and teachers. Through my blog articles, you can gain insight into how I think about cybersecurity and technological challenges.',
        'skills-title': 'Areas of Expertise',
        'skill-1': 'Cybersecurity',
        'skill-2': 'Network Security',
        'skill-3': 'Risk Analysis',
        'skill-4': 'IT Infrastructure',
        'skill-5': 'Cryptography',
        'skill-6': 'Digital Forensics',
        'interested-title': 'Interested in collaborating?',
        'interested-text': 'Contact me for questions, collaboration opportunities, or career opportunities.',
        'contact-btn': 'Get in Touch',
        // Articles page
        'articles-page-title': 'My Articles',
        'articles-page-intro': 'Here you will find a collection of academic articles and blog posts I have written as part of my cybersecurity studies at Gokstad Academy.',
        'read-article': 'Read Article',
        'coming-soon-title': 'More articles coming soon',
        'coming-soon-text': 'I continuously work on new articles and blog posts based on my studies and experiences in cybersecurity. Stay updated by following me on LinkedIn.',
        'follow-linkedin': 'Follow me on LinkedIn',
        // Work page
        'work-page-title': 'Academic Work & Projects',
        'work-page-intro': 'Here you will find an overview of projects, assignments, and academic work I have completed as part of my cybersecurity education.',
        'work-type-1': 'Research paper | 2026',
        'work-type-2': 'Technical analysis | 2026',
        'work-type-3': 'Academic work | Ongoing',
        'work-type-4': 'Academic work | Ongoing',
        'work-type-5': 'Academic work | Ongoing',
        'work-type-6': 'Academic work | Ongoing',
        'work-3-title': 'Network Security',
        'work-3-desc': 'Work with network protocols, security testing, and implementation of security standards in network environments.',
        'work-4-title': 'Digital Forensics',
        'work-4-desc': 'Learning about digital investigations, evidence collection, and analysis tools for incident response.',
        'work-5-title': 'Cryptography & Data Security',
        'work-5-desc': 'Study of cryptographic methods, secure communication protocols, and data encryption.',
        'work-6-title': 'Risk Analysis',
        'work-6-desc': 'Identification and assessment of security threats, as well as development of contingency plans.',
        'work-cta-title': 'Interested in my work?',
        'work-cta-text': 'Check out my articles for deeper insights into these topics, or contact me to discuss collaboration opportunities.',
        'view-articles': 'View all articles',
        'contact-me': 'Contact me',
        // Contact page
        'contact-page-title': 'Get in Touch',
        'contact-page-intro': 'Do you have questions, want to collaborate, or are you interested in discussing career opportunities? Send me a message and I will respond as soon as possible.',
        'contact-form-title': 'Send me a message',
        'form-name': 'Name *',
        'form-email': 'Email *',
        'form-subject': 'Subject *',
        'form-message': 'Message *',
        'form-submit': 'Send Message',
        'contact-info-title': 'Contact Information',
        'institution': 'Institution',
        'program': 'Cybersecurity (Online)',
        'availability': 'Availability',
        'availability-text': 'Open to career opportunities in cybersecurity',
        'connect-title': "Let's connect!",
        'connect-text': 'Follow me on LinkedIn for updates on new articles and insights in cybersecurity.',
        'visit-linkedin': 'Visit my LinkedIn profile',
        // Tools page
        'tools-page-title': 'Tools & Resources',
        'tools-page-intro': 'A curated collection of useful tools and resources for cybersecurity. These resources can help businesses and individuals assess and improve their digital security.',
        'tools-security-check': 'Security Check',
        'tools-recommended': 'RECOMMENDED',
        'tools-learning': 'Learning Resources',
        'tools-password': 'Password Management',
        'tools-news': 'News & Threat Intelligence',
        'tools-other': 'Other Useful Tools',
        'tools-disclaimer-title': 'Important Information',
        'tools-disclaimer-text': 'These resources are collected for informational purposes. I have no affiliation with the mentioned services, but recommend them based on their reputation and usefulness in cybersecurity. Always do your own research before using security tools.',
        'tools-check-email': 'Check your email address:',
        'tools-check-btn': 'Check'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// Mobil meny toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Lukk meny når man klikker utenfor
document.addEventListener('click', (e) => {
    if (navMenu && !e.target.closest('nav')) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
