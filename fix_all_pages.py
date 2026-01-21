import re
import os

files = ['index.html', 'om.html', 'arbeid.html', 'kontakt.html', 'artikkel-1.html', 'artikkel-2.html', 'artikkel-3.html']

new_logo = '''<a href="index.html" class="logo-link" style="text-decoration: none; display: flex; align-items: center; gap: 8px; font-size: 1.5em; font-weight: bold; color: #2c3e50;">
                    <span style="color: #667eea; font-size: 1.2em;">•</span>
                    <span>cyberwithdejan</span>
                </a>'''

new_nav = '''<ul class="nav-menu">
                    <li><a href="om.html" data-translate="nav-about">Om</a></li>
                    <li><a href="artikler.html" data-translate="nav-articles">Artikler</a></li>
                    <li><a href="arbeid.html" data-translate="nav-work">Arbeid</a></li>
                    <li><a href="verktoy.html" data-translate="nav-tools">Verktøy og nettsider</a></li>
                    <li><a href="kontakt.html" data-translate="nav-contact">Kontakt</a></li>
                </ul>'''

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Erstatt gammel logo med ny
        content = re.sub(
            r'<a href="index\.html" class="logo-link"[^>]*>.*?</a>',
            new_logo,
            content,
            flags=re.DOTALL
        )
        
        # Erstatt gammel nav-menu med ny
        content = re.sub(
            r'<ul class="nav-menu">.*?</ul>',
            new_nav,
            content,
            flags=re.DOTALL
        )
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✅ Oppdatert: {file}')
    except Exception as e:
        print(f'❌ Feil med {file}: {e}')

print('\nFerdig!')
