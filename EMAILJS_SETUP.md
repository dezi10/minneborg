# EmailJS Oppsett for Kontaktskjema

Kontaktskjemaet er nå konfigurert til å bruke EmailJS for å sende faktiske e-poster. For å aktivere funksjonaliteten, følg disse stegene:

## Steg 1: Opprett EmailJS Konto

1. Gå til [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klikk på "Sign Up" og opprett en gratis konto
3. Bekreft e-postadressen din

## Steg 2: Sett Opp E-posttjeneste

1. Logg inn på EmailJS dashboardet
2. Gå til "Email Services" i menyen
3. Klikk på "Add New Service"
4. Velg e-postleverandør (Gmail, Outlook, Yahoo, etc.)
5. Følg instruksjonene for å koble til e-postkontoen din
6. **Kopier SERVICE ID** - du trenger denne senere

## Steg 3: Opprett E-postmal (Template)

1. Gå til "Email Templates" i menyen
2. Klikk på "Create New Template"
3. Bruk denne malen:

**Subject:** Ny melding fra {{from_name}} - {{subject}}

**Content:**
```
Du har mottatt en ny melding fra kontaktskjemaet på Cyber With Dejan:

Navn: {{from_name}}
E-post: {{reply_to}}
Emne: {{subject}}

Melding:
{{message}}

---
Denne meldingen ble sendt fra kontaktskjemaet på cyberwithdejan.no
```

4. **Viktig:** Sørg for at template parameterne matcher disse navnene:
   - `from_name` (fra name-feltet i skjemaet)
   - `reply_to` (fra email-feltet i skjemaet)
   - `subject` (fra subject-feltet i skjemaet)
   - `message` (fra message-feltet i skjemaet)

5. Klikk på "Save" og **kopier TEMPLATE ID**

## Steg 4: Hent Public Key

1. Gå til "Account" i menyen
2. Finn "API Keys" seksjonen
3. **Kopier PUBLIC KEY**

## Steg 5: Oppdater kontakt.html

Åpne `kontakt.html` og erstatt disse verdiene (linje ~150-170):

```javascript
emailjs.init({
    publicKey: "DIN_PUBLIC_KEY_HER", // Erstatt med din Public Key
});

// ...

emailjs.sendForm('DIN_SERVICE_ID', 'DIN_TEMPLATE_ID', this)
```

**Erstatt:**
- `DIN_PUBLIC_KEY_HER` → Din faktiske Public Key
- `DIN_SERVICE_ID` → Din Service ID
- `DIN_TEMPLATE_ID` → Din Template ID

## Steg 6: Test Kontaktskjemaet

1. Åpne nettsiden i nettleseren
2. Gå til kontaktsiden
3. Fyll ut skjemaet og send en testmelding
4. Sjekk e-postkontoen du koblet til EmailJS
5. Du skal motta e-posten innen få sekunder

## Gratis Begrensninger

EmailJS gratis plan inkluderer:
- 200 e-poster per måned
- Perfekt for personlige porteføljer
- Ingen kredittkort påkrevd

## Feilsøking

Hvis skjemaet ikke fungerer:

1. **Sjekk konsollen** (F12 i nettleseren) for feilmeldinger
2. **Verifiser at alle ID-er er riktige** (Public Key, Service ID, Template ID)
3. **Sjekk at template parameterne matcher** skjemafeltenes `name`-attributter
4. **Bekreft at e-posttjenesten er aktiv** i EmailJS dashboardet
5. **Sjekk spam-mappen** for testmeldinger

## Sikkerhet

- Public Key er trygg å dele offentlig
- Ikke del Service ID eller Template ID offentlig hvis mulig
- Aktiver reCAPTCHA i EmailJS for å forhindre spam (anbefalt)

## Support

Hvis du har problemer, besøk EmailJS dokumentasjonen:
https://www.emailjs.com/docs/

---

**Status:** ⚠️ Krever konfigurering  
**Estimert tid:** 10-15 minutter
